import Footer from "@/components/shared/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FloatingNav } from "@/components/ui/floating-navbar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nayeem's Portfolio",
  description: "This is Ashikul Islam Nayeem's portfolio",
};

const navItems = [
  { name: "Home", link: "/" },
  { name: "Projects", link: "/projects" },
  { name: "Blogs", link: "/blogs" },
  { name: "Contact", link: "/contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="bg-custom-black-100 min-h-screen">
            <FloatingNav navItems={navItems} />
            {children}
            <Footer />
            <Toaster position="top-right" richColors={true} expand={true} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
