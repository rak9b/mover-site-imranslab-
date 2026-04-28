import aboutBanner from '../assets/about-banner.jpg';
import aboutShape1 from '../assets/about-shape-1.png';
import aboutShape2 from '../assets/about-shape-2.png';
import { aboutData } from '../data/siteData';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-2 justify-center items-center">

        {/* Image area */}
        <div className="relative">
          <img
            src={aboutBanner}
            alt="About banner"
            className="relative z-[5] max-w-xs"
          />
          <img
            src={aboutShape1}
            alt="About shape"
            className="absolute bottom-0 left-1/2 md:left-[40%] z-10 max-w-44 md:max-w-48 animate-bounce [animation-duration:3.5s]"
          />
          <img
            src={aboutShape2}
            alt="About shape"
            className="absolute bottom-0 left-0 md:left-10 z-0 max-w-md"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-primary uppercase font-heading font-semibold tracking-widest text-xl xl:text-2xl">
            {aboutData.subtitle}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-[42px] font-heading font-bold text-secondary">
            {aboutData.title}
          </h2>
          <p className="mt-4 text-gray-600">{aboutData.description}</p>

          <ul className="mt-6 space-y-3">
            {aboutData.points.map((point, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary"><ion-icon name="chevron-forward" /></span>
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="inline-block mt-8 bg-primary text-white px-6 py-3 uppercase text-sm tracking-wider hover:bg-secondary transition"
          >
            {aboutData.buttonText}
          </a>
        </div>

      </div>
    </section>
  );
}
