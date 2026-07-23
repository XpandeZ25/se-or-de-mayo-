import React from 'react';
import { INSTITUTE_INFO } from '../data/mockData';

export default function WhatsAppWidget() {
  const whatsappNumber = INSTITUTE_INFO.whatsapp || "59176543210";
  const message = encodeURIComponent("¡Hola Instituto Señor de Mayo! Quisiera obtener información sobre las inscripciones y la carrera de Enfermería.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 transition-transform duration-300 hover:scale-105"
    >
      {/* Tooltip Popup */}
      <span className="hidden sm:inline-block bg-[#141414]/80 text-white text-xs font-bold px-3.5 py-2 rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/10 backdrop-blur-md">
        ¿Consultas rápidas? Chatea con nosotros 💬
      </span>

      {/* Pulsing Outer Glow Ring */}
      <div className="relative flex items-center justify-center">
        <span className="absolute w-full h-full rounded-full bg-emerald-500/20 animate-ping" />
        
        {/* WhatsApp Floating Button */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/20 hover:bg-[#25D366] text-emerald-400 hover:text-white flex items-center justify-center shadow-[0_8px_32px_rgba(37,211,102,0.25)] border border-emerald-500/30 hover:border-emerald-400 backdrop-blur-md transition-all duration-300">
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.149 4.198 4.292-1.127zm10.963-5.597c-.287-.144-1.698-.838-1.961-.933-.264-.096-.456-.144-.648.144-.192.287-.743.933-.911 1.124-.168.192-.336.216-.623.072-.287-.144-1.214-.447-2.312-1.427-.855-.764-1.432-1.708-1.6-1.995-.168-.287-.018-.442.126-.585.13-.13.287-.336.431-.504.144-.168.192-.287.287-.479.096-.192.048-.36-.024-.504-.072-.144-.648-1.56-.888-2.136-.234-.561-.472-.486-.648-.495l-.552-.009c-.192 0-.504.072-.767.36-.264.287-1.008.985-1.008 2.401 0 1.416 1.032 2.784 1.176 2.976.144.192 2.034 3.107 4.928 4.357.689.298 1.227.476 1.646.609.692.22 1.323.189 1.821.114.557-.084 1.698-.694 1.938-1.365.24-.672.24-1.248.168-1.365-.072-.117-.264-.192-.551-.336z"/>
          </svg>
        </div>
      </div>
    </a>
  );
}
