import "./globals.css";
import { NavBar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { ThemeProvider } from "@/components/theme-provider"
// import { getCurrentUser } from "@/lib/session";
import { NextAuthProvider } from "./providers";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  return (
    <html lang="en">
      <body>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <NavBar user={user} scroll={false} />
        <NextAuthProvider>{children}</NextAuthProvider>
        <SiteFooter className="border-t" />
      </ThemeProvider>
      </body>
    </html>
  );
}
