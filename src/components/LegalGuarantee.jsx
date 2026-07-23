import React from 'react';
import { CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';

export default function LegalGuarantee() {
  const guarantees = [
    {
      icon: CheckCircle2,
      title: "Ministerio de Educación",
      description: "Instituto legalmente reconocido por el Estado Plurinacional de Bolivia."
    },
    {
      icon: ShieldCheck,
      title: "Resolución Ministerial",
      description: `${INSTITUTE_INFO.accreditation}. Asegurando excelencia académica y legal.`
    },
    {
      icon: Award,
      title: "Títulos Oficiales",
      description: "Validez nacional en provisión nacional para el ejercicio profesional inmediato."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#580016] via-[#800020] to-[#580016] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold tracking-tight font-heading text-white">
            Respaldo y Garantía Legal
          </h2>
          <p className="text-white/85 text-sm sm:text-base font-medium leading-relaxed">
            Cumplimos con todos los estándares nacionales para tu formación profesional.
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center pt-2">
          {guarantees.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="space-y-3 p-4 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white/15 border border-white/30 flex items-center justify-center text-white shadow-lg backdrop-blur-md mb-1">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold font-heading text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-white/85 font-medium leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
