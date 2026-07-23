import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingPillNav({ onOpenPreRegister, onOpenAdmin }) {
  const [activeTab, setActiveTab] = useState('Inicio');

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Carrera', href: '#carrera' },
    { name: 'Malla', href: '#carrera' },
    { name: 'Instalaciones', href: '#instalaciones' },
    { name: 'Contacto', href: '#contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            const foundItem = navItems.find((item) => item.href === `#${sections[i]}`);
            if (foundItem) {
              setActiveTab(foundItem.name);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="hidden lg:flex fixed top-5 left-1/2 -translate-x-1/2 z-50 items-center justify-center pointer-events-auto">
      <div className="relative flex items-center bg-[#e2e8f0]/90 backdrop-blur-xl border border-white/70 shadow-2xl rounded-full p-1.5 sm:p-2 gap-1 sm:gap-2">
        {navItems.map((item) => {
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={`relative px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-tight rounded-full transition-all duration-300 ${
                isActive
                  ? 'text-gray-900 bg-white/70 shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/40'
              }`}
            >
              {/* Glowing Top Active Indicator */}
              {isActive && (
                <>
                  <motion.div
                    layoutId="topGlowLine"
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-7 sm:w-9 h-1 sm:h-1.5 bg-[#800020] rounded-full shadow-[0_0_12px_#800020]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                  <motion.div
                    layoutId="activeBackgroundHighlight"
                    className="absolute inset-0 bg-[#800020]/15 rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                </>
              )}
              <span className="relative z-10">{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
