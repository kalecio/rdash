import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Sans, Rubik_Dirt } from "next/font/google";
import { PencilBorderSvg } from "./components/PencilBorder";
import "./globals.css";

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

export const metadata: Metadata = {
  title: {
    default: "Comunidade de jogos de luta em Recife | R-DASH",
    template: "%s | R-DASH Recife",
  },
  description:
    "Encontre a comunidade R-DASH em Recife: jogos de luta, Anime Fighters, torneios, encontros e novidades para jogadores.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${rubikDirt.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PencilBorderSvg />
        {children}
      </body>
    </html>
  );
}
