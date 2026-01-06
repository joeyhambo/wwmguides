import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Story of BaWu - Priceless but also worthless - WWM Wander",
  description: "Discover the tragic tale of Bawu, the boy blessed by the Deer Goddess, who mastered the Gu craft and the Longevity Parasite in Where Winds Meet.",
  keywords: "Where Winds Meet, BaWu, Longevity Parasite, Gu craft, Deer Goddess, Gleaming Abyss, Chen Huaiqing, Chinese mythology",
};

export default function StoryOfBawuPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/world" className="hover:text-gold transition-colors">
          World of WWM
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-300">Story & Lore</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          The Story of BaWu
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Priceless but also worthless
        </p>

        {/* Article Meta Information */}
        <div className="bg-slate-700/80 border border-slate-600 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Author:</span>
              <span className="text-white ml-2">软软喵大人</span>
            </div>
            <div>
              <span className="text-gray-400">Translator:</span>
              <span className="text-white ml-2">企鹅</span>
            </div>
            <div>
              <span className="text-gray-400">Reviewer:</span>
              <span className="text-white ml-2">儿童节、向日菇</span>
            </div>
            <div>
              <span className="text-gray-400">Source:</span>
              <span className="text-gold ml-2">燕鸣十六声 Where Stories Meet</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-600 text-sm text-gray-400">
            <span>📅 Published: December 30, 2024</span>
            <span className="mx-3">•</span>
            <span>⏱️ 8 min read</span>
          </div>
        </div>

        {/* Hero Image - Gleaming Abyss */}
        <div className="mb-8 rounded-lg overflow-hidden border border-slate-600 max-w-xl mx-auto">
          <Image
            src="/images/World of WWM/The Story of Ba Wu (3).png"
            alt="The Gleaming Abyss - A mystical underground realm"
            width={600}
            height={300}
            className="w-full h-auto"
            priority
          />
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            Around 600 AD, as the Sui dynasty was fading and the Tang dynasty was rising, an elderly blind woman who mastered the{" "}
            <span className="relative group cursor-help">
              <span className="border-b border-dotted border-gold">Gu (蛊：Gǔ) craft</span>
              <span className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-sm text-gray-300 rounded border border-gold whitespace-nowrap z-10">
                Gu craft is a mysterious form of witchcraft in ancient Chinese legends
              </span>
            </span>{" "}
            cultivated a Gu known <span className="bg-gold/20 text-gold px-1">as the Longevity Parasite</span>. To avoid people of the Jianghu, she hid deep within Changliu Village in the{" "}
            <span className="relative group cursor-help">
              <span className="border-b border-dotted border-gold">Deer Foraging Woods</span>
              <span className="invisible group-hover:visible absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-sm text-gray-300 rounded border border-gold whitespace-nowrap z-10">
                The original name in Chinese is 鹿食林（Lù Shí Lín）, Lushi Forest
              </span>
            </span>. There, she adopted an orphaned boy she named <span className="bg-gold/20 text-gold px-1">Bawu (巴梧：Bā Wú)</span>, meaning &quot;the child blessed by the Deer Goddess.&quot;
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            The woman told Bawu to wear a deer-shaped mask all year long so he could hear the goddess&apos;s whisper. Yet Bawu learned from villagers that the mask was in fact meant to conceal his unusual features.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Granny taught him the Gu craft and kept by her side a Toad King that housed the Longevity Parasite. With the strange call inside its body, the toad could draw venomous insects from miles away, commanding them to deliver fresh herbs for it every day. Because Bawu shared a gentle bond with the Toad King, these seeming miracles fueled rumors in the village that <span className="bg-gold/20 text-gold px-1">Bawu was an immortal</span>.
          </p>
        </section>

        {/* Chen Huaiqing Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Arrival of Chen Huaiqing
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            When he grew to seventeen, a man named <span className="bg-gold/20 text-gold px-1">Chen Huaiqing (陈怀卿：Chén Huái Qīng)</span>, drawn by these legends, arrived at Changliu Village seeking a remedy for a deadly poison. Bawu treated him.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Once cured, Chen asked for the formula for the antidote and, when he left, claimed himself to be &quot;the apprentice of the immortal.&quot;
          </p>

          <div className="bg-slate-800/30 border-l-4 border-gold p-6 mb-6 rounded-r-lg">
            <p className="text-gray-300 italic">
              (probably aiming to protect Bawu)
            </p>
          </div>

          <p className="text-gray-300 leading-relaxed">
            He never returned, and Bawu heard nothing from him again.
          </p>
        </section>

        {/* The Gift Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Toad King&apos;s Legacy
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            On Bawu&apos;s birthday, the old woman entrusted the Toad King to him, warning that although it could preserve lives, using it came with a price that could never be undone.
          </p>

          <p className="text-gray-300 leading-relaxed">
            After she passed away, people from Jianghu arrived, pleading for Bawu&apos;s help, telling him that the world was ravaged by frequent wars and was crawling with venomous pests. Moved by their desperation, Bawu left the forest with them and spent a year ridding the villages of the infestations.
          </p>
        </section>

        {/* Betrayal Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Great Betrayal
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            But when he finally returned home, the very people who begged for his aid followed him back, <span className="bg-gold/20 text-gold px-1">demanding that he surrender the Longevity Parasite</span>.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Their betrayal angered the Deer Goddess. All night, rain crashed upon the Deer Foraging Woods. The mountains gave way, the earth cracked apart, springs burst upward, and <span className="bg-gold/20 text-gold px-1">a deep abyss revealed from the dark</span> (the formation of the Gleaming Abyss).
          </p>

          {/* Gleaming Abyss Formation Image */}
          <div className="my-8 rounded-lg overflow-hidden border border-slate-600 max-w-xl mx-auto">
            <Image
              src="/images/World of WWM/The Story of Ba Wu (1).png"
              alt="The formation of the Gleaming Abyss"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <p className="text-gray-300 leading-relaxed">
            Trapped beneath the earth, the villagers had no chance to survive. With no other choice, Bawu planted the Longevity Parasite within them, hoping it would keep them alive until they could one day return to the surface.
          </p>
        </section>

        {/* The Price of Immortality Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Price of Immortality
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            However, as time passed, Bawu felt himself changing. <span className="bg-gold/20 text-gold px-1">Immortality dimmed his emotions, quieted his longing, and hollowed his heart.</span> He didn&apos;t even want to leave the Gleaming Abyss anymore.
          </p>

          {/* The Gleaming Abyss - Underground Realm */}
          <div className="my-8 rounded-lg overflow-hidden border border-slate-600 max-w-xl mx-auto">
            <Image
              src="/images/World of WWM/The Story of Ba Wu (2).png"
              alt="Life in the Gleaming Abyss"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-gold/50 mb-6">
            <p className="text-white text-lg italic text-center">
              &quot;What is the worth of eternal life, if it strips away everything that makes us human?&quot;
            </p>
          </div>
        </section>

        {/* Redemption Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            A Path to Redemption
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Later, the gravely wounded Chen Huaiqing found Bawu under the ravine. He handed him an herbal prescription he developed, which could turn the warped immortals back to normal.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            From then on, Bawu devoted himself to crafting an elixir, wishing to free his people from the poison of longevity and, in doing so, spare future generations from the same fate.
          </p>

          {/* The Depths of the Gleaming Abyss */}
          <div className="my-8 rounded-lg overflow-hidden border border-slate-600 max-w-xl mx-auto">
            <Image
              src="/images/World of WWM/The Story of Ba Wu (4).png"
              alt="Bawu's quest for redemption in the depths"
              width={600}
              height={300}
              className="w-full h-auto"
            />
          </div>

          <p className="text-gray-300 leading-relaxed">
            What befell him afterward remains unknown.
          </p>
        </section>

        {/* Annotations Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel border-b border-slate-600 pb-3">
            Cultural Notes
          </h2>

          <div className="space-y-6">
            {/* Deer Foraging Woods */}
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-xl font-bold mb-3 text-gold flex items-center">
                <span className="mr-2">📍</span> Deer Foraging Woods
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The original name in Chinese is <strong className="text-white">鹿食林 (Lù Shí Lín)</strong>, Lushi Forest. This mystical woodland was believed to be blessed by the Deer Goddess, offering protection and sanctuary to those who dwelled within.
              </p>
            </div>

            {/* Gu Craft */}
            <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
              <h3 className="font-cinzel text-xl font-bold mb-3 text-gold flex items-center">
                <span className="mr-2">🔮</span> Gu (蛊：Gǔ) Craft
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Gu craft is a mysterious form of witchcraft in ancient Chinese legends. It usually refers to the cultivation of poisonous insects (such as snakes, scorpions, centipedes, etc.) to create &quot;Gu&quot; and manipulate it into the human body for the purpose of controlling, cursing, or harming others.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The <strong className="text-white">Longevity Parasite</strong> is a unique type of Gu created for life extension, though as Bawu&apos;s story shows, immortality comes with its own terrible price.
              </p>
            </div>
          </div>
        </section>

        {/* Themes Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Themes & Reflections
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
              <h3 className="text-white font-bold text-lg mb-2">The Burden of Immortality</h3>
              <p className="text-gray-300 leading-relaxed">
                Bawu&apos;s tale explores the paradox of eternal life: while immortality might seem like the ultimate gift, it becomes a curse when it strips away humanity&apos;s most precious qualities—emotion, desire, and connection.
              </p>
            </div>

            <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
              <h3 className="text-white font-bold text-lg mb-2">The Price of Power</h3>
              <p className="text-gray-300 leading-relaxed">
                The Longevity Parasite represents both salvation and damnation. Bawu used it to save lives, yet this same power attracted greed and betrayal, ultimately trapping him and his people in an endless existence beneath the earth.
              </p>
            </div>

            <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
              <h3 className="text-white font-bold text-lg mb-2">Redemption Through Sacrifice</h3>
              <p className="text-gray-300 leading-relaxed">
                Even after losing his humanity to immortality, Bawu dedicated himself to creating a cure—not for himself, but for future generations. His story embodies the noble sacrifice of one who seeks to spare others from his own suffering.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion Quote */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-lg border-2 border-gold">
            <p className="text-white text-xl text-center font-semibold leading-relaxed">
              <span className="text-gold">Priceless but also worthless</span>
            </p>
            <p className="text-gray-300 text-center mt-4 italic">
              The gift of eternal life, when stripped of all that makes life worth living
            </p>
          </div>
        </section>
      </div>

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
