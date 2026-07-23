import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonialsList = [
    {
      id: 1,
      quote: "Al principio tenía miedo de entrar a un hospital, pero en las prácticas los licenciados te van guiando paso a paso. Eso me ayudó muchísimo a agarrar confianza y destreza en cada procedimiento.",
      author: "María F.",
      role: "Primer año"
    },
    {
      id: 2,
      quote: "Me gusta que no todo se queda en teoría. Desde el primer año practicamos, hacemos consultas, nos corrigen con paciencia y uno se siente totalmente preparado para la atención real.",
      author: "José L.",
      role: "Segundo año"
    },
    {
      id: 3,
      quote: "Lo que más valoro es el ambiente académico. Hay exigencia en cada materia, sí, pero también un apoyo humano constante. Si pones de tu parte, aquí aprendes de verdad.",
      author: "Daniela R.",
      role: "Estudiante en prácticas"
    },
    {
      id: 4,
      quote: "Entré por recomendación de una graduada y me quedé muy tranquila. Me orientaron con los requisitos y los docentes están siempre atentos para resolver cualquier duda.",
      author: "Camila S.",
      role: "Turno mañana"
    },
    {
      id: 5,
      quote: "Las clases en el laboratorio de simulación me gustaron bastante porque hacemos casos reales y procedimientos intensivos. Ahí entiendes la verdadera importancia de la enfermería.",
      author: "Kevin M.",
      role: "Turno tarde"
    },
    {
      id: 6,
      quote: "Buscaba una institución seria que me permita superarme y trabajar en salud. El Instituto Señor de Mayo me dio ese impulso profesional que necesitaba para empezar.",
      author: "Rocío V.",
      role: "Turno noche"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#f1f5f9]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold text-[#800020] uppercase tracking-widest block">
            Voces Señor de Mayo
          </span>
          <h2 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold text-[#1e1b4b] tracking-tight font-heading">
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
            Historias reales de confianza, práctica y acompañamiento durante su formación en enfermería.
          </p>
        </div>

        {/* 6 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {testimonialsList.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Icon & Text */}
                <div className="relative">
                  <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-850 text-base font-heading">
                    {item.author}
                  </div>
                  <div className="text-[11px] font-semibold text-[#800020] uppercase tracking-wider mt-0.5">
                    {item.role}
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-[#800020]/10 text-[#800020] flex items-center justify-center font-bold text-xs">
                  {item.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
