"use client"

import Link from "next/link"

const links = [
  { name: "Үүсэл", href: "#origin" },
  { name: "Өсөлт", href: "#rise" },
  { name: "Эзэнт гүрэн", href: "#empire" },
  { name: "Өв", href: "#legacy" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-amber-700/20 bg-black/50 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="text-2xl font-black tracking-widest text-amber-100"
        >
          ЧИНГИС ХААН
        </Link>

        <div className="flex gap-8 text-sm tracking-wide">
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
      </div>
    </nav>
  )
}