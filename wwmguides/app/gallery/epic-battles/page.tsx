import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epic Battle Moments - WWM Guides",
  description: "Witness the most thrilling combat encounters in Where Winds Meet.",
};

export default function EpicBattles() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="font-cinzel text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gold transition">Home</Link>
        {" > "}
        <Link href="/guides" className="hover:text-gold transition">Guides</Link>
        {" > "}
        <span className="text-gray-300">Epic Battles</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          Epic Battle Moments
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Witness the most thrilling combat encounters in Where Winds Meet.
        </p>
      </header>

      {/* Content */}
      <section className="prose prose-invert prose-lg max-w-none">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The combat system in Where Winds Meet allows for breathtaking battles that showcase the true essence of Wuxia martial arts. These epic encounters demonstrate the depth and excitement of the game's combat mechanics.
          </p>

          <h2 className="font-cinzel text-3xl font-bold text-white border-b border-slate-600 pb-3">
            Boss Battle Highlights
          </h2>

          <p>
            Boss battles in WWM are carefully choreographed experiences that test your mastery of combat mechanics. From dueling legendary warriors to defending against Khitan invasions, these encounters are unforgettable.
          </p>

          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 my-6">
            <h3 className="font-cinzel text-xl font-bold text-white mb-2">Key Battle Techniques</h3>
            <ul className="space-y-2">
              <li>• Perfect parry timing for counterattacks</li>
              <li>• Combo chain mastery</li>
              <li>• Environmental advantage usage</li>
              <li>• Weapon switching strategies</li>
            </ul>
          </div>

          <h2 className="font-cinzel text-3xl font-bold text-white border-b border-slate-600 pb-3">
            PvP Showdowns
          </h2>

          <p>
            Player versus player combat brings an extra layer of intensity. The best PvP moments showcase incredible skill, strategy, and the unpredictable nature of human opponents.
          </p>

          <h2 className="font-cinzel text-3xl font-bold text-white border-b border-slate-600 pb-3">
            Large-Scale Battles
          </h2>

          <p>
            The game features massive battlefield scenarios where dozens of NPCs clash in epic warfare. These cinematic moments immerse players in the historical conflicts between Song Dynasty forces and Khitan warriors.
          </p>

          <h2 className="font-cinzel text-3xl font-bold text-white border-b border-slate-600 pb-3">
            Legendary Duels
          </h2>

          <p>
            One-on-one duels against skilled opponents represent the pinnacle of martial arts mastery. These encounters require perfect timing, pattern recognition, and strategic thinking.
          </p>

          <div className="bg-gradient-to-r from-slate-700 to-slate-800 border border-gold rounded-lg p-8 my-8">
            <p className="text-xl text-gold font-semibold">
              Master the art of combat and create your own epic moments in Yan Yun!
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
