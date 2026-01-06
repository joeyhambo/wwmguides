'use client';

import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

// Define image structure with category
interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

// All gallery images organized by category
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

const categories = ["All Pictures", "Profile", "Landscapes", "Portraits", "Moments"];

function GalleryContent() {
  const searchParams = useSearchParams();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All Pictures");

  // Get category from URL parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  // Filter images based on selected category
  const filteredImages = selectedCategory === "All Pictures"
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">Fun Moments</h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A curated gallery of in-game photography featuring atmospheric landscapes, character portraits, and memorable moments from Where Winds Meet.
        </p>
      </div>

      {/* Category Navigation */}
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

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image, index) => (
          <div
            key={image.src}
            onClick={() => openLightbox(index)}
            className="relative aspect-video bg-slate-800 rounded-lg overflow-hidden cursor-pointer group border border-slate-600 hover:border-gold transition"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 text-white text-4xl font-light hover:text-gold transition w-12 h-12 flex items-center justify-center"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/70 hover:bg-gold/20 text-slate-600 hover:text-gold text-2xl font-light w-12 h-12 transition backdrop-blur-sm border border-slate-600 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center"
            style={{ borderRadius: '8px 2px 8px 2px' }}
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/70 hover:bg-gold/20 text-slate-600 hover:text-gold text-2xl font-light w-12 h-12 transition backdrop-blur-sm border border-slate-600 hover:border-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center justify-center"
            style={{ borderRadius: '8px 2px 8px 2px' }}
          >
            ›
          </button>

          {/* Image */}
          <div
            className="relative max-w-6xl max-h-[85vh] w-full h-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded text-sm font-medium backdrop-blur-sm border border-white/20">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h1 className="font-cinzel text-4xl md:text-5xl font-bold mb-4 text-white">Fun Moments</h1>
          <p className="text-xl text-gray-300">Loading gallery...</p>
        </div>
      </div>
    }>
      <GalleryContent />
    </Suspense>
  );
}
