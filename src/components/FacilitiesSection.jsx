import React from 'react';
import { getAssetUrl } from '../lib/utils';

export default function FacilitiesSection() {
  return (
    <section id="instalaciones" className="py-20 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold text-[#1e1b4b] tracking-tight font-heading">
            Instalaciones y Vida Institucional
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
            Ambientes modernos y actividades académicas que preparan a nuestros futuros profesionales de salud.
          </p>
        </div>

        {/* Bento Grid Layout - 5 Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch pt-2">
          {/* Left Column: Big Vertical Photo (5 Columns) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 min-h-[420px] lg:min-h-[490px]">
            <img
              src={getAssetUrl("images/instalaciones_2.jpg")}
              alt="Práctica en laboratorio de simulación clínica Señor de Mayo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay description for premium look */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="font-extrabold text-lg">Laboratorio de Simulación</p>
              <p className="text-sm text-slate-200">Prácticas clínicas con equipamiento moderno.</p>
            </div>
          </div>

          {/* Right Column: 2 Rows (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5">
            {/* Top Row: 2 Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-5">
              {/* Top Left: Expo table (7 cols) */}
              <div className="sm:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 h-[210px] sm:h-[235px]">
                <img
                  src={getAssetUrl("images/instalaciones_1.jpg")}
                  alt="Feria de salud y exposición sobre neumonías"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold text-sm">Ferias de Salud</p>
                  <p className="text-xs text-slate-200">Exposiciones y proyectos comunitarios de estudiantes.</p>
                </div>
              </div>

              {/* Top Right: Church ceremony (5 cols) */}
              <div className="sm:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 h-[210px] sm:h-[235px]">
                <img
                  src={getAssetUrl("images/instalaciones_3.jpg")}
                  alt="Ceremonia litúrgica y bendición de cofias"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold text-sm">Bendición de Cofias</p>
                  <p className="text-xs text-slate-200">Ceremonias institucionales solemnes.</p>
                </div>
              </div>
            </div>

            {/* Bottom Row: 2 Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-5">
              {/* Bottom Left: Parade (5 cols) */}
              <div className="sm:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 h-[210px] sm:h-[235px]">
                <img
                  src={getAssetUrl("images/instalaciones_4.jpg")}
                  alt="Desfile cívico institucional"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold text-sm">Desfiles Cívicos</p>
                  <p className="text-xs text-slate-200">Participación en eventos patrios y locales.</p>
                </div>
              </div>

              {/* Bottom Right: Ceremony table (7 cols) */}
              <div className="sm:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 h-[210px] sm:h-[235px]">
                <img
                  src={getAssetUrl("images/instalaciones_5.jpg")}
                  alt="Mesa de honor y entrega de títulos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="font-bold text-sm">Actos de Graduación</p>
                  <p className="text-xs text-slate-200">Entrega de títulos y reconocimientos académicos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
