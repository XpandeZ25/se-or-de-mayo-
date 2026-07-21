import React from 'react';
import { INSTITUTE_INFO } from '../data/mockData';

export default function About({ missionText, visionText }) {
  const resolutions = [
    "1999 - R.M. 290/99",
    "2005 - R.M. 484/05",
    "2010 - R.M. 530/2010",
    "2014 - R.M. 124/2014",
    "2014 - R.M. 975/2014",
    "2015 - R.A. 155/2015",
    "2017 - R.M. 2485/2017",
    "2019 - R.M. 0565/2019",
    "2020 - R.A. 0001/2020",
    "2023 - R.M. 0677/2023"
  ];

  return (
    <section id="nosotros" className="py-20 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-4xl">
          <span className="text-sm sm:text-base font-black text-[#800020] uppercase tracking-widest block">
            Trayectoria y Compromiso
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-[#1e1b4b] tracking-tight font-heading leading-tight">
            ¿Quiénes somos?
          </h2>
          <p className="text-slate-700 text-lg sm:text-xl font-medium leading-relaxed pt-2">
            Fundado en 1999, el Instituto Técnico Señor de Mayo ha consolidado su prestigio a través de décadas de dedicación a la formación de cuadros técnicos en salud. Bajo la Resolución Ministerial R.M. N° 0677/2023, operamos con plena legalidad y compromiso académico.
          </p>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
          {/* Left Column: Mission, Vision & Resolutions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Misión Card */}
            <div className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-7 sm:p-8 rounded-3xl transition-all hover:shadow-md border-l-4 border-l-[#800020]">
              <h3 className="text-xl sm:text-2xl font-black text-[#800020] mb-3 font-heading">
                Misión
              </h3>
              <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                {missionText || "Formar Técnicos Medios en Enfermería con alta competencia científica, técnica y profunda vocación de servicio humano, capaces de responder a los retos del sistema nacional de salud."}
              </p>
            </div>

            {/* Visión Card */}
            <div className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-7 sm:p-8 rounded-3xl transition-all hover:shadow-md border-l-4 border-l-[#800020]">
              <h3 className="text-xl sm:text-2xl font-black text-[#800020] mb-3 font-heading">
                Visión
              </h3>
              <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
                {visionText || "Ser la institución líder y referente en Bolivia en la formación de profesionales técnicos de salud, reconocida por la excelencia académica y los valores éticos de sus egresados."}
              </p>
            </div>

            {/* Resoluciones Institucionales Card */}
            <div className="bg-[#fff0f3] border border-[#fde8ed] p-7 sm:p-8 rounded-3xl space-y-4 shadow-sm">
              <h3 className="text-lg sm:text-xl font-black text-[#800020] font-heading">
                Resoluciones institucionales
              </h3>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {resolutions.map((res, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center bg-[#fde8ed] hover:bg-[#f8b4c4] text-[#800020] text-xs sm:text-sm font-extrabold px-4 py-2 rounded-full border border-[#f8b4c4] shadow-xs transition-colors cursor-default"
                  >
                    {res}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Image Showcase with Floating 25+ Badge */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="/images/nursing_practice_lab.png"
                alt="Estudiantes de enfermería Instituto Señor de Mayo"
                className="w-full h-[480px] sm:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlapping Bottom-Left Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl shadow-2xl border-l-4 border-l-[#800020] border border-slate-100 z-20 min-w-[190px]">
                <div className="text-4xl sm:text-5xl font-black text-[#800020] font-heading tracking-tight">
                  25+
                </div>
                <div className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wider mt-1">
                  Años educando
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
