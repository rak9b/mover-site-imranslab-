const featureData = {
  subtitle: 'ESTIMATION',
  title: 'Has a wide range of solutions',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  buttonText: 'Read More',
  features: [
    {
      number: '01',
      title: 'Solutions and specialized',
      text: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
      icon: 'feature-icon-1.png',
    },
    {
      number: '02',
      title: 'Multiple warehouses',
      text: 'We provide multiple drop off and pickup locations so you do not have to worry.',
      icon: 'feature-icon-2.png',
    },
    {
      number: '03',
      title: 'Tracking made easy',
      text: 'A tracking number for the entire process so that you can find the exact position.',
      icon: 'feature-icon-3.png',
    },
  ],
};

function renderFeature(data) {
  const featureRoot = document.getElementById('feature-root');

  featureRoot.innerHTML = `
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Section Header -->
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p class="text-primary uppercase font-heading font-semibold tracking-widest text-xl xl:text-2xl">
              ${data.subtitle}
            </p>

            <h2 class="mt-3 text-3xl md:text-4xl xl:text-[42px] font-heading font-bold text-secondary">
              ${data.title}
            </h2>

            <p class="mt-4 xl:text-lg text-gray-600">
              ${data.description}
            </p>
          </div>

          <div class="lg:text-right">
            <a
              href="#"
              class="inline-block bg-primary text-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-secondary transition"
            >
              ${data.buttonText}
            </a>
          </div>
        </div>

        <!-- Feature Grid -->
        <div class="mt-20 grid gap-16 mx-auto max-w-[360px] md:max-w-max md:grid-cols-2 lg:grid-cols-3">
          ${data.features
            .map(
              (item) => `
              <div class="relative text-center p-8  max-w-[360px] border border-gray-300 hover:shadow-xl transition">

                <!-- Big Number -->
                <span class="absolute -top-12 left-4 text-8xl font-heading font-bold text-primary">
                  ${item.number}
                </span>

                <!-- Feature icon -->
                <div class="size-44 rounded-full p-8  grid place-content-center mx-auto bg-cyan-100">
                  <img
                    src="./assets/images/${item.icon}" alt="Feature icon"
                    class=""
                  />
                </div>

                <!-- Feature heading -->
                <h3 class="mt-6 text-xl font-heading font-semibold text-secondary">
                  ${item.title}
                </h3>

                <!-- Feature description -->
                <p class="mt-4 text-gray-600">
                  ${item.text}
                </p>

                <!-- Feature link -->
                <a
                  href="#"
                  class="inline-flex items-center gap-2 mt-6 text-secondary border-2 border-secondary px-5 py-2.5 hover:bg-secondary hover:text-white transition"
                >
                  <ion-icon name="arrow-forward-outline" class="text-2xl"></ion-icon>
                </a>

              </div>
            `
            )
            .join('')}
        </div>

      </div>
    </section>
  `;
}

export const initFeature = () => renderFeature(featureData);
