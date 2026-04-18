import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const readings = await prisma.waterReading.findMany({
      where: { userId: user.userId },
      orderBy: { capturedAt: "desc" },
      take: 5,
      select: {
        id: true,
        liters: true,
        flowRate: true,
        capturedAt: true,
        source: true
      }
    });

    return NextResponse.json(readings);
  } catch (error) {
    console.error("Error fetching recent readings:", error);
    return NextResponse.json(
      { error: "Failed to fetch readings" },
      { status: 500 }
    );
  }
}
