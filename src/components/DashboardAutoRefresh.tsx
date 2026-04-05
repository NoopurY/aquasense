"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = {
  intervalMs?: number;
};

export function DashboardAutoRefresh({ intervalMs = 5000 }: Props) {
  const router = useRouter();

  useEffect(() => {
    const id = setInterval(() => {
      router.refresh();
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs, router]);

  return null;
}
