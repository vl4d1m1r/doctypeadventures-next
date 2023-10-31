import type { Metadata } from "next";
import Header from "@/components/Header";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div>
            <Header />
            <main className="mt-20">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
