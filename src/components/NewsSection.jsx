import React, { useState } from 'react';
import { Newspaper, Calendar, Tag, ArrowRight, X } from 'lucide-react';

export default function NewsSection({ newsList }) {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ['Todas', 'Admisiones', 'Institucional', 'Académico'];

  const filteredNews = activeCategory === 'Todas'
    ? newsList
    : newsList.filter(n => n.category === activeCategory);

  return (
    <section id="noticias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="badge-guindo">
            <Newspaper className="w-3.5 h-3.5" /> Actualidad Institucional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Noticias y Novedades
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Mantente al tanto de nuestros eventos, inicios de clases, firmas de convenios hospitalarios y actividades académicas.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-[#800020] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#800020]/30 transition-all p-6 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1 font-bold text-[#800020] bg-[#800020]/10 px-2.5 py-0.5 rounded-full">
                    <Tag className="w-3 h-3" /> {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {article.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#800020] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#800020] hover:text-[#580016] pt-3 border-t border-gray-100"
              >
                Leer noticia completa <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 p-1.5 rounded-xl hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="inline-block bg-[#800020] text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                {selectedArticle.category}
              </span>
              <div className="text-xs text-gray-400">{selectedArticle.date}</div>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                {selectedArticle.title}
              </h3>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-sm text-gray-700 leading-relaxed">
              {selectedArticle.content}
            </div>

            <button
              onClick={() => setSelectedArticle(null)}
              className="w-full btn-primary py-3 justify-center text-sm rounded-xl"
            >
              Cerrar Noticia
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
