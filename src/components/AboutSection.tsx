import { memo } from 'react';
import { motion } from 'framer-motion';

export const AboutSection = memo(() => {
  return (
    <section className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
      
      <div className="relative max-w-5xl mx-auto z-10 text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
        >
          About Us
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight text-center"
        >
          Pioneering <em className="font-[Instrument_Serif] italic text-white/60">ideas</em> for <br className="hidden md:block" />
          minds that <em className="font-[Instrument_Serif] italic text-white/60">create, build, and inspire.</em>
        </motion.h2>
      </div>
    </section>
  );
});

AboutSection.displayName = 'AboutSection';
