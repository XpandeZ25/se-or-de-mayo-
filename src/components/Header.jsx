import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import FloatingPillNav from './ui/floating-pill-nav';
import { getAssetUrl } from '../lib/utils';

export default function Header({ onOpenPreRegister, onOpenAdmin }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Carrera', href: '#carrera' },
    { name: 'Malla Curricular', href: '#malla' },
    { name: 'Instalaciones', href: '#instalaciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      {/* Desktop-Only Top-Left PNG Logo */}
      <a 
        href="#hero"
        className="hidden lg:flex fixed top-2 left-2 sm:top-3 sm:left-6 z-50 pointer-events-auto items-center hover:scale-105 transition-all transform group"
        title="Instituto Técnico Señor de Mayo"
      >
        <img 
          src={getAssetUrl("images/logo_senor_de_mayo.png")} 
          alt="Instituto Técnico Señor de Mayo" 
          className="h-16 sm:h-24 md:h-32 lg:h-36 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] filter brightness-110 contrast-105"
        />
      </a>

      {/* Centered Floating Pill Navigation (Visible on desktop) */}
      <div className="pt-3 flex justify-center px-4 pointer-events-auto">
        <FloatingPillNav />
      </div>

      {/* Desktop-Only Top-Right Pre-Inscripciones Action Button */}
      <div className="hidden lg:flex fixed top-4 right-4 sm:top-5 sm:right-6 z-50 pointer-events-auto items-center gap-2">
        <button
          onClick={onOpenPreRegister}
          className="inline-flex items-center gap-2 bg-[#800020] hover:bg-[#580016] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 border border-white/20 cursor-pointer"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Pre Inscripciones
        </button>
      </div>

      {/* Mobile Top Header Bar (Visible on mobile/tablet, hidden on desktop) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-md z-50 pointer-events-auto flex items-center justify-between px-4">
        {/* Compact Logo */}
        <a href="#hero" className="flex items-center">
          <img 
            src={getAssetUrl("images/logo_senor_de_mayo.png")} 
            alt="Instituto Técnico Señor de Mayo" 
            className="h-11 w-auto object-contain filter brightness-110 contrast-105"
          />
        </a>

        {/* Action Button & Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenPreRegister}
            className="inline-flex items-center gap-1 bg-[#800020] hover:bg-[#580016] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full shadow-md border border-white/10 cursor-pointer"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Pre Inscripciones
          </button>
          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-slate-800 focus:outline-none hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5.5 h-5.5" />
            ) : (
              <Menu className="w-5.5 h-5.5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-down Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200/80 shadow-xl z-40 pointer-events-auto max-h-[calc(100vh-4rem)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col py-3 px-5 gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  const targetId = item.href.substring(1);
                  const element = document.getElementById(targetId);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="py-2.5 text-slate-750 hover:text-[#800020] font-bold text-xs border-b border-slate-100 last:border-b-0 transition-colors uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
