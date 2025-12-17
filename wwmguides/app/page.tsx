import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-800 relative">
      {/* Hero Banner Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/indexbanner1.png"
            alt="Where Winds Meet - Hero riding horse"
            fill
            priority
            className="object-cover object-center"
            style={{ objectPosition: 'center' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-slate-800/90"></div>
        </div>

        {/* Content overlay */}
        <div className="relative h-full flex flex-col justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white drop-shadow-lg">
                Where Winds Meet Guides
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto drop-shadow-md">
                Your ultimate resource for mastering the world of Yan Yun
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/guides/beginner"
                  className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition shadow-lg"
                >
                  Beginner Guide
                </Link>
                <Link
                  href="/guides"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition backdrop-blur-sm bg-black/30"
                >
                  Browse All Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Modules */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Module 1: Game Guides - Wide Card */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative group">
            <div className="flex gap-6 h-full">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
                <div className="text-4xl mb-4">⚔️</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Game Guides
                </h3>
                <p className="text-gray-400 mb-4">
                  Complete walkthroughs, combat tips, character builds, and strategies to master the game.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Beginner Guide</li>
                  <li>• Combat System</li>
                  <li>• Weapon Mastery</li>
                  <li>• Skills & Abilities</li>
                </ul>
                <Link href="/guides" className="mt-auto text-gray-300 text-sm font-medium hover:text-gold transition">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/guides/beginner" className="group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="text-base font-bold mb-2 text-white group-hover:text-gold transition">Complete Beginner Guide</h4>
                  <p className="text-gray-400 text-xs mb-2 flex-1">
                    Everything you need to know to start your journey in Where Winds Meet.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Read Guide →</span>
                </Link>

                {/* Second card */}
                <Link href="/guides/combat" className="group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="text-base font-bold mb-2 text-white group-hover:text-gold transition">Combat System</h4>
                  <p className="text-gray-400 text-xs mb-2 flex-1">
                    Master the intricate combat mechanics and fighting techniques.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Read Guide →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Module 2: Culture & Lore - Wide Card */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative group">
            <div className="flex gap-6 h-full">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Culture & Lore
                </h3>
                <p className="text-gray-400 mb-4">
                  Learn about Wuxia culture, Chinese martial arts traditions, and historical context.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• What is Wuxia?</li>
                  <li>• What is Jianghu?</li>
                  <li>• Wuxia vs Xianxia</li>
                  <li>• Martial Arts Traditions</li>
                </ul>
                <Link href="/culture" className="mt-auto text-gray-300 text-sm font-medium hover:text-gold transition">
                  Read More →
                </Link>
              </div>

              {/* Right side - Four small cards vertically stacked */}
              <div className="flex-1 flex flex-col gap-2">
                {/* First card */}
                <Link href="/culture/wuxia" className="group bg-slate-800 border border-slate-600 rounded-lg p-3 hover:border-gold transition flex flex-col">
                  <h4 className="text-sm font-bold mb-1 text-white group-hover:text-gold transition">What is Wuxia?</h4>
                  <p className="text-gray-400 text-xs mb-1 flex-1">
                    Cultural foundation of martial arts genre.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Learn →</span>
                </Link>

                {/* Second card */}
                <Link href="/culture/jianghu" className="group bg-slate-800 border border-slate-600 rounded-lg p-3 hover:border-gold transition flex flex-col">
                  <h4 className="text-sm font-bold mb-1 text-white group-hover:text-gold transition">What is Jianghu?</h4>
                  <p className="text-gray-400 text-xs mb-1 flex-1">
                    The world of martial artists and outlaws.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Learn →</span>
                </Link>

                {/* Third card */}
                <Link href="/culture/wuxia-vs-xianxia" className="group bg-slate-800 border border-slate-600 rounded-lg p-3 hover:border-gold transition flex flex-col">
                  <h4 className="text-sm font-bold mb-1 text-white group-hover:text-gold transition">Wuxia vs Xianxia</h4>
                  <p className="text-gray-400 text-xs mb-1 flex-1">
                    Understanding the key differences.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Learn →</span>
                </Link>

                {/* Fourth card */}
                <Link href="/culture/martial-arts" className="group bg-slate-800 border border-slate-600 rounded-lg p-3 hover:border-gold transition flex flex-col">
                  <h4 className="text-sm font-bold mb-1 text-white group-hover:text-gold transition">Martial Arts</h4>
                  <p className="text-gray-400 text-xs mb-1 flex-1">
                    Traditional Chinese combat styles.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Learn →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Module 3: World of Yan Yun - Wide Card */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative group">
            <div className="flex gap-6 h-full">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  World of Yan Yun
                </h3>
                <p className="text-gray-400 mb-4">
                  Explore the factions, regions, and key characters that shape this epic world.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Factions Explained</li>
                  <li>• Major Regions</li>
                  <li>• Key Characters</li>
                  <li>• Historical Timeline</li>
                </ul>
                <Link href="/world" className="mt-auto text-gray-300 text-sm font-medium hover:text-gold transition">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/world/meaning-of-wwm" className="group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="text-base font-bold mb-2 text-white group-hover:text-gold transition">The Meaning of WWM</h4>
                  <p className="text-gray-400 text-xs mb-2 flex-1">
                    Discover the profound meaning behind '燕云十六声'.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Read Article →</span>
                </Link>

                {/* Second card */}
                <Link href="/culture/storyline" className="group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="text-base font-bold mb-2 text-white group-hover:text-gold transition">Player Turning into Horse</h4>
                  <p className="text-gray-400 text-xs mb-2 flex-1">
                    An in-depth analysis of the player's transformation into a horse in Qinghe's final chapter.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Read Article →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Module 4: Cultural Items - Wide Card */}
          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative group">
            <div className="flex gap-6 h-full">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  Cultural Items
                </h3>
                <p className="text-gray-400 mb-4">
                  Discover traditional items, collectibles, and merchandise inspired by the game.
                </p>
                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Traditional Weapons</li>
                  <li>• Ancient Clothing</li>
                  <li>• Symbols & Patterns</li>
                  <li>• Collectibles</li>
                </ul>
                <Link href="/shop" className="mt-auto text-gray-300 text-sm font-medium hover:text-gold transition">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/shop/weapons" className="group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="text-base font-bold mb-2 text-white group-hover:text-gold transition">Traditional Weapons</h4>
                  <p className="text-gray-400 text-xs mb-2 flex-1">
                    Explore authentic replicas and collectibles of traditional Chinese weapons.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Explore →</span>
                </Link>

                {/* Second card */}
                <Link href="/shop/clothing" className="group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="text-base font-bold mb-2 text-white group-hover:text-gold transition">Ancient Clothing</h4>
                  <p className="text-gray-400 text-xs mb-2 flex-1">
                    Discover traditional Chinese garments and historical attire.
                  </p>
                  <span className="text-gray-300 text-xs font-medium group-hover:text-gold transition">Explore →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="relative bg-slate-700 py-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Popular Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/guides/beginner" className="group bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold transition">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition">Complete Beginner Guide</h3>
              <p className="text-gray-400 mb-4">
                Everything you need to know to start your journey in Where Winds Meet.
              </p>
              <span className="text-gray-300 font-medium group-hover:text-gold transition">Read Guide →</span>
            </Link>

            <Link href="/guides/combat" className="group bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold transition">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition">Combat System Explained</h3>
              <p className="text-gray-400 mb-4">
                Master the intricate combat mechanics and fighting techniques.
              </p>
              <span className="text-gray-300 font-medium group-hover:text-gold transition">Read Guide →</span>
            </Link>

            <Link href="/culture/wuxia" className="group bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold transition">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition">What is Wuxia?</h3>
              <p className="text-gray-400 mb-4">
                Understand the cultural foundation behind this epic martial arts genre.
              </p>
              <span className="text-gray-300 font-medium group-hover:text-gold transition">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
