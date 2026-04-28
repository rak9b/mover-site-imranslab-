import { projectData } from '../data/siteData';

const imgMap = import.meta.glob('../assets/project-*.jpg', { eager: true });

function getImg(filename) {
  const key = `../assets/${filename}`;
  return imgMap[key]?.default ?? '';
}

export default function Project() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary uppercase font-heading font-semibold tracking-widest text-xl xl:text-2xl">
            {projectData.subtitle}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl xl:text-[42px] font-heading font-bold text-secondary">
            {projectData.title}
          </h2>
          <p className="mt-4 xl:text-lg text-gray-600">{projectData.description}</p>
        </div>

        {/* Horizontal scroll carousel */}
        <div className="mt-16 flex gap-8 mx-auto max-w-[350px] md:max-w-max overflow-x-auto pb-6 snap-x snap-mandatory">
          {projectData.projects.map((project, i) => (
            <div key={i} className="min-w-[350px] snap-start relative group">

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={getImg(project.image)}
                  alt={project.title}
                  className="size-full object-cover"
                />
                <button
                  className="absolute top-4 left-4 bg-primary text-white p-3 opacity-0 group-hover:opacity-100 transition"
                  aria-label="View project"
                >
                  <ion-icon name="expand-outline" class="text-[26px] block" />
                </button>
              </div>

              {/* Content card */}
              <div className="p-6 relative -mt-10 bg-white ml-6 shadow">
                <p className="text-primary text-sm uppercase font-medium">{project.tag}</p>
                <h3 className="my-1 font-heading font-semibold text-lg text-secondary">{project.title}</h3>
                <a
                  href="#"
                  className="inline-block text-xs uppercase font-semibold text-secondary hover:text-primary transition"
                >
                  Read More
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
