"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於軍師" },
  { href: "/services", label: "服務內容" },
  { href: "/cases", label: "合作案例" },
  // { href: "/blog", label: "策略筆記" }, // 暫時隱藏，待 Blog 有正式文章後恢復
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{ backgroundColor: "#F5F4F0", borderColor: "#1B2D5A18" }}
    >
      {/* 主列 */}
      <nav className="max-w-2xl mx-auto w-full flex items-center justify-between px-6 sm:px-16 h-16">
        <Link
          href="/"
          className="text-sm font-bold tracking-wider"
          style={{ color: "#1B2D5A" }}
        >
          市場軍師
        </Link>

        <div className="flex items-center gap-4">
          {/* 桌機選單 */}
          <ul className="hidden sm:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-opacity hover:opacity-60"
                  style={{
                    color: "#1B2D5A",
                    fontWeight: pathname === href ? 600 : 400,
                    opacity: pathname === href ? 1 : 0.72,
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

          {/* 漢堡按鈕（手機） */}
          <button
            className="sm:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="開啟選單"
          >
            <span
              className="block w-5 h-px transition-all"
              style={{
                backgroundColor: "#1B2D5A",
                transform: open ? "translateY(4px) rotate(45deg)" : "",
              }}
            />
            <span
              className="block w-5 h-px transition-all"
              style={{
                backgroundColor: "#1B2D5A",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-all"
              style={{
                backgroundColor: "#1B2D5A",
                transform: open ? "translateY(-4px) rotate(-45deg)" : "",
              }}
            />
          </button>
        </div>
      </nav>

      {/* 手機展開選單 */}
      {open && (
        <div
          className="sm:hidden border-t"
          style={{ backgroundColor: "#F5F4F0", borderColor: "#1B2D5A18" }}
        >
          <ul className="max-w-2xl mx-auto flex flex-col px-6 py-4 gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm transition-opacity hover:opacity-60"
                  style={{
                    color: "#1B2D5A",
                    fontWeight: pathname === href ? 600 : 400,
                    opacity: pathname === href ? 1 : 0.72,
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
