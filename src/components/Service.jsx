import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { serviceData } from '../data/siteData';

const iconMap = import.meta.glob('../assets/service-icon-*.png', { eager: true });

function getIcon(filename) {
  const key = `../assets/${filename}`;
  return iconMap[key]?.default ?? '';
}

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

export default function Service() {
  return (
    <section id="service" className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="w-8 h-1 bg-primary rounded-full" />
              <p className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-primary">
                {serviceData.subtitle}
              </p>
              <span className="w-8 h-1 bg-primary rounded-full" />
            </div>
            <h2 className="mt-6 font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
              {serviceData.title}
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed font-light">{serviceData.description}</p>
          </div>
        </FadeInWhenVisible>

        {/* Grid */}
        <div className="mt-20 grid gap-6 mx-auto max-w-[400px] md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {serviceData.services.map((svc, i) => (
            <FadeInWhenVisible key={svc.number} delay={i * 0.1}>
              <div className="group relative bg-surface border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-primary/30 overflow-hidden">
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Service number watermark */}
                <span className="absolute top-4 right-6 text-7xl font-heading font-black text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500 select-none">
                  {svc.number}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-lg">
                    <img
                      src={getIcon(svc.icon)}
                      alt={svc.title}
                      className="w-8 h-8 opacity-80 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-xl font-heading font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-slate-400 leading-relaxed text-sm font-light">{svc.text}</p>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-8 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300"
                  >
                    Explore Service
                    <ion-icon name="arrow-forward-outline" class="text-lg" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary-light group-hover:w-full transition-all duration-500" />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  );
}
