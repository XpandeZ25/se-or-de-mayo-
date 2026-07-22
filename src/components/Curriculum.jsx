import React from 'react';
import { Check, Clock, BookOpen } from 'lucide-react';

export default function Curriculum({ onOpenPreRegister }) {
  const tableData = [
    { label: "Carrera", value: "Enfermería" },
    { label: "Nivel", value: "Técnico Medio" },
    { label: "Duración", value: "2 años / 24 meses" },
    { label: "Modalidad", value: "Presencial" },
    { label: "Carga Horaria", value: "2.400 horas académicas" }
  ];

  const profileChecklist = [
    "Brindar cuidados de enfermería integrales al individuo, familia y comunidad.",
    "Prestar acciones de prevención y promoción de la salud.",
    "Asistir éticamente en procedimientos médico-quirúrgicos."
  ];

  const mallaModules = [
    {
      year: "Primer año",
      code: "PSB-101",
      name: "Proceso de Salud en Bolivia",
      competencias: "4 competencias",
      horas: "80 h",
      dias: "16 días",
      progressWidth: "w-1/3"
    },
    {
      year: "Primer año",
      code: "PAU-102",
      name: "Primeros Auxilios",
      competencias: "5 competencias",
      horas: "170 h",
      dias: "34 días",
      progressWidth: "w-1/2"
    },
    {
      year: "Primer año",
      code: "ECS-103",
      name: "Promoción de la Salud",
      competencias: "3 competencias",
      horas: "80 h",
      dias: "16 días",
      progressWidth: "w-1/3"
    },
    {
      year: "Primer año",
      code: "TPB-104",
      name: "Técnicas y Procedimientos Básicos en Enfermería",
      competencias: "5 competencias",
      horas: "300 h",
      dias: "60 días",
      progressWidth: "w-4/5"
    },
    {
      year: "Primer año",
      code: "SSR-105",
      name: "Salud Sexual y Reproductiva",
      competencias: "6 competencias",
      horas: "280 h",
      dias: "56 días",
      progressWidth: "w-3/4"
    },
    {
      year: "Primer año",
      code: "AIM-106",
      name: "Atención al Menor de 5 Años y Edad Escolar",
      competencias: "4 competencias",
      horas: "290 h",
      dias: "58 días",
      progressWidth: "w-3/4"
    },
    {
      year: "Segundo año",
      code: "SAB-201",
      name: "Saneamiento Básico",
      competencias: "4 competencias",
      horas: "160 h",
      dias: "32 días",
      progressWidth: "w-1/2"
    },
    {
      year: "Segundo año",
      code: "VIG-202",
      name: "Vigilancia Epidemiológica",
      competencias: "4 competencias",
      horas: "160 h",
      dias: "32 días",
      progressWidth: "w-1/2"
    },
    {
      year: "Segundo año",
      code: "MTR-203",
      name: "Medicina Tradicional",
      competencias: "3 competencias",
      horas: "80 h",
      dias: "16 días",
      progressWidth: "w-1/3"
    },
    {
      year: "Segundo año",
      code: "IAP-204",
      name: "Investigación de Acción Participativa y Operativa",
      competencias: "3 competencias",
      horas: "160 h",
      dias: "32 días",
      progressWidth: "w-1/2"
    },
    {
      year: "Segundo año",
      code: "PPP-205",
      name: "Práctica Pre Profesional en Establecimientos Urbanos y Rurales",
      competencias: "Práctica integradora",
      horas: "640 h",
      dias: "Práctica intensiva",
      progressWidth: "w-full"
    }
  ];

  return (
    <section id="carrera" className="py-20 sm:py-24 bg-[#f1f5f9]/60 space-y-24">
      {/* SECTION 1: OFERTA ACADÉMICA & PERFIL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-4xl sm:text-6xl font-black text-[#1e1b4b] tracking-tight font-heading">
            Oferta Académica
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed">
            Programa curricular actualizado y aprobado para formar profesionales competentes desde el primer día.
          </p>
        </div>

        {/* Main Grid: Left Table + Right Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Program Details Table */}
          <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between">
            <div>
              {/* Table Header Bar */}
              <div className="bg-[#800020] text-white py-4 px-6 sm:px-8 grid grid-cols-12 font-extrabold text-sm sm:text-base uppercase tracking-wider">
                <div className="col-span-4 sm:col-span-3">Artículo</div>
                <div className="col-span-8 sm:col-span-9">Detalle del Programa</div>
              </div>

              {/* Table Body Rows */}
              <div className="divide-y divide-slate-100">
                {tableData.map((row, idx) => (
                  <div 
                    key={idx} 
                    className="py-4 sm:py-5 px-6 sm:px-8 grid grid-cols-12 items-center hover:bg-slate-50/80 transition-colors"
                  >
                    <div className="col-span-4 sm:col-span-3 text-slate-500 font-medium text-sm sm:text-base">
                      {row.label}
                    </div>
                    <div className="col-span-8 sm:col-span-9 text-slate-900 font-extrabold text-base sm:text-lg">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Perfil del Egresado Card */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#800020] to-[#580016] text-white rounded-3xl shadow-2xl p-7 sm:p-8 flex flex-col justify-between border border-white/20">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-black font-heading tracking-tight">
                Perfil del Egresado
              </h3>

              <ul className="space-y-4">
                {profileChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base font-medium leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5 text-white">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenPreRegister}
              className="w-full mt-8 bg-white hover:bg-slate-100 text-[#800020] font-black text-sm uppercase tracking-wider py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
            >
              Solicitar Información
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: MALLA CURRICULAR (PLAN DE ESTUDIOS) */}
      <div id="malla" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8">
        {/* Header & Total Hours Floating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <span className="text-sm font-black text-[#800020] uppercase tracking-widest block">
              PLAN DE ESTUDIOS
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-[#1e1b4b] tracking-tight font-heading">
              Malla curricular
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed pt-1">
              Una vista clara del plan de estudios: módulos, competencias, horas académicas y duración estimada.
            </p>
          </div>

          {/* Top Right Floating Badge */}
          <div className="bg-[#800020] text-white p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-3.5 border border-white/20 shrink-0 self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight font-heading">
                2.400 h
              </div>
              <div className="text-[10px] sm:text-xs font-black uppercase tracking-wider opacity-90">
                CARGA TOTAL
              </div>
            </div>
          </div>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          {/* Banner Bar */}
          <div className="bg-[#580016] text-white p-5 sm:p-6 flex items-center justify-between border-b border-white/10">
            <div className="space-y-0.5">
              <h3 className="text-lg sm:text-xl font-black font-heading">
                Distribución académica
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-medium">
                640 horas de práctica pre profesional incluidas en el plan.
              </p>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-100 text-[11px] font-black uppercase tracking-widest text-slate-400">
                  <th className="py-4 px-6">AÑO</th>
                  <th className="py-4 px-6">CÓDIGO</th>
                  <th className="py-4 px-6 min-w-[260px]">MÓDULO</th>
                  <th className="py-4 px-6">COMPETENCIAS</th>
                  <th className="py-4 px-6">HORAS</th>
                  <th className="py-4 px-6">DÍAS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mallaModules.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    {/* AÑO */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-block bg-slate-100 text-slate-700 text-xs font-extrabold px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </td>

                    {/* CÓDIGO */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-block bg-[#800020]/10 text-[#800020] text-xs font-black px-2.5 py-1 rounded-md font-mono">
                        {item.code}
                      </span>
                    </td>

                    {/* MÓDULO */}
                    <td className="py-4 px-6">
                      <div className="font-black text-slate-900 text-sm sm:text-base">
                        {item.name}
                      </div>
                      <div className={`h-1 bg-[#800020] rounded-full mt-1.5 ${item.progressWidth}`} />
                    </td>

                    {/* COMPETENCIAS */}
                    <td className="py-4 px-6 whitespace-nowrap text-slate-600 text-xs sm:text-sm font-medium">
                      {item.competencias}
                    </td>

                    {/* HORAS */}
                    <td className="py-4 px-6 whitespace-nowrap font-black text-slate-900 text-sm sm:text-base">
                      {item.horas}
                    </td>

                    {/* DÍAS */}
                    <td className="py-4 px-6 whitespace-nowrap text-slate-500 text-xs sm:text-sm font-medium">
                      {item.dias}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
