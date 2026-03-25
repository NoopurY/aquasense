"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function onLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-500/10"
      onClick={onLogout}
      type="button"
    >
      Logout
    </button>
  );
}
