import { NextResponse } from "next/server";
import { z } from "zod";
import { authCookie, signAuthToken, verifyPassword } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid login details." }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email: parsed.data.email.toLowerCase() } });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const validPassword = await verifyPassword(parsed.data.password, user.passwordHash);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const token = signAuthToken({
      userId: user.id,
      email: user.email,
      fullName: user.fullName
    });

    const response = NextResponse.json({ ok: true });
    response.cookies.set(authCookie.name, token, authCookie.options);

    return response;
  } catch {
    return NextResponse.json({ error: "Failed to login." }, { status: 500 });
  }
}
