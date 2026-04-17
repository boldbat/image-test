import { useRef, useEffect } from 'react';
import { AboutSection } from './components/AboutSection';
import { FeaturedVideoSection } from './components/FeaturedVideoSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ServicesSection } from './components/ServicesSection';
import { Globe, ArrowRight } from 'lucide-react';
import { FaTwitter as Twitter, FaInstagram as Instagram } from 'react-icons/fa6';
import { motion } from 'framer-motion';

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isFadingOut = false;

    const animateOpacity = (from: number, to: number, duration: number, callback?: () => void) => {
      const startTime = performance.now();
      
      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        if (video) {
          video.style.opacity = (from + (to - from) * progress).toString();
        }

        if (progress < 1) {
          rafId.current = requestAnimationFrame(step);
        } else if (callback) {
          callback();
        }
      };
      
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(step);
    };

    const handleCanPlay = () => {
      video.play().catch(e => console.error("Video play failed", e));
      animateOpacity(0, 1, 500);
    };

    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime) {
        const remaining = video.duration - video.currentTime;
        if (remaining <= 0.55 && !isFadingOut) {
          isFadingOut = true;
          const currentOpacity = parseFloat(video.style.opacity || '1');
          animateOpacity(currentOpacity, 0, 500);
        }
      }
    };

    const handleEnded = () => {
      isFadingOut = false;
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(e => console.error("Video play failed", e));
        animateOpacity(0, 1, 500);
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay, { once: true });
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black w-full overflow-x-hidden font-sans text-white">
      {/* SECTION 1 -- HERO */}
      <section className="min-h-screen relative overflow-hidden flex flex-col">
        {/* Background video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover object-bottom"
          style={{ opacity: 0 }}
          muted
          playsInline
          preload="auto"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
        />

        {/* Navbar */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 px-4 md:px-6 py-6 w-full max-w-5xl mx-auto"
        >
          <div className="liquid-glass rounded-full px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-white" />
              <span className="text-white font-semibold text-lg">Oyu AI</span>
              <div className="hidden md:flex items-center gap-8 ml-8">
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
                <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button className="text-white text-sm font-medium hover:text-white/80 transition-colors hidden sm:block">Sign Up</button>
              <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">Login</button>
            </div>
          </div>
        </motion.nav>

        {/* Hero content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[10%] md:-translate-y-[20%]"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap font-[Instrument_Serif] mb-8 md:mb-12">
            Know it <em className="italic">all</em>.
          </h1>
          
          <div className="max-w-xl w-full mx-auto flex flex-col items-center gap-6">
            <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-full max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none text-white placeholder:text-white/40 flex-1 text-sm md:text-base min-w-0"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-full p-3 text-black hover:bg-white/90 transition-colors shrink-0"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
            
            <p className="text-white text-sm leading-relaxed px-4 max-w-md opacity-80">
              Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
              className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium transition-colors mt-2"
            >
              Manifesto
            </motion.button>
          </div>
        </motion.div>

        {/* Social icons footer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex justify-center gap-4 pb-12 mt-auto"
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="liquid-glass rounded-full p-4 text-white/80 hover:text-white transition-all">
            <Instagram className="w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="liquid-glass rounded-full p-4 text-white/80 hover:text-white transition-all">
            <Twitter className="w-5 h-5" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="liquid-glass rounded-full p-4 text-white/80 hover:text-white transition-all">
            <Globe className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <AboutSection />

      {/* SECTION 3 */}
      <FeaturedVideoSection />

      {/* SECTION 4 */}
      <PhilosophySection />

      {/* SECTION 5 */}
      <ServicesSection />

      {/* FOOTER */}
      <footer className="w-full py-8 text-center text-white/40 text-xs border-t border-white/5 mt-auto">
        <p>
          Developed by Oyu Intelligence LLC —{' '}
          <a
            href="https://oyu-intelligence.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline decoration-white/20 hover:decoration-white/100 underline-offset-4"
          >
            oyu-intelligence.com
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
