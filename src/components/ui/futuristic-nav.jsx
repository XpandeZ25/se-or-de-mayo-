"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, Info, BookOpen, Building2, ClipboardCheck, Phone } from "lucide-react";

const items = [
  { id: 0, icon: <Home size={20} />, label: "Inicio", href: "#hero" },
  { id: 1, icon: <Info size={20} />, label: "Nosotros", href: "#nosotros" },
  { id: 2, icon: <BookOpen size={20} />, label: "Malla", href: "#carrera" },
  { id: 3, icon: <Building2 size={20} />, label: "Convenios", href: "#hospitales" },
  { id: 4, icon: <ClipboardCheck size={20} />, label: "Admisión", href: "#admisiones" },
  { id: 5, icon: <Phone size={20} />, label: "Contacto", href: "#contacto" },
];

const LumaBar = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActive(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (index, href) => {
    setActive(index);
    const target = document.getElementById(href.substring(1));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden w-[92vw] max-w-[420px]">
      <div className="relative flex items-center justify-between bg-black/60 dark:bg-black/80 backdrop-blur-xl rounded-2xl px-4 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.4)] border border-white/10 overflow-hidden">
        
        {/* Active Indicator Glow */}
        <motion.div
          layoutId="active-indicator"
          className="absolute w-12 h-12 bg-gradient-to-r from-red-600/30 to-[#800020]/40 rounded-full blur-xl -z-10"
          animate={{
            left: `calc(${active * (100 / items.length)}% + ${100 / items.length / 2}%)`,
            translateX: "-50%",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 28 }}
        />

        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <div key={item.id} className="relative flex flex-col items-center flex-1 group">
              {/* Button */}
              <motion.button
                onClick={() => handleNavClick(index, item.href)}
                whileTap={{ scale: 0.9 }}
                animate={{ 
                  scale: isActive ? 1.15 : 1,
                  y: isActive ? -2 : 0 
                }}
                className={`flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-colors relative z-10 ${
                  isActive 
                    ? "text-[#fff] bg-[#800020]/25 shadow-inner" 
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="text-[9px] mt-0.5 font-bold tracking-tight">{item.label}</span>
              </motion.button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LumaBar;
