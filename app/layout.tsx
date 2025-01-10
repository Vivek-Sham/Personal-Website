import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ThemeProvider } from "@/components/theme/ThemeProviders";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vivek's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="relative">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative font-[family-name:var(--font-geist-mono)] `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative z-10">
            <Navbar />
            <TracingBeam className="mx-[1rem] sm:mx-[2rem] lg:mx-[7.5rem]">
              {children}
              <Footer />
            </TracingBeam>
          </div>
        </ThemeProvider>
        <div className="absolute top-0 left-0 w-full h-full">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(75rem_circle_at_center,white,white)]"
            )}
          />
        </div>
      </body>
    </html>
  );
}
