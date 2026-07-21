import React from 'react';
import { ChevronRight } from 'lucide-react';
import ScrollExpandMedia from './ui/scroll-expansion-hero';
import { STATS, INSTITUTE_INFO } from '../data/mockData';
import { getAssetUrl } from '../lib/utils';

export default function Hero({ onOpenPreRegister }) {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#580016] via-[#800020] to-[#4a0314] text-white">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={getAssetUrl("images/hero_nursing_lab.png")}
        bgImageSrc={getAssetUrl("images/hero_nursing_lab.png")}
        subtitle="INSTITUTO TÉCNICO EN SALUD"
        title='"SEÑOR DE MAYO"'
        date={INSTITUTE_INFO.accreditation}
        scrollToExpand="Desliza para explorar"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 py-6">
          {/* Centered Large Logo */}
          <div className="flex justify-center -mb-2">
            <img 
              src={getAssetUrl("images/logo_senor_de_mayo.png")} 
              alt="Logo Señor de Mayo" 
              className="h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold !text-white font-heading leading-tight uppercase tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" style={{ color: '#ffffff' }}>
              INSTITUTO TÉCNICO EN SALUD
            </h2>
            <h1 className="text-4xl sm:text-6xl font-black !text-white font-heading leading-tight uppercase tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]" style={{ color: '#ffffff' }}>
              "SEÑOR DE MAYO"
            </h1>
            <p className="text-xl sm:text-2xl text-white font-extrabold max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              Formando profesionales de la salud con excelencia y vocación.
            </p>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-medium">
              Programa académico de 2 años con acreditación ministerial ({INSTITUTE_INFO.accreditation}) e internado rotatorio en los mejores hospitales.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="#carrera"
              className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-[#800020] font-black text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 border border-white/40"
            >
              Explorar Carrera 
              <span className="w-6 h-6 rounded-full bg-[#800020]/15 flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-[#800020]" />
              </span>
            </a>

            <button
              onClick={onOpenPreRegister}
              className="inline-flex items-center justify-center gap-2 bg-[#800020] hover:bg-[#580016] text-white font-black text-sm uppercase tracking-wider py-4 px-8 rounded-full shadow-2xl transition-all transform hover:-translate-y-0.5 border border-white/30 cursor-pointer"
            >
              Pre-Inscripciones 2026
            </button>
          </div>

          {/* Stats Bar */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-white/20">
            {STATS.map((stat, idx) => (
              <div key={idx} className="space-y-1 text-center bg-black/20 p-4 rounded-2xl backdrop-blur-xs border border-white/10">
                <div className="text-3xl sm:text-4xl font-black text-[#f8e596] font-heading tracking-tight drop-shadow-md">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-[11px] text-gray-300 font-normal leading-tight">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollExpandMedia>
    </section>
  );
}
