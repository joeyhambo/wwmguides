"use client";

import Link from "next/link";
import { useState } from "react";

const cultureArticles = [
  // World & Terms
  {
    title: "The Meaning of Where Winds Meet",
    description: "Discover the profound meaning behind the game's Chinese name '燕云十六声' and its connection to history, music, and culture.",
    href: "/world/meaning-of-wwm",
    category: "World & Terms",
    difficulty: "Cultural Deep Dive",
  },
  // Story & Lore
  {
    title: "The Meaning of the Player Turning into a Horse in the Final Chapter of Qinghe",
    description: "An in-depth analysis of the symbolic significance of the player's transformation into a horse in Qinghe's final chapter.",
    href: "/culture/storyline",
    category: "Story & Lore",
    difficulty: "Analysis",
  },
];

export default function WorldPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Articles");

  const categories = ["All Articles", "World & Terms", "History", "Life & Culture", "Story & Lore"];

  const filteredArticles = selectedCategory === "All Articles"
    ? cultureArticles
    : cultureArticles.filter(article => article.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">World of Yan Yun</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Discover the rich world of Where Winds Meet. Explore factions, regions, characters, and the historical events that shaped Yan Yun.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedCategory === category
                ? "bg-gold text-black"
                : "bg-slate-700 text-white hover:bg-gold hover:text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold hover:shadow-xl transition group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-gold bg-gold/20 px-2 py-1 rounded">
                {article.category}
              </span>
              <span className="text-xs font-medium text-gray-400">
                {article.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition">
              {article.title}
            </h3>
            <p className="text-gray-300 mb-4">
              {article.description}
            </p>
            <span className="text-gray-300 font-medium group-hover:text-gold transition">
              Read Article →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
