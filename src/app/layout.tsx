import type { Metadata } from "next";
import { Exo_2, Rajdhani, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["500", "600", "700"]
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo2",
  weight: ["300", "400", "500", "600", "700"]
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-code",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "AquaSave | Smart Water Monitoring",
  description: "IoT powered smart water meter with cloud billing and real-time analytics"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${exo2.variable} ${shareTechMono.variable}`}>{children}</body>
    </html>
  );
}
