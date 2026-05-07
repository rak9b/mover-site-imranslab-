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

export default function Feature() {
  return (
    <section className="py-24 lg:py-32 bg-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 items-end">
          <FadeInWhenVisible>
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full" />
                <p className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-primary">
                  {featureData.subtitle}
                </p>
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight">
                {featureData.title}
              </h2>
              <p className="mt-6 text-slate-400 text-lg leading-relaxed font-light">{featureData.description}</p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="lg:text-right">
              <a
                href="#"
                className="group inline-flex items-center gap-4 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:shadow-white/5"
              >
                {featureData.buttonText}
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ion-icon name="arrow-forward-outline" class="text-white text-lg group-hover:translate-x-0.5 transition-transform" />
                </span>
              </a>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-8 mx-auto max-w-[400px] md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {featureData.features.map((item, i) => (
            <FadeInWhenVisible key={item.number} delay={i * 0.15}>
              <div className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3">
                {/* Card background */}
                <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-3xl group-hover:bg-white/[0.05] group-hover:border-primary/30 transition-all duration-500" />

                {/* Gradient glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-primary/10 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 p-10 text-center flex flex-col items-center">
                  {/* Large number */}
                  <span className="absolute top-6 left-8 text-7xl font-heading font-black text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500 select-none">
                    {item.number}
                  </span>

                  {/* Icon circle */}
                  <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(255,61,0,0.3)] transition-all duration-500">
                    <img src={getIcon(item.icon)} alt={item.title} className="w-12 h-12 opacity-80 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert transition-all duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-2xl font-heading font-bold text-white group-hover:text-primary-light transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-slate-400 leading-relaxed text-sm font-light">
                    {item.text}
                  </p>

                  {/* Arrow button */}
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 mt-8 rounded-full border border-white/10 bg-white/5 text-white/60 hover:bg-primary hover:border-primary hover:text-white hover:shadow-[0_10px_20px_rgba(255,61,0,0.3)] transition-all duration-300"
                  >
                    <ion-icon name="arrow-forward-outline" class="text-xl group-hover:translate-x-0.5 transition-transform" />
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
