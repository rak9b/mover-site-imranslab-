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

export default function Service() {
  return (
    <section id="service" className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-subtitle justify-center">{serviceData.subtitle}</p>
            <h2 className="section-title mt-4 text-3xl md:text-4xl xl:text-[44px]">
              {serviceData.title}
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">{serviceData.description}</p>
          </div>
        </FadeInWhenVisible>

        {/* Grid */}
        <div className="mt-16 grid gap-6 mx-auto max-w-[400px] md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {serviceData.services.map((svc, i) => (
            <FadeInWhenVisible key={svc.number} delay={i * 0.1}>
              <div className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-gray-100 hover:border-primary/20 overflow-hidden">
                {/* Hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Service number watermark */}
                <span className="absolute top-4 right-6 text-7xl font-heading font-bold text-gray-100 group-hover:text-primary/10 transition-colors duration-500 select-none">
                  {svc.number}
                </span>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark transition-all duration-500">
                    <img
                      src={getIcon(svc.icon)}
                      alt={svc.title}
                      className="w-8 h-8 group-hover:brightness-0 group-hover:invert transition-all duration-500"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-xl font-heading font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-gray-500 leading-relaxed text-sm">{svc.text}</p>

                  {/* Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 mt-6 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    View Detail
                    <ion-icon name="arrow-forward-outline" class="text-lg" />
                  </a>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" />
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  );
}
