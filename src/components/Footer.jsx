import { footerData } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-light text-secondary">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top row */}
        <div className="py-16 flex flex-wrap gap-12 md:justify-evenly">

          {/* Brand */}
          <div>
            <h2 className="font-heading font-bold text-3xl">{footerData.logo}</h2>
            <p className="mt-4 text-gray-600 max-w-[230px]">{footerData.description}</p>

            <ul className="flex gap-3 mt-6">
              {footerData.social.map((item) => (
                <li key={item.icon}>
                  <a
                    href={item.link}
                    className="bg-secondary text-white p-3 inline-flex hover:bg-primary transition"
                    aria-label={item.icon}
                  >
                    <ion-icon name={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Link columns */}
          {footerData.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading font-semibold text-lg border-b-4 border-primary inline-block pb-2">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-primary transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary/20 py-6 text-center text-sm text-gray-600">
          {footerData.copyright}
        </div>

      </div>
    </footer>
  );
}
