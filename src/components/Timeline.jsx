import React, { useState } from 'react';
import { ShieldCheck, X, Eye } from 'lucide-react';
import { RESOLUTIONS } from '../data/mockData';

export default function Timeline() {
  const [selectedResolution, setSelectedResolution] = useState(null);

  return (
    <section id="resoluciones" className="py-20 bg-[#1f1f1f] text-white relative">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-heading">
            Hitos de Excelencia Señor de Mayo
          </h2>
          <p className="text-[#dc2626] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
            MÁS DE 25 AÑOS FORMANDO PROFESIONALES DE SALUD
          </p>
        </div>

        {/* Vertical Stack List matching screenshot */}
        <div className="space-y-4">
          {RESOLUTIONS.map((res) => (
            <div
              key={res.year}
              onClick={() => setSelectedResolution(res)}
              className="bg-[#2a2a2a] hover:bg-[#333333] border border-gray-800 hover:border-[#dc2626]/50 p-6 rounded-2xl shadow-lg transition-all cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
            >
              <div className="space-y-1.5 flex-1">
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
                  {res.description}
                </p>
              </div>

              {/* Red Year Badge Pill */}
              <div className="shrink-0 bg-[#dc2626] text-white font-black text-xs px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                {res.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resolution Details Modal */}
      {selectedResolution && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#242424] border border-[#dc2626]/40 rounded-3xl max-w-xl w-full p-6 space-y-6 relative shadow-2xl">
            <button
              onClick={() => setSelectedResolution(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-gray-800"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-[#dc2626] text-white flex items-center justify-center font-black text-lg shadow-md">
                {selectedResolution.year}
              </div>
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  Acreditación Oficial
                </span>
                <h3 className="text-xl font-bold text-white">
                  {selectedResolution.resolutionCode}
                </h3>
              </div>
            </div>

            <div className="p-4 bg-[#1a1a1a] rounded-2xl border border-gray-800 space-y-2">
              <div className="text-xs font-semibold text-gray-400 uppercase">Detalle del Hito:</div>
              <div className="text-sm font-medium text-white">{selectedResolution.title}</div>
              <p className="text-xs text-gray-300 leading-relaxed pt-2 border-t border-gray-800">
                {selectedResolution.detail}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-800">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" /> Estado: VIGENTE Y HOMOLOGADO
              </div>
              <div>Ministerio de Educación</div>
            </div>

            <button
              onClick={() => setSelectedResolution(null)}
              className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-extrabold text-xs uppercase tracking-wider py-3 rounded-full justify-center shadow-lg"
            >
              Cerrar Vista
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

