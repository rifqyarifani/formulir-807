import { ThemeProvider } from "@/components/ThemeProvider";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import NavBar from "./NavBar";
import "./globals.css";
import Footer from "./Footer";

const jakartaSans = Plus_Jakarta_Sans({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Formulir",
  description: "Formulir Permohonan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakartaSans.className} w-screen`}>
        <Theme>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <main className=" bg-[#F7F9FA]">{children}</main>
            <Footer />
          </ThemeProvider>
        </Theme>
      </body>
    </html>
  );
}
