import type { Metadata } from "next";
import { getSiteContent } from "@/lib/content";
import { SiteContentProvider } from "@/app/components/SiteContent";
import { Geist, Geist_Mono, DM_Sans, Rubik_Dirt } from "next/font/google";
import { PencilBorderSvg } from "@/app/components/PencilBorder";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const rubikDirt = Rubik_Dirt({
  variable: "--font-rubik-dirt",
  weight: "400",
  subsets: ["latin"],
});

export const dynamic = "force-dynamic";
export async function generateMetadata(): Promise<Metadata> {
  const { site } = await getSiteContent();
  return { title: { default: `${site.title} | ${site.titleSuffix}`, template: `%s | ${site.titleSuffix}` }, description: site.description };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const content = await getSiteContent();
  return (
    <html
      lang={content.site.language}
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${rubikDirt.variable} h-full antialiased`}
    >
      <body style={{ backgroundColor: content.site.theme.background, color: content.site.theme.text }} className="min-h-full flex flex-col">
        <SiteContentProvider content={content}><PencilBorderSvg />{children}</SiteContentProvider>
      </body>
    </html>
  );
}
