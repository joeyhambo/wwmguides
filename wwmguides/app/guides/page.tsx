'use client';

import Link from "next/link";
import { useState } from "react";

const guides = [
  {
    title: "Complete Beginner Guide",
    description: "Everything you need to know to start your journey in Where Winds Meet. Character creation, basic mechanics, and early game tips.",
    href: "/guides/beginner",
    category: "Getting Started",
    difficulty: "Beginner",
  },
  {
    title: "Combat System Explained",
    description: "Master the intricate combat mechanics. Learn about stances, combos, parrying, and advanced fighting techniques.",
    href: "/guides/combat",
    category: "Combat",
    difficulty: "Intermediate",
  },
  {
    title: "Weapon Types & Mastery",
    description: "Detailed breakdown of all weapon types, their strengths, weaknesses, and how to master each fighting style.",
    href: "/guides/weapons",
    category: "Combat",
    difficulty: "Intermediate",
  },
  {
    title: "Skills & Abilities Guide",
    description: "Complete guide to skills, abilities, and talent trees. Build the perfect character for your playstyle.",
    href: "/guides/skills",
    category: "Character Build",
    difficulty: "Advanced",
  },
  {
    title: "Early Game Tips & Tricks",
    description: "Quick tips to help you progress faster in the early game. Avoid common mistakes and optimize your gameplay.",
    href: "/guides/early-game",
    category: "Getting Started",
    difficulty: "Beginner",
  },
  {
    title: "Crafting & Gear System",
    description: "Learn how to craft powerful equipment, upgrade gear, and optimize your character's equipment loadout.",
    href: "/guides/crafting",
    category: "Progression",
    difficulty: "Intermediate",
  },
  {
    title: "Character Progression Guide",
    description: "Complete guide to character progression, leveling, and advancement. Includes video walkthrough and efficient leveling tips.",
    href: "/guides/progression",
    category: "Progression",
    difficulty: "Beginner",
  },
];

const categories = ["All Guides", "Getting Started", "Combat", "Character Build", "Progression"];

export default function GuidesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Guides");

  // Filter guides based on selected category
  const filteredGuides = selectedCategory === "All Guides"
    ? guides
    : guides.filter(guide => guide.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Game Guides</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive guides to help you master Where Winds Meet. From beginner basics to advanced strategies.
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

      {/* Guides Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGuides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="bg-slate-700 border border-slate-600 rounded-lg p-6 hover:border-gold hover:shadow-xl transition group"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-gold bg-gold/20 px-2 py-1 rounded">
                {guide.category}
              </span>
              <span className="text-xs font-medium text-gray-400">
                {guide.difficulty}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gold transition">
              {guide.title}
            </h3>
            <p className="text-gray-300 mb-4">
              {guide.description}
            </p>
            <span className="text-gray-300 font-medium group-hover:text-gold transition">
              Read Guide →
            </span>
          </Link>
        ))}
      </div>

      {/* No results message */}
      {filteredGuides.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No guides found in this category.</p>
        </div>
      )}
    </div>
  );
}
