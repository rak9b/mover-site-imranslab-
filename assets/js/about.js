const aboutData = {
  subtitle: 'WHY CHOOSE US',
  title: 'We Are Professional Logistics & Cargo Agency',
  description: 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium.',
  image: './assets/images/about-banner.jpg',
  points: [
    'Imagination what we can easily see is only a small percentage.',
    'Quality never goes out of style. safety, quality, professionalism.',
    'The quality shows in every move we make where business lives.',
    'Go beyond logistics, make the world go round and revolutionize business.',
    'Logistics through innovation, dedication, and technology.',
    'We take pride in serving our customers safely together with passion.',
  ],
  buttonText: 'Our Story',
};

function renderAbout(data) {
  const aboutRoot = document.getElementById('about-root');

  aboutRoot.innerHTML = `
    <section id="about" class="py-20 bg-white overflow-hidden">
      <div class="max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-2 justify-center items-center">

        <!-- About image area -->
        <div class="relative">

          <!-- Main about image -->
          <img
            src="./assets/images/about-banner.jpg"
            alt="About banner"
            class="relative z-[5] max-w-xs"
          />

          <!-- Floating animated shape (front) -->
          <img
            src="./assets/images/about-shape-1.png"
            alt="About shape"
            class="absolute bottom-0 left-1/2 md:left-[40%] z-10 max-w-44 md:max-w-48 animate-bounce [animation-duration:3.5s]"
          />

          <!-- Background decorative shape -->
          <img
            src="./assets/images/about-shape-2.png"
            alt="About shape"
            class="absolute bottom-0 left-0 md:left-10 z-0 max-w-md"
          />
        </div>

        <!-- About content -->
        <div>
          <!-- Section subtitle -->
          <p class="text-primary uppercase font-heading font-semibold tracking-widest text-xl xl:text-2xl">
            ${data.subtitle}
          </p>

          <!-- Section title -->
          <h2 class="mt-3 text-3xl md:text-4xl xl:text-[42px] font-heading font-bold text-secondary">
            ${data.title}
          </h2>

          <!-- Section description -->
          <p class="mt-4 text-gray-600">
            ${data.description}
          </p>

          <!-- Feature points list -->
          <ul class="mt-6 space-y-3">
            ${data.points
              .map(
                (item) => `
              <li class="flex gap-3">
                <span class="text-primary"><ion-icon name="chevron-forward"></ion-icon></span>
                <span class="text-gray-700">${item}</span>
              </li>
            `
              )
              .join('')}
          </ul>

          <!-- CTA button -->
          <a
            href="#"
            class="inline-block mt-8 bg-primary text-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-secondary transition"
          >
            ${data.buttonText}
          </a>
        </div>

      </div>
    </section>
  `;
}

export const initAbout = () => renderAbout(aboutData);
