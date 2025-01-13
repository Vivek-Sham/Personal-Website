import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme/ThemeProviders";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/ui/animated-modal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivek Sham",
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
          <ModalProvider>
            <div className="relative z-10">
              <Navbar />
              <TracingBeam className="mx-[1rem] sm:mx-[2rem] lg:mx-[7.5rem]">
                {children}
                <Footer />
              </TracingBeam>
            </div>
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
