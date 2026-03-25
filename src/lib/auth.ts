import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const AUTH_COOKIE_NAME = "aquasave_auth";

type TokenPayload = {
  userId: string;
  email: string;
  fullName: string;
};

function getJwtSecret(): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not configured.");
  }
  return secret;
}

export async function hashPassword(plainTextPassword: string): Promise<string> {
  return bcrypt.hash(plainTextPassword, 12);
}

export async function verifyPassword(plainTextPassword: string, hash: string): Promise<boolean> {
  return bcrypt.compare(plainTextPassword, hash);
}

export function signAuthToken(payload: TokenPayload): string {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: "7d" });
}

export function verifyAuthToken(token: string): TokenPayload | null {
  try {
    return jwt.verify(token, getJwtSecret()) as TokenPayload;
  } catch {
    return null;
  }
}

export async function getSessionUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME)?.value;
  if (!token) {
    return null;
  }

  return verifyAuthToken(token);
}

export async function requireSessionUser() {
  const user = await getSessionUser();
  if (!user) {
    redirect("/login");
  }
  return user;
}

export const authCookie = {
  name: AUTH_COOKIE_NAME,
  options: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 7
  }
};
