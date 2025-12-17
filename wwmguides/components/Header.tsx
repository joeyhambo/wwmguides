"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ email: string; username: string } | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("wwm_current_user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("wwm_current_user");
    setUser(null);
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Where Winds Meet Guides</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/guides" className="text-white hover:text-gold font-medium transition">
              Guides
            </Link>
            <Link href="/culture" className="text-white hover:text-gold font-medium transition">
              Culture
            </Link>
            <Link href="/world" className="text-white hover:text-gold font-medium transition">
              World
            </Link>
            <Link href="/shop" className="text-white hover:text-gold font-medium transition">
              Artifacts
            </Link>

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-300 text-sm">Hello, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="text-white hover:text-gold font-medium transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/auth/login" className="text-white hover:text-gold font-medium transition">
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="bg-gold text-black px-4 py-2 rounded-lg font-medium hover:bg-gold/90 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
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
              href="/guides"
              className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/culture"
              className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Culture
            </Link>
            <Link
              href="/world"
              className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              World
            </Link>
            <Link
              href="/shop"
              className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Artifacts
            </Link>

            {/* Mobile User Menu */}
            {user ? (
              <>
                <div className="px-4 py-2 text-gray-300 text-sm border-t border-slate-600 mt-2 pt-4">
                  Hello, {user.username}
                </div>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-gold rounded-md border-t border-slate-600 mt-2 pt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="block px-4 py-2 bg-gold text-black hover:bg-gold/90 rounded-md font-medium mx-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
