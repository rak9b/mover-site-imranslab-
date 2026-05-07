import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { deliveryRoutesData } from '../data/siteData';

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

export default function DeliveryRoutes() {
  return (
    <section className="py-24 lg:py-32 bg-surface relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="w-8 h-1 bg-primary rounded-full" />
              <p className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-primary">
                {deliveryRoutesData.subtitle}
              </p>
              <span className="w-8 h-1 bg-primary rounded-full" />
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight">
              {deliveryRoutesData.title}
            </h2>
            <p className="mt-6 text-slate-300 text-lg leading-relaxed font-light">
              {deliveryRoutesData.description}
            </p>
          </div>
        </FadeInWhenVisible>

        {/* Routes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deliveryRoutesData.routes.map((route, index) => (
            <FadeInWhenVisible key={index} delay={index * 0.1}>
              <div className="group relative h-full rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_50px_rgba(255,61,0,0.15)] transition-all duration-500 hover:-translate-y-2 border border-white/10 bg-white/5 backdrop-blur-xl">
                
                {/* Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-b from-primary/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="p-8 relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500 shadow-inner">
                      <ion-icon name={route.icon} class="text-3xl" />
                    </div>
                    <div className="bg-white/10 px-3 py-1 rounded-full border border-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-white/70 font-bold">{route.highway}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-primary-light transition-colors">
                    {route.name}
                  </h3>
                  
                  {/* Route Meta */}
                  <div className="flex items-center gap-4 my-4 text-sm text-slate-300 border-y border-white/10 py-3">
                    <div className="flex items-center gap-2">
                      <ion-icon name="pin-outline" class="text-primary/70" />
                      <span className="font-medium text-white/90">{route.from}</span>
                    </div>
                    <ion-icon name="arrow-forward-outline" class="text-white/30 text-xs" />
                    <span className="font-medium text-white/90">{route.to}</span>
                  </div>

                  <p className="text-slate-400 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {route.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {route.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/80" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Footer Meta */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 text-xs font-semibold text-white/60">
                    <div className="flex items-center gap-1.5">
                      <ion-icon name="git-commit-outline" />
                      <span>{route.distance}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-primary-light/80">
                      <ion-icon name="time-outline" />
                      <span>{route.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
