const blogData = {
  subtitle: 'OUR BLOGS',
  title: 'Recent news & events',
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  posts: [
    {
      image: './assets/images/blog-1.jpg',
      day: '02',
      month: 'Aug',
      title: 'Going forward, a new normal that has evolved from generation. moving your products across all borders. ',
      text: 'New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry the standard dummy text ever since the when an printer. ',
    },
    {
      image: './assets/images/blog-2.jpg',
      day: '20',
      month: 'Aug',
      title: 'At the end of the day, going forward, a new normal that has evolved from. your only logistic partner. ',
      text: 'New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry the standard dummy text ever since the when an printer. ',
    },
  ],
};

function renderBlog(data) {
  const blogRoot = document.getElementById('blog-root');

  blogRoot.innerHTML = `
    <section id="blog" class="py-20 bg-white">
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

        <!-- Blog List -->
        <div class="mt-12 grid mx-auto max-w-[350px] md:max-w-max md:grid-cols-2 gap-8">
          ${data.posts
            .map(
              (post) => `
              <article class="">

                <!-- Image -->
                <div class="relative">
                  <img
                    src="${post.image}"
                    alt="${post.title}"
                    class="w-full h-72 md:h-auto object-cover"
                  />

                  <!-- Date Badge -->
                  <div class="absolute -bottom-8 right-6 bg-secondary text-white text-center px-6 py-3 font-heading shadow-[-8px_8px_0_#f97316]">
                    <span class="block text-4xl font-heading font-bold text-primary">
                      ${post.day}
                    </span>
                    <span class="font-heading text-xl font-semibold">
                      ${post.month}
                    </span>
                  </div>
                </div>

                <!-- Content -->
                <div class="pt-14 p-6">
                  <h3 class="font-heading font-semibold text-secondary text-xl">
                    ${post.title}
                  </h3>

                  <p class="mt-3 text-gray-600">
                    ${post.text}
                  </p>

                  <a
                    href="#"
                    class="inline-flex items-center gap-2 mt-4 text-primary uppercase text-sm font-semibold hover:text-secondary transition"
                  >
                    Read More
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </a>
                </div>

              </article>
            `
            )
            .join('')}
        </div>

      </div>
    </section>
  `;
}

export const initBlog = () => renderBlog(blogData);
