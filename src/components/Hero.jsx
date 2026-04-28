import heroBanner from '../assets/hero-banner.jpg';
import heroShape from '../assets/hero-shape.png';
import { heroData } from '../data/siteData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-4 flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      {/* Gradient overlay */}
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      {/* Floating shape top-left */}
      <img
        src={heroShape}
        alt="floating shape"
        className="absolute top-24 left-10 w-28 animate-bounce [animation-duration:3s]"
      />

      {/* Floating shape bottom-right */}
      <img
        src={heroShape}
        alt="floating shape"
        className="absolute bottom-24 right-10 w-28 animate-bounce [animation-duration:3s]"
      />

      {/* Hero content */}
      <div className="text-white bg-black/70 sm:bg-transparent text-center sm:text-left relative z-10 p-8 mx-auto sm:mx-0">
        <h2 className="font-heading uppercase font-bold">
          <span className="block text-primary text-5xl md:text-6xl lg:text-7xl 3xl:text-8xl">
            {heroData.titleHighlight}
          </span>
          <span className="block text-white mt-1 text-4xl md:text-5xl lg:text-6xl 3xl:text-7xl">
            {heroData.titleMain}
          </span>
        </h2>

        <p className="text-gray-200 mt-5 lg:text-lg 3xl:text-xl max-w-md lg:max-w-[500px] 3xl:max-w-[550px]">
          {heroData.description}
        </p>

        <a
          href={heroData.buttonLink}
          className="inline-block border border-white uppercase tracking-wider hover:bg-primary hover:border-primary transition font-medium mt-8 px-5 lg:px-6.5 py-2.5 lg:py-3.5 text-sm lg:text-base"
        >
          {heroData.buttonText}
        </a>
      </div>
    </section>
  );
}
