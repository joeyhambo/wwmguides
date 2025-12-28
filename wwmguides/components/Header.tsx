"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-cinzel text-2xl font-bold text-white">Where Winds Meet Wander</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/gallery" className="font-cinzel text-white hover:text-gold font-medium transition">
              Gallery
            </Link>
            <Link href="/culture" className="font-cinzel text-white hover:text-gold font-medium transition">
              Culture
            </Link>
            <Link href="/world" className="font-cinzel text-white hover:text-gold font-medium transition">
              World
            </Link>
            <Link href="/shop" className="font-cinzel text-white hover:text-gold font-medium transition">
              Artifacts
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/gallery"
              className="font-cinzel block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/culture"
              className="font-cinzel block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Culture
            </Link>
            <Link
              href="/world"
              className="font-cinzel block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              World
            </Link>
            <Link
              href="/shop"
              className="font-cinzel block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Artifacts
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
