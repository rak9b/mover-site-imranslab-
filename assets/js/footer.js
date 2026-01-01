const footerData = {
  logo: 'WeMove',
  description: 'Many desktop publishing packages and web page editors now use are dolra Ipsum as their default. ',
  social: [
    { icon: 'logo-facebook', link: '#' },
    { icon: 'logo-twitter', link: '#' },
    { icon: 'logo-instagram', link: '#' },
    { icon: 'logo-youtube', link: '#' },
  ],
  columns: [
    {
      title: 'Quick Links',
      links: ['About', 'Services', 'Blog', 'FAQ', 'Contact Us'],
    },
    {
      title: 'Services',
      links: ['Warehouse', 'Air Freight', 'Ocean Freight', 'Road Freight', 'Packaging'],
    },
    {
      title: 'Community',
      links: ['Business Consulting', 'Testimonials', 'Track Your Shipment', 'Privacy Policy', 'Terms & Condition'],
    },
  ],
  copyright: '© 2023 WeMove. All Rights Reserved by nawazdevx',
};

function renderFooter(data) {
  const footerRoot = document.getElementById('footer-root');

  footerRoot.innerHTML = `
    <footer class="bg-light text-secondary">
      <div class="max-w-7xl mx-auto px-4">

        <!-- Top  -->
        <div class="py-16 flex flex-wrap gap-12 md:justify-evenly">
          <!-- Brand -->
          <div>
            <h2 class="font-heading font-bold text-3xl">
              ${data.logo}
            </h2>

            <p class="mt-4 text-gray-600 max-w-[230px]">
              ${data.description}
            </p>

            <ul class="flex gap-3 mt-6">
              ${data.social
                .map(
                  (item) => `
                <li>
                  <a
                    href="${item.link}"
                    class="bg-secondary text-white p-3 inline-flex hover:bg-primary transition"
                  >
                    <ion-icon name="${item.icon}"></ion-icon>
                  </a>
                </li>
              `
                )
                .join('')}
            </ul>
          </div>

          <!-- Links -->
          ${data.columns
            .map(
              (column) => `
            <div>
              <h3 class="font-heading font-semibold text-lg border-b-4 border-primary inline-block pb-2">
                ${column.title}
              </h3>

              <ul class="mt-6 space-y-2">
                ${column.links
                  .map(
                    (link) => `
                  <li>
                    <a
                      href="#"
                      class="text-gray-600 hover:text-primary transition"
                    >
                      ${link}
                    </a>
                  </li>
                `
                  )
                  .join('')}
              </ul>
            </div>
          `
            )
            .join('')}

        </div>

        <!-- Bottom -->
        <div class="border-t border-secondary/20 py-6 text-center text-sm text-gray-600">
          ${data.copyright}
        </div>

      </div>
    </footer>
  `;
}

export const initFooter = () => renderFooter(footerData);
