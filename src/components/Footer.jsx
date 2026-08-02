import React from 'react';
import { Lock, MapPin, Phone, Mail } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';
import { getAssetUrl } from '../lib/utils';

export default function Footer({ onOpenAdmin }) {
  return (
    <footer className="bg-[#141414] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-800">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center">
              <img 
                src={getAssetUrl("images/logo_senor_de_mayo.png")} 
                alt="Instituto Técnico Señor de Mayo" 
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-md"
              />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Formando profesionales de excelencia en salud con alta vocación de servicio desde el 22 de agosto del 2000.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={INSTITUTE_INFO.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-gray-800 hover:bg-[#1877F2] text-gray-400 hover:text-white transition-all duration-300 hover:scale-105"
                title="Síguenos en Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href={INSTITUTE_INFO.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-gray-800 hover:bg-black text-gray-400 hover:text-white transition-all duration-300 hover:scale-105 border border-transparent hover:border-gray-700"
                title="Síguenos en TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.72 4.12 1.08 1.09 2.56 1.66 4.08 1.75v3.9c-1.5-.12-2.98-.75-4.14-1.74-.11-.09-.2-.19-.3-.29v6.52c-.06 1.83-.55 3.69-1.57 5.17-1.48 2.12-3.9 3.47-6.52 3.51-2.58.05-5.12-1.12-6.68-3.18-1.58-2.07-2.07-4.88-1.33-7.4 1-3.4 4.39-5.74 7.93-5.32 1 .1 1.98.48 2.8 1.09.02-2.61-.02-5.22.01-7.83z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-bold text-xs text-white uppercase tracking-wider">Enlaces</div>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#hero" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="#carrera" className="hover:text-white transition-colors">Oferta Académica</a></li>
              <li><a href="#hospitales" className="hover:text-white transition-colors">Convenios</a></li>
              <li><a href="#resoluciones" className="hover:text-white transition-colors">Resoluciones</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Resoluciones */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold text-xs text-white uppercase tracking-wider">Acreditación Legal</div>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li><a href="#resoluciones" className="hover:text-white transition-colors">{INSTITUTE_INFO.accreditation}</a></li>
              <li><a href="#admisiones" className="hover:text-white transition-colors">Requisitos de Inscripción</a></li>
              <li>
                <button onClick={onOpenAdmin} className="hover:text-white flex items-center gap-1 text-gray-400 mt-2">
                  <Lock className="w-3 h-3 text-white" /> Acceso CMS
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-bold text-xs text-white uppercase tracking-wider">Contacto</div>
            <div className="space-y-2.5 text-xs text-gray-400 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>{INSTITUTE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>{INSTITUTE_INFO.phones.join(' / ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>{INSTITUTE_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>© 2026 Instituto Técnico Señor de Mayo. Todos los derechos reservados.</div>
          <div className="flex items-center gap-2">
            <span>Formando líderes en salud en Bolivia.</span>
            <span className="text-gray-700">|</span>
            <span>Desarrollado por <span className="font-semibold text-gray-400 hover:text-gray-300 transition-colors">XpandeZ</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

