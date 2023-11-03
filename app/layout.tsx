import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleIntegration from "@/components/Seo/integrations/GoogleIntegration";
import FacebookIntegration from "@/components/Seo/integrations/FacebookIntegration";
import { ThemeProvider } from "./theme-provider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <FacebookIntegration />
        <GoogleIntegration />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <>
            <Header />
            <main className="wrapper mt-20 py-4">{children}</main>
            <Footer />
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
