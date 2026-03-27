"use client";

import { useState, type MouseEvent } from "react";

type TiltCardProps = {
  children: React.ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const [transform, setTransform] = useState("perspective(800px) rotateX(0deg) rotateY(0deg)");

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) * -10 + 5).toFixed(2);
    const rotateY = ((x / rect.width) * 10 - 5).toFixed(2);
    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  return (
    <div
      className={`tilt-card ${className ?? ""}`}
      onMouseLeave={() => setTransform("perspective(800px) rotateX(0deg) rotateY(0deg)")}
      onMouseMove={onMouseMove}
      style={{ transform }}
    >
      {children}
    </div>
  );
}
