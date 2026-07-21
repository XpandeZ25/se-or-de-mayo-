import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/mockData';

export default function LocationContact() {
  return (
    <section id="contacto" className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight font-heading">
            Visítanos
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Te esperamos en nuestra sede central en La Paz para recibir una atención personalizada.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details Left */}
          <div className="lg:col-span-5 bg-gray-50 p-8 rounded-3xl border border-gray-200 shadow-sm space-y-6 flex flex-col justify-center">
            <h3 className="text-xl font-extrabold text-gray-900 border-b border-gray-200 pb-3 font-heading">
              Sede Principal
            </h3>

            <div className="space-y-5 text-sm text-gray-700">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#800020]/10 text-[#800020] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-gray-900">Dirección:</div>
                  <p className="text-gray-600">{INSTITUTE_INFO.address}</p>
                  <p className="text-xs text-gray-400 font-semibold">{INSTITUTE_INFO.city}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#800020]/10 text-[#800020] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-gray-900">Teléfonos Directos:</div>
                  <p className="text-gray-600 font-medium">{INSTITUTE_INFO.phones.join(' / ')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#800020]/10 text-[#800020] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-gray-900">Horarios de Atención:</div>
                  <p className="text-gray-600">{INSTITUTE_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Right */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative min-h-[400px]">
            <iframe
              title="Ubicación Instituto Señor de Mayo Calle Illampu La Paz"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.438598715104!2d-68.1396!3d-16.4975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf06716035f5%3A0xb7cf405e3f5bfbf6!2sCalle%20Illampu%20614%2C%20La%20Paz%2C%20Bolivia!5e0!3m2!1ses!2sbo!4v1700000000000!5m2!1ses!2sbo"
              className="w-full h-full min-h-[420px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

