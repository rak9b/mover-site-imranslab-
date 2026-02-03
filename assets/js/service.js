const serviceData = {
  subtitle: 'SERVICES',
  title: 'Trusted For Our Services',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  services: [
    {
      number: '01',
      title: 'Air Freight',
      text: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
      icon: 'service-icon-1.png',
    },
    {
      number: '02',
      title: 'Road Freight',
      text: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
      icon: 'service-icon-2.png',
    },
    {
      number: '03',
      title: 'Ocean Freight',
      text: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
      icon: 'service-icon-3.png',
    },
    {
      number: '04',
      title: 'Rail Freight',
      text: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
      icon: 'service-icon-4.png',
    },
    {
      number: '05',
      title: 'Warehousing',
      text: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
      icon: 'service-icon-5.png',
    },
    {
      number: '06',
      title: 'Project Cargo',
      text: 'Our aim is to optimize and improve your supply chain so that we can give you the best service.',
      icon: 'service-icon-6.png',
    },
  ],
};

function renderServices(data) {
  const serviceRoot = document.getElementById('service-root');

  serviceRoot.innerHTML = `
    <section id="service" class="py-20 bg-light">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto">
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

        <!-- Services Grid -->
        <div class="mt-12 grid gap-8 mx-auto max-w-[400px] md:max-w-max md:grid-cols-2 lg:grid-cols-3">
          ${data.services
            .map(
              (service) => `
              <div class="bg-white border-[20px] max-w-[400px] border-gray-100 p-8 hover:border-primary transition">

                <!-- Service icon -->
                <img
                  src="./assets/images/${service.icon}" alt="Service icon"
                  class="max-w-14"
                />

                <!-- Service heading -->
                <div class="flex items-center gap-4 mt-6">
                  <span class="text-[42px] font-heading font-semibold text-primary">
                    ${service.number}
                  </span>

                  <h3 class="mt-6 text-2xl font-heading font-semibold text-secondary">
                    ${service.title}
                  </h3>
                </div>

                <!-- Service description -->
                <p class="mt-3 text-gray-600">
                  ${service.text}
                </p>

                <!-- Service link -->
                <a
                  href="#"
                  class="inline-flex items-center gap-2 mt-6 text-primary uppercase text-sm font-semibold hover:text-secondary transition"
                >
                  View Detail
                  <ion-icon name="arrow-forward-outline" class="size-[18px]"></ion-icon>
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

export const initService = () => renderServices(serviceData);
