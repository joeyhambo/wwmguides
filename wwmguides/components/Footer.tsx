import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">WWM Guides</h3>
            <p className="text-sm">
              Your complete resource for Where Winds Meet game guides, tips, and cultural insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides" className="hover:text-white transition">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="/culture" className="hover:text-white transition">
                  Culture
                </Link>
              </li>
              <li>
                <Link href="/world" className="hover:text-white transition">
                  World
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides/beginner" className="hover:text-white transition">
                  Beginner Guide
                </Link>
              </li>
              <li>
                <Link href="/guides/combat" className="hover:text-white transition">
                  Combat System
                </Link>
              </li>
              <li>
                <Link href="/culture/wuxia" className="hover:text-white transition">
                  What is Wuxia?
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 WWM Guides. All rights reserved. Not affiliated with the official game.</p>
        </div>
      </div>
    </footer>
  );
}
