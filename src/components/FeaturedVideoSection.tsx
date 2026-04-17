import { memo } from 'react';
import { motion } from 'framer-motion';

export const FeaturedVideoSection = memo(() => {
  return (
    <section className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-6xl rounded-3xl overflow-hidden aspect-video relative group"
      >
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4"
          className="w-full h-full object-cover"
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Bottom Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row justify-between items-end gap-6 md:gap-0">
          <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md w-full md:w-auto">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-3">Our Approach</p>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation.
            </p>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium whitespace-nowrap self-start md:self-end"
          >
            Explore more
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
});

FeaturedVideoSection.displayName = 'FeaturedVideoSection';
