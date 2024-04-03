import { ThemeProvider } from "@/components/ThemeProvider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import {
  Montserrat,
  Plus_Jakarta_Sans,
  Roboto_Condensed,
  Roboto_Flex,
} from "next/font/google";
import NavBar from "./NavBar";
import "./globals.css";
import Footer from "./Footer";

const montserrat = Montserrat({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KPP Pratama Banteng",
  description: "Website KPP Pratama Bantaeng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} w-screen`}>
        <Theme>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main
              className={` ${montserrat.className} bg-gradient-to-b from-first to-second text-white font-sans`}
            >
              <NavBar />
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  );
}
