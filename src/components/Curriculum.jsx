import React, { useState } from 'react';
import { Check, Clock, BookOpen, Award, GraduationCap, ClipboardList, Settings, ShieldCheck, Activity } from 'lucide-react';

export default function Curriculum({ onOpenPreRegister }) {
  const [activeTab, setActiveTab] = useState('plan'); // 'plan', 'modelo'

  const tableData = [
    { label: "Carrera", value: "Enfermería" },
    { label: "Nivel", value: "Técnico Medio" },
    { label: "Duración", value: "2 años / 24 meses" },
    { label: "Modalidad", value: "Presencial (30% teórico - 70% práctico)" },
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
    <section id="carrera" className="py-20 sm:py-24 bg-[#f1f5f9]/60 space-y-16">
      {/* SECTION HEADER & TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-[#800020] uppercase tracking-widest block">
            FORMACIÓN PROFESIONAL
          </span>
          <h2 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold text-[#1e1b4b] tracking-tight font-heading">
            Currículum Académico
          </h2>
          <p className="text-slate-500 text-base sm:text-lg font-medium leading-relaxed">
            Programa académico oficial aprobado y orientado al desarrollo de competencias y la práctica en salud.
          </p>

          {/* Tab Selector Button Row */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            <button
              onClick={() => setActiveTab('plan')}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'plan'
                  ? 'bg-[#800020] text-white shadow-lg scale-102'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              Plan y Malla Curricular
            </button>
            <button
              onClick={() => setActiveTab('modelo')}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'modelo'
                  ? 'bg-[#800020] text-white shadow-lg scale-102'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              Modelo Pedagógico y Currículum
            </button>
          </div>
        </div>
      </div>

      {/* PLAN Y MALLA TAB VIEW */}
      {activeTab === 'plan' && (
        <div className="space-y-24 animate-in fade-in duration-300">
          {/* SECTION 1: OFERTA ACADÉMICA & PERFIL */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Column: Program Details Table */}
              <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="bg-[#800020] text-white py-4 px-6 sm:px-8 grid grid-cols-12 font-extrabold text-sm sm:text-base uppercase tracking-wider">
                    <div className="col-span-4 sm:col-span-3">Artículo</div>
                    <div className="col-span-8 sm:col-span-9">Detalle del Programa</div>
                  </div>

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
          <div id="malla" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-bold text-[#800020] uppercase tracking-widest block">
                  PLAN DE ESTUDIOS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1e1b4b] tracking-tight font-heading">
                  Malla curricular
                </h2>
                <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed pt-1">
                  Una vista clara del plan de estudios: módulos, competencias, horas académicas y duración estimada.
                </p>
              </div>

              {/* Top Right Floating Carga Horaria Badge */}
              <div className="bg-[#800020] text-white p-4 sm:p-5 rounded-2xl shadow-2xl flex items-center gap-3.5 border border-white/20 shrink-0 self-start md:self-auto">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold tracking-tight font-heading">
                    2.400 h
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider opacity-90">
                    CARGA TOTAL
                  </div>
                </div>
              </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
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
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className="inline-block bg-slate-100 text-slate-700 text-xs font-extrabold px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap">
                          <span className="inline-block bg-[#800020]/10 text-[#800020] text-xs font-black px-2.5 py-1 rounded-md font-mono">
                            {item.code}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-black text-slate-900 text-sm sm:text-base">
                            {item.name}
                          </div>
                          <div className={`h-1 bg-[#800020] rounded-full mt-1.5 ${item.progressWidth}`} />
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap text-slate-600 text-xs sm:text-sm font-medium">
                          {item.competencias}
                        </td>
                        <td className="py-4 px-6 whitespace-nowrap font-black text-slate-900 text-sm sm:text-base">
                          {item.horas}
                        </td>
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
        </div>
      )}

      {/* MODELO PEDAGÓGICO & CURRÍCULUM DETALLADO TAB VIEW */}
      {activeTab === 'modelo' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-300">
          {/* Top Row: Objetivo & Perfil */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Objetivo General & Perfil de egreso (8 Cols) */}
            <div className="lg:col-span-8 space-y-8 flex flex-col justify-between">
              {/* Objetivo General */}
              <div className="bg-[#fffbfa] border border-[#800020]/15 p-6 sm:p-8 rounded-3xl space-y-3 shadow-xs">
                <span className="text-[#800020] text-xs font-black uppercase tracking-widest block flex items-center gap-1.5">
                  <Award className="w-4 h-4" /> Objetivo General
                </span>
                <p className="text-slate-800 text-lg sm:text-xl font-bold leading-relaxed">
                  "Formar técnicos medios en enfermería con competencias para ejecutar cuidados básicos, acciones preventivas y educativas, y procedimientos de apoyo en servicios de salud y comunidad, con calidad, calidez y responsabilidad social."
                </p>
              </div>

              {/* Perfil de Egreso */}
              <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl space-y-4 shadow-xs flex-1 mt-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                  Perfil de Egreso
                </h3>
                <div className="space-y-3 text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  <p>
                    El egresado/a será capaz de brindar cuidados básicos integrales de enfermería a la persona, familia y comunidad, aplicando normas, procedimientos y principios éticos, con enfoque intercultural, humanizado y de promoción de la salud.
                  </p>
                  <p>
                    También podrá participar en actividades de prevención, educación para la salud, apoyo en procedimientos básicos y trabajo en equipo dentro del sistema de salud.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Competencias (4 Cols) */}
            <div className="lg:col-span-4 bg-gradient-to-br from-[#800020] to-[#580016] text-white p-7 sm:p-8 rounded-3xl space-y-6 border border-white/20 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-black font-heading flex items-center gap-2 mb-6">
                  <GraduationCap className="w-6 h-6" /> Competencias del Estudiante
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm font-medium">
                  {[
                    "Ejecuta procedimientos básicos de enfermería con seguridad.",
                    "Identifica necesidades básicas de salud en la persona, familia y comunidad.",
                    "Aplica medidas de bioseguridad y prevención de infecciones.",
                    "Participa en campañas de promoción y prevención.",
                    "Brinda apoyo en la atención integral bajo supervisión profesional."
                  ].map((comp, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start">
                      <Check className="w-4.5 h-4.5 stroke-[3] shrink-0 mt-0.5 text-white bg-white/20 rounded-full p-0.5" />
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenPreRegister}
                className="w-full mt-8 bg-white hover:bg-slate-100 text-[#800020] font-black text-sm uppercase tracking-wider py-4 px-6 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                Preinscribirse Ahora
              </button>
            </div>
          </div>

          {/* Middle Section: Areas de Formacion */}
          <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading flex items-center gap-2">
              <Activity className="w-6 h-6 text-[#800020]" /> Áreas de Formación
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/50">
                <span className="font-extrabold text-slate-900 block mb-2 text-sm sm:text-base">Formación General</span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  Proceso de la salud, comunicación y ética profesional.
                </p>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/50">
                <span className="font-extrabold text-slate-900 block mb-2 text-sm sm:text-base">Formación Científico-Técnica</span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  Anatomía, primeros auxilios, procedimientos básicos de enfermería, salud sexual y reproductiva, atención integral al menor de 5 años y escolar, y vigilancia epidemiológica.
                </p>
              </div>
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200/50">
                <span className="font-extrabold text-slate-900 block mb-2 text-sm sm:text-base">Formación Socio-Comunitaria</span>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  Salud familiar y comunitaria, promoción y prevención, educación en salud, saneamiento básico y medicina tradicional.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Metodología, Evaluación y Requisitos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Metodología */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xs space-y-4">
              <h4 className="text-lg font-black text-slate-900 font-heading flex items-center gap-2 border-b border-slate-100 pb-2">
                <Settings className="w-5 h-5 text-[#800020]" /> Estructura Metodológica
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600 list-disc list-inside">
                <li>Clases teóricas participativas.</li>
                <li>Laboratorio de simulación clínica.</li>
                <li>Estudio de casos en salud.</li>
                <li>Trabajo comunitario.</li>
                <li>Prácticas hospitalarias supervisadas.</li>
              </ul>
            </div>

            {/* Evaluación */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xs space-y-4">
              <h4 className="text-lg font-black text-slate-900 font-heading flex items-center gap-2 border-b border-slate-100 pb-2">
                <ClipboardList className="w-5 h-5 text-[#800020]" /> Evaluación
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600 list-disc list-inside">
                <li>Evaluación formativa y sumativa.</li>
                <li>Pruebas escritas de conocimiento.</li>
                <li>Observación de desempeño.</li>
                <li>Listas de cotejo para simulación.</li>
                <li>Informes técnicos de práctica.</li>
                <li>Evaluación por competencias.</li>
              </ul>
            </div>

            {/* Requisitos */}
            <div className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-xs space-y-4">
              <h4 className="text-lg font-black text-slate-900 font-heading flex items-center gap-2 border-b border-slate-100 pb-2">
                <ShieldCheck className="w-5 h-5 text-[#800020]" /> Requisitos de Implementación
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm font-medium text-slate-600 list-disc list-inside">
                <li>Laboratorio de enfermería equipado.</li>
                <li>Docentes con formación profesional.</li>
                <li>Reglamento académico oficial.</li>
                <li>Control de prácticas y bioseguridad.</li>
              </ul>
            </div>
          </div>

          {/* Observación Normativa */}
          <div className="p-6 bg-slate-100 border border-slate-200 rounded-3xl text-xs sm:text-sm text-slate-700 font-medium">
            <strong>Observación Normativa:</strong> En Bolivia, la formación técnica en salud se basa en diseños curriculares oficiales para carreras del área de salud, incluyendo enfermería, con orientación a competencias y a la atención primaria en salud bajo el modelo SAFCI.
          </div>
        </div>
      )}
    </section>
  );
}
