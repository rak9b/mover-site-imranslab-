import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutBanner from '../assets/about-banner.jpg';
import aboutShape1 from '../assets/about-shape-1.png';
import aboutShape2 from '../assets/about-shape-2.png';
import { aboutData } from '../data/siteData';

function FadeInWhenVisible({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-light overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Image area */}
        <FadeInWhenVisible>
          <div className="relative group">
            {/* Decorative background blocks */}
            <div className="absolute -inset-4 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] transform -rotate-3 transition-transform duration-500 group-hover:-rotate-1" />
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform rotate-2 transition-transform duration-500 group-hover:rotate-1" />

            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
              <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={aboutBanner}
                alt="About banner"
                className="w-full object-cover aspect-[4/5] transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 z-20 bg-white/90 backdrop-blur-xl rounded-2xl p-7 shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-white"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-heading font-black text-primary">25</span>
                </div>
                <div>
                  <span className="block text-xl font-heading font-bold text-secondary">Years of</span>
                  <span className="block text-sm text-muted font-medium uppercase tracking-widest mt-0.5">Experience</span>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeInWhenVisible>

        {/* Content */}
        <div className="lg:pl-8">
          <FadeInWhenVisible delay={0.1}>
            <div className="inline-flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full" />
              <p className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-primary">
                {aboutData.subtitle}
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl text-secondary leading-[1.1] tracking-tight">
              {aboutData.title}
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <p className="mt-8 text-muted text-lg leading-relaxed font-light">
              {aboutData.description}
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <ul className="mt-10 space-y-5">
              {aboutData.points.map((point, i) => (
                <li key={i} className="flex items-start gap-5 group">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                    <ion-icon name="checkmark-outline" class="text-primary group-hover:text-white transition-colors" />
                  </span>
                  <span className="text-secondary/80 font-medium leading-relaxed group-hover:text-secondary transition-colors">{point}</span>
                </li>
              ))}
            </ul>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.5}>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <a
                href="#"
                className="group inline-flex items-center gap-4 bg-secondary text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-[0_10px_20px_rgba(15,23,42,0.2)] transition-all duration-300 hover:bg-primary hover:shadow-[0_15px_30px_rgba(255,61,0,0.3)] hover:-translate-y-1"
              >
                {aboutData.buttonText}
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ion-icon name="arrow-forward-outline" class="text-white text-lg group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </FadeInWhenVisible>
        </div>

      </div>
    </section>
  );
}
