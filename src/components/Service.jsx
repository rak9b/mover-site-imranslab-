import { serviceData } from '../data/siteData';

// Vite dynamic imports require explicit paths — use a map instead
const iconMap = import.meta.glob('../assets/service-icon-*.png', { eager: true });

function getIcon(filename) {
  const key = `../assets/${filename}`;
  return iconMap[key]?.default ?? '';
}

export default function Service() {
  return (
    <section id="service" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary uppercase font-heading font-semibold tracking-widest text-xl xl:text-2xl">
            {serviceData.subtitle}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-[42px] font-heading font-bold text-secondary">
            {serviceData.title}
          </h2>
          <p className="mt-4 xl:text-lg text-gray-600">{serviceData.description}</p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-8 mx-auto max-w-[400px] md:max-w-max md:grid-cols-2 lg:grid-cols-3">
          {serviceData.services.map((svc) => (
            <div
              key={svc.number}
              className="bg-white border-[20px] max-w-[400px] border-gray-100 p-8 hover:border-primary transition"
            >
              <img src={getIcon(svc.icon)} alt={svc.title} className="max-w-14" />

              <div className="flex items-center gap-4 mt-6">
                <span className="text-[42px] font-heading font-semibold text-primary">
                  {svc.number}
                </span>
                <h3 className="mt-6 text-2xl font-heading font-semibold text-secondary">
                  {svc.title}
                </h3>
              </div>

              <p className="mt-3 text-gray-600">{svc.text}</p>

              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-primary uppercase text-sm font-semibold hover:text-secondary transition"
              >
                View Detail
                <ion-icon name="arrow-forward-outline" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
