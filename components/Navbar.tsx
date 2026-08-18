"use client"

import Link from "next/link"
import MiniAi from "@/components/MiniAi"

const links = [
  { name: "Үүсэл", href: "#origin" },
  { name: "Өсөлт", href: "#rise" },
  { name: "Эзэнт гүрэн", href: "#empire" },
  { name: "Өв", href: "#legacy" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-amber-700/20 bg-black/10 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-2xl font-black tracking-widest text-amber-100"
        >
          ЧИНГИС XAAH
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden items-center gap-8 text-sm tracking-wide md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-amber-100 transition hover:text-yellow-400"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <MiniAi />
        </div>
      </div>
    </nav>
  )
}
