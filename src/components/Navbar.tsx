"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AquaLogo } from "@/components/AquaLogo";

type NavbarProps = {
  showAuth?: boolean;
};

export function Navbar({ showAuth = true }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 32);
      setProgress(max > 0 ? (y / max) * 100 : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-40 pt-4">
      <nav className={`mx-auto flex items-center justify-between gap-4 px-5 py-3 transition-all md:px-8 ${scrolled ? "w-[min(980px,92vw)] rounded-full border border-[var(--border-hover)] bg-[rgba(3,15,30,0.72)] backdrop-blur-xl" : "w-full border-b border-[var(--border)]"}`}>
        <AquaLogo compact />

        <div className="hidden items-center gap-5 text-sm md:flex">
          <Link className="nav-link" href="#hero">
            Overview
          </Link>
          <Link className="nav-link" href="#architecture">
            Architecture
          </Link>
          <Link className="nav-link" href="#billing">
            Billing
          </Link>
          <Link className="nav-link" href="/dashboard">
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-2 text-xs md:text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-emerald-200">
            <span className="status-dot" /> Azure IoT Hub: CONNECTED
          </span>
          {showAuth ? (
            <Link className="aqua-outline-btn px-3 py-2" href="/login">
              Login
            </Link>
          ) : null}
        </div>
      </nav>
      <div className="mx-auto mt-2 h-[2px] w-full max-w-7xl overflow-hidden rounded-full bg-cyan-900/40">
        <div className="h-full bg-[linear-gradient(90deg,var(--cyan-dim),var(--cyan))] transition-all duration-150" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
