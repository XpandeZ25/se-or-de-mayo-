import React, { useState } from 'react';
import { X, Save, Edit3, Newspaper, Users, MessageSquare, ShieldCheck, Plus, CheckCircle2 } from 'lucide-react';

export default function AdminModal({
  isOpen,
  onClose,
  missionText,
  setMissionText,
  visionText,
  setVisionText,
  newsList,
  setNewsList,
  registrations,
  chatLogs
}) {
  const [activeTab, setActiveTab] = useState('textos');
  const [savedNotice, setSavedNotice] = useState(false);

  // New Article Form
  const [newNewsTitle, setNewNewsTitle] = useState('');
  const [newNewsCategory, setNewNewsCategory] = useState('Académico');
  const [newNewsSummary, setNewNewsSummary] = useState('');

  if (!isOpen) return null;

  const handleSaveTextos = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleAddNews = (e) => {
    e.preventDefault();
    if (!newNewsTitle || !newNewsSummary) return;

    const newItem = {
      id: Date.now(),
      title: newNewsTitle,
      category: newNewsCategory,
      date: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' }),
      summary: newNewsSummary,
      content: newNewsSummary
    };

    setNewsList([newItem, ...newsList]);
    setNewNewsTitle('');
    setNewNewsSummary('');
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full h-[640px] flex flex-col overflow-hidden shadow-2xl relative border-2 border-[#800020]">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#580016] to-[#800020] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/10 text-[#f8e596]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">Panel de Administración CMS</h3>
              <p className="text-xs text-gray-200">Gestión de contenidos directiva - Instituto Señor de Mayo</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1.5 rounded-xl hover:bg-white/10"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="bg-gray-100 border-b border-gray-200 px-6 pt-3 flex gap-4 text-xs font-bold">
          <button
            onClick={() => setActiveTab('textos')}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'textos'
                ? 'border-[#800020] text-[#800020]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Edit3 className="w-4 h-4" /> Misión y Visión
          </button>

          <button
            onClick={() => setActiveTab('noticias')}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'noticias'
                ? 'border-[#800020] text-[#800020]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Newspaper className="w-4 h-4" /> Agregar Noticias ({newsList.length})
          </button>

          <button
            onClick={() => setActiveTab('inscritos')}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'inscritos'
                ? 'border-[#800020] text-[#800020]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <Users className="w-4 h-4" /> Pre-Inscritos ({registrations.length})
          </button>

          <button
            onClick={() => setActiveTab('chatlogs')}
            className={`pb-3 flex items-center gap-2 border-b-2 transition-colors ${
              activeTab === 'chatlogs'
                ? 'border-[#800020] text-[#800020]'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            <MessageSquare className="w-4 h-4" /> Consultas Chatbot ({chatLogs.length})
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50/50">
          {savedNotice && (
            <div className="mb-4 p-3 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl border border-emerald-300 flex items-center gap-2 animate-bounce">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> ¡Cambios guardados con éxito en la plataforma!
            </div>
          )}

          {/* TAB 1: EDIT MISSION & VISION */}
          {activeTab === 'textos' && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <label className="block text-sm font-bold text-gray-900">
                  Editar Texto de Misión Institucional:
                </label>
                <textarea
                  rows={4}
                  value={missionText}
                  onChange={(e) => setMissionText(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#800020]"
                />
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <label className="block text-sm font-bold text-gray-900">
                  Editar Texto de Visión Institucional:
                </label>
                <textarea
                  rows={4}
                  value={visionText}
                  onChange={(e) => setVisionText(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#800020]"
                />
              </div>

              <button
                onClick={handleSaveTextos}
                className="btn-primary py-3 px-6 text-sm rounded-xl"
              >
                <Save className="w-4 h-4" /> Guardar Cambios en la Web
              </button>
            </div>
          )}

          {/* TAB 2: NEWS MANAGEMENT */}
          {activeTab === 'noticias' && (
            <div className="space-y-6">
              <form onSubmit={handleAddNews} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-4">
                <h4 className="font-bold text-gray-900 text-base">Publicar Nueva Noticia</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Título de la noticia:</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Apertura de laboratorios 2026"
                      value={newNewsTitle}
                      onChange={(e) => setNewNewsTitle(e.target.value)}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Categoría:</label>
                    <select
                      value={newNewsCategory}
                      onChange={(e) => setNewNewsCategory(e.target.value)}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                    >
                      <option value="Admisiones">Admisiones</option>
                      <option value="Institucional">Institucional</option>
                      <option value="Académico">Académico</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">Resumen del contenido:</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Detalles sobre el anuncio..."
                    value={newNewsSummary}
                    onChange={(e) => setNewNewsSummary(e.target.value)}
                    className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                  />
                </div>

                <button type="submit" className="btn-primary py-2.5 px-5 text-xs rounded-xl">
                  <Plus className="w-4 h-4" /> Publicar Noticia
                </button>
              </form>

              {/* Published News List */}
              <div className="space-y-3">
                <h5 className="font-bold text-xs uppercase tracking-wider text-gray-500">Noticias Publicadas:</h5>
                {newsList.map((item) => (
                  <div key={item.id} className="p-4 bg-white rounded-xl border border-gray-200 flex items-center justify-between text-xs">
                    <div>
                      <span className="font-bold text-[#800020]">{item.category}</span> • <span className="text-gray-400">{item.date}</span>
                      <div className="font-bold text-gray-900 mt-0.5">{item.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PRE-REGISTRATIONS TABLE */}
          {activeTab === 'inscritos' && (
            <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-700 text-xs uppercase font-bold border-b border-gray-200">
                    <th className="p-3">Código</th>
                    <th className="p-3">Estudiante</th>
                    <th className="p-3">WhatsApp / Cédula</th>
                    <th className="p-3">Turno</th>
                    <th className="p-3">Fecha</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-xs">
                  {registrations.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="p-6 text-center text-gray-400">
                        No hay solicitudes de pre-inscripción aún.
                      </td>
                    </tr>
                  ) : (
                    registrations.map((reg, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-[#800020]">{reg.code}</td>
                        <td className="p-3 font-semibold text-gray-900">{reg.fullName}</td>
                        <td className="p-3 text-gray-700">{reg.phoneWhatsApp}</td>
                        <td className="p-3 font-medium text-emerald-700">{reg.preferredShift}</td>
                        <td className="p-3 text-gray-400">{reg.date}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 4: CHATBOT LOGS */}
          {activeTab === 'chatlogs' && (
            <div className="space-y-3">
              <h5 className="font-bold text-xs uppercase tracking-wider text-gray-500">
                Historial de preguntas ingresadas por visitantes al Chatbot:
              </h5>
              {chatLogs.length === 0 ? (
                <div className="p-8 bg-white rounded-2xl text-center text-gray-400 text-xs">
                  Aún no hay preguntas registradas en la sesión.
                </div>
              ) : (
                chatLogs.map((log, idx) => (
                  <div key={idx} className="p-3.5 bg-white rounded-xl border border-gray-200 text-xs flex items-center justify-between">
                    <span className="font-medium text-gray-800">"{log}"</span>
                    <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-bold">Atendido</span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
