import React from 'react';
import { Lock, MapPin, Phone, Mail } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';

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
                src="/images/logo_senor_de_mayo.png" 
                alt="Instituto Técnico Señor de Mayo" 
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-md"
              />
            </div>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Formando profesionales de excelencia en salud con alta vocación de servicio desde 1999.
            </p>
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
          <div>Formando líderes en salud en Bolivia.</div>
        </div>
      </div>
    </footer>
  );
}

