import { NextResponse } from "next/server";
import { z } from "zod";
import { authCookie, hashPassword, signAuthToken, verifyPassword } from "@/lib/auth";
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

    const normalizedEmail = parsed.data.email.trim().toLowerCase();
    const plainPassword = parsed.data.password;

    const user = await prisma.user.findFirst({
      where: {
        email: {
          equals: normalizedEmail,
          mode: "insensitive"
        }
      }
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }

    let validPassword = false;

    // Backward compatibility: older records may have stored plaintext passwords.
    if (user.passwordHash.startsWith("$2")) {
      validPassword = await verifyPassword(plainPassword, user.passwordHash);
    } else {
      validPassword = user.passwordHash === plainPassword;

      if (validPassword) {
        const upgradedHash = await hashPassword(plainPassword);
        await prisma.user.update({
          where: { id: user.id },
          data: { passwordHash: upgradedHash }
        });
      }
    }

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
