import React, { useState } from 'react';
import { INSTITUTE_INFO } from '../data/mockData';
import { getAssetUrl } from '../lib/utils';

export default function About({ missionText, visionText }) {
  const [showFullHistory, setShowFullHistory] = useState(false);
  const resolutions = [
    "2001 - R.M. 051/2001",
    "2007 - R.M. 100/2007",
    "2012 - R.M. 748/2012",
    "2018 - R.M. 1258/2018",
    "2025 - R.M. 0040/2025"
  ];

  return (
    <section id="nosotros" className="py-20 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="space-y-3 max-w-4xl">
          <span className="text-xs sm:text-sm font-bold text-[#800020] uppercase tracking-widest block">
            Trayectoria y Compromiso
          </span>
          <h2 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold text-[#1e1b4b] tracking-tight font-heading leading-tight">
            ¿Quiénes somos?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed pt-2">
            Fundado el 22 de agosto del 2000, el INSTITUTO TÉCNICO "SEÑOR DE MAYO" ha consolidado su prestigio a través de 25 años de dedicación a la formación de profesionales técnicos en salud. Bajo la Resolución Ministerial R.M. 0040/2025, operamos con plena legalidad y excelencia académica.
          </p>

          <button 
            onClick={() => setShowFullHistory(!showFullHistory)}
            className="inline-flex items-center gap-2 mt-4 bg-[#800020]/10 hover:bg-[#800020] text-[#800020] hover:text-white font-bold text-sm py-2.5 px-5 rounded-xl transition-all cursor-pointer shadow-xs hover:shadow-md"
          >
            {showFullHistory ? "Ocultar Historia Completa" : "Ver Historia Completa e Hitos"}
          </button>

          {showFullHistory && (
            <div className="mt-6 bg-[#fffbfb] border border-[#800020]/15 rounded-3xl p-6 sm:p-8 space-y-6 text-slate-700 shadow-inner animate-in fade-in slide-in-from-top-4 duration-300">
              <h3 className="text-lg sm:text-xl font-bold text-[#800020] font-heading">
                Reseña Histórica e Hitos Institucionales
              </h3>
              
              <div className="space-y-4 text-sm sm:text-base font-medium leading-relaxed">
                <p>
                  El <strong>Instituto Técnico “Señor de Mayo”</strong> fue fundado el 22 de agosto de 2000, iniciando sus actividades con la formación de Auxiliares de Enfermería. El 7 de febrero de 2001, el Ministerio de Educación, Cultura y Deportes autorizó su funcionamiento mediante la <strong>Resolución Ministerial Nº 051/2001</strong>. Posteriormente, la autorización fue renovada mediante la <strong>Resolución Ministerial Nº 100/07</strong>, con fecha 8 de febrero de 2007. Hasta la fecha de esa renovación se habían titulado 834 profesionales como Auxiliares de Enfermería.
                </p>
                <p>
                  El Instituto Técnico "Señor de Mayo", en la carrera de Enfermería (nivel Técnico Medio), fue inicialmente autorizado mediante la <strong>Resolución Ministerial Nº 748/12</strong>, de fecha 24 de octubre de 2012, por un período de vigencia de seis años. Posteriormente, su funcionamiento fue ratificado mediante la <strong>Resolución Ministerial Nº 1258/18</strong>, de fecha 20 de diciembre de 2018. La última ratificación registrada corresponde a la <strong>Resolución Ministerial Nº 0040/2025</strong>, emitida el 28 de enero de 2025. Hasta la fecha cuenta con 34 promociones y un total de 873 egresados y titulados de la carrera de Enfermería, nivel Técnico Medio.
                </p>
                <p>
                  En 2025 celebramos con orgullo nuestras <strong>Bodas de Plata: 25 años</strong> dedicados a la formación de Técnicos Medios en Enfermería. Este aniversario refleja nuestro compromiso sostenido con la juventud y la salud de la comunidad, la excelencia académica y la sólida formación práctica que nos distingue de otros formadores en salud. Agradecemos a docentes, estudiantes, egresados y aliados por su confianza y contribución a este legado.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <span className="font-extrabold text-slate-800 block">Ubicación Central:</span>
                  <span className="text-slate-600">Calle Illampu Nº 614, esquina Plaza Eguino, zona El Rosario, La Paz.</span>
                </div>
                <div>
                  <span className="font-extrabold text-slate-800 block">Autoridades:</span>
                  <ul className="text-slate-600 list-disc list-inside">
                    <li>Gerencia General: Lic. María del Rosario Revollo Paz</li>
                    <li>Dirección General: Lic. Olga Rosmery Yujra Magne</li>
                    <li>Coordinación: Lic. Dayan Lilian Miranda Callisaya</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pt-4">
          {/* Left Column: Mission, Vision & Resolutions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Misión Card */}
            <div className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-7 sm:p-8 rounded-3xl transition-all hover:shadow-md border-l-4 border-l-[#800020]">
              <h3 className="text-lg sm:text-xl font-bold text-[#800020] mb-3 font-heading">
                Misión
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                {missionText || "Formar Técnicos Medios en Enfermería con alta competencia científica, técnica y profunda vocación de servicio humano, capaces de responder a los retos del sistema nacional de salud."}
              </p>
            </div>

            {/* Visión Card */}
            <div className="bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] p-7 sm:p-8 rounded-3xl transition-all hover:shadow-md border-l-4 border-l-[#800020]">
              <h3 className="text-lg sm:text-xl font-bold text-[#800020] mb-3 font-heading">
                Visión
              </h3>
              <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                {visionText || "Ser la institución líder y referente en Bolivia en la formación de profesionales técnicos de salud, reconocida por la excelencia académica y los valores éticos de sus egresados."}
              </p>
            </div>

            {/* Resoluciones Institucionales Card */}
            <div className="bg-[#fff0f3] border border-[#fde8ed] p-7 sm:p-8 rounded-3xl space-y-4 shadow-sm">
              <h3 className="text-base sm:text-lg font-bold text-[#800020] font-heading">
                Resoluciones institucionales
              </h3>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {resolutions.map((res, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center bg-[#fde8ed] hover:bg-[#f8b4c4] text-[#800020] text-xs sm:text-sm font-bold px-4 py-2 rounded-full border border-[#f8b4c4] shadow-xs transition-colors cursor-default"
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
                src={getAssetUrl("images/nursing_practice_lab_guindo.png")}
                alt="Estudiantes de enfermería Instituto Señor de Mayo"
                className="w-full h-[480px] sm:h-[540px] object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Overlapping Bottom-Left Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-3xl shadow-2xl border-l-4 border-l-[#800020] border border-slate-100 z-20 min-w-[190px]">
                <div className="text-3xl sm:text-4xl font-bold text-[#800020] font-heading tracking-tight">
                  25+
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mt-1">
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
