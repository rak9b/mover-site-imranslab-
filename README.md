<div>
  <h1>WeMove Transport</h1>

  <p>
    <strong>About the Project:</strong>
    WeMove Transport is a logistics and cargo company website built with HTML, Tailwind CSS, and JavaScript. It presents services, projects, and company information in a clean, professional layout — designed to reflect a real-world transport business.
  </p>

  <p>
    <strong>Key Highlights:</strong>
    Component-based JavaScript architecture with a fully responsive layout, smooth scroll interactions, animated hero section, and a mobile-friendly navigation drawer.
  </p>
</div>

<details open>
  <summary><h2>Project Details</h2></summary>

  <details>
    <summary><h4>What's Inside</h4></summary>
    <ul>
      <li><strong>Header</strong> — Fixed navigation with scroll effect and mobile drawer menu.</li>
      <li><strong>Hero</strong> — Full-screen banner with animated floating shapes and CTA button.</li>
      <li><strong>About</strong> — Company overview with feature points and decorative images.</li>
      <li><strong>Services</strong> — Six transport services displayed in a responsive grid layout.</li>
      <li><strong>Features</strong> — Three key capabilities with circular icons and numbered layout.</li>
      <li><strong>Projects</strong> — Horizontally scrollable gallery of featured logistics projects.</li>
      <li><strong>Blog</strong> — Two recent blog posts with styled date badges and excerpts.</li>
      <li><strong>Footer</strong> — Multi-column footer with quick links and social media icons.</li>
      <li><strong>Back to Top</strong> — Fixed button that appears on scroll and returns to top.</li>
    </ul>
  </details>

  <details>
    <summary><h4>Key Features</h4></summary>
    <ul>
      <li><strong>Component-Based JS</strong> — Each section is a separate module initialized from <code>app.js</code>.</li>
      <li><strong>Responsive Design</strong> — Fully adapts from mobile screens to large desktop displays.</li>
      <li><strong>Mobile Navigation</strong> — Slide-in drawer menu with overlay and smooth open/close behavior.</li>
      <li><strong>Sticky Header</strong> — Header background changes to solid color when the user scrolls.</li>
      <li><strong>Animated Elements</strong> — Hero and about section include bouncing floating shapes.</li>
      <li><strong>Horizontal Scroll Gallery</strong> — Projects section scrolls horizontally with snap alignment.</li>
      <li><strong>Back to Top Button</strong> — Appears after scrolling 300px and smoothly returns to top.</li>
    </ul>
  </details>

  <details>
    <summary><h4>Technologies Used</h4></summary>
    <ul>
      <li><strong>HTML5</strong> — Semantic structure with root elements for each JS component.</li>
      <li><strong>Tailwind CSS (CDN)</strong> — Utility-first styling with a custom theme configuration.</li>
      <li><strong>JavaScript (ES Modules)</strong> — Modular scripts that render each section independently.</li>
      <li><strong>Google Fonts</strong> — Oswald for headings and Rubik for body text.</li>
      <li><strong>Ionicons</strong> — Icon library used throughout the UI for visual elements.</li>
    </ul>
  </details>

  <details>
    <summary><h4>Project Structure</h4></summary>
    <pre>
wemove-transport/
│
├── index.html                 # Main HTML with root elements for each section
│
├── assets/
│   ├── js/
│   │   ├── app.js             # Main entry point that initializes all components
│   │   ├── header.js          # Header navigation and mobile menu functionality
│   │   ├── hero.js            # Hero banner with background and floating shapes
│   │   ├── about.js           # About section with images and feature points
│   │   ├── service.js         # Services grid with six transport options
│   │   ├── feature.js         # Features section with circular icons
│   │   ├── project.js         # Projects gallery with horizontal scroll
│   │   ├── blog.js            # Blog posts with date badges
│   │   ├── footer.js          # Footer with links and social media
│   │   └── backTop.js         # Back-to-top button with scroll detection
│   │
│   └── images/                # Hero banners, service icons, project photos, blog images
│
└── README.md                  # Project documentation
    </pre>
  </details>

  <details>
    <summary><h4>Quick Start</h4></summary>
    <ol>
      <li>
        <strong>Clone the repository:</strong>
        <pre><code>git clone https://github.com/nawazdevx/wemove-transport.git</code></pre>
      </li>

      <li>
        <strong>Open the project:</strong>
        <ul>
          <li>Open <code>index.html</code> directly in your browser</li>
          <li>Or run a local server:</li>
        </ul>
        <pre><code>python -m http.server 3000</code></pre>
        Then visit <code>http://localhost:3000</code>
      </li>

      <li>
        <strong>Start Customizing:</strong>
        <ul>
          <li>Update site content and navigation links in <code>header.js</code></li>
          <li>Change hero text, image, and CTA button in <code>hero.js</code></li>
          <li>Edit services, features, and projects data in their respective <code>.js</code> files</li>
          <li>Modify colors, fonts, and theme settings in <code>index.html</code></li>
          <li>Replace images inside <code>assets/images/</code> with your own</li>
        </ul>
      </li>
    </ol>

  </details>
</details>

<p>
  <strong>License:</strong>
  This project is licensed under the <a href="https://choosealicense.com/licenses/mit/">MIT License</a>.
</p>

<p>
  <strong>Contact:</strong>
  Connect with me on <a href="https://www.linkedin.com/in/nawazdevx">LinkedIn</a> or visit my <a href="https://nawazdevx.vercel.app/">Portfolio</a>.
</p>

<p>
  <strong>Support:</strong>
  Found this helpful? Give it a ⭐ on GitHub! Thank you.
</p>

<br />

<div>
  <h2>Project Preview</h2>

  <p>
    <strong>Live project ➜</strong>
    <a href="https://nawazdevx.github.io/wemove-transport/" target="_blank">
      <strong>Live Demo</strong>
    </a>
  </p>

  <img src="./assets/images/readme-image.png" alt="Desktop Preview" />
</div>
