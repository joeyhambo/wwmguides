"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface Article {
  title: string;
  description: string;
  href: string;
  category: string;
  tags: string[];
}

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

// Gallery images for Fun Moments
const galleryImages: GalleryImage[] = [
  // Profile images
  { src: "/images/index/funmoments/profile/2.png", alt: "Profile 1", category: "Profile" },
  { src: "/images/index/funmoments/profile/20251226135823.png", alt: "Profile 2", category: "Profile" },
  { src: "/images/index/funmoments/profile/20251226135955.png", alt: "Profile 3", category: "Profile" },
  { src: "/images/index/funmoments/profile/2025825101229.png", alt: "Profile 4", category: "Profile" },
  { src: "/images/index/funmoments/profile/3.png", alt: "Profile 5", category: "Profile" },

  // Landscapes images
  { src: "/images/index/funmoments/landscapes/202571025041.png", alt: "Landscape 1", category: "Landscapes" },
  { src: "/images/index/funmoments/landscapes/202578215328.png", alt: "Landscape 2", category: "Landscapes" },
  { src: "/images/index/funmoments/landscapes/5.png", alt: "Landscape 3", category: "Landscapes" },

  // Portraits images
  { src: "/images/index/funmoments/portraits/1.png", alt: "Portrait 1", category: "Portraits" },
  { src: "/images/index/funmoments/portraits/20251226135717.png", alt: "Portrait 2", category: "Portraits" },
  { src: "/images/index/funmoments/portraits/2025710211523.png", alt: "Portrait 3", category: "Portraits" },
  { src: "/images/index/funmoments/portraits/20258110548.png", alt: "Portrait 4", category: "Portraits" },
  { src: "/images/index/funmoments/portraits/4.jpg", alt: "Portrait 5", category: "Portraits" },

  // Moments images
  { src: "/images/index/funmoments/moments/2025101193824.png", alt: "Moment 1", category: "Moments" },
  { src: "/images/index/funmoments/moments/2025712105459.png", alt: "Moment 2", category: "Moments" },
  { src: "/images/index/funmoments/moments/2025829201531.png", alt: "Moment 3", category: "Moments" },
  { src: "/images/index/funmoments/moments/202558181940.png", alt: "Moment 4", category: "Moments" },
  { src: "/images/index/funmoments/moments/2025730235039.png", alt: "Moment 5", category: "Moments" },
];

const allArticles: Article[] = [
  // Fun Moments
  {
    title: "All Gallery Pictures",
    description: "Browse the complete collection of in-game photography featuring landscapes, portraits, profiles, and memorable moments.",
    href: "/gallery",
    category: "Fun Moments",
    tags: ["All Pictures", "Gallery"]
  },
  {
    title: "Portrait Gallery",
    description: "Stunning character portraits showcasing the detailed facial expressions and character designs of Where Winds Meet.",
    href: "/gallery?category=Portraits",
    category: "Fun Moments",
    tags: ["Portraits", "Gallery"]
  },
  {
    title: "Landscape Collection",
    description: "Breathtaking vistas and scenic views from across the vast world of Yan Yun, captured in their full glory.",
    href: "/gallery?category=Landscapes",
    category: "Fun Moments",
    tags: ["Landscapes", "Gallery"]
  },
  {
    title: "Profile Shots",
    description: "Professional-quality character profile screenshots perfect for avatars and character showcases.",
    href: "/gallery?category=Profile",
    category: "Fun Moments",
    tags: ["Profile", "Gallery"]
  },
  {
    title: "Memorable Moments",
    description: "Epic moments, funny glitches, and unforgettable gameplay experiences captured in-game.",
    href: "/gallery?category=Moments",
    category: "Fun Moments",
    tags: ["Moments", "Gallery"]
  },

  // Culture & Lore
  {
    title: "What is Wuxia?",
    description: "An introduction to the Wuxia genre - the cultural foundation of martial arts stories in Chinese literature and media.",
    href: "/culture/wuxia",
    category: "Culture & Lore",
    tags: ["Cultural Context", "Beginner"]
  },
  {
    title: "What is Jianghu?",
    description: "Understanding the concept of Jianghu - the world of martial artists, outlaws, and wandering heroes.",
    href: "/culture/jianghu",
    category: "Culture & Lore",
    tags: ["Cultural Context", "Philosophy"]
  },

  // World of WWM
  {
    title: "The Meaning of Where Winds Meet",
    description: "Discover the profound meaning behind '燕云十六声' and its connection to history, music, and culture.",
    href: "/world/meaning-of-wwm",
    category: "World of WWM",
    tags: ["World & Terms", "Cultural Deep Dive"]
  },
  {
    title: "To Stop the Blade is True Martial Virtue",
    description: "Explore the philosophical meaning behind 止戈为武 through Big Zhao's memorable question.",
    href: "/world/stop-and-halberd",
    category: "World of WWM",
    tags: ["Life & Culture", "Philosophy"]
  },
  {
    title: "Her Jianghu is too short but so bright",
    description: "A touching story about Ruby's brave sacrifice during the Burning Blissful Retreat, showing how even the briefest flame can shine brightest.",
    href: "/world/her-jianghu",
    category: "World of WWM",
    tags: ["Story & Lore", "Story Analysis"]
  },
  {
    title: "Player Turning into Horse",
    description: "The symbolic significance of the player's transformation into a horse in Qinghe's final chapter.",
    href: "/culture/storyline",
    category: "World of WWM",
    tags: ["Story & Lore", "Symbolism"]
  },

  // Cultural Items
  {
    title: "Traditional Weapons",
    description: "Explore authentic replicas and collectibles of traditional Chinese weapons featured in the game.",
    href: "/shop/weapons",
    category: "Cultural Items",
    tags: ["Weapons", "Collectibles"]
  },
  {
    title: "Ancient Clothing",
    description: "Discover traditional Chinese garments and historical attire inspired by the costumes in Where Winds Meet.",
    href: "/shop/clothing",
    category: "Cultural Items",
    tags: ["Fashion", "Historical"]
  },
];

// Define subcategories for each main category
const subcategories: Record<string, string[]> = {
  "Fun Moments": ["All Pictures", "Profile", "Landscapes", "Portraits", "Moments"],
  "Culture & Lore": ["All Articles", "Cultural Context", "Philosophy", "Story Analysis"],
  "World of WWM": ["All Articles", "World & Terms", "Life & Culture", "Story & Lore"],
  "Cultural Items": ["All Items", "Weapons", "Fashion", "Collectibles"]
};

export default function JourneyPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const categories = ["All Articles", "Fun Moments", "Culture & Lore", "World of WWM", "Cultural Items"];

  // Get current subcategories based on selected category
  const currentSubcategories = selectedCategory !== "All Articles" && subcategories[selectedCategory]
    ? subcategories[selectedCategory]
    : [];

  // Filter articles based on selected category and subcategory
  let filteredArticles = selectedCategory === "All Articles"
    ? allArticles
    : allArticles.filter(article => article.category === selectedCategory);

  // Further filter by subcategory if one is selected
  if (selectedSubcategory && selectedSubcategory !== "All Pictures" && selectedSubcategory !== "All Articles" && selectedSubcategory !== "All Items") {
    filteredArticles = filteredArticles.filter(article =>
      article.tags.some(tag => tag === selectedSubcategory)
    );
  }

  // Filter gallery images based on subcategory for Fun Moments
  let filteredGalleryImages = galleryImages;
  if (selectedSubcategory && selectedSubcategory !== "All Pictures") {
    filteredGalleryImages = galleryImages.filter(img => img.category === selectedSubcategory);
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory when changing main category
  };

  // Check if we should show gallery grid (for Fun Moments)
  const showGalleryGrid = selectedCategory === "Fun Moments";

  return (
    <div className="bg-slate-800 min-h-screen">
      {/* Header - Compact when category is selected */}
      <div className={`bg-gradient-to-b from-slate-900 to-slate-800 transition-all duration-500 ${
        selectedCategory !== "All Articles" ? "py-8" : "py-16"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`font-cinzel font-bold text-white transition-all duration-500 ${
            selectedCategory !== "All Articles" ? "text-4xl md:text-5xl mb-3" : "text-5xl md:text-6xl mb-6"
          }`}>
            Begin Your Journey
          </h1>
          <p className={`text-gray-300 max-w-3xl mx-auto transition-all duration-500 ${
            selectedCategory !== "All Articles" ? "text-base" : "text-xl"
          }`} style={{ fontFamily: 'Crimson Text, serif' }}>
            Explore the rich world of Where Winds Meet through comprehensive guides, cultural insights, stunning galleries, and authentic collectibles.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Category Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-6 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`font-cinzel px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gold text-black shadow-lg"
                  : "bg-slate-700 text-white hover:bg-gold hover:text-black border border-slate-600 hover:border-gold"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Subcategory Filter Tags - Only show when a main category is selected */}
        {currentSubcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {currentSubcategories.map((subcategory) => (
              <button
                key={subcategory}
                onClick={() => setSelectedSubcategory(subcategory)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedSubcategory === subcategory
                    ? "bg-gold/80 text-black"
                    : "bg-slate-600 text-gray-300 hover:bg-gold/60 hover:text-black border border-slate-500 hover:border-gold/60"
                }`}
                style={{ fontFamily: 'Crimson Text, serif' }}
              >
                {subcategory}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid - For Fun Moments */}
        {showGalleryGrid ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredGalleryImages.map((image, index) => (
              <Link
                key={image.src}
                href="/gallery"
                className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden cursor-pointer group border border-slate-600 hover:border-gold transition-all duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </Link>
            ))}
          </div>
        ) : (
          /* Articles Grid - For other categories */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 rounded-lg p-6 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300 group flex flex-col"
              >
                {/* Tags */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <span className="font-cinzel text-xs font-semibold text-gold bg-gold/20 px-3 py-1 rounded-full border border-gold/30">
                    {article.category}
                  </span>
                  {article.tags[0] && (
                    <span className="text-xs font-medium text-gray-400 bg-slate-900/50 px-3 py-1 rounded-full" style={{ fontFamily: 'Crimson Text, serif' }}>
                      {article.tags[0]}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-cinzel text-xl font-bold mb-3 text-white group-hover:text-gold transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 flex-grow leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                  {article.description}
                </p>

                {/* Read More Link */}
                <span className="text-gray-300 font-medium group-hover:text-gold transition-all duration-300 inline-flex items-center" style={{ fontFamily: 'Crimson Text, serif' }}>
                  Read Article
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </Link>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!showGalleryGrid && filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>No articles found in this category.</p>
          </div>
        )}
        {showGalleryGrid && filteredGalleryImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg" style={{ fontFamily: 'Crimson Text, serif' }}>No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
