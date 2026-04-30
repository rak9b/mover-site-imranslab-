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
  const isInView = useInView(ref, { once: true, margin: '-60px' });
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
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[200px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-subtitle justify-center">{projectData.subtitle}</p>
            <h2 className="section-title mt-4 text-3xl md:text-4xl xl:text-[44px]">
              {projectData.title}
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">{projectData.description}</p>
          </div>
        </FadeInWhenVisible>

        {/* Project grid */}
        <div className="mt-16 grid gap-6 mx-auto max-w-[380px] md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {projectData.projects.map((project, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="group relative rounded-2xl overflow-hidden cursor-pointer">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={getImg(project.image)}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Expand icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400">
                    <ion-icon name="expand-outline" class="text-white text-lg" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block text-primary text-xs uppercase font-semibold tracking-wider bg-primary/10 backdrop-blur-md px-3 py-1 rounded-full border border-primary/20">
                      {project.tag}
                    </span>
                    <h3 className="mt-3 font-heading font-bold text-xl text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <span>View Project</span>
                      <ion-icon name="arrow-forward-outline" />
                    </div>
                  </div>
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* View all button */}
        <FadeInWhenVisible delay={0.4}>
          <div className="text-center mt-14">
            <a
              href="#"
              className="group inline-flex items-center gap-3 border-2 border-secondary/20 text-secondary px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-secondary hover:text-white hover:border-secondary hover:-translate-y-1 hover:shadow-lg"
            >
              View All Projects
              <ion-icon name="arrow-forward-outline" class="text-lg group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeInWhenVisible>

      </div>
    </section>
  );
}
