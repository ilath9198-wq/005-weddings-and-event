'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PortfolioProject } from '../data/portfolioData';
import { X, ChevronLeft, ChevronRight, ZoomIn, Heart, MapPin, Users, Sparkles } from 'lucide-react';
import { useConsultation } from './ConsultationContext';

interface PortfolioLightboxProps {
  projects: PortfolioProject[];
}

export default function PortfolioLightbox({ projects }: PortfolioLightboxProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { openConsultation } = useConsultation();

  const categories = [
    { key: 'all', label: 'All Celebrations' },
    { key: 'royal', label: 'Royal Palaces' },
    { key: 'destination', label: 'Destination Escapes' },
    { key: 'decor', label: 'Floral & Décor' },
    { key: 'intimate', label: 'Intimate Haveli' },
    { key: 'rituals', label: 'Mehendi & Haldi' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredProjects.length]);

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const activeProject = selectedIndex !== null ? filteredProjects[selectedIndex] : null;

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none no-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setSelectedIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-editorial tracking-wider uppercase transition-all ${
                isActive
                  ? 'bg-burgundy-900 text-gold-300 font-bold shadow-md scale-105'
                  : 'bg-white border border-gold-500/30 text-charcoal-700 hover:border-burgundy-900 hover:text-burgundy-900'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedIndex(index)}
            className="group relative rounded-2xl overflow-hidden bg-white border border-gold-500/30 hover:border-gold-500 cursor-pointer shadow-luxury transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ivory-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-950/80 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-burgundy-950/80 backdrop-blur-md border border-gold-500/40 text-gold-300">
                  {project.categoryLabel}
                </span>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-mono text-gold-300 tracking-wider block mb-1">
                    {project.couple}
                  </span>
                  <h3 className="font-editorial text-2xl font-bold uppercase tracking-wide group-hover:text-gold-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-ivory-200/90 truncate mt-1">
                    {project.venue} • {project.location}
                  </p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[1px]">
                  <div className="w-12 h-12 rounded-full bg-gold-gradient text-burgundy-950 flex items-center justify-center shadow-gold-glow transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs text-charcoal-600 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-gold-600 pt-2 border-t border-ivory-300">
                  <span>{project.guestCount}</span>
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-bold">
                    View Story ➔
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {activeProject && selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl text-white"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-burgundy-900 border border-gold-500/40 text-gold-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-burgundy-950/80 border border-gold-500/40 text-gold-300 hover:text-white flex items-center justify-center transition-colors shadow-2xl"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-burgundy-950/80 border border-gold-500/40 text-gold-300 hover:text-white flex items-center justify-center transition-colors shadow-2xl"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Card */}
          <div 
            className="relative w-full max-w-5xl bg-burgundy-950 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-contain"
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority
              />
            </div>

            <div className="p-6 sm:p-8 bg-burgundy-900 border-t border-gold-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-gold-500/20 text-gold-300 border border-gold-500/40">
                    {activeProject.categoryLabel}
                  </span>
                  <span className="text-xs text-gold-400 font-mono">
                    {activeProject.couple} • {activeProject.guestCount}
                  </span>
                </div>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-white mb-2">
                  {activeProject.title}
                </h3>
                <p className="text-sm text-ivory-200/90 max-w-2xl leading-relaxed mb-3">
                  {activeProject.description}
                </p>
                <p className="text-xs italic text-gold-300 font-editorial">
                  {activeProject.storyQuote}
                </p>
              </div>

              <button
                onClick={() => {
                  const title = activeProject.title;
                  setSelectedIndex(null);
                  openConsultation(`Portfolio Inquiry: ${title}`);
                }}
                className="shrink-0 px-6 py-3 bg-gold-gradient hover:bg-gold-400 text-burgundy-950 font-editorial font-bold text-xs uppercase tracking-wider rounded-full shadow-gold-glow transition-all"
              >
                Plan Similar Celebration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
