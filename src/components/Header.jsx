import React from 'react';
import FloatingPillNav from './ui/floating-pill-nav';

export default function Header({ onOpenPreRegister, onOpenAdmin }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Large & Prominent Official PNG Logo on Top-Left (Pure PNG, No background box) */}
      <a 
        href="#hero" 
        className="fixed top-2 left-2 sm:top-3 sm:left-6 z-50 pointer-events-auto flex items-center hover:scale-105 transition-all transform group"
        title="Instituto Técnico Señor de Mayo"
      >
        <img 
          src="/images/logo_senor_de_mayo.png" 
          alt="Instituto Técnico Señor de Mayo" 
          className="h-16 sm:h-24 md:h-32 lg:h-36 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] filter brightness-110 contrast-105"
        />
      </a>

      {/* Centered Floating Pill Navigation */}
      <FloatingPillNav 
        onOpenPreRegister={onOpenPreRegister} 
        onOpenAdmin={onOpenAdmin} 
      />

      {/* Top-Right PRE INSCRIPCIONES Button */}
      <button
        onClick={onOpenPreRegister}
        className="fixed top-4 right-3 sm:top-5 sm:right-6 z-50 pointer-events-auto bg-[#800020] hover:bg-[#580016] text-white font-black text-xs sm:text-sm uppercase tracking-wider px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-2xl hover:shadow-red-900/50 transition-all transform hover:scale-105 border border-white/30 backdrop-blur-md cursor-pointer flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        PRE INSCRIPCIONES
      </button>
    </header>
  );
}
