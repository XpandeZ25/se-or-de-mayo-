import React, { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play } from 'lucide-react';

export default function VideoExperience({ onOpenPreRegister, videoUrl }) {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play when scrolled into view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().then(() => setIsPlaying(true)).catch(() => {});
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      if (video) observer.unobserve(video);
    };
  }, [videoUrl]);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="experiencia" className="py-20 sm:py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Title, Subtitle & Pre-Inscripción Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-sm font-black text-[#800020] uppercase tracking-widest block">
                VIVE LA EXPERIENCIA SEÑOR DE MAYO
              </span>
              <h2 className="text-4xl sm:text-6xl font-black text-[#1e1b4b] tracking-tight font-heading leading-tight">
                Conoce de cerca nuestra formación
              </h2>
              <p className="text-slate-600 text-lg sm:text-xl font-medium leading-relaxed max-w-xl pt-1">
                Un vistazo real al ambiente académico, la energía de nuestros estudiantes y el camino profesional que puedes comenzar aquí.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPreRegister}
                className="bg-[#800020] hover:bg-[#580016] text-white font-black text-sm uppercase tracking-wider py-4 px-8 rounded-2xl shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer inline-block"
              >
                Quiero pre-inscribirme
              </button>
            </div>
          </div>

          {/* Right Column: Vertical Video Player Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] sm:w-[320px] h-[500px] sm:h-[560px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 shrink-0 group">
              {/* Video Tag */}
              {videoUrl ? (
                <video
                  ref={videoRef}
                  src={videoUrl}
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                /* Placeholder before user provides the video */
                <div className="w-full h-full relative bg-slate-800 flex flex-col items-center justify-center p-6 text-center space-y-4">
                  <img
                    src="/images/nursing_practice_lab.png"
                    alt="Vista previa video estudiantes"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#800020] text-white flex items-center justify-center shadow-2xl animate-pulse">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                  <p className="relative z-10 text-xs font-bold text-white/90">
                    Video de la experiencia estudiantil
                  </p>
                </div>
              )}

              {/* Floating Overlay Badge: APRENDIENDO */}
              <div className="absolute bottom-16 left-4 right-4 z-20 flex justify-center">
                <span className="bg-emerald-600 text-white font-black text-xs uppercase tracking-widest px-4 py-1.5 rounded-lg shadow-lg border border-emerald-400">
                  APRENDIENDO
                </span>
              </div>

              {/* Audio Toggle Button */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <button
                  onClick={toggleAudio}
                  className="w-full bg-[#800020]/90 hover:bg-[#800020] backdrop-blur-md text-white font-black text-xs uppercase tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 border border-white/20 shadow-lg transition-colors cursor-pointer"
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4" /> Activar audio
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4" /> Silenciar audio
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
