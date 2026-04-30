import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { blogData } from '../data/siteData';

const imgMap = import.meta.glob('../assets/blog-*.jpg', { eager: true });

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

export default function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto">
            <p className="section-subtitle justify-center">{blogData.subtitle}</p>
            <h2 className="section-title mt-4 text-3xl md:text-4xl xl:text-[44px]">
              {blogData.title}
            </h2>
            <p className="mt-5 text-gray-500 text-lg leading-relaxed">{blogData.description}</p>
          </div>
        </FadeInWhenVisible>

        {/* Blog list */}
        <div className="mt-16 grid mx-auto max-w-[420px] md:max-w-none md:grid-cols-2 gap-8">
          {blogData.posts.map((post, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.15}>
              <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">

                {/* Image + date badge */}
                <div className="relative overflow-hidden">
                  <img
                    src={getImg(post.image)}
                    alt={post.title}
                    className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Date badge */}
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md rounded-xl px-4 py-3 text-center shadow-lg border border-white/50">
                    <span className="block text-2xl font-heading font-bold text-primary leading-none">{post.day}</span>
                    <span className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{post.month}</span>
                  </div>

                  {/* Reading time badge */}
                  <div className="absolute top-5 right-5 bg-primary/90 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5">
                    <ion-icon name="time-outline" class="text-white text-xs" />
                    <span className="text-white text-xs font-medium">5 min read</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  {/* Category tag */}
                  <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full">
                    Logistics
                  </span>

                  <h3 className="mt-4 font-heading font-bold text-secondary text-lg leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-500 text-sm leading-relaxed line-clamp-3">{post.text}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-white text-xs font-bold">W</span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">WeMove Team</span>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all duration-300"
                    >
                      Read More
                      <ion-icon name="arrow-forward-outline" class="text-base" />
                    </a>
                  </div>
                </div>

              </article>
            </FadeInWhenVisible>
          ))}
        </div>

      </div>
    </section>
  );
}
