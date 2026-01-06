import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="font-cinzel text-white font-bold text-lg mb-4">WWM Wander</h3>
            <p className="font-crimson text-sm">
              Wander through stories carried by the wind & Exploring the lore behind the wandering winds
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cinzel text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/gallery" className="font-crimson hover:text-gold transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/culture" className="font-crimson hover:text-gold transition">
                  Culture
                </Link>
              </li>
              <li>
                <Link href="/world" className="font-crimson hover:text-gold transition">
                  World
                </Link>
              </li>
              <li>
                <Link href="/shop" className="font-crimson hover:text-gold transition">
                  Artifacts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-cinzel text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/world/stop-and-halberd" className="font-crimson hover:text-gold transition">
                  To Stop the Blade
                </Link>
              </li>
              <li>
                <Link href="/world/her-jianghu" className="font-crimson hover:text-gold transition">
                  Ruby's Bright Flame
                </Link>
              </li>
              <li>
                <Link href="/world/meaning-of-wwm" className="font-crimson hover:text-gold transition">
                  Meaning of WWM
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-cinzel text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="font-crimson hover:text-gold transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="font-crimson hover:text-gold transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p className="font-crimson">&copy; 2025 WWM Wander. All rights reserved. Not affiliated with the official game.</p>
        </div>
      </div>
    </footer>
  );
}
