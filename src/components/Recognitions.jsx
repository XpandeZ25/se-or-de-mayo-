import React, { useState } from 'react';
import { Award, Eye, X, FileText, Users, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAssetUrl, cn } from '../lib/utils';

export default function Recognitions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const cards = [
    {
      url: getAssetUrl('images/reconocimiento_1.jpg'),
      title: "Certificado Oficial",
      description: "Otorgado por la Honorable Cámara de Diputados de Bolivia en honor al mérito civil.",
      badge: "Documento Oficial",
      badgeColor: "bg-amber-500/10 text-amber-700 border-amber-500/20",
      imageClass: "w-full h-full object-contain p-4 bg-white",
      aspectClass: "aspect-[3/4]",
      category: "documento"
    },
    {
      url: getAssetUrl('images/reconocimiento_3.jpg'),
      title: "Respaldo SEDES La Paz",
      description: "Reconocimiento a la destacada labor en el Programa de Lucha Contra el Cáncer.",
      badge: "Salud Pública",
      badgeColor: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
      imageClass: "w-full h-full object-contain p-4 bg-white",
      aspectClass: "aspect-[3/4]",
      category: "documento"
    },
    {
      url: getAssetUrl('images/reconocimiento_entrega.jpg'),
      title: "Ceremonia de Reconocimiento",
      description: "La Lic. María del Rosario Revollo Paz recibiendo el reconocimiento por parte de autoridades sanitarias.",
      badge: "Entrega Oficial",
      badgeColor: "bg-rose-500/10 text-rose-700 border-rose-500/20",
      imageClass: "w-full h-full object-cover",
      aspectClass: "aspect-[4/3]",
      category: "galeria"
    },
    {
      url: getAssetUrl('images/reconocimiento_mesa.jpg'),
      title: "Mesa de Presídium",
      description: "Autoridades del SEDES La Paz y de la Cámara de Diputados durante la entrega formal de distinciones.",
      badge: "Mesa de Honor",
      badgeColor: "bg-blue-500/10 text-blue-700 border-blue-500/20",
      imageClass: "w-full h-full object-cover",
      aspectClass: "aspect-[4/3]",
      category: "galeria"
    },
    {
      url: getAssetUrl('images/reconocimiento_entrega_2.jpg'),
      title: "Entrega del Reconocimiento",
      description: "Momento de la entrega de la distinción oficial en las instalaciones del Gobierno Autónomo Departamental de La Paz.",
      badge: "Acto de Entrega",
      badgeColor: "bg-purple-500/10 text-purple-700 border-purple-500/20",
      imageClass: "w-full h-full object-cover",
      aspectClass: "aspect-[4/3]",
      category: "galeria"
    },
    {
      url: getAssetUrl('images/reconocimiento_autoridades.jpg'),
      title: "Comitiva Institucional",
      description: "Autoridades y directivas del Instituto Técnico Señor de Mayo en la ceremonia oficial.",
      badge: "Autoridades",
      badgeColor: "bg-indigo-500/10 text-indigo-700 border-indigo-500/20",
      imageClass: "w-full h-full object-contain p-2 bg-slate-900/5",
      aspectClass: "aspect-[3/4]",
      category: "galeria"
    },
    {
      url: getAssetUrl('images/reconocimiento_estudiantes.jpg'),
      title: "Comunidad Estudiantil",
      description: "Estudiantes de la carrera de Enfermería participando activamente del acto conmemorativo de reconocimiento.",
      badge: "Estudiantes",
      badgeColor: "bg-[#800020]/10 text-[#800020] border-[#800020]/20",
      imageClass: "w-full h-full object-cover",
      aspectClass: "aspect-[4/3]",
      category: "galeria"
    }
  ];

  const filteredCards = selectedCategory === 'todos'
    ? cards
    : cards.filter(card => card.category === selectedCategory);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  const currentCard = filteredCards[activeIndex] || filteredCards[0];

  return (
    <section id="reconocimientos" className="py-20 sm:py-24 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header & Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Distinción Legislativa y de Salud
            </div>
            <h2 className="text-2xl sm:text-3.5xl lg:text-4.5xl font-extrabold text-[#1e1b4b] tracking-tight font-heading">
              Nuestros Reconocimientos
            </h2>
            <div className="relative bg-[#800020]/5 border-l-4 border-[#800020] p-5 rounded-r-2xl">
              <p className="text-slate-800 font-medium leading-relaxed text-sm sm:text-base">
                La <strong className="text-slate-900 font-extrabold">Brigada Parlamentaria de La Paz</strong> y la <strong className="text-slate-900 font-extrabold">Honorable Cámara de Diputados</strong> otorgaron un Reconocimiento Oficial a la <strong className="text-[#800020] font-extrabold">Lic. María del Rosario Revollo Paz</strong>, gerente propietaria del Instituto Técnico Señor de Mayo, por su destacada labor en el impulso del Programa Departamental de Lucha Contra el Cáncer del SEDES La Paz.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:pt-14 space-y-4 text-slate-650 text-sm sm:text-base leading-relaxed">
            <p>
              Este reconocimiento resalta su liderazgo, compromiso y aporte al fortalecimiento de la salud pública, promoviendo la prevención, diagnóstico oportuno y atención integral del cáncer en beneficio del Departamento de La Paz y del Estado Plurinacional de Bolivia.
            </p>
            <p className="text-slate-500 italic text-xs sm:text-sm">
              El acto fue respaldado por las firmas y sellos oficiales de la Cámara de Diputados y la Brigada Parlamentaria de La Paz, reafirmando el valor de su contribución al desarrollo social y sanitario del país.
            </p>
          </div>
        </div>



        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 pb-4">
          {[
            { id: 'todos', label: 'Todos' },
            { id: 'documento', label: 'Documentos Oficiales' },
            { id: 'galeria', label: 'Galería del Acto' }
          ].map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setActiveIndex(0); // Reset lightbox index when category changes
                }}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-colors duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-white' 
                    : 'text-slate-600 hover:text-[#800020] bg-slate-50 hover:bg-[#800020]/5 border border-slate-200'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#800020] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Premium Card Grid with Layout Animations */}
        <motion.div 
          layout
          className={cn(
            "grid grid-cols-1 gap-8 pt-2 mx-auto",
            filteredCards.length === 1 
              ? "max-w-md grid-cols-1" 
              : filteredCards.length === 2 
                ? "max-w-3xl md:grid-cols-2" 
                : "max-w-6xl md:grid-cols-2 lg:grid-cols-3"
          )}
        >
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={card.url}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex flex-col overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Image Container with Zoom & Overlay */}
                <div
                  onClick={() => openLightbox(idx)}
                  className={`relative ${card.aspectClass || 'aspect-[4/3]'} bg-slate-50 overflow-hidden cursor-zoom-in border-b border-slate-100`}
                >
                  <img
                    src={card.url}
                    alt={card.title}
                    loading="lazy"
                    decoding="async"
                    className={`${card.imageClass} transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105`}
                  />

                  {/* Dark Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-slate-900 transform scale-90 group-hover:scale-100 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Text Info Below Image */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${card.badgeColor}`}>
                      {card.badge}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight font-heading group-hover:text-[#800020] transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed font-sans">
                      {card.description}
                    </p>
                  </div>

                  <button
                    onClick={() => openLightbox(idx)}
                    className="w-full py-2.5 px-4 rounded-xl text-center text-xs font-bold text-slate-700 bg-slate-50 hover:bg-[#800020]/10 hover:text-[#800020] border border-slate-200 transition-colors duration-300 cursor-pointer active:scale-[0.97] transform"
                  >
                    Ampliar Imagen
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Seals & Badges */}
        <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
            <FileText className="w-6 h-6 text-[#800020] mb-2" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-800">Cámara de Diputados</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
            <Users className="w-6 h-6 text-amber-600 mb-2" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-800">Brigada Parl. La Paz</span>
          </div>
          <div className="flex flex-col items-center justify-center p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
            <Calendar className="w-6 h-6 text-emerald-600 mb-2" />
            <span className="text-[10px] sm:text-xs font-bold text-slate-800">SEDES La Paz</span>
          </div>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all border border-white/10 cursor-pointer z-[110] active:scale-[0.97] transform"
              title="Cerrar modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image Display */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-4xl max-h-[80vh] w-full flex items-center justify-center"
            >
              <img
                src={currentCard.url}
                alt={currentCard.title}
                decoding="async"
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10"
              />
            </motion.div>

            {/* Caption & Navigation Inside Lightbox */}
            <div className="mt-6 text-center text-white space-y-2 max-w-xl px-4 z-[105] font-sans">
              <span className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider ${currentCard.badgeColor.replace('/10', '/30')}`}>
                {currentCard.badge}
              </span>
              <h4 className="text-xl font-bold tracking-tight mt-2">{currentCard.title}</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                {currentCard.description}
              </p>

              {/* Dot Indicators */}
              <div className="flex justify-center gap-2 pt-3">
                {filteredCards.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeIndex === i ? 'bg-[#800020] w-6' : 'bg-white/40 hover:bg-white/75'
                      }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
