import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import ReactQueryProvider from "./utils/providers/reactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "expene-manager",
  description: "manage and visualize your incomes and expense",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <NavBar />
          <ReactQueryProvider>
            {children}
          </ReactQueryProvider>
      </body>
    </html>
  );
}
