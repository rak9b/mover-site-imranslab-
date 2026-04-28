import { useState, useEffect } from 'react';
import { headerData } from '../data/siteData';

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]      = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ── Site Header ── */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          scrolled ? 'bg-accent' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-white text-3xl font-heading font-bold">
            {headerData.logo}
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 text-white">
            {headerData.menu.map((item) => (
              <a
                key={item.label}
                href={item.link}
                className="hover:text-primary transition font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Phone */}
          <div className="hidden md:block text-white text-center">
            <p className="text-sm uppercase">{headerData.phoneLabel}</p>
            <p className="text-lg font-semibold">{headerData.phone}</p>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-4xl"
            aria-label="Open menu"
          >
            <ion-icon name="menu-outline" />
          </button>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      />

      {/* ── Mobile Drawer ── */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-heading text-2xl font-bold">{headerData.logo}</h2>
          <button onClick={closeMenu} className="text-2xl" aria-label="Close menu">
            <ion-icon name="close-outline" />
          </button>
        </div>

        <nav className="p-5">
          <ul className="space-y-4">
            {headerData.menu.map((item) => (
              <li key={item.label}>
                <a
                  href={item.link}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-2 border-b text-gray-800"
                >
                  {item.label}
                  <ion-icon name="chevron-forward-outline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}
