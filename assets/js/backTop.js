function renderBackTop() {
  const backTopRoot = document.getElementById('backtop-root');

  backTopRoot.innerHTML = `
    <button
      id="backTopBtn"
      aria-label="Back to top"
      class="fixed bottom-6 right-6 bg-dark text-white p-2.5 opacity-0 invisible transition transform translate-y-4 hover:bg-primary z-50"
    >
      <ion-icon name="chevron-up-outline" class="text-2xl block"></ion-icon>
    </button>
  `;

  const btn = document.getElementById('backTopBtn');

  // Show / hide on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.remove('opacity-0', 'invisible', 'translate-y-4');
      btn.classList.add('opacity-100');
    } else {
      btn.classList.add('opacity-0', 'invisible', 'translate-y-4');
      btn.classList.remove('opacity-100');
    }
  });

  // Scroll to top
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

export const initBackTop = () => renderBackTop();
