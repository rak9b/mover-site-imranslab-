import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutBanner from '../assets/about-banner.jpg';
import aboutShape1 from '../assets/about-shape-1.png';
import aboutShape2 from '../assets/about-shape-2.png';
import { aboutData } from '../data/siteData';

function FadeInWhenVisible({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
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
    <section id="about" className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Image area */}
        <FadeInWhenVisible>
          <div className="relative">
            {/* Decorative background */}
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-primary/5 rounded-3xl" />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/5 rounded-3xl" />

            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/10">
              <img
                src={aboutBanner}
                alt="About banner"
                className="w-full object-cover aspect-[4/5]"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 lg:bottom-8 lg:-right-8 z-20 bg-white rounded-2xl p-6 shadow-xl shadow-black/10 border border-gray-100"
            >
              <span className="text-4xl font-heading font-bold gradient-text">25+</span>
              <p className="text-sm text-gray-500 font-medium mt-1">Years of<br />Experience</p>
            </motion.div>

            {/* Floating shape */}
            <img
              src={aboutShape1}
              alt="Decorative shape"
              className="absolute -top-6 right-8 z-20 max-w-20 lg:max-w-28 animate-float opacity-80"
            />
          </div>
        </FadeInWhenVisible>

        {/* Content */}
        <div>
          <FadeInWhenVisible delay={0.1}>
            <p className="section-subtitle">{aboutData.subtitle}</p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <h2 className="section-title mt-4 text-3xl md:text-4xl xl:text-[44px] leading-tight">
              {aboutData.title}
            </h2>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <p className="mt-6 text-gray-500 text-lg leading-relaxed">
              {aboutData.description}
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <ul className="mt-8 space-y-4">
              {aboutData.points.map((point, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <span className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <ion-icon name="checkmark" class="text-primary text-xs" />
                  </span>
                  <span className="text-gray-600 leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.5}>
            <a
              href="#"
              className="group inline-flex items-center gap-3 mt-10 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
            >
              {aboutData.buttonText}
              <ion-icon name="arrow-forward-outline" class="text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeInWhenVisible>
        </div>

      </div>
    </section>
  );
}
