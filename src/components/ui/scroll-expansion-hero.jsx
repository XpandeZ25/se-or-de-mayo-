'use client';

import {
  useEffect,
  useRef,
  useState
} from 'react';
import { motion } from 'framer-motion';

export default function ScrollExpandMedia({
  mediaType = 'image',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  subtitle,
  date,
  scrollToExpand,
  textBlend,
  children,
}) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState(false);
  const [touchStartY, setTouchStartY] = useState(0);
  const [isMobileState, setIsMobileState] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e) => {
      if (!touchStartY) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = () => {
      setTouchStartY(0);
    };

    const handleScroll = () => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex flex-col items-center justify-start min-h-[100dvh]">
        <div className="relative w-full flex flex-col items-center min-h-[100dvh]">
          {bgImageSrc && (
            <motion.div
              className="absolute inset-0 z-0 h-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 - scrollProgress }}
              transition={{ duration: 0.1 }}
            >
              <img
                src={bgImageSrc}
                alt="Background"
                className="w-screen h-screen object-cover object-center scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#580016]/45 via-[#800020]/40 to-[#3a000e]/60" />
            </motion.div>
          )}

          <div className="container mx-auto flex flex-col items-center justify-start relative z-10">
            <div className="flex flex-col items-center justify-center w-full h-[100dvh] relative">
              <div
                className="absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-3xl overflow-hidden shadow-2xl"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 20px 60px rgba(0, 0, 0, 0.4)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className="relative w-full h-full pointer-events-none">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className="w-full h-full rounded-2xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/20 rounded-2xl"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 0.2 - scrollProgress * 0.2 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className="relative w-full h-full pointer-events-none">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover rounded-2xl"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/20 rounded-2xl"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 0.2 - scrollProgress * 0.2 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative w-full h-full flex flex-col items-center justify-start pt-6 sm:pt-10">
                    <img
                      src={mediaSrc}
                      alt={title || 'Media content'}
                      className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    />
                    
                    {/* Prominent Large Logo INSIDE the expanding card */}
                    <motion.div 
                      className="relative z-20 pointer-events-none px-4 text-center"
                      style={{
                        scale: 1 + scrollProgress * 0.25,
                      }}
                    >
                      <img
                        src="images/logo_senor_de_mayo.png"
                        alt="Logo Señor de Mayo"
                        className="h-20 sm:h-32 md:h-40 lg:h-48 w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] filter brightness-105 mx-auto"
                      />
                    </motion.div>

                    <motion.div
                      className="absolute inset-0 bg-black/15 rounded-2xl"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 0.1 - scrollProgress * 0.1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className="flex flex-col items-center text-center relative z-10 mt-4 transition-none">
                  {date && (
                    <p
                      className="text-lg md:text-2xl text-white font-extrabold shadow-sm bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm"
                      style={{ transform: `translateX(-${textTranslateX}vw)` }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-white font-bold text-center mt-2 bg-black/40 px-4 py-1 rounded-full backdrop-blur-sm"
                      style={{ transform: `translateX(${textTranslateX}vw)` }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`flex items-center justify-center text-center gap-2 sm:gap-4 w-full relative z-10 transition-none flex-col ${
                  textBlend ? 'mix-blend-difference' : 'mix-blend-normal'
                }`}
              >

                <motion.h2
                  className="text-xl sm:text-2xl lg:text-3.5xl font-extrabold !text-white uppercase tracking-wider font-heading transition-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                  style={{ color: '#ffffff', transform: `translateX(-${textTranslateX}vw)` }}
                >
                  {subtitle || firstWord}
                </motion.h2>
                <motion.h1
                  className="text-2xl sm:text-4xl lg:text-5.5xl font-extrabold text-center !text-white uppercase tracking-tight font-heading transition-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
                  style={{ color: '#ffffff', transform: `translateX(${textTranslateX}vw)` }}
                >
                  {title || restOfTitle}
                </motion.h1>
              </div>
            </div>

            <motion.section
              className="flex flex-col w-full px-4 py-6 md:px-16 lg:py-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
}
