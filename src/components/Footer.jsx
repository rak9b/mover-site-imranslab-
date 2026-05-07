import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { footerData } from '../data/siteData';

function FadeInWhenVisible({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-secondary text-white relative overflow-hidden mt-32">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-[50rem] h-[50rem] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }}
      />

      {/* Newsletter CTA bar */}
      <div className="relative z-20 max-w-7xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="relative -top-20 bg-gradient-to-r from-primary to-accent rounded-[2rem] p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_30px_60px_rgba(255,107,0,0.2)] border border-white/10">
            <div className="text-center lg:text-left max-w-lg">
              <h3 className="font-heading font-black text-3xl md:text-4xl text-white leading-tight">
                Subscribe to our Newsletter
              </h3>
              <p className="text-white/80 mt-4 text-base md:text-lg font-medium">Get the latest news, updates, and logistics insights delivered straight to your inbox.</p>
            </div>
            <div className="flex w-full lg:w-auto gap-0 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-2 shadow-inner">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-transparent text-white placeholder-white/60 px-6 py-4 text-base outline-none flex-1 min-w-0 lg:min-w-[300px] font-medium"
              />
              <button className="bg-white text-secondary px-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-slate-100 hover:scale-105 transition-all duration-300 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pb-12 relative z-10 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Brand column */}
          <FadeInWhenVisible className="lg:col-span-4">
            <div>
              <a href="#home" className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-lg border border-white/10">
                  <span className="text-white font-heading font-black text-xl">W</span>
                </div>
                <h2 className="text-3xl font-heading font-black text-white tracking-tight">
                  {footerData.logo}<span className="text-primary">.</span>
                </h2>
              </a>

              <p className="mt-8 text-slate-400 leading-relaxed max-w-sm text-base font-light">
                {footerData.description}
              </p>

              <div className="flex gap-4 mt-8">
                {footerData.social.map((item) => (
                  <a
                    key={item.icon}
                    href={item.link}
                    className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-lg"
                    aria-label={item.icon}
                  >
                    <ion-icon name={item.icon} class="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Link columns */}
          {footerData.columns.map((col, i) => (
            <FadeInWhenVisible key={col.title} delay={0.1 * (i + 1)} className="lg:col-span-2 first:lg:col-start-6">
              <div>
                <h3 className="font-heading font-black text-sm uppercase tracking-[0.2em] text-white mb-8 flex items-center gap-3">
                  <span className="w-4 h-1 bg-primary rounded-full" />
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                         href="#"
                         className="group flex items-center gap-2 text-slate-400 hover:text-white text-base font-medium transition-all duration-300"
                      >
                         <span className="w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-4 rounded-full" />
                         {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInWhenVisible>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium tracking-wide">
            {footerData.copyright}
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-500 hover:text-white text-sm font-medium tracking-wide transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm font-medium tracking-wide transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm font-medium tracking-wide transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
