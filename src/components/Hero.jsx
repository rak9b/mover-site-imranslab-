import { motion } from 'framer-motion';
import heroBanner from '../assets/hero-banner-van.png';
import { heroData } from '../data/siteData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-surface"
    >
      {/* Background image with parallax effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />

      {/* Premium Dark Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-90" />

      {/* Modern Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Floating Accents */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-primary/20 rounded-full blur-[140px] animate-float mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[20rem] h-[20rem] bg-accent/20 rounded-full blur-[120px] animate-float-delayed mix-blend-screen pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 mb-8 shadow-xl"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">Premium Logistics Solutions</span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="font-heading font-black tracking-tight"
          >
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl text-white leading-[0.9]">
              {heroData.titleHighlight}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl 3xl:text-9xl mt-2 leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary-light to-accent">
                {heroData.titleMain}
              </span>
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="text-slate-300 mt-8 text-lg lg:text-xl max-w-xl leading-relaxed font-light"
          >
            {heroData.description}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap gap-5 mt-12"
          >
            <a
              href={heroData.buttonLink}
              className="group relative overflow-hidden bg-primary text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(255,61,0,0.3)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(255,61,0,0.5)] hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                {heroData.buttonText}
                <ion-icon name="arrow-forward-outline" class="text-lg group-hover:translate-x-1.5 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            </a>

            <a
              href="#about"
              className="group flex items-center gap-4 text-white/90 hover:text-white px-6 py-4 border border-white/10 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-white/5 hover:border-white/20"
            >
              <span className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 relative">
                <ion-icon name="play" class="text-white text-sm ml-0.5 z-10 group-hover:text-primary transition-colors" />
              </span>
              Watch Video
            </a>
          </motion.div>
        </div>

        {/* Stats Glass Cards */}
        <div className="lg:col-span-4 hidden lg:flex flex-col gap-6 items-end justify-center">
           {[
             { value: '12K+', label: 'Deliveries', icon: 'cube-outline' },
             { value: '98%', label: 'On Time', icon: 'timer-outline' },
             { value: '150+', label: 'Global Routes', icon: 'earth-outline' },
           ].map((stat, i) => (
             <motion.div
               key={stat.label}
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.8 + (i * 0.1), ease: 'easeOut' }}
               className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full max-w-sm flex items-center gap-6 shadow-2xl hover:bg-white/10 transition-colors duration-300 cursor-default group"
             >
               <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                 <ion-icon name={stat.icon} class="text-3xl" />
               </div>
               <div>
                 <span className="block text-4xl font-heading font-black text-white leading-none tracking-tight">
                   {stat.value}
                 </span>
                 <p className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-semibold">{stat.label}</p>
               </div>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
      >
        <span className="text-white text-[10px] uppercase tracking-[0.4em] font-bold">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
