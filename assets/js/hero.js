const heroData = {
  backgroundImage: './assets/images/hero-banner.jpg',
  titleHighlight: 'Moving Your',
  titleMain: 'World Forward',
  description:
    'Global logistics solutions that connect your business to unlimited possibilities. Fast, reliable, and always on time.',
  buttonText: 'Explore Solutions',
  buttonLink: '#service',
};

function renderHero(data) {
  const heroRoot = document.getElementById('hero-root');

  heroRoot.innerHTML = `
    <section id="home"
      class="relative min-h-screen px-4 flex items-center bg-cover bg-center"
      style="background-image: url('${data.backgroundImage}')"
    >
      <!-- Gradient overlay -->
      <div class="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>

      <!-- Floating shape (top-left) -->
      <img
        src="./assets/images/hero-shape.png"
        alt="floating-shape"
        class="absolute top-24 left-10 w-28 animate-bounce [animation-duration:3s]"
      />

      <!-- Floating shape (bottom-right) -->
      <img
        src="./assets/images/hero-shape.png"
        alt="floating-shape"
        class="absolute bottom-24 right-10 w-28  animate-bounce [animation-duration:3s]"
      />

      <!-- Hero content -->
      <div class="text-white bg-black/70 sm:bg-transparent text-center sm:text-left relative z-10 p-8 mx-auto sm:mx-0">

        <!-- Heading -->
        <h2 class="font-heading uppercase font-bold">
          <span class="block text-primary text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl">
            ${data.titleHighlight}
          </span>
          <span class="block text-white mt-1 text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl">
            ${data.titleMain}
          </span>
        </h2>

        <!-- Description -->
        <p class="text-gray-200 mt-5 lg:text-lg 3xl:text-xl max-w-md lg:max-w-[500px] 3xl:max-w-[550px]">
          ${data.description}
        </p>

        <!-- CTA button -->
        <a
          href="${data.buttonLink}"
          class="inline-block border border-white uppercase tracking-wider hover:bg-primary hover:border-primary transition font-medium mt-8 px-5 lg:px-6.5 py-2.5 lg:py-3.5 text-sm lg:text-base"
        >
          ${data.buttonText}
        </a>
      </div>
    </section>
  `;
}

export const initHero = () => renderHero(heroData);
