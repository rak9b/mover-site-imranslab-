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
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[150px]" />

      {/* Newsletter CTA bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeInWhenVisible>
          <div className="relative -top-16 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-primary/20">
            <div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
                Subscribe to our Newsletter
              </h3>
              <p className="text-white/70 mt-2 text-sm md:text-base">Get the latest news and updates delivered straight to your inbox.</p>
            </div>
            <div className="flex w-full md:w-auto gap-0 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-1.5">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-white placeholder-white/50 px-4 py-3 text-sm outline-none flex-1 min-w-0 md:min-w-[220px]"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-semibold text-sm whitespace-nowrap hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </FadeInWhenVisible>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pb-8 relative z-10 -mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand column */}
          <FadeInWhenVisible className="lg:col-span-4">
            <div>
              <a href="#home" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-heading font-bold text-lg">W</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-white">
                  {footerData.logo}<span className="text-primary">.</span>
                </h2>
              </a>

              <p className="mt-5 text-white/40 leading-relaxed max-w-xs text-sm">
                {footerData.description}
              </p>

              <div className="flex gap-3 mt-6">
                {footerData.social.map((item) => (
                  <a
                    key={item.icon}
                    href={item.link}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 hover:-translate-y-1"
                    aria-label={item.icon}
                  >
                    <ion-icon name={item.icon} />
                  </a>
                ))}
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Link columns */}
          {footerData.columns.map((col, i) => (
            <FadeInWhenVisible key={col.title} delay={0.1 * (i + 1)} className="lg:col-span-2 first:lg:col-start-6">
              <div>
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/80 mb-6 flex items-center gap-2">
                  <span className="w-3 h-0.5 bg-primary rounded-full" />
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-white/40 hover:text-primary text-sm transition-colors duration-200 flex items-center gap-0 hover:gap-2"
                      >
                        <ion-icon name="chevron-forward-outline" class="text-xs opacity-0 hover:opacity-100" />
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
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            {footerData.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/30 hover:text-white/60 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
