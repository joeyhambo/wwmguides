import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Her Jianghu is too short but so bright - WWM Guides",
  description: "A touching story about Ruby's brave sacrifice during the Burning Blissful Retreat, showing how even the briefest flame can shine brightest.",
  keywords: "where winds meet, ruby, burning blissful retreat, story, character analysis",
};

export default function HerJianghuPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="font-cinzel text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gold transition">Home</Link>
        {" > "}
        <Link href="/world" className="hover:text-gold transition">World of WWM</Link>
        {" > "}
        <span className="text-gray-300">Story & Lore</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          Her Jianghu is too short but so bright
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          A touching story about Ruby's brave sacrifice during the Burning Blissful Retreat, showing how even the briefest flame can shine brightest.
        </p>

        {/* Article Meta Information */}
        <div className="bg-slate-700/80 border border-slate-600 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Author:</span>
              <span className="text-white ml-2">漪漪</span>
            </div>
            <div>
              <span className="text-gray-400">Translator:</span>
              <span className="text-white ml-2">漪漪</span>
            </div>
            <div>
              <span className="text-gray-400">Reviewer:</span>
              <span className="text-white ml-2">企鹅、不响</span>
            </div>
            <div>
              <span className="text-gray-400">Source:</span>
              <span className="text-gold ml-2">燕鸣十六声 Where Stories Meet</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-600 text-sm text-gray-400">
            <span>📅 Published: December 26, 2024</span>
            <span className="mx-3">•</span>
            <span>⏱️ 3 min read</span>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <section className="prose prose-invert prose-lg max-w-none mb-12">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            At the beginning of the game, Ruby was the one who woke us. On the way to the General's Shrine, she chattered incessantly, always talking about how one day she and we would become the <strong className="text-white">"Twin Wanderers"</strong> and stir the winds of the Jianghu. You could take it as a child's longing to be a wandering hero who lifts others from danger -though back then, what she admired more was probably the sheer coolness of being a hero.
          </p>

          <p>
            During the plot of Burning Blissful Retreat, we settled Ruby and the other villagers inside the Wine Fragrance Tower. Yes, she had always been obedient; she might have seemed like that mischievous kid from your relatives' home, but as she huddled inside the tower, listening to the sounds of slaughter and shouting outside, what was that little girl thinking? Perhaps she was worrying about whether we were in danger, or whether those outside were too trapped in the chaos to see through Qianye's formation.
          </p>

          <p className="text-gold font-semibold">
            So she took action.
          </p>

          <p>
            She went alone to the base of the Tower of Wine Fragrance, walked for a long, long time, climbed to the highest point, and untied the red cloak we had given her. She hung it high on a tree branch, hoping to show everyone the key to breaking the formation.
          </p>

          <p>
            Did Ruby consider the consequences? Of course she did. Even as a child, she must have understood what this could cost her. Yet she did not falter -she acted bravely, resolutely, using herself as bait to win a sliver of hope for everyone.
          </p>

          <p>
            You might think her role was insignificant, that she died because she overreached. But imagine the one who died was an adult-wouldn't it feel almost like a solemn kind of martyrdom? Using her own death to guide everyone. Yet she was only a little girl, around the age of your little sister or your daughter. And until her very last second, until the very end, that bright red cloak still hung high upon the branch -a blazing banner declaring to the world that a brave heroine had once walked among us.
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12 flex justify-center">
        <div className="rounded-lg overflow-hidden border border-slate-600 max-w-2xl">
          <Image
            src="/images/World of WWM/Her Jianghu is too short but so bright (1).png"
            alt="Ruby - Her Jianghu is too short but so bright"
            width={800}
            height={533}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-800 border border-gold rounded-lg p-8 mb-12">
        <p className="text-xl text-gold font-semibold text-center">
          Her Jianghu was brief, but her courage burned bright as the stars.
        </p>
      </section>

      {/* Back Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-700">
        <Link
          href="/world"
          className="inline-flex items-center text-gray-400 hover:text-gold transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to World of Where Winds Meet
        </Link>
      </div>
    </article>
  );
}
