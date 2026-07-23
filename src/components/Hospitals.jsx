import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getAssetUrl } from '../lib/utils';

export default function Hospitals() {
  const [activeIndex, setActiveIndex] = useState(0);

  const hospitalList = [
    {
      id: 1,
      name: "Hospital Arco Iris",
      type: "Tercer Nivel",
      description: "Rotaciones clínicas en uno de los hospitales más modernos y equipados de La Paz.",
      image: getAssetUrl("images/hospital_arco_iris.jpg")
    },
    {
      id: 2,
      name: "Hospital Municipal Cotahuma",
      type: "Atención Primaria",
      description: "Prácticas de atención médica primaria e internado asistencial comunitario.",
      image: getAssetUrl("images/hospital_cotahuma.jpg")
    },
    {
      id: 3,
      name: "Hospital Municipal La Paz",
      type: "Segundo Nivel",
      description: "Formación práctica intensiva en emergencias, laboratorio y procedimientos clínicos.",
      image: getAssetUrl("images/hospital_municipal_la_paz.jpg")
    },
    {
      id: 4,
      name: "Instituto Nacional de Tórax",
      type: "Especializado",
      description: "Prácticas avanzadas en unidades de medicina respiratoria y cuidados quirúrgicos.",
      image: getAssetUrl("images/hospital_del_torax.jpg")
    },
    {
      id: 5,
      name: "Hospital de la Mujer",
      type: "Especializado",
      description: "Especialización en salud materno-infantil, ginecología y neonatología.",
      image: getAssetUrl("images/hospital_de_la_mujer.jpg")
    }
  ];

  const activeHospital = hospitalList[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % hospitalList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + hospitalList.length) % hospitalList.length);
  };

  return (
    <section id="hospitales" className="py-20 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Main Grid: Left Column Text & Pills, Right Column Image Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title, Subtitle & Hospital Pills */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold text-[#1e1b4b] tracking-tight font-heading">
                Prácticas y Convenios
              </h2>
              <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                Garantizamos tu formación práctica mediante alianzas estratégicas con las instituciones de salud más importantes del país.
              </p>
            </div>

            {/* Hospital Pill Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {hospitalList.map((hospital, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <button
                    key={hospital.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`py-3.5 px-5 rounded-2xl text-left font-bold text-xs sm:text-sm tracking-tight transition-all duration-300 cursor-pointer border ${
                      isActive
                        ? 'bg-[#800020] text-white border-[#800020] shadow-lg transform scale-[1.02]'
                        : 'bg-[#f1f5f9] hover:bg-[#800020]/10 hover:text-[#800020] text-slate-800 border-slate-200/80'
                    }`}
                  >
                    {hospital.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Hospital Carousel */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 h-[380px] sm:h-[440px] group bg-slate-900">
              {/* Active Hospital Image */}
              <img
                src={activeHospital.image}
                alt={activeHospital.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Navigation Arrow Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-20 border border-white/30"
                title="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-20 border border-white/30"
                title="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Content Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 space-y-1.5 text-white">
                <h3 className="text-xl sm:text-2xl font-bold font-heading tracking-tight drop-shadow-md">
                  {activeHospital.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed max-w-md drop-shadow-sm">
                  {activeHospital.description}
                </p>

                {/* Pagination Dots */}
                <div className="flex items-center gap-1.5 pt-3 justify-end">
                  {hospitalList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeIndex === idx ? 'w-6 bg-white' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
