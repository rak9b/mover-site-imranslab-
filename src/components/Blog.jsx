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

export default function Blog() {
  return (
    <section id="blog" className="py-24 lg:py-32 bg-surface-alt relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <FadeInWhenVisible>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-3 justify-center">
              <span className="w-8 h-1 bg-primary rounded-full" />
              <p className="font-heading font-bold text-sm tracking-[0.2em] uppercase text-primary">
                {blogData.subtitle}
              </p>
              <span className="w-8 h-1 bg-primary rounded-full" />
            </div>
            <h2 className="mt-6 text-4xl md:text-5xl xl:text-6xl font-heading font-black text-white leading-[1.1] tracking-tight">
              {blogData.title}
            </h2>
            <p className="mt-6 text-slate-400 text-lg leading-relaxed font-light">{blogData.description}</p>
          </div>
        </FadeInWhenVisible>

        {/* Blog list */}
        <div className="mt-20 grid mx-auto max-w-[420px] md:max-w-none md:grid-cols-2 gap-10">
          {blogData.posts.map((post, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.15}>
              <article className="group bg-surface rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:border-primary/20">

                {/* Image + date badge */}
                <div className="relative overflow-hidden">
                  <img
                    src={getImg(post.image)}
                    alt={post.title}
                    className="w-full h-64 md:h-72 object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />

                  {/* Date badge */}
                  <div className="absolute top-6 left-6 bg-surface-alt/90 backdrop-blur-xl rounded-2xl px-5 py-4 text-center shadow-xl border border-white/10">
                    <span className="block text-3xl font-heading font-black text-primary leading-none">{post.day}</span>
                    <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mt-1.5">{post.month}</span>
                  </div>

                  {/* Reading time badge */}
                  <div className="absolute top-6 right-6 bg-primary/90 backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2 shadow-lg border border-white/10">
                    <ion-icon name="time-outline" class="text-white text-sm" />
                    <span className="text-white text-xs font-bold tracking-wide">5 min read</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Category tag */}
                  <span className="inline-block text-xs font-bold text-primary-light uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                    Logistics
                  </span>

                  <h3 className="mt-5 font-heading font-black text-white text-xl md:text-2xl leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed line-clamp-3 font-light">{post.text}</p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border border-white/10">
                        <span className="text-white text-sm font-black">W</span>
                      </div>
                      <span className="text-sm text-slate-300 font-semibold tracking-wide">WeMove Team</span>
                    </div>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary-light text-sm font-bold uppercase tracking-widest group-hover:gap-3 group-hover:text-primary transition-all duration-300"
                    >
                      Read Article
                      <ion-icon name="arrow-forward-outline" class="text-lg" />
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
