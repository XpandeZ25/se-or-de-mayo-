import React from 'react';
import { Check, Send } from 'lucide-react';

export default function ChatbotBanner({ onOpenChat }) {
  return (
    <section className="py-20 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title, Subtitle & Check Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1e1b4b] tracking-tight font-heading leading-tight">
                Resuelve tus dudas al instante
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed pt-1">
                Nuestra asesora académica Rita está disponible para ayudarte con información sobre requisitos, costos y horarios.
              </p>
            </div>

            {/* Check Benefit Cards */}
            <div className="space-y-3 pt-2">
              <div className="bg-white border border-slate-200/80 shadow-xs px-5 py-4 rounded-2xl flex items-center gap-3.5 max-w-md">
                <div className="w-5 h-5 rounded-full bg-[#0d9488]/15 text-[#0d9488] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-slate-800 font-extrabold text-sm sm:text-base">
                  Atención personalizada inmediata
                </span>
              </div>

              <div className="bg-white border border-slate-200/80 shadow-xs px-5 py-4 rounded-2xl flex items-center gap-3.5 max-w-md">
                <div className="w-5 h-5 rounded-full bg-[#0d9488]/15 text-[#0d9488] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-slate-800 font-extrabold text-sm sm:text-base">
                  Horarios de oficina: 08:00 - 21:00
                </span>
              </div>
            </div>
          </div>

          {/* Right Layout: Center 3D Nurse Card & Right Chat Card (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6 pt-4 lg:pt-0">
            {/* Center Column: 3D Nurse Advisor Portrait */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 w-full sm:w-[260px] h-[380px] sm:h-[420px] shrink-0">
              <img
                src="images/rita_nurse_advisor.png"
                alt="Rita Asesora Académica Señor de Mayo"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Column: Interactive Chat Preview Card */}
            <div 
              onClick={onOpenChat}
              className="w-full sm:w-[320px] bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col justify-between h-[380px] sm:h-[420px] shrink-0 cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Header Bar */}
              <div className="bg-[#800020] text-white p-4 flex items-center gap-3 border-b border-white/10">
                <div className="w-9 h-9 rounded-full bg-white text-[#800020] font-black text-base flex items-center justify-center shadow-md shrink-0">
                  R
                </div>
                <div>
                  <div className="font-extrabold text-sm sm:text-base leading-tight">
                    Rita - Asesora Académica
                  </div>
                  <div className="text-[11px] text-white/90 font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> En línea ahora
                  </div>
                </div>
              </div>

              {/* Chat Bubble & Quick Pills Container */}
              <div className="p-4 sm:p-5 space-y-4 flex-1 flex flex-col justify-between">
                {/* Nurse Speech Bubble */}
                <div className="bg-slate-100 p-4 rounded-2xl text-xs sm:text-sm text-slate-700 font-medium leading-relaxed shadow-xs">
                  ¡Hola! Soy Rita. ¿Tienes alguna duda sobre nuestra carrera de Enfermería? Haz clic en una opción o escríbeme.
                </div>

                {/* Quick Action Pill Buttons */}
                <div className="grid grid-cols-2 gap-2.5">
                  <button className="bg-[#800020]/10 hover:bg-[#800020] text-[#800020] hover:text-white font-extrabold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-center">
                    Costos
                  </button>
                  <button className="bg-[#800020]/10 hover:bg-[#800020] text-[#800020] hover:text-white font-extrabold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-center">
                    Requisitos
                  </button>
                  <button className="col-span-2 bg-[#800020]/10 hover:bg-[#800020] text-[#800020] hover:text-white font-extrabold text-xs sm:text-sm py-2.5 px-3 rounded-xl transition-colors cursor-pointer text-center">
                    Prácticas
                  </button>
                </div>
              </div>

              {/* Footer Input Bar */}
              <div className="p-3 bg-slate-50 border-t border-slate-100">
                <div className="bg-white border border-slate-200 rounded-xl py-2 px-3 flex items-center justify-between text-xs text-slate-400 font-medium shadow-xs">
                  <span>Escribe tu mensaje...</span>
                  <div className="w-7 h-7 rounded-lg bg-[#800020] text-white flex items-center justify-center">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
