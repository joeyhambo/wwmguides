"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const funMomentsImages = [
    "/images/index/funmoments/portraits/20251226135717.png",
    "/images/index/funmoments/moments/2025101193824.png",
    "/images/index/funmoments/landscapes/202578215328.png",
    "/images/index/funmoments/portraits/2025710211523.png",
    "/images/index/funmoments/profile/20251226135823.png"
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % funMomentsImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + funMomentsImages.length) % funMomentsImages.length);
  };

  // Auto-play carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % funMomentsImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [funMomentsImages.length]);

  // Add homepage class to body
  useEffect(() => {
    document.body.classList.add('homepage');
    return () => {
      document.body.classList.remove('homepage');
    };
  }, []);

  return (
    <div className="bg-slate-800 relative">
      {/* Hero Banner Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        {/* Banner Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/index/indexbanner3.png"
            alt="Where Winds Meet - Hero riding horse"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 80%' }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-slate-800/60"></div>
        </div>

        {/* Content overlay */}
        <div className="relative h-full flex flex-col justify-between py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            <div className="text-center">
              <h1 className="font-cinzel text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white" style={{textShadow: '0 10px 40px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.8)'}}>
                Where Winds Meet Wander
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 max-w-3xl mx-auto" style={{fontFamily: 'Crimson Text, serif', textShadow: '0 8px 32px rgba(0,0,0,0.9), 0 4px 8px rgba(0,0,0,0.7)'}}>
                Wander through stories carried by the wind & Exploring the lore behind the wandering winds
              </p>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
            <div className="flex flex-wrap justify-start gap-8 pl-12">
              <Link
                href="/gallery/beginner"
                className="group font-cinzel bg-black/40 backdrop-blur-sm text-gold border border-gold font-bold hover:bg-gold/10 hover:shadow-[0_0_20px_rgba(212,175,55,0.6)] hover:scale-105 hover:text-white transition-all duration-300 flex items-center gap-6"
                style={{ padding: '16px 36px', borderRadius: '30px 3px 30px 3px' }}
              >
                <span className="font-cinzel text-xl tracking-widest uppercase transition-colors duration-300">Begin Journey</span>
                <span className="font-cinzel text-xl group-hover:translate-x-1 transition-all duration-300 font-light">→</span>
              </Link>
              <Link
                href="/gallery"
                className="font-cinzel border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:border-gold hover:text-gold transition backdrop-blur-sm bg-black/30"
              >
                Browse All Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content Modules */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Row 1: Videos + Two Article Cards */}
          {/* Module 1: Fun Moments - Image Carousel */}
          <div className="font-cinzel bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition relative group flex flex-col">
            {/* Image Section */}
            <div className="relative bg-black h-[320px]">
              <Image
                src={funMomentsImages[currentImage]}
                alt={`Fun Moment ${currentImage + 1}`}
                fill
                className="object-cover cursor-pointer"
                style={currentImage === 3 ? { objectPosition: 'center 30%' } : undefined}
                priority
                onClick={() => setIsModalOpen(true)}
              />

              {/* Previous Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-gold/20 text-slate-600 hover:text-gold text-2xl font-light w-10 h-10 transition backdrop-blur-sm border border-slate-600 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center"
                style={{ borderRadius: '8px 2px 8px 2px' }}
              >
                ‹
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-gold/20 text-slate-600 hover:text-gold text-2xl font-light w-10 h-10 transition backdrop-blur-sm border border-slate-600 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center"
                style={{ borderRadius: '8px 2px 8px 2px' }}
              >
                ›
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 z-10 bg-black/60 text-white px-3 py-1.5 rounded text-xs font-medium backdrop-blur-sm border border-white/20">
                {currentImage + 1}/{funMomentsImages.length}
              </div>
            </div>

            {/* Text Content Below Video */}
            <div className="p-3 relative overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: 'url(/images/index/huawen1.png)',
                  backgroundRepeat: 'repeat-x',
                  backgroundPosition: 'left center',
                  backgroundSize: 'auto 250%'
                }}
              />

              <h3 className="font-cinzel text-lg font-bold mb-1 text-white relative z-10">
                Fun Moments
              </h3>
              <p className="font-cinzel text-gray-400 text-xs mb-1 relative z-10">
                Fun clips from the world of Yan Yun
              </p>
              <Link href="/gallery" className="font-cinzel text-gray-300 text-xs font-medium hover:text-gold transition inline-block hover:translate-x-1 relative z-10">
                View More →
              </Link>
            </div>
          </div>

          {/* Interesting Posts Section */}
          <div className="flex flex-col h-full">
            {/* Section Title - Centered */}
            <h3 className="font-cinzel text-3xl font-bold mb-4 text-white text-center">Interesting Posts</h3>

            {/* Two Article Cards - Stacked with gap, flex-1 to match left card height */}
            <div className="flex flex-col gap-4 flex-1">
              {/* Article Card 1 */}
              <Link href="/world/stop-and-halberd" className="group border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition flex flex-row flex-1">
                <div className="relative w-36 h-full flex-shrink-0">
                  <Image
                    src="/images/index/indexbanner2.jpg"
                    alt="To Stop the Blade is True Martial Virtue"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-b from-slate-600 to-slate-700 p-4 flex-1 flex flex-col">
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">To Stop the Blade is True Martial Virtue</h4>
                  <p className="font-cinzel text-gray-300 text-sm flex-1">Explore the philosophy behind 止戈为武 through Big Zhao's question.</p>
                  <span className="font-cinzel text-gray-300 text-sm font-medium group-hover:text-gold group-hover:translate-x-1 transition">Read More →</span>
                </div>
              </Link>

              {/* Article Card 2 */}
              <Link href="/world/her-jianghu" className="group border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition flex flex-row flex-1">
                <div className="relative w-36 h-full flex-shrink-0">
                  <Image
                    src="/images/World of WWM/Her Jianghu is too short but so bright (2).png"
                    alt="Ruby's Bright Flame"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gradient-to-b from-slate-600 to-slate-700 p-4 flex-1 flex flex-col">
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">Ruby's Bright Flame</h4>
                  <p className="font-cinzel text-gray-300 text-sm flex-1">Her Jianghu was brief, but her courage burned bright.</p>
                  <span className="font-cinzel text-gray-300 text-sm font-medium group-hover:text-gold group-hover:translate-x-1 transition">Read More →</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Row 2: Two Article Cards + Culture & Lore */}
          {/* Two Article Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Article Card 3 */}
            <Link href="/culture/wuxia" className="group border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/images/index/meihua1.png"
                  alt="What is Wuxia"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-slate-600 to-slate-700 p-4 flex-1 flex flex-col">
                <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">What is Wuxia?</h4>
                <p className="font-cinzel text-gray-300 text-sm flex-1">Cultural foundation of martial arts genre.</p>
                <span className="font-cinzel text-gray-300 text-sm font-medium group-hover:text-gold group-hover:translate-x-1 transition mt-2">Read More →</span>
              </div>
            </Link>

            {/* Article Card 4 */}
            <Link href="/culture/jianghu" className="group border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/images/index/lanhua1.png"
                  alt="What is Jianghu"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-slate-600 to-slate-700 p-4 flex-1 flex flex-col">
                <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">What is Jianghu?</h4>
                <p className="font-cinzel text-gray-300 text-sm flex-1">The world of martial artists and outlaws.</p>
                <span className="font-cinzel text-gray-300 text-sm font-medium group-hover:text-gold group-hover:translate-x-1 transition mt-2">Read More →</span>
              </div>
            </Link>
          </div>

          {/* Module 2: Culture & Lore - Wide Card */}
          <div className="font-cinzel bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative">
            <div className="flex gap-6 h-full">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
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
                <Link href="/culture" className="font-cinzel mt-auto text-gray-300 text-sm font-medium hover:text-gold hover:translate-x-1 transition inline-block">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/culture/wuxia" className="font-cinzel group flex-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col relative overflow-hidden">
                  <div
                    className="absolute right-0 top-0 bottom-0 w-full opacity-70 group-hover:opacity-50 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage: 'url(/images/index/meihua1.png)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                      backgroundSize: 'contain'
                    }}
                  />
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition relative z-10">What is Wuxia?</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1 relative z-10">
                    Cultural foundation of martial arts genre.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold group-hover:translate-x-1 transition relative z-10">Learn →</span>
                </Link>

                {/* Second card */}
                <Link href="/culture/jianghu" className="font-cinzel group flex-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col relative overflow-hidden">
                  <div
                    className="absolute right-0 bottom-0 w-32 h-32 opacity-70 group-hover:opacity-50 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage: 'url(/images/index/lanhua1.png)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right bottom',
                      backgroundSize: 'contain'
                    }}
                  />
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition relative z-10">What is Jianghu?</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1 relative z-10">
                    The world of martial artists and outlaws.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold group-hover:translate-x-1 transition relative z-10">Learn →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Row 3: World of WWM + Two Article Cards */}
          {/* Module 3: World of WWM - Wide Card */}
          <div className="font-cinzel bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative">
            <div className="flex gap-6 h-full">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-cinzel text-2xl font-bold mb-3 text-white">
                  World of WWM
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
                <Link href="/world" className="font-cinzel mt-auto text-gray-300 text-sm font-medium hover:text-gold hover:translate-x-1 transition inline-block">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/world/meaning-of-wwm" className="font-cinzel group flex-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col relative overflow-hidden">
                  <div
                    className="absolute right-0 bottom-0 w-32 h-32 opacity-70 group-hover:opacity-50 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage: 'url(/images/index/bamboobg2.png)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right bottom',
                      backgroundSize: 'contain'
                    }}
                  />
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition relative z-10">The Meaning of WWM</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1 relative z-10">
                    Discover the profound meaning behind '燕云十六声'.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold group-hover:translate-x-1 transition relative z-10">Read Article →</span>
                </Link>

                {/* Second card */}
                <Link href="/culture/storyline" className="font-cinzel group flex-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col relative overflow-hidden">
                  <div
                    className="absolute right-0 top-0 bottom-0 w-full opacity-70 group-hover:opacity-50 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage: 'url(/images/index/juhua1.png)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                      backgroundSize: 'contain'
                    }}
                  />
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition relative z-10">Player Turning into Horse</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1 relative z-10">
                    Player's transformation in Qinghe's finale.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold group-hover:translate-x-1 transition relative z-10">Read Article →</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Two Article Cards for World */}
          <div className="grid grid-cols-2 gap-4">
            {/* Article Card 5 */}
            <Link href="/world/meaning-of-wwm" className="group border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/images/World of WWM/The Meaning of Where Winds Meet 3.jpg"
                  alt="The Meaning of WWM"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-slate-600 to-slate-700 p-4 flex-1 flex flex-col">
                <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">The Meaning of WWM</h4>
                <p className="font-cinzel text-gray-300 text-sm flex-1">Discover the profound meaning behind '燕云十六声'.</p>
                <span className="font-cinzel text-gray-300 text-sm font-medium group-hover:text-gold group-hover:translate-x-1 transition mt-2">Read More →</span>
              </div>
            </Link>

            {/* Article Card 6 */}
            <Link href="/culture/storyline" className="group border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/images/index/juhua1.png"
                  alt="Player Turning into Horse"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-slate-600 to-slate-700 p-4 flex-1 flex flex-col">
                <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">Player Turning into Horse</h4>
                <p className="font-cinzel text-gray-300 text-sm flex-1">Player's transformation in Qinghe's finale.</p>
                <span className="font-cinzel text-gray-300 text-sm font-medium group-hover:text-gold group-hover:translate-x-1 transition mt-2">Read More →</span>
              </div>
            </Link>
          </div>

          {/* Row 4: Two Article Cards + Cultural Items */}
          {/* Two Article Cards for Cultural Items */}
          <div className="grid grid-cols-2 gap-4">
            {/* Article Card 7 */}
            <Link href="/shop/weapons" className="group border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/images/index/yupei1.png"
                  alt="Traditional Weapons"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-slate-600 to-slate-700 p-4 flex-1 flex flex-col">
                <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">Traditional Weapons</h4>
                <p className="font-cinzel text-gray-300 text-sm flex-1">Explore authentic replicas of traditional Chinese weapons.</p>
                <span className="font-cinzel text-gray-300 text-sm font-medium group-hover:text-gold group-hover:translate-x-1 transition mt-2">Read More →</span>
              </div>
            </Link>

            {/* Article Card 8 */}
            <Link href="/shop/clothing" className="group border border-slate-600 rounded-lg overflow-hidden hover:border-gold transition flex flex-col">
              <div className="relative h-48">
                <Image
                  src="/images/index/zhuziqiang1.png"
                  alt="Ancient Clothing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-slate-600 to-slate-700 p-4 flex-1 flex flex-col">
                <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition">Ancient Clothing</h4>
                <p className="font-cinzel text-gray-300 text-sm flex-1">Discover traditional Chinese garments and historical attire.</p>
                <span className="font-cinzel text-gray-300 text-sm font-medium group-hover:text-gold group-hover:translate-x-1 transition mt-2">Read More →</span>
              </div>
            </Link>
          </div>

          {/* Module 4: Cultural Items - Wide Card */}
          <div className="font-cinzel bg-gradient-to-r from-slate-900 to-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold transition relative">
            <div className="flex gap-6 h-full">
              {/* Left side - Main content */}
              <div className="flex-1 flex flex-col">
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
                <Link href="/shop" className="font-cinzel mt-auto text-gray-300 text-sm font-medium hover:text-gold hover:translate-x-1 transition inline-block">
                  Read More →
                </Link>
              </div>

              {/* Right side - Two small cards */}
              <div className="flex-1 flex flex-col gap-4">
                {/* First card */}
                <Link href="/shop/weapons" className="font-cinzel group flex-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col relative overflow-hidden">
                  <div
                    className="absolute right-0 top-0 bottom-0 w-full opacity-70 group-hover:opacity-50 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage: 'url(/images/index/yupei1.png)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                      backgroundSize: 'contain'
                    }}
                  />
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition relative z-10">Traditional Weapons</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1 relative z-10">
                    Explore authentic replicas and collectibles of traditional Chinese weapons.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold group-hover:translate-x-1 transition relative z-10">Explore →</span>
                </Link>

                {/* Second card */}
                <Link href="/shop/clothing" className="font-cinzel group flex-1 bg-gradient-to-r from-slate-700 to-slate-900 border border-slate-600 rounded-lg p-4 hover:border-gold transition flex flex-col relative overflow-hidden">
                  <div
                    className="absolute right-0 top-0 bottom-0 w-full opacity-70 group-hover:opacity-50 pointer-events-none transition-opacity duration-300"
                    style={{
                      backgroundImage: 'url(/images/index/zhuziqiang1.png)',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                      backgroundSize: 'contain'
                    }}
                  />
                  <h4 className="font-cinzel text-base font-bold mb-2 text-white group-hover:text-gold transition relative z-10">Ancient Clothing</h4>
                  <p className="font-cinzel text-gray-400 text-xs mb-2 flex-1 relative z-10">
                    Discover traditional Chinese garments and historical attire.
                  </p>
                  <span className="font-cinzel text-gray-300 text-xs font-medium group-hover:text-gold group-hover:translate-x-1 transition relative z-10">Explore →</span>
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
            <Link href="/gallery/beginner" className="font-cinzel group bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold transition">
              <h3 className="font-cinzel text-xl font-bold mb-3 text-white group-hover:text-gold transition">Complete Beginner Guide</h3>
              <p className="font-cinzel text-gray-400 mb-4">
                Everything you need to know to start your journey in Where Winds Meet.
              </p>
              <span className="font-cinzel text-gray-300 font-medium group-hover:text-gold transition">Read Guide →</span>
            </Link>

            <Link href="/gallery/combat" className="font-cinzel group bg-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold transition">
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
              <span className="font-cinzel text-gray-300 font-medium group-hover:text-gold group-hover:translate-x-1 transition">Learn More →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-gold/20 text-white hover:text-gold text-3xl font-light w-12 h-12 transition backdrop-blur-sm border border-slate-600 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center"
              style={{ borderRadius: '8px 2px 8px 2px' }}
            >
              ×
            </button>

            {/* Modal Image */}
            <div className="relative w-full h-full" onClick={(e) => e.stopPropagation()}>
              <Image
                src={funMomentsImages[currentImage]}
                alt={`Fun Moment ${currentImage + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-gold/20 text-slate-600 hover:text-gold text-3xl font-light w-14 h-14 transition backdrop-blur-sm border border-slate-600 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center"
              style={{ borderRadius: '8px 2px 8px 2px' }}
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 hover:bg-gold/20 text-slate-600 hover:text-gold text-3xl font-light w-14 h-14 transition backdrop-blur-sm border border-slate-600 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center"
              style={{ borderRadius: '8px 2px 8px 2px' }}
            >
              ›
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-8 right-8 z-10 bg-black/60 text-white px-4 py-2 rounded text-sm font-medium backdrop-blur-sm border border-white/20">
              {currentImage + 1}/{funMomentsImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
