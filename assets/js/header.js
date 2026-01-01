const headerData = {
  logo: 'WeMove',
  phoneLabel: 'Need Help? Call Us',
  phone: '+1 (555) 123-4567',
  menu: [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Service', link: '#service' },
    { label: 'Blog', link: '#blog' },
    { label: 'Contact', link: '#' },
  ],
};

function renderHeader(data) {
  const headerRoot = document.getElementById('header-root');

  headerRoot.innerHTML = `
    <header id="site-header" class="fixed top-0 left-0 w-full z-50 transition bg-transparent">
    
      <div class="max-w-7xl mx-auto p-4 flex items-center justify-between">

        <!--  -->
        <h1 class="text-white text-3xl font-heading font-bold">
          ${data.logo}
        </h1>

        <!-- Desktop navigation -->
        <nav class="hidden lg:flex gap-6 text-white">
          ${data.menu
            .map(
              (item) => `
              <a href="${item.link}" class="hover:text-primary transition font-medium">
                ${item.label}
              </a>
            `
            )
            .join('')}
        </nav>

        <!-- Desktop Contact -->
        <div class="hidden md:block text-white text-center">
          <p class="text-sm uppercase">${data.phoneLabel}</p>
          <p class="text-lg font-semibold">${data.phone}</p>
        </div>
     

        <!-- Mobile Menu Button -->
        <button id="menu-open" class="lg:hidden text-white text-4xl">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
    </header>

    <!-- Mobile overlay -->
    <div id="mobile-overlay" class="fixed inset-0 bg-black/80 opacity-0 invisible transition duration-300 ease-in z-40"></div>

    <!-- Mobile navigation drawer -->
    <aside
      id="mobile-nav"
      class="fixed top-0 left-0 h-full w-72 bg-white transform -translate-x-full transition duration-300 ease-in z-50"
    >
      <div class="flex items-center justify-between p-5 border-b">
        <h2 class="font-heading text-2xl font-bold">${data.logo}</h2>
        <button id="menu-close" class="text-2xl">
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>

      <!-- Mobile navigation links -->
      <nav class="p-5">
        <ul class="space-y-4">
          ${data.menu
            .map(
              (item) => `
              <li>
                <a
                  href="${item.link}"
                  class="flex items-center justify-between py-2 border-b text-gray-800"
                >
                  ${item.label}
                  <ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </li>
            `
            )
            .join('')}
        </ul>
      </nav>
    </aside>
  `;
}

export const initHeader = () => {
  renderHeader(headerData);

  const headerRoot = document.getElementById('header-root');

  const header = headerRoot.querySelector('#site-header');
  const mobileNav = headerRoot.querySelector('#mobile-nav');
  const overlay = headerRoot.querySelector('#mobile-overlay');
  const openBtn = headerRoot.querySelector('#menu-open');
  const closeBtn = headerRoot.querySelector('#menu-close');

  // Header background on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('bg-accent', window.scrollY > 80);
  });

  const openMenu = () => {
    mobileNav.classList.remove('-translate-x-full');
    overlay.classList.remove('invisible');
    overlay.classList.add('opacity-100');
    document.body.classList.add('overflow-hidden');
  };

  const closeMenu = () => {
    mobileNav.classList.add('-translate-x-full');
    overlay.classList.add('invisible');
    overlay.classList.remove('opacity-100');
    document.body.classList.remove('overflow-hidden');
  };

  openBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu on link click (event delegation)
  mobileNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      closeMenu();
    }
  });
};
