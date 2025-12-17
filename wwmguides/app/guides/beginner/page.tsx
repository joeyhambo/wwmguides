import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Beginner Guide - Where Winds Meet",
  description: "Everything you need to know to start playing Where Winds Meet. Character creation, basic controls, combat fundamentals, and early game tips.",
  keywords: "where winds meet beginner guide, yan yun beginner tips, how to start, new player guide",
};

export default function BeginnerGuidePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gold transition">Home</Link>
        {" > "}
        <Link href="/guides" className="hover:text-gold transition">Guides</Link>
        {" > "}
        <span className="text-gray-300">Beginner Guide</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Complete Beginner Guide</h1>
        <p className="text-xl text-gray-300">
          Everything you need to know to start your journey in Where Winds Meet. This guide covers character creation, basic controls, combat fundamentals, and tips for your first hours.
        </p>
        <div className="flex gap-4 mt-4 text-sm text-gray-400">
          <span>📅 Updated: December 2024</span>
          <span>⏱️ 10 min read</span>
        </div>
      </header>

      {/* Table of Contents */}
      <nav className="bg-slate-700/80 border border-slate-600 rounded-lg p-6 mb-8">
        <h2 className="font-bold text-lg mb-3 text-white">Table of Contents</h2>
        <ul className="space-y-2 text-gray-300">
          <li><a href="#getting-started" className="hover:text-gold transition">1. Getting Started</a></li>
          <li><a href="#character-creation" className="hover:text-gold transition">2. Character Creation</a></li>
          <li><a href="#basic-controls" className="hover:text-gold transition">3. Basic Controls</a></li>
          <li><a href="#combat-basics" className="hover:text-gold transition">4. Combat Basics</a></li>
          <li><a href="#early-game-tips" className="hover:text-gold transition">5. Early Game Tips</a></li>
          <li><a href="#next-steps" className="hover:text-gold transition">6. Next Steps</a></li>
        </ul>
      </nav>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <section id="getting-started" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Getting Started</h2>
          <p className="text-gray-300 mb-4">
            Where Winds Meet (燕云十六声) is an open-world martial arts action RPG set in ancient China during the Five Dynasties and Ten Kingdoms period. As a newcomer to the world of Yan Yun, you'll explore vast landscapes, master combat techniques, and uncover the mysteries of the Jianghu (martial arts world).
          </p>
          <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4 my-6">
            <p className="font-semibold text-blue-300">💡 Pro Tip</p>
            <p className="text-blue-200">Take your time to explore the world and experiment with different playstyles. There's no single "correct" way to play!</p>
          </div>
        </section>

        <section id="character-creation" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Character Creation</h2>
          <p className="text-gray-300 mb-4">
            When starting the game, you'll create your character. While appearance is mostly cosmetic, your initial weapon choice will affect your early game experience:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
            <li><strong className="text-white">Sword (剑)</strong> - Balanced offense and defense, great for beginners</li>
            <li><strong className="text-white">Spear (枪)</strong> - Long reach, excellent for keeping distance</li>
            <li><strong className="text-white">Dual Blades (双刀)</strong> - Fast attacks, requires good timing</li>
            <li><strong className="text-white">Polearm (长兵)</strong> - Heavy damage, slower attacks</li>
          </ul>
          <p className="text-gray-300">
            Don't worry too much about this choice - you can learn and master all weapon types as you progress through the game.
          </p>
        </section>

        <section id="basic-controls" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Basic Controls</h2>
          <p className="text-gray-300 mb-4">
            Understanding the controls is essential for smooth gameplay:
          </p>
          <div className="bg-slate-800/50 rounded-lg p-6 mb-4">
            <h3 className="font-bold mb-3 text-white">Movement & Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• WASD - Basic movement</li>
              <li>• Space - Jump / Climb</li>
              <li>• Shift - Sprint</li>
              <li>• Ctrl - Crouch</li>
            </ul>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-6">
            <h3 className="font-bold mb-3 text-white">Combat Controls</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Left Click - Light Attack</li>
              <li>• Right Click - Heavy Attack</li>
              <li>• Q - Dodge</li>
              <li>• E - Parry</li>
              <li>• R - Switch Weapon Stance</li>
            </ul>
          </div>
        </section>

        <section id="combat-basics" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Combat Basics</h2>
          <p className="text-gray-300 mb-4">
            Combat in Where Winds Meet is based on timing, positioning, and understanding your opponent. Here are the fundamentals:
          </p>

          <h3 className="text-xl font-bold mb-3 text-white">Understanding Stances</h3>
          <p className="text-gray-300 mb-4">
            Each weapon has multiple stances that change your moveset. Experiment with different stances to find what works for each situation.
          </p>

          <h3 className="text-xl font-bold mb-3 text-white">Parry and Counter</h3>
          <p className="text-gray-300 mb-4">
            Timing your parry (E key) just before an enemy attack will stagger them, opening them up for a powerful counter-attack. This is crucial for harder enemies.
          </p>

          <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 my-6">
            <p className="font-semibold text-yellow-300">⚠️ Important</p>
            <p className="text-yellow-200">Don't spam attacks! Wait for openings and focus on defense. Patient players will win more fights.</p>
          </div>
        </section>

        <section id="early-game-tips" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Early Game Tips</h2>
          <ol className="list-decimal pl-6 space-y-3 text-gray-300">
            <li><strong className="text-white">Complete the Tutorial</strong> - Don't skip it! It teaches essential mechanics.</li>
            <li><strong className="text-white">Explore Thoroughly</strong> - The open world rewards exploration with hidden items and quests.</li>
            <li><strong className="text-white">Save Your Resources</strong> - Don't upgrade every piece of gear. Focus on items you'll use long-term.</li>
            <li><strong className="text-white">Practice Combat</strong> - Use training dummies to master combos and timing.</li>
            <li><strong className="text-white">Join a Faction Early</strong> - Factions provide quests, rewards, and unique abilities.</li>
            <li><strong className="text-white">Manage Your Stamina</strong> - Both in combat and exploration, stamina management is key.</li>
          </ol>
        </section>

        <section id="next-steps" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Next Steps</h2>
          <p className="text-gray-300 mb-4">
            Once you're comfortable with the basics, explore these advanced guides:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/combat" className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-gold hover:shadow-lg transition">
              <h4 className="font-bold text-lg mb-2 text-white group-hover:text-gold transition">Combat System Guide</h4>
              <p className="text-gray-400 text-sm">Learn advanced combat techniques and combos</p>
            </Link>
            <Link href="/guides/weapons" className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-gold hover:shadow-lg transition">
              <h4 className="font-bold text-lg mb-2 text-white group-hover:text-gold transition">Weapon Mastery</h4>
              <p className="text-gray-400 text-sm">Deep dive into each weapon type</p>
            </Link>
          </div>
        </section>
      </div>

      {/* Related Content */}
      <aside className="mt-12 pt-8 border-t border-slate-700">
        <h3 className="text-2xl font-bold mb-4 text-white">Related Articles</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/culture/wuxia" className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-gold transition">
            <h4 className="font-semibold mb-2 text-white group-hover:text-gold transition">What is Wuxia?</h4>
            <p className="text-sm text-gray-400">Learn about the martial arts genre</p>
          </Link>
          <Link href="/world/factions" className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-gold transition">
            <h4 className="font-semibold mb-2 text-white group-hover:text-gold transition">Factions Explained</h4>
            <p className="text-sm text-gray-400">Understand the game's factions</p>
          </Link>
          <Link href="/guides/early-game" className="group bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-gold transition">
            <h4 className="font-semibold mb-2 text-white group-hover:text-gold transition">Early Game Tips</h4>
            <p className="text-sm text-gray-400">More tips for new players</p>
          </Link>
        </div>
      </aside>
    </article>
  );
}
