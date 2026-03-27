import crypto from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { authCookie, hashPassword, signAuthToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const signupSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = signupSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid signup details." }, { status: 400 });
    }

    const email = parsed.data.email.trim().toLowerCase();
    const fullName = parsed.data.fullName.trim();

    if (fullName.length < 2) {
      return NextResponse.json({ error: "Invalid signup details." }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email } });

    if (existing) {
      return NextResponse.json({ error: "Email is already registered." }, { status: 409 });
    }

    const passwordHash = await hashPassword(parsed.data.password);

    const createdUser = await prisma.user.create({
      data: {
        fullName,
        email,
        passwordHash,
        devices: {
          create: {
            name: "Primary ESP32",
            deviceId: `ESP32-${crypto.randomUUID().slice(0, 8)}`,
            ingestToken: crypto.randomUUID().replace(/-/g, "")
          }
        }
      }
    });

    const token = signAuthToken({
      userId: createdUser.id,
      email: createdUser.email,
      fullName: createdUser.fullName
    });

    const response = NextResponse.json({ ok: true });
    response.cookies.set(authCookie.name, token, authCookie.options);

    return response;
  } catch {
    return NextResponse.json({ error: "Failed to create account." }, { status: 500 });
  }
}
