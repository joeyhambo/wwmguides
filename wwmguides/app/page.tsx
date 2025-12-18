"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    { src: "/videos/index1.mp4", title: "Video 1" },
    { src: "/videos/index2.mp4", title: "Video 2" }
  ];

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-slate-800/80"></div>
        </div>

        {/* Content overlay */}
        <div className="relative h-full flex flex-col justify-between py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="text-center">
              <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={{textShadow: '0 10px 40px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.8)'}}>
                Where Winds Meet Guides
              </h1>
              <p className="font-cinzel text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto" style={{textShadow: '0 8px 32px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7)'}}>
                Your ultimate resource for mastering the world of Yan Yun
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/guides/beginner"
                className="font-cinzel bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold hover:text-black transition shadow-lg"
              >
                Beginner Guide
              </Link>
              <Link
                href="/guides"
                className="font-cinzel border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition backdrop-blur-sm bg-black/30"
              >
                Browse All Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Modules */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Module 1: Game Guides - Video Card */}
          <div className="font-cinzel bg-slate-700 border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition relative group flex flex-col">
            {/* Video Section */}
            <div className="relative flex-1 bg-black">
              <video
                key={videos[currentVideo].src}
                controls
                className="w-full h-full object-cover"
                poster="/images/indexbanner1.png"
              >
                <source src={videos[currentVideo].src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Next Video Button */}
              <button
                onClick={nextVideo}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white px-3 py-1.5 rounded text-xs font-medium transition backdrop-blur-sm border border-white/20 hover:border-gold"
              >
                Next Video ({currentVideo + 1}/{videos.length})
              </button>
            </div>

            {/* Text Content Below Video */}
            <div className="p-3">
              <h3 className="font-cinzel text-lg font-bold mb-1 text-white">
                Fun Moments
              </h3>
              <p className="font-cinzel text-gray-400 text-xs mb-1">
                Fun clips from the world of Yan Yun
              </p>
              <Link href="/guides" className="font-cinzel text-gray-300 text-xs font-medium hover:text-gold transition inline-block">
                Watch More →
              </Link>
            </div>
          </div>

          {/* Module 2: Culture & Lore - Wide Card */}
          <div className="font-cinzel bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative group overflow-hidden">
            {/* Bamboo background - positioned on the right, changes opacity on hover */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 opacity-75 group-hover:opacity-25 pointer-events-none transition-opacity duration-300"
              style={{
                backgroundImage: 'url(/images/bamboobg1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: 'cover'
              }}
            />

            <div className="flex gap-6 h-full relative z-10">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="font-cinzel text-2xl font-bold mb-3 text-white">
                  Culture & Lore
                </h3>
                <p className="font-cinzel text-gray-400 mb-4">
                  Learn about Wuxia culture, Chinese martial arts traditions, and historical context.
                </p>
                <ul className="font-cinzel text-sm text-gray-500 space-y-1 mb-4">
                  <li>• What is Wuxia?</li>
                  <li>• What is Jianghu?</li>
                  <li>• Wuxia vs Xianxia</li>
                  <li>• Martial Arts Traditions</li>
                </ul>
                <Link href="/culture" className="font-cinzel mt-auto text-gray-300 text-sm font-medium hover:text-gold transition">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/culture/wuxia" className="font-cinzel group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">What is Wuxia?</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1">
                    Cultural foundation of martial arts genre.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold transition">Learn →</span>
                </Link>

                {/* Second card */}
                <Link href="/culture/jianghu" className="font-cinzel group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">What is Jianghu?</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1">
                    The world of martial artists and outlaws.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold transition">Learn →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Module 3: World of Yan Yun - Wide Card */}
          <div className="font-cinzel bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative group overflow-hidden">
            {/* Bamboo background - positioned on the right, changes opacity on hover */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 opacity-75 group-hover:opacity-25 pointer-events-none transition-opacity duration-300"
              style={{
                backgroundImage: 'url(/images/bamboobg1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: 'cover'
              }}
            />

            <div className="flex gap-6 h-full relative z-10">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
                <div className="text-4xl mb-4">🗺️</div>
                <h3 className="font-cinzel text-2xl font-bold mb-3 text-white">
                  World of Yan Yun
                </h3>
                <p className="font-cinzel text-gray-400 mb-4">
                  Explore the factions, regions, and key characters that shape this epic world.
                </p>
                <ul className="font-cinzel text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Factions Explained</li>
                  <li>• Major Regions</li>
                  <li>• Key Characters</li>
                  <li>• Historical Timeline</li>
                </ul>
                <Link href="/world" className="font-cinzel mt-auto text-gray-300 text-sm font-medium hover:text-gold transition">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/world/meaning-of-wwm" className="font-cinzel group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">The Meaning of WWM</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1">
                    Discover the profound meaning behind '燕云十六声'.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold transition">Read Article →</span>
                </Link>

                {/* Second card */}
                <Link href="/culture/storyline" className="font-cinzel group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">Player Turning into Horse</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1">
                    An in-depth analysis of the player's transformation into a horse in Qinghe's final chapter.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold transition">Read Article →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Module 4: Cultural Items - Wide Card */}
          <div className="font-cinzel bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative group overflow-hidden">
            {/* Bamboo background - positioned on the right, changes opacity on hover */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 opacity-75 group-hover:opacity-25 pointer-events-none transition-opacity duration-300"
              style={{
                backgroundImage: 'url(/images/bamboobg1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right center',
                backgroundSize: 'cover'
              }}
            />

            <div className="flex gap-6 h-full relative z-10">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="font-cinzel text-2xl font-bold mb-3 text-white">
                  Cultural Items
                </h3>
                <p className="font-cinzel text-gray-400 mb-4">
                  Discover traditional items, collectibles, and merchandise inspired by the game.
                </p>
                <ul className="font-cinzel text-sm text-gray-500 space-y-1 mb-4">
                  <li>• Traditional Weapons</li>
                  <li>• Ancient Clothing</li>
                  <li>• Symbols & Patterns</li>
                  <li>• Collectibles</li>
                </ul>
                <Link href="/shop" className="font-cinzel mt-auto text-gray-300 text-sm font-medium hover:text-gold transition">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/shop/weapons" className="font-cinzel group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">Traditional Weapons</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1">
                    Explore authentic replicas and collectibles of traditional Chinese weapons.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold transition">Explore →</span>
                </Link>

                {/* Second card */}
                <Link href="/shop/clothing" className="font-cinzel group flex-1 bg-slate-800 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col">
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">Ancient Clothing</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1">
                    Discover traditional Chinese garments and historical attire.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold transition">Explore →</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="relative bg-slate-700 py-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cinzel text-3xl font-bold text-center mb-12 text-white">Popular Guides</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/guides/beginner" className="font-cinzel group bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold transition">
              <h3 className="font-cinzel text-xl font-bold mb-3 text-white group-hover:text-gold transition">Complete Beginner Guide</h3>
              <p className="font-cinzel text-gray-400 mb-4">
                Everything you need to know to start your journey in Where Winds Meet.
              </p>
              <span className="font-cinzel text-gray-300 font-medium group-hover:text-gold transition">Read Guide →</span>
            </Link>

            <Link href="/guides/combat" className="font-cinzel group bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold transition">
              <h3 className="font-cinzel text-xl font-bold mb-3 text-white group-hover:text-gold transition">Combat System Explained</h3>
              <p className="font-cinzel text-gray-400 mb-4">
                Master the intricate combat mechanics and fighting techniques.
              </p>
              <span className="font-cinzel text-gray-300 font-medium group-hover:text-gold transition">Read Guide →</span>
            </Link>

            <Link href="/culture/wuxia" className="font-cinzel group bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold transition">
              <h3 className="font-cinzel text-xl font-bold mb-3 text-white group-hover:text-gold transition">What is Wuxia?</h3>
              <p className="font-cinzel text-gray-400 mb-4">
                Understand the cultural foundation behind this epic martial arts genre.
              </p>
              <span className="font-cinzel text-gray-300 font-medium group-hover:text-gold transition">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
