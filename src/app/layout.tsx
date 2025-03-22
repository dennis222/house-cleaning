import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Define the local fonts
const sans = localFont({
  src: [
    {
      path: "../../public/fonts/bf8e0cb552f3d378-s.p.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/e66b3e0b44591e63-s.p.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/284167c4c743147b-s.p.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/7c15fb6c0dec2911-s.p.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Australia's Largest Agency for Domestic Cleaners | Absolute Domestics",
  description: "Too busy to clean your house? We have over 29 years of experience in professional house cleaning in Australia. Book a domestic cleaner online now or call us on 1300 364 646.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body className="font-sans bg-background min-h-screen">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
