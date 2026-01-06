import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Sundial and the Twelve-Shichen Timekeeping System - WWM Guides",
  description: "Discover the ancient Chinese sundial and the Twelve-Shichen timekeeping system used in Where Winds Meet, exploring the fascinating history of traditional Chinese time measurement.",
  keywords: "Where Winds Meet, sundial, 日晷, Twelve-Shichen, 十二时辰, Chinese timekeeping, traditional culture, time system, Chinese zodiac",
};

export default function SundialTimekeepingPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8 text-sm text-gray-400">
        <Link href="/" className="hover:text-gold transition-colors">
          Home
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/culture" className="hover:text-gold transition-colors">
          Culture & Lore
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-300">Life & Culture</span>
      </nav>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          The Sundial and the Twelve-Shichen Timekeeping System
        </h1>

        {/* Article Meta Information */}
        <div className="bg-slate-700/80 border border-slate-600 rounded-lg p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-400">Author:</span>
              <span className="text-white ml-2">Mint</span>
            </div>
            <div>
              <span className="text-gray-400">Translator:</span>
              <span className="text-white ml-2">冰镇绿豆汤</span>
            </div>
            <div>
              <span className="text-gray-400">Reviewer:</span>
              <span className="text-white ml-2">小歪</span>
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
      </header>

      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none">
        {/* Introduction Section */}
        <section className="mb-12">
          <p className="text-gray-300 leading-relaxed mb-6">
            When playing WWM, players often encounter many tasks that require adjusting the time to complete them more quickly. When adjusting the time, you may have noticed that the interface doesn&apos;t seem to show a regular clock. The illuminated circles that represent time aren&apos;t numbers either; they are twelve animals. This is what we&apos;re going to introduce today: the <span className="text-gold font-semibold">Twelve-Shichen (hour) timekeeping system (&quot;十二时辰计时法&quot;)</span> that originated in ancient China, as well as the most accurate type of <span className="text-gold font-semibold">sundial (&quot;日晷&quot;, pronounced as &quot;rì guǐ&quot;)</span> that also originated locally in China.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            Imagine standing outdoors on a sunny day, watching your shadow lengthen, shorten, and change direction as the sun moves. Ancient Chinese scientists drew inspiration from this simple natural phenomenon and invented the sundial.
          </p>

          <div className="my-8 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-slate-600 max-w-2xl">
              <Image
                src="/images/Culture & Lore/The Sundial and the Twelve-Shichen Timekeeping System (6).png"
                alt="In-game sundial timekeeping interface in Where Winds Meet"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Sundial Structure Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Structure of a Sundial
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            The sundial (you can also call it a &quot;sun clock&quot;) has a very simple core structure:
          </p>

          <ul className="list-none space-y-3 text-gray-300 mb-8">
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Dial plate:</strong> A circular stone or bronze plate marked with graduations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><strong className="text-white">Gnomon:</strong> A metal rod standing at the center of the dial plate.</span>
            </li>
          </ul>

          <p className="text-gray-300 leading-relaxed mb-6">
            Here is a modern sundial:
          </p>

          <div className="my-8 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-slate-600 max-w-2xl">
              <Image
                src="/images/Culture & Lore/The Sundial and the Twelve-Shichen Timekeeping System (1).png"
                alt="A modern sundial showing the dial plate and gnomon"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            The following is the <strong className="text-white">Togtoh Sundial</strong> (unearthed in Togtoh, Inner Mongolia, China), an astronomical instrument unearthed in 1897 and dating back to China&apos;s Han Dynasty (202 BC–AD 220). It is also the only fully preserved example of a Han Dynasty sundial known to exist today.
          </p>

          <div className="my-8 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-slate-600 max-w-2xl">
              <Image
                src="/images/Culture & Lore/The Sundial and the Twelve-Shichen Timekeeping System (2).png"
                alt="The Togtoh Sundial from Han Dynasty (202 BC–AD 220)"
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            When adjusting the time in the game, we&apos;ll notice that the light in the upper-left corner changes colour depending on whether it is early or late in the day. What about the white area in the center of the sundial? The answer is—this area represents the space traced out by the movement of the gnomon&apos;s shadow as time passes.
          </p>
        </section>

        {/* How Sundials Work Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            How a Sundial Works
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            The working principle of a sundial is just like the shadow you see cast by your own body. As the sun rises in the east and sets in the west, the gnomon casts a shadow onto the dial plate. As the sun moves, the shadow moves across the dial evenly. The markings on the dial correspond to different times of the day. By observing the position of the shadow relative to the specific markings, people could read the time. This perfectly reflects the ancient Chinese philosophical idea of <span className="text-gold font-semibold">&quot;observing celestial phenomena to determine the time&quot; (&quot;观象授时&quot;)</span>.
          </p>

          <div className="bg-slate-800/30 border-l-4 border-gold p-6 mb-8 rounded-r-lg">
            <p className="text-white text-lg mb-4">
              <strong>A Sundial&apos;s Precise Positioning</strong>
            </p>
            <p className="text-gray-300 leading-relaxed">
              Interestingly, a sundial does not function simply by being placed flat on the ground. Its gnomon must be aligned parallel to Earth&apos;s rotational axis, i.e., it must point toward the Polaris. Therefore, in China, the sundial&apos;s dial plate is constructed parallel to the celestial equator, with its tilt angle equal to the local latitude. Only in this position can the gnomon&apos;s shadow move nearly uniformly across the dial as the sun moves steadily across the sky, allowing the hour markings to be evenly divided.
            </p>
          </div>

          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
            <p className="text-yellow-400 font-semibold mb-3">⚠️ Special Reminder:</p>
            <p className="text-gray-300 leading-relaxed">
              A sundial must be precisely designed and oriented according to the latitude of its location, and it can only function during sunny daylight hours. On cloudy days, rainy days, or at night, it&apos;s &quot;off duty&quot;. Hence people in ancient times relied on additional timekeeping devices such as water clocks and incense clocks.
            </p>
          </div>
        </section>

        {/* Twelve-Shichen System Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            The Twelve-Shichen Timekeeping System
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Next, let&apos;s introduce the Twelve-Shichen timekeeping system that is closely related to the sundial.
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="rounded-lg overflow-hidden border border-slate-600">
              <Image
                src="/images/Culture & Lore/The Sundial and the Twelve-Shichen Timekeeping System (3).png"
                alt="Time display interface for Chinese players"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <p className="bg-slate-700 p-3 text-gray-300 text-sm text-center">
                Chinese Version
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-600">
              <Image
                src="/images/Culture & Lore/The Sundial and the Twelve-Shichen Timekeeping System (4).png"
                alt="Time display interface for overseas players"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <p className="bg-slate-700 p-3 text-gray-300 text-sm text-center">
                Overseas Version
              </p>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            The two images above show the time-display interface for Chinese players and overseas players respectively. By comparing them, we can see that the circle pointed to by the gnomon&apos;s shadow in the Chinese version does not contain an animal icon, and the Chinese character shown there does not translate directly to &quot;rabbit&quot;. This is related to China&apos;s traditional Twelve-Shichen time system.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            In ancient China, a full day (24 hours) was divided evenly into twelve segments, each called a <span className="text-gold font-semibold">&quot;Shíchen&quot; (&quot;时辰&quot;)</span>. One shichen corresponds to two modern hours. This system had taken shape no later than the Han Dynasty and continued to be used until the end of the Qing Dynasty.
          </p>

          <div className="bg-slate-800/50 p-6 rounded-lg border border-gold/50 mb-6">
            <p className="text-white text-lg font-semibold text-center">
              1 Shíchen (时辰) = 2 Modern Hours
            </p>
          </div>
        </section>

        {/* Earthly Branches and Zodiac Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Earthly Branches and the Chinese Zodiac
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            These twelve shichens are named using the <strong className="text-white">Earthly Branches</strong>: <span className="text-gold font-semibold">&quot;Zi, Chou, Yin, Mao, Chen, Si, Wu, Wei, Shen, You, Xu, Hai&quot;</span> (in the image, the &quot;rabbit&quot; represents the fourth branch, Mao, which is why the label reads &quot;Mao&quot;). This is an ancient Chinese system that includes the twelve zodiac animals. Each year, each shíchen, and even each direction corresponds to one of these animals (such as the rat, horse, or rabbit), similar in concept to the twelve Western zodiac signs. Most of these pairings come from the observations ancient farmers made about nature and daily life:
          </p>

          <div className="my-8 flex justify-center">
            <div className="rounded-lg overflow-hidden border border-slate-600">
              <Image
                src="/images/Culture & Lore/The Sundial and the Twelve-Shichen Timekeeping System (5).png"
                alt="The Twelve Earthly Branches with their corresponding zodiac animals and time periods"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed mb-6">
            The Twelve-Shichen time system were not only used for timekeeping but also became deeply integrated into traditional Chinese medicine, martial arts, and cultural customs. For example, traditional Chinese medicine holds that different meridians of the human body become active at different times of the day.
          </p>
        </section>

        {/* Connecting Sundial and Twelve-Shichen Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 font-cinzel">
            Connecting the Sundial with the Twelve-Shichen System
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            Now, let&apos;s connect the sundial with the Twelve-Shichen system!
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            On a typical sundial, the dial plate is marked with the twelve shichens. When the gnomon&apos;s shadow points to the region labeled <span className="text-gold font-semibold">&quot;Wu&quot;</span>, it indicates that the time is between 11 a.m. and 1 p.m. Each shichen is further subdivided on the dial, and by observing the precise position of the shadow, one can determine even more specific moments. For instance:
          </p>

          <ul className="list-none space-y-3 text-gray-300 mb-8">
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><span className="text-gold font-semibold">&quot;Wu Chu&quot; (&quot;午初&quot;)</span> - the beginning of Wu, around 11:00 AM</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3">•</span>
              <span><span className="text-gold font-semibold">&quot;Wu Zheng&quot; (&quot;午正&quot;)</span> - mid-Wu, around 12:00 PM</span>
            </li>
          </ul>

          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-lg border-2 border-gold">
            <p className="text-white text-lg text-center mb-2">
              <strong>In the Game:</strong>
            </p>
            <p className="text-gray-300 text-center leading-relaxed">
              In order to make it easier for players around the world to read the time, the developers also added a <span className="text-gold font-semibold">24-hour scale</span> on the innermost ring of the sundial.
            </p>
          </div>
        </section>

        {/* Conclusion Section */}
        <section className="mb-12">
          <div className="bg-slate-800/30 border-l-4 border-gold p-6 rounded-r-lg">
            <p className="text-white text-lg">
              And that concludes today&apos;s introduction to the sundial and the Twelve-Shichen timekeeping system.
            </p>
          </div>
        </section>
      </div>

      {/* Back Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-700">
        <Link
          href="/culture"
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
          Back to Culture & Lore
        </Link>
      </div>
    </article>
  );
}
