const projectData = {
  subtitle: 'PROJECTS',
  title: 'Featured Projects',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  projects: [
    {
      image: './assets/images/project-1.jpg',
      tag: 'Warehousing, Distribution',
      title: 'Warehouse inventory',
    },
    {
      image: './assets/images/project-2.jpg',
      tag: 'Logistics, Analytics',
      title: 'Minimize Manufacturing',
    },
    {
      image: './assets/images/project-3.jpg',
      tag: 'Warehousing, Distribution',
      title: 'Warehouse inventory',
    },
    {
      image: './assets/images/project-4.jpg',
      tag: 'Logistics, Analytics',
      title: 'Minimize Manufacturing',
    },
    {
      image: './assets/images/project-5.jpg',
      tag: 'Warehousing, Distribution',
      title: 'Warehouse inventory',
    },
    {
      image: './assets/images/project-6.jpg',
      tag: 'Logistics, Analytics',
      title: 'Minimize Manufacturing',
    },
  ],
};

function renderProjects(data) {
  const projectRoot = document.getElementById('project-root');

  projectRoot.innerHTML = `
    <section class="py-20 bg-light">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto">
          <p class="text-primary uppercase font-heading font-semibold tracking-widest text-xl xl:text-2xl">
            ${data.subtitle}
          </p>

          <h2 class="mt-3 text-3xl md:text-4xl xl:text-[42px] font-heading font-bold text-secondary">
            ${data.title}
          </h2>

          <p class="mt-4 xl:text-lg text-gray-600">
            ${data.description}
          </p>
        </div>

        <!-- Project Grid -->
        <div class="mt-16 flex gap-8 mx-auto max-w-[350px] md:max-w-max overflow-x-auto pb-6 snap-x snap-mandatory">
          ${data.projects
            .map(
              (project) => `
              <div class="min-w-[350px] snap-start relative group">

                <!-- Image -->
                <div class="relative overflow-hidden">
                  <img
                    src="${project.image}"
                    alt="${project.title}"
                    class="size-full object-cover"
                  />

                  <!-- Action Button -->
                  <button
                    class="absolute top-4 left-4 bg-primary text-white p-3 opacity-0 group-hover:opacity-100 transition"
                    aria-label="View project"
                  >
                    <ion-icon name="expand-outline" class="text-[26px] block"></ion-icon>
                  </button>
                </div>

                <!-- Project content -->
                <div class="p-6 relative -mt-10 bg-white ml-6 shadow">
                  <p class="text-primary text-sm uppercase font-medium">
                    ${project.tag}
                  </p>

                  <h3 class="my-1 font-heading font-semibold text-lg text-secondary">
                    ${project.title}
                  </h3>

                  <a
                    href="#"
                    class="inline-block text-xs uppercase font-semibold text-secondary hover:text-primary transition"
                  >
                    Read More
                  </a>
                </div>

              </div>
            `
            )
            .join('')}
        </div>

      </div>
    </section>
  `;
}

export const initProject = () => renderProjects(projectData);
