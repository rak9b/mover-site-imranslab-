import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { projectData } from '../data/siteData';

const imgMap = import.meta.glob('../assets/project-*.jpg', { eager: true });

function getImg(filename) {
  const key = `../assets/${filename}`;
  return imgMap[key]?.default ?? '';
}

function FadeInWhenVisible({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Project() {
  return (
    <section className="py-24 lg:py-32 bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="w-8 h-1 bg-primary rounded-full" />
              <p className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-primary">
                {projectData.subtitle}
              </p>
              <span className="w-8 h-1 bg-primary rounded-full" />
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-heading font-black text-secondary leading-[1.1] tracking-tight">
              {projectData.title}
            </h2>
            <p className="mt-6 text-slate-500 text-lg leading-relaxed font-light">{projectData.description}</p>
          </div>
        </FadeInWhenVisible>

        {/* Project grid */}
        <div className="mt-20 grid gap-8 mx-auto max-w-[400px] md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {projectData.projects.map((project, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-2">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={getImg(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

                  {/* Accent Border Overlay */}
                  <div className="absolute inset-4 border border-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-all duration-700" />

                  {/* Expand icon */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 shadow-xl">
                    <ion-icon name="expand-outline" class="text-white text-xl" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                    <span className="inline-block text-primary text-xs uppercase font-bold tracking-widest bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-lg">
                      {project.tag}
                    </span>
                    <h3 className="mt-4 font-heading font-black text-2xl text-white group-hover:text-primary-light transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-4 text-white/70 text-sm font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <span>View Project</span>
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <ion-icon name="arrow-forward-outline" class="text-primary text-sm" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* View all button */}
        <FadeInWhenVisible delay={0.4}>
          <div className="text-center mt-20">
            <a
              href="#"
              className="group inline-flex items-center gap-4 border-2 border-secondary/10 text-secondary px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:bg-secondary hover:text-white hover:border-secondary hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(15,23,42,0.2)]"
            >
              View All Projects
              <span className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ion-icon name="arrow-forward-outline" class="text-lg group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </FadeInWhenVisible>

      </div>
    </section>
  );
}
