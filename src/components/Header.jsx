import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { headerData } from '../data/siteData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sectionIds = headerData.menu.map(m => m.link).filter(l => l.startsWith('#') && l.length > 1);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionIds.forEach((id) => {
      const el = document.querySelector(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Site Header ── */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/95 backdrop-blur-xl shadow-2xl shadow-black/20 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-heading font-bold text-lg">W</span>
            </div>
            <h1 className="text-white text-2xl font-heading font-bold tracking-tight">
              {headerData.logo}
              <span className="text-primary">.</span>
            </h1>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {headerData.menu.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 rounded-lg
                  ${activeSection === item.link
                    ? 'text-primary'
                    : 'text-white/80 hover:text-white'
                  }
                `}
              >
                {item.label}
                {activeSection === item.link && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#"
              className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-wider group transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-3xl p-2 hover:bg-white/10 rounded-lg transition"
            aria-label="Open menu"
          >
            <ion-icon name="menu-outline" />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile Overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-80 bg-dark z-50 shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-sm">W</span>
                </div>
                <h2 className="font-heading text-xl font-bold text-white">
                  {headerData.logo}<span className="text-primary">.</span>
                </h2>
              </div>
              <button
                onClick={closeMenu}
                className="text-white/60 hover:text-white text-2xl p-2 hover:bg-white/10 rounded-lg transition"
                aria-label="Close menu"
              >
                <ion-icon name="close-outline" />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-1">
                {headerData.menu.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <a
                      href={item.link}
                      onClick={closeMenu}
                      className="flex items-center justify-between py-3 px-4 text-white/80 hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
                    >
                      {item.label}
                      <ion-icon name="chevron-forward-outline" class="text-sm opacity-40" />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="#"
                  className="block text-center bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-3 rounded-lg font-semibold uppercase tracking-wider text-sm"
                >
                  Get a Quote
                </a>
                <p className="mt-4 text-white/40 text-sm text-center">
                  {headerData.phoneLabel}
                </p>
                <p className="text-white text-lg font-semibold text-center mt-1">
                  {headerData.phone}
                </p>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
