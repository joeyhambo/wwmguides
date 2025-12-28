import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fun Moments in the World - WWM Guides",
  description: "Hilarious adventures and unexpected surprises in Yan Yun.",
};

export default function FunnyMoments() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="font-cinzel text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-gold transition">Home</Link>
        {" > "}
        <Link href="/guides" className="hover:text-gold transition">Guides</Link>
        {" > "}
        <span className="text-gray-300">Fun Moments</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">
          Fun Moments in the World
        </h1>
        <p className="text-xl text-gray-300 mb-6">
          Hilarious adventures and unexpected surprises in Yan Yun.
        </p>
      </header>

      {/* Content */}
      <section className="prose prose-invert prose-lg max-w-none">
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <p>
            The world of Where Winds Meet is filled with unexpected moments that bring joy and laughter to players. From quirky NPC interactions to physics-defying stunts, these moments make the game truly memorable.
          </p>

          <h2 className="font-cinzel text-3xl font-bold text-white border-b border-slate-600 pb-3">
            Horse Acrobatics
          </h2>

          <p>
            One of the most entertaining aspects of WWM is the horse riding system. Players have discovered countless ways to perform incredible stunts, from launching their horses off cliffs to performing mid-air flips during combat.
          </p>

          <h2 className="font-cinzel text-3xl font-bold text-white border-b border-slate-600 pb-3">
            NPC Shenanigans
          </h2>

          <p>
            The NPCs in Yan Yun have their own daily routines and personalities, which sometimes leads to hilarious situations. Watch as merchants argue over prices, guards chase after pickpockets, or drunk patrons stumble through the streets.
          </p>

          <h2 className="font-cinzel text-3xl font-bold text-white border-b border-slate-600 pb-3">
            Combat Mishaps
          </h2>

          <p>
            Even in the heat of battle, unexpected moments can occur. From accidentally knocking enemies off cliffs to getting caught in environmental hazards, these combat mishaps remind us not to take everything too seriously.
          </p>

          <h2 className="font-cinzel text-3xl font-bold text-white border-b border-slate-600 pb-3">
            Exploration Discoveries
          </h2>

          <p>
            The vast open world of Yan Yun is full of hidden surprises. Players have found secret locations, Easter eggs, and unexpected interactions that add layers of charm to the already immersive world.
          </p>

          <div className="bg-slate-700 border border-slate-600 rounded-lg p-6 my-8">
            <p className="text-gold font-semibold text-lg mb-2">Share Your Moments!</p>
            <p>
              Have you experienced funny moments in Where Winds Meet? Share your stories and clips with the community!
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
