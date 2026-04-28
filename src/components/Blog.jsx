import { blogData } from '../data/siteData';

const imgMap = import.meta.glob('../assets/blog-*.jpg', { eager: true });

function getImg(filename) {
  const key = `../assets/${filename}`;
  return imgMap[key]?.default ?? '';
}

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary uppercase font-heading font-semibold tracking-widest text-xl xl:text-2xl">
            {blogData.subtitle}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-[42px] font-heading font-bold text-secondary">
            {blogData.title}
          </h2>
          <p className="mt-4 xl:text-lg text-gray-600">{blogData.description}</p>
        </div>

        {/* Blog list */}
        <div className="mt-12 grid mx-auto max-w-[350px] md:max-w-max md:grid-cols-2 gap-8">
          {blogData.posts.map((post, i) => (
            <article key={i}>

              {/* Image + date badge */}
              <div className="relative">
                <img
                  src={getImg(post.image)}
                  alt={post.title}
                  className="w-full h-72 md:h-auto object-cover"
                />
                <div className="absolute -bottom-8 right-6 bg-secondary text-white text-center px-6 py-3 font-heading shadow-[-8px_8px_0_#f97316]">
                  <span className="block text-4xl font-heading font-bold text-primary">{post.day}</span>
                  <span className="font-heading text-xl font-semibold">{post.month}</span>
                </div>
              </div>

              {/* Content */}
              <div className="pt-14 p-6">
                <h3 className="font-heading font-semibold text-secondary text-xl">{post.title}</h3>
                <p className="mt-3 text-gray-600">{post.text}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-primary uppercase text-sm font-semibold hover:text-secondary transition"
                >
                  Read More
                  <ion-icon name="arrow-forward-outline" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
