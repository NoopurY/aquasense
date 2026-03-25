import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AquaSave | Smart Water Monitoring",
  description: "IoT powered smart water meter with cloud billing and real-time analytics"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
