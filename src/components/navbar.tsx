"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/games", label: "Games" },
    { href: "/tournament", label: "Tournament" },
    { href: "/creators", label: "Creators" },
    { href: "/docs", label: "Docs" },
  ];

  const allScreens = [
    { href: "/", label: "Home" },
    { href: "/games", label: "Games" },
    { href: "/tournament", label: "Tournament" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/categories", label: "Categories" },
    { href: "/hangout", label: "The Hangout" },
    { href: "/creators", label: "Creators" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <>
      {/* Quick Screen Switcher (matches the 8 views from the PDF) */}
      <div className="bg-[#141414] text-white py-1.5 px-4 text-xs font-semibold overflow-x-auto select-none border-b border-[#2A2A26]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 flex-nowrap shrink-0">
            <span className="text-[#FDC827] text-[10px] uppercase font-bold tracking-wider mr-2 hidden sm:inline">
              PDF Pages:
            </span>
            {allScreens.map((screen) => {
              const isCurrent = pathname === screen.href;
              return (
                <Link
                  key={screen.href}
                  href={screen.href}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all whitespace-nowrap ${
                    isCurrent
                      ? "bg-[#FDC827] text-[#141414] shadow-xs"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {screen.label}
                </Link>
              );
            })}
          </div>
          <span className="text-[10px] text-white/40 hidden md:inline">
            start.ng Whimsical Landing
          </span>
        </div>
      </div>

      {/* Main App Navbar from PDF */}
      <nav className="relative z-50 bg-[#FBF8EE]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full bg-[#FDC827] border-[2.5px] border-[#141414] shadow-[2px_2px_0px_#141414] flex items-center justify-center transition-transform group-hover:scale-105">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="#141414"
                className="translate-x-[1px]"
              >
                <polygon points="5,3 20,12 5,21" />
              </svg>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-[#141414]">
              start<span className="text-[#141414]">.ng</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[#141414] font-bold"
                      : "text-[#141414]/75 hover:text-[#141414]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Play Now Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/games"
              className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#FDC827] text-[#141414] font-display font-bold text-sm border-[2.5px] border-[#141414] shadow-[3px_3px_0px_#141414] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_#141414] transition-all"
            >
              Play now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg border-2 border-[#141414] bg-white shadow-[2px_2px_0px_#141414]"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden border-b-2 border-[#141414] bg-[#FBF8EE] px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold text-[#141414] py-1"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/games"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center py-2.5 rounded-full bg-[#FDC827] text-[#141414] font-display font-bold text-sm border-2 border-[#141414] shadow-[3px_3px_0px_#141414]"
            >
              Play now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
