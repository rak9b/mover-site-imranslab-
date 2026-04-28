import { featureData } from '../data/siteData';

const iconMap = import.meta.glob('../assets/feature-icon-*.png', { eager: true });

function getIcon(filename) {
  const key = `../assets/${filename}`;
  return iconMap[key]?.default ?? '';
}

export default function Feature() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary uppercase font-heading font-semibold tracking-widest text-xl xl:text-2xl">
              {featureData.subtitle}
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl xl:text-[42px] font-heading font-bold text-secondary">
              {featureData.title}
            </h2>
            <p className="mt-4 xl:text-lg text-gray-600">{featureData.description}</p>
          </div>

          <div className="lg:text-right">
            <a
              href="#"
              className="inline-block bg-primary text-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-secondary transition"
            >
              {featureData.buttonText}
            </a>
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-16 mx-auto max-w-[360px] md:max-w-max md:grid-cols-2 lg:grid-cols-3">
          {featureData.features.map((item) => (
            <div
              key={item.number}
              className="relative text-center p-8 max-w-[360px] border border-gray-300 hover:shadow-xl transition"
            >
              <span className="absolute -top-12 left-4 text-8xl font-heading font-bold text-primary">
                {item.number}
              </span>

              <div className="size-44 rounded-full p-8 grid place-content-center mx-auto bg-cyan-100">
                <img src={getIcon(item.icon)} alt={item.title} />
              </div>

              <h3 className="mt-6 text-xl font-heading font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-600">{item.text}</p>

              <a
                href="#"
                className="inline-flex items-center gap-2 mt-6 text-secondary border-2 border-secondary px-5 py-2.5 hover:bg-secondary hover:text-white transition"
              >
                <ion-icon name="arrow-forward-outline" class="text-2xl" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
