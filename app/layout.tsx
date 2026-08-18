import type { Metadata } from "next"
import { Cinzel, Lora } from "next/font/google"
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

import "./globals.css"

const titleFont = Cinzel({
  subsets: ["latin"],

  weight: ["400", "700", "900"],
})

const bodyFont = Lora({
  subsets: ["latin"],

  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Чингис Хаан | Дэлхийг өөрчилсөн их хаан",

  description:
    "Монголын их хаан Чингис хааны амьдрал, үүсэл гарвал, эзэнт гүрний түүхэн аялал",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" suppressHydrationWarning>
      <body
        className={` ${titleFont.className} ${bodyFont.className} bg-black text-yellow-100`}
      >
        <SmoothScroll/>
        <Cursor/>
        {children}
      </body>
    </html>
  )
}
