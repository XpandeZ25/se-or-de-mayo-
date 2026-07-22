import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Curriculum from './components/Curriculum';
import Hospitals from './components/Hospitals';
import LegalGuarantee from './components/LegalGuarantee';
import ChatbotBanner from './components/ChatbotBanner';
import VideoExperience from './components/VideoExperience';
import ChatbotWidget from './components/ChatbotWidget';
import WhatsAppWidget from './components/WhatsAppWidget';
import PreRegistrationForm from './components/PreRegistrationForm';
import FacilitiesSection from './components/FacilitiesSection';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';
import AdminModal from './components/AdminModal';

import { INITIAL_NEWS } from './data/mockData';

export default function App() {
  // CMS State
  const [missionText, setMissionText] = useState(
    "El INSTITUTO TÉCNICO \"SEÑOR DE MAYO\" se dedica a la formación continua del personal de salud mediante la investigación y la transmisión del conocimiento para el beneficio de la sociedad. Respaldado por la experiencia institucional y un sólido equipo docente, formando profesionales en Enfermería a nivel Técnico Medio comprometidos con el fortalecimiento del sistema de salud boliviano. Promovemos una enseñanza integral que integra saberes científicos e indígenas, garantiza atención de calidad en contextos de salud y enfermedad, y potencia el servicio responsable y solidario a la comunidad."
  );
  const [visionText, setVisionText] = useState(
    "El INSTITUTO TÉCNICO \"SEÑOR DE MAYO\" será reconocido por su identidad humanística en la educación, fomentando la vocación de servicio social. Se distinguirá por la excelencia de su planta docente y de los profesionales que forma, ambos comprometidos con la salud y guiados por un profundo sentido ético y de servicio. Asimismo, será un referente nacional en enseñanza, práctica y acción social frente a los problemas de salud que afectan a la población boliviana, ofreciendo soluciones basadas en investigación pertinente, atención de calidad en todos los niveles y una visión humanista de la sociedad."
  );

  const [videoUrl, setVideoUrl] = useState('videos/experiencia.mp4');
  const [newsList, setNewsList] = useState(INITIAL_NEWS);
  const [registrations, setRegistrations] = useState([
    {
      code: "SM-2026-8492",
      fullName: "Carmen Gloria Choque",
      phoneWhatsApp: "71234567",
      preferredShift: "Mañana (08:00 - 12:00)",
      date: "20/07/2026"
    }
  ]);
  const [chatLogs, setChatLogs] = useState([
    "¿Cuáles son los requisitos de inscripción?",
    "¿Dónde se realizan los internados en hospital?"
  ]);

  // Modal Controls
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleRegisterSubmit = (newReg) => {
    setRegistrations([newReg, ...registrations]);
  };

  const handleLogChatQuery = (query) => {
    setChatLogs([query, ...chatLogs]);
  };

  const handleOpenPreRegisterScroll = () => {
    const el = document.getElementById('admisiones');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbfcfd] flex flex-col font-sans">
      {/* Header */}
      <Header
        onOpenPreRegister={handleOpenPreRegisterScroll}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero onOpenPreRegister={handleOpenPreRegisterScroll} />
        
        <About
          missionText={missionText}
          visionText={visionText}
        />

        <Curriculum onOpenPreRegister={handleOpenPreRegisterScroll} />

        <Hospitals />

        <LegalGuarantee />

        <FacilitiesSection />

        <Testimonials />

        <ChatbotBanner onOpenChat={() => setIsChatOpen(true)} />

        <VideoExperience
          onOpenPreRegister={handleOpenPreRegisterScroll}
          videoUrl={videoUrl}
        />

        <PreRegistrationForm onRegisterSubmit={handleRegisterSubmit} />

        <LocationContact />
      </main>

      {/* Floating Chatbot Widget */}
      <ChatbotWidget
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
        onLogQuery={handleLogChatQuery}
      />

      {/* Floating WhatsApp Button */}
      <WhatsAppWidget />

      {/* Admin CMS Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        missionText={missionText}
        setMissionText={setMissionText}
        visionText={visionText}
        setVisionText={setVisionText}
        newsList={newsList}
        setNewsList={setNewsList}
        registrations={registrations}
        chatLogs={chatLogs}
      />

      {/* Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />
    </div>
  );
}

