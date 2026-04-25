"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於軍師" },
  { href: "/services", label: "服務內容" },
  { href: "/cases", label: "合作案例" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{ backgroundColor: "#F5F4F0", borderColor: "#1B2D5A18" }}
    >
      <nav className="max-w-2xl mx-auto w-full flex items-center justify-between px-6 sm:px-16 h-16">
        <Link
          href="/"
          className="text-sm font-bold tracking-wider"
          style={{ color: "#1B2D5A" }}
        >
          市場軍師
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden sm:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{
                    color: "#1B2D5A",
                    fontWeight: pathname === href ? 600 : 400,
                    opacity: pathname === href ? 1 : 0.75,
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="text-sm font-semibold px-4 py-2 rounded-sm transition-opacity hover:opacity-85"
            style={{ backgroundColor: "#D4A843", color: "#1B2D5A" }}
          >
            諮詢
          </Link>
        </div>
      </nav>
    </header>
  );
}
