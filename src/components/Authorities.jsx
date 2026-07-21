import React from 'react';
import { UserCheck, Award, GraduationCap } from 'lucide-react';
import { AUTHORITIES } from '../data/mockData';

export default function Authorities() {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-gold">
            <UserCheck className="w-3.5 h-3.5" /> Equipo Directivo & Académico
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Autoridades del Instituto
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Nuestros directivos respaldan la calidad académica, el rigor ético y la acreditación oficial ante las autoridades nacionales de educación y salud.
          </p>
        </div>

        {/* Authorities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUTHORITIES.map((auth, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:border-[#800020]/30 transition-all overflow-hidden group flex flex-col justify-between"
            >
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <img
                  src={auth.avatar}
                  alt={auth.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-[#800020] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#d4af37]/40 shadow-sm">
                    {auth.role}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {auth.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <p className="text-sm text-gray-600 leading-relaxed">
                  {auth.description}
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1 font-semibold text-[#800020]">
                    <GraduationCap className="w-4 h-4" /> Licenciada en Salud
                  </span>
                  <span className="flex items-center gap-1 text-[#d4af37] font-bold">
                    <Award className="w-3.5 h-3.5" /> 25 Años
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
