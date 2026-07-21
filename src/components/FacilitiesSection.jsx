import React from 'react';

export default function FacilitiesSection() {
  return (
    <section id="instalaciones" className="py-20 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <h2 className="text-4xl sm:text-6xl font-black text-[#1e1b4b] tracking-tight font-heading">
            Instalaciones de Primer Nivel
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Ambientes modernos equipados para la enseñanza médica.
          </p>
        </div>

        {/* Bento Grid Layout - Matches Screenshot Exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch pt-2">
          {/* Left Column: Big Vertical Photo (5 Columns) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 min-h-[420px] lg:min-h-[490px]">
            <img
              src="/images/nursing_practice_lab.png"
              alt="Práctica en laboratorio de enfermería Señor de Mayo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right Column: 2 Rows (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-4 lg:gap-5">
            {/* Top Row: 2 Photos */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 lg:gap-5">
              {/* Top Left Photo (7 cols) */}
              <div className="sm:col-span-7 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 h-[210px] sm:h-[230px]">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Clases teóricas y capacitación médica"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Top Right Photo (5 cols) */}
              <div className="sm:col-span-5 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 h-[210px] sm:h-[230px]">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
                  alt="Atención al paciente en laboratorio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Bottom Row: 1 Wide Photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group bg-slate-100 h-[220px] sm:h-[245px]">
              <img
                src="/images/hero_nursing_lab.png"
                alt="Grupo de estudiantes de enfermería en demostración clínica"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
