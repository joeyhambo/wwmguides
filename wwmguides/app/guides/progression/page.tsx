import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Progression Guide - Where Winds Meet",
  description: "Complete guide to character progression, leveling, and advancement in Where Winds Meet.",
  keywords: "where winds meet, progression guide, leveling, character advancement",
};

export default function ProgressionGuidePage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gold transition">Home</Link>
        {" > "}
        <Link href="/guides" className="hover:text-gold transition">Guides</Link>
        {" > "}
        <span className="text-gray-300">Progression Guide</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Character Progression Guide
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Learn how to effectively progress your character, optimize your leveling path, and unlock new abilities in Where Winds Meet.
        </p>
      </header>

      {/* Video Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-slate-600 pb-3">
          Video Guide
        </h2>

        <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-white">Complete Progression Walkthrough</h3>

          {/* Bilibili Video Embed */}
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://player.bilibili.com/player.html?bvid=BV1DcCqBbEHb&page=1&high_quality=1&danmaku=0"
              scrolling="no"
              border="0"
              frameBorder="no"
              framespacing="0"
              allowFullScreen={true}
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              style={{ border: 'none' }}
            ></iframe>
          </div>

          <div className="mt-4 text-sm text-gray-400">
            <p>Watch this comprehensive video guide to understand the progression system in Where Winds Meet.</p>
            <a
              href="https://www.bilibili.com/video/BV1DcCqBbEHb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline mt-2 inline-block"
            >
              Watch on Bilibili →
            </a>
          </div>
        </div>
      </section>

      {/* Progression Overview */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-slate-600 pb-3">
          Progression Overview
        </h2>

        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            Character progression in Where Winds Meet involves multiple interconnected systems that work together to make your character stronger and unlock new abilities.
          </p>

          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Key Progression Systems</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <strong className="text-white">Experience & Leveling:</strong> Gain experience through quests, combat, and exploration to increase your character level.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <strong className="text-white">Skill Mastery:</strong> Practice and master various martial arts skills to unlock powerful abilities.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <strong className="text-white">Equipment Enhancement:</strong> Upgrade and enhance your weapons and armor to boost your combat effectiveness.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">•</span>
                <div>
                  <strong className="text-white">Reputation & Factions:</strong> Build relationships with different factions to unlock unique rewards and storylines.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Leveling Tips */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-white border-b border-slate-600 pb-3">
          Efficient Leveling Tips
        </h2>

        <div className="space-y-4">
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-gold">1. Complete Main Story Quests</h3>
            <p className="text-gray-300">
              Main story quests provide the most experience and unlock essential game features. Prioritize these to progress efficiently.
            </p>
          </div>

          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-gold">2. Daily Activities</h3>
            <p className="text-gray-300">
              Complete daily quests and activities to gain consistent experience and valuable rewards. Don't miss these easy opportunities.
            </p>
          </div>

          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-gold">3. Skill Training</h3>
            <p className="text-gray-300">
              Regular practice and training of your skills not only makes you stronger in combat but also contributes to your overall progression.
            </p>
          </div>

          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <h3 className="text-lg font-bold mb-3 text-gold">4. Exploration Rewards</h3>
            <p className="text-gray-300">
              Explore the world to discover hidden locations, treasures, and quests that provide bonus experience and unique items.
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <section className="bg-slate-700 border border-slate-600 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4 text-white">Related Guides</h3>
        <div className="space-y-2">
          <Link href="/guides/beginner" className="block text-gold hover:underline">
            → Complete Beginner Guide
          </Link>
          <Link href="/guides/combat" className="block text-gold hover:underline">
            → Combat System Explained
          </Link>
          <Link href="/guides/skills" className="block text-gold hover:underline">
            → Skills & Abilities Guide
          </Link>
        </div>
      </section>
    </article>
  );
}
