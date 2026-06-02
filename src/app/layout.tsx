import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resource Bank | Amartya Finance Society",
  description: "Central knowledge repository for Amartya Finance Society - IIT Madras BS Degree",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-navy-900 text-white">
        {children}
      </body>
    </html>
  );
}
