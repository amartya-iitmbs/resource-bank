import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";

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
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 dark:bg-navy-900 dark:text-white">
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
