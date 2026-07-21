import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone, RefreshCw } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';

export default function ChatbotWidget({ isOpen, setIsOpen, onLogQuery }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '¡Hola! Bienvenida/o al Instituto Técnico "Señor de Mayo". Soy tu asistente virtual. ¿En qué te puedo asesorar hoy?',
      time: 'Ahora'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  const quickQuestions = [
    "¿Cuáles son los requisitos?",
    "¿Dónde quedan?",
    "¿Cuánto dura la carrera?",
    "¿Dónde hacen las prácticas?"
  ];

  const scrollToBottom = () => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const generateBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('requisito') || q.includes('documento') || q.includes('inscrip')) {
      return "¡Hola! Para inscribirte en el Técnico Medio en Enfermería necesitas: 1) Fotocopia de Cédula de Identidad, 2) Certificado de Nacimiento, 3) Título de Bachiller (fotocopia legalizada) y 4) 4 fotografías 4x4. Te recomiendo acercarte a nuestras oficinas en Calle Illampu N° 614 para una asesoría personalizada. ¿Necesitas saber algo más?";
    } else if (q.includes('donde') || q.includes('quedan') || q.includes('ubicacion') || q.includes('direccion') || q.includes('llegar')) {
      return "Nuestra sede central queda en la ciudad de La Paz: Calle Illampu N° 614 (entre Graneros y Santa Cruz). Atendemos de Lunes a Viernes de 08:00 a 18:30 y Sábados de 09:00 a 13:00.";
    } else if (q.includes('dura') || q.includes('tiempo') || q.includes('duracion') || q.includes('semestre') || q.includes('año')) {
      return "La carrera de Técnico Medio en Enfermería tiene una duración de 2 años (4 semestres académicos) contemplando un total de 2,400 horas de formación teórica, práctica y laboratorio.";
    } else if (q.includes('practica') || q.includes('hospital') || q.includes('internado') || q.includes('convenio')) {
      return "Nuestras prácticas se realizan en hospitales de prestigio como: Hospital Municipal Cotahuma, Hospital La Paz, Hospital de Clínicas, Hospital del Niño, Hospital de la Mujer, Hospital del Norte y centros del SEDES.";
    } else if (q.includes('costo') || q.includes('precio') || q.includes('mensualidad') || q.includes('cuota') || q.includes('pago')) {
      return "Los costos de inscripción y mensualidades varían según la modalidad y promociones vigentes. Te sugerimos consultar directamente en ventanilla de recepción (Calle Illampu 614) o comunicarte al teléfono +591 2 2456789.";
    } else if (q.includes('resolucion') || q.includes('acreditacion') || q.includes('ministerio') || q.includes('titulo')) {
      return "Contamos con pleno respaldo ministerial bajo la Resolución Ministerial N° 0049/2025 emitida por el Ministerio de Educación de Bolivia, otorgando Título Profesional en Provisión Nacional.";
    } else {
      return "Gracias por tu consulta. Para brindarte una respuesta más detallada, puedes llamarnos directamente al +591 2 2456789 o visitar nuestra sede en Calle Illampu N° 614. ¡Con gusto te atenderemos!";
    }
  };

  const handleSendMessage = (textToSend) => {
    const messageText = textToSend || inputText;
    if (!messageText.trim()) return;

    const userMsg = {
      sender: 'user',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    if (onLogQuery) {
      onLogQuery(messageText);
    }

    setTimeout(() => {
      const responseText = generateBotResponse(messageText);
      const botMsg = {
        sender: 'bot',
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 bg-[#800020] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border-2 border-[#d4af37] flex items-center gap-3 hover:scale-105 transition-all group"
          title="Asistente Virtual Señor de Mayo"
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
              <MessageSquare className="w-5 h-5 text-[#f8e596]" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#800020] animate-ping"></span>
          </div>
          <div className="hidden sm:block text-left">
            <div className="text-xs font-black text-[#f8e596] leading-none uppercase">¿Necesitas ayuda?</div>
            <div className="text-[11px] font-medium text-white/90">Asistente Virtual IA</div>
          </div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-4 left-4 z-50 w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border-2 border-[#d4af37] overflow-hidden flex flex-col h-[560px] animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#580016] via-[#800020] to-[#580016] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full border-2 border-[#d4af37] overflow-hidden bg-white/10 p-0.5">
                <img src="/images/nurse_avatar.png" alt="Nurse avatar" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white leading-tight flex items-center gap-1.5">
                  Asistente Señor de Mayo <Sparkles className="w-3.5 h-3.5 text-[#f8e596]" />
                </h4>
                <div className="text-[11px] text-gray-200 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span> Responde de inmediato
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Buttons Header Bar */}
          <div className="bg-gray-50 border-b border-gray-200 p-2.5 overflow-x-auto flex gap-2 no-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-[11px] font-semibold text-[#800020] bg-white border border-[#800020]/20 hover:border-[#800020] px-3 py-1.5 rounded-full whitespace-nowrap shadow-2xl hover:bg-[#800020]/5 transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50/50">
            {messages.map((msg, index) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={index}
                  className={`flex gap-2.5 ${isBot ? 'items-start' : 'items-end justify-end'}`}
                >
                  {isBot && (
                    <div className="w-7 h-7 rounded-full bg-[#800020] text-white flex items-center justify-center text-xs shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-[#f8e596]" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${
                      isBot
                        ? 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                        : 'bg-[#800020] text-white rounded-tr-none font-medium'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <div className={`text-[9px] mt-1 text-right ${isBot ? 'text-gray-400' : 'text-gray-200'}`}>
                      {msg.time}
                    </div>
                  </div>

                  {!isBot && (
                    <div className="w-7 h-7 rounded-full bg-[#d4af37] text-white flex items-center justify-center text-xs shrink-0">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              );
            })}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-white p-2.5 rounded-xl border border-gray-200 w-fit">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#800020]" />
                <span>Escribiendo respuesta...</span>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu pregunta aquí..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1 px-3.5 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-[#800020] focus:ring-1 focus:ring-[#800020]"
            />
            <button
              onClick={() => handleSendMessage()}
              className="p-2.5 bg-[#800020] hover:bg-[#580016] text-white rounded-xl shadow-md transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
