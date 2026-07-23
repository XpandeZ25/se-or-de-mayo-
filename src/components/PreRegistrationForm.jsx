import React, { useState } from 'react';
import { Send, CheckCircle2, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PreRegistrationForm({ onRegisterSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneWhatsApp: '',
    email: '',
    preferredShift: 'Mañana (08:00 - 12:00)'
  });

  const [submittedCode, setSubmittedCode] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phoneWhatsApp) return;

    const registrationCode = 'SM-2026-' + Math.floor(1000 + Math.random() * 9000);
    
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    if (onRegisterSubmit) {
      onRegisterSubmit({ ...formData, code: registrationCode, date: new Date().toLocaleDateString() });
    }

    setSubmittedCode(registrationCode);
  };

  return (
    <section id="admisiones" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Dark Maroon Panel */}
          <div className="lg:col-span-5 bg-[#580016] text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-heading leading-tight">
                Pre-Inscríbete en Señor de Mayo
              </h3>

              <p className="text-gray-200 text-sm leading-relaxed">
                Forma parte de la nueva generación de profesionales de salud con excelencia. Sé el primero en asegurar tu cupo para el siguiente semestre.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-100 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>Cupos Limitados para la Atención Personalizada</span>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-100 font-semibold">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span>Asesoría académica directa sin costo adicional</span>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-gray-300 border-t border-white/10 pt-4">
              Sede Central: Calle Illampu N° 614, La Paz.
            </div>
          </div>

          {/* Right White Form Panel */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center bg-white">
            {!submittedCode ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. María Elena Mamani Morales"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#800020] focus:bg-white transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Celular / WhatsApp *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. 76543210"
                      value={formData.phoneWhatsApp}
                      onChange={(e) => setFormData({ ...formData, phoneWhatsApp: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#800020] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      placeholder="ejemplo@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#800020] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Turno de Interés
                  </label>
                  <select
                    value={formData.preferredShift}
                    onChange={(e) => setFormData({ ...formData, preferredShift: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#800020] focus:bg-white transition-colors"
                  >
                    <option value="Mañana (08:00 - 12:00)">Mañana (08:00 - 12:00)</option>
                    <option value="Tarde (14:00 - 18:00)">Tarde (14:00 - 18:00)</option>
                    <option value="Noche (18:30 - 21:30)">Noche (18:30 - 21:30)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#580016] hover:bg-[#800020] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-full shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" /> Enviar Pre-Inscripción
                </button>

                <p className="text-[11px] text-gray-400 text-center mt-2">
                  Al enviar, aceptas ser contactado por nuestro equipo de admisiones.
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4 py-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border-2 border-emerald-300">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#800020] bg-[#800020]/10 px-3 py-1 rounded-full">
                    Pre-Inscripción Recepcionada
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 mt-2">¡Gracias, {formData.fullName}!</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto mt-1">
                    Un asesor de admisiones te contactará en breve. Presenta tu código en ventanilla para confirmar tu reserva.
                  </p>
                </div>

                <div className="p-3 bg-gray-50 border-2 border-dashed border-[#800020]/30 rounded-2xl max-w-xs mx-auto">
                  <div className="text-[10px] font-semibold text-gray-500 uppercase">Código de Ficha:</div>
                  <div className="text-lg font-bold text-[#800020] tracking-widest">{submittedCode}</div>
                </div>

                <button
                  onClick={() => setSubmittedCode(null)}
                  className="text-xs font-bold text-gray-600 underline hover:text-[#800020]"
                >
                  Registrar otro estudiante
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

