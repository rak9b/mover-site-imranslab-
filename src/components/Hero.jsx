import { motion } from 'framer-motion';
import heroBanner from '../assets/hero-banner.jpg';
import { heroData } from '../data/siteData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-dark/40" />

      {/* Accent gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-[100px] animate-float-delayed" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-white/80 text-sm font-medium tracking-wide">Global Logistics Partner</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-heading font-900"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl text-white leading-[0.95]">
              {heroData.titleHighlight}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl mt-2 leading-[0.95]">
              <span className="gradient-text">{heroData.titleMain}</span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/60 mt-8 text-lg lg:text-xl max-w-lg leading-relaxed"
          >
            {heroData.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <a
              href={heroData.buttonLink}
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                {heroData.buttonText}
                <ion-icon name="arrow-forward-outline" class="text-lg group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <a
              href="#about"
              className="group flex items-center gap-3 text-white/80 hover:text-white px-6 py-4 border border-white/20 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:border-white/40 hover:bg-white/5"
            >
              <span className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <ion-icon name="play" class="text-primary text-sm ml-0.5" />
              </span>
              Learn More
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex flex-wrap gap-8 mt-16 pt-10 border-t border-white/10"
          >
            {[
              { value: '12K+', label: 'Deliveries' },
              { value: '98%', label: 'On Time' },
              { value: '150+', label: 'Global Routes' },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="text-3xl md:text-4xl font-heading font-bold text-white">
                  {stat.value}
                </span>
                <p className="text-white/40 text-sm mt-1 uppercase tracking-wider font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs uppercase tracking-[0.3em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
