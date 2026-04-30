import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { featureData } from '../data/siteData';

const iconMap = import.meta.glob('../assets/feature-icon-*.png', { eager: true });

function getIcon(filename) {
  const key = `../assets/${filename}`;
  return iconMap[key]?.default ?? '';
}

function FadeInWhenVisible({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
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

export default function Feature() {
  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[120px]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <FadeInWhenVisible>
            <div>
              <p className="section-subtitle">{featureData.subtitle}</p>
              <h2 className="mt-4 text-3xl md:text-4xl xl:text-[44px] font-heading font-800 text-white leading-tight">
                {featureData.title}
              </h2>
              <p className="mt-5 text-white/50 text-lg leading-relaxed">{featureData.description}</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="lg:text-right">
              <a
                href="#"
                className="group inline-flex items-center gap-3 border border-white/20 text-white px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-white/10 hover:border-white/30"
              >
                {featureData.buttonText}
                <ion-icon name="arrow-forward-outline" class="text-lg group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-8 mx-auto max-w-[400px] md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {featureData.features.map((item, i) => (
            <FadeInWhenVisible key={item.number} delay={i * 0.15}>
              <div className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2">
                {/* Card background */}
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl group-hover:bg-white/10 group-hover:border-primary/30 transition-all duration-500" />

                {/* Gradient glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-10 text-center">
                  {/* Large number */}
                  <span className="absolute top-4 left-6 text-6xl font-heading font-bold text-white/5 group-hover:text-primary/20 transition-colors duration-500 select-none">
                    {item.number}
                  </span>

                  {/* Icon circle */}
                  <div className="w-28 h-28 rounded-full mx-auto flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/10 border border-white/10 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                    <img src={getIcon(item.icon)} alt={item.title} className="w-12 h-12" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-xl font-heading font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-white/50 leading-relaxed text-sm">
                    {item.text}
                  </p>

                  {/* Arrow button */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 mt-8 rounded-full border border-white/20 text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  >
                    <ion-icon name="arrow-forward-outline" class="text-xl" />
                  </a>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  );
}
