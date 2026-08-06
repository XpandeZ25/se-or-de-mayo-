import React, { useState } from 'react';
import { X, Save, Edit3, Newspaper, Users, MessageSquare, ShieldCheck, Plus, CheckCircle2, Lock, LogOut, KeyRound, User } from 'lucide-react';

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('textos');
  const [savedNotice, setSavedNotice] = useState(false);

  // New Article Form
  const [newNewsTitle, setNewNewsTitle] = useState('');
  const [newNewsCategory, setNewNewsCategory] = useState('Académico');
  const [newNewsSummary, setNewNewsSummary] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    const validUsernames = ['admin.directiva@senordemayo.edu.bo', 'admin', 'directiva'];
    const validPasswords = ['S3norDeMayo#2026!SecureCMSPassKey', 'admin123', 'senordemayo2026'];

    if (validUsernames.includes(username.trim().toLowerCase()) && validPasswords.includes(password.trim())) {
      setIsAuthenticated(true);
      setLoginError('');
    } else {
      setLoginError('Usuario o contraseña incorrectos. Intente nuevamente.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    setLoginError('');
  };

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

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all cursor-pointer"
                title="Cerrar sesión"
              >
                <LogOut className="w-4 h-4" />
                <span>Cerrar Sesión</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-1.5 rounded-xl hover:bg-white/10 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* LOGIN SCREEN IF NOT AUTHENTICATED */}
        {!isAuthenticated ? (
          <div className="flex-1 p-6 flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 bg-[#800020]/10 text-[#800020] rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-extrabold text-gray-900 font-heading">Acceso Restringido CMS</h4>
                <p className="text-xs text-gray-500 font-medium">
                  Ingresa tus credenciales administrativas para acceder al panel de control.
                </p>
              </div>

              {loginError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold rounded-xl text-center">
                  {loginError}
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#800020]" /> Usuario o Correo Institucional:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="admin.directiva@senordemayo.edu.bo"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#800020] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 flex items-center gap-1.5">
                    <KeyRound className="w-3.5 h-3.5 text-[#800020]" /> Contraseña:
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#800020] focus:bg-white transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#800020] hover:bg-[#580016] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer active:scale-[0.98]"
                >
                  Iniciar Sesión
                </button>
              </form>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-800 space-y-1">
                <span className="font-bold block">Credenciales Demo de Prueba:</span>
                <div><strong>Usuario:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">admin.directiva@senordemayo.edu.bo</code> (o <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">admin</code>)</div>
                <div><strong>Contraseña:</strong> <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">S3norDeMayo#2026!SecureCMSPassKey</code> (o <code className="bg-amber-100 px-1 py-0.5 rounded text-amber-900">admin123</code>)</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col overflow-hidden">
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
    )}
  </div>
</div>
  );
}
