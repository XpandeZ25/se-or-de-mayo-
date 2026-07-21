import React from 'react';
import FloatingPillNav from './ui/floating-pill-nav';
import { getAssetUrl } from '../lib/utils';

export default function Header({ onOpenPreRegister, onOpenAdmin }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Top-Left PNG Logo without Background Container */}
      <a 
        href="#hero"
        className="fixed top-2 left-2 sm:top-3 sm:left-6 z-50 pointer-events-auto flex items-center hover:scale-105 transition-all transform group"
        title="Instituto Técnico Señor de Mayo"
      >
        <img 
          src={getAssetUrl("images/logo_senor_de_mayo.png")} 
          alt="Instituto Técnico Señor de Mayo" 
          className="h-16 sm:h-24 md:h-32 lg:h-36 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] filter brightness-110 contrast-105"
        />
      </a>

      {/* Centered Floating Pill Navigation */}
      <div className="pt-3 flex justify-center px-4 pointer-events-auto">
        <FloatingPillNav />
      </div>

      {/* Top-Right Pre-Inscripciones Action Button */}
      <div className="fixed top-4 right-4 sm:top-5 sm:right-6 z-50 pointer-events-auto flex items-center gap-2">
        <button
          onClick={onOpenPreRegister}
          className="inline-flex items-center gap-2 bg-[#800020] hover:bg-[#580016] text-white text-xs sm:text-sm font-black uppercase tracking-wider px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 border border-white/20"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Pre Inscripciones
        </button>
      </div>
    </header>
  );
}
