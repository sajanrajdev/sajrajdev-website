import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saj Rajdev - Personal Website",
  description: "Personal website showcasing my work and thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <div className="min-h-screen flex flex-col">
          <header className="bg-white dark:bg-gray-800 shadow-md">
            <Navigation />
          </header>
          <main className="flex-grow container mx-auto px-6 py-8">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 shadow-md mt-8">
            <div className="container mx-auto px-6 py-3 text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Your Name
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}