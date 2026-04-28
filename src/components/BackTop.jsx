import { useState, useEffect } from 'react';

export default function BackTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 bg-dark text-white p-2.5 z-50 hover:bg-primary transition-all duration-300 transform ${
        visible ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'
      }`}
    >
      <ion-icon name="chevron-up-outline" class="text-2xl block" />
    </button>
  );
}
