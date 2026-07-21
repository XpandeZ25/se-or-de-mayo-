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
    "Formar profesionales Técnicos Medios en Enfermería altamente calificados, con profundos principios éticos, destrezas clínicas avanzadas y un compromiso inquebrantable con la salud de Bolivia."
  );
  const [visionText, setVisionText] = useState(
    "Ser reconocidos como el instituto técnico líder en el país, pionero en innovación pedagógica de la salud, acreditado con la máxima excelencia y expandiendo convenios con redes asistenciales de primer nivel."
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

