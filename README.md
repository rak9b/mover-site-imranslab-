<div>
  <h1>WeMove Transport Website</h1>

  <p>
    <strong>About Project:</strong> 
    A modern logistics and cargo website built with vanilla JavaScript and Tailwind CSS, featuring modular component architecture. The site includes smooth animations, responsive navigation, horizontal scrollable project cards, and contact sections all organized through ES6 modules for clean maintainability. Each section renders independently with reusable functions, making customization straightforward for transport and logistics businesses, and much more.
  </p>

  <p> 
    <strong>What I learned:</strong>
    Built a modular JavaScript application using ES6 imports and exports, implemented component-based architecture with separate initialization functions, utilized Tailwind CSS utility classes for responsive design without custom CSS files, and created smooth scroll effects with intersection observers, and much more.
  </p>

  <p> 
    <strong>Personal Note:</strong>
    I started building HTML, CSS, and JavaScript projects in 2022. <br />
    At that time, I focused on learning first and began uploading to GitHub recently. <br />
    Now I'm working with <strong>React.js</strong> and <strong>Next.js</strong>, and seeking opportunities as a <strong>frontend</strong> or <strong>web developer</strong>.
  </p>
</div>

<details open> 
  <summary><h2>Project More Details</h2></summary>

  <details> 
    <summary><h4>What's Inside</h4></summary>
    <ul>
      <li><strong>Header Section</strong> - Fixed navigation with transparent-to-solid transition, mobile overlay menu, and phone contact display</li>
      <li><strong>Hero Section</strong> - Full-screen banner with background image overlay, animated floating shapes, and call-to-action button</li>
      <li><strong>About Section</strong> - Company introduction with image gallery, decorative shapes, feature points list, and story button</li>
      <li><strong>Services Section</strong> - Six service cards with numbered icons showing air freight, road freight, ocean freight, rail freight, warehousing, and project cargo</li>
      <li><strong>Features Section</strong> - Three circular icon features with large background numbers and detailed descriptions</li>
      <li><strong>Projects Section</strong> - Horizontal scrollable gallery with project cards, category tags, and expandable images</li>
      <li><strong>Blog Section</strong> - Recent news articles with date badges, featured images, and read more links</li>
      <li><strong>Footer Section</strong> - Multi-column layout with quick links, services menu, community links, and social media icons</li>
      <li><strong>Back to Top Button</strong> - Floating scroll button that appears after 300px with smooth animation</li>
    </ul>
  </details>

  <details> 
    <summary><h4>Technologies Used</h4></summary>
    <ul>
      <li><strong>HTML5</strong> - Semantic structure with section IDs for smooth navigation and root elements for component rendering</li>
      <li><strong>JavaScript (ES6)</strong> - Modular architecture with import/export statements, arrow functions, template literals, and event delegation</li>
      <li><strong>Tailwind CSS (CDN)</strong> - Utility-first styling with custom color palette, responsive breakpoints, and hover states</li>
      <li><strong>Google Fonts</strong> - Oswald for headings and Rubik for body text with multiple font weights</li>
      <li><strong>Ionicons</strong> - SVG icon library for navigation arrows, social media, and UI elements</li>
      <li><strong>Component Architecture</strong> - Separate JS modules for header, hero, about, services, features, projects, blog, footer, and back-to-top</li>
      <li><strong>Custom Tailwind Config</strong> - Extended color system with primary orange, secondary navy, accent blue, and custom font families</li>
      <li><strong>Scroll Events</strong> - Window scroll listeners for header background change and back-to-top button visibility</li>
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
│   │   ├── app.js            # Main entry point that initializes all components
│   │   ├── header.js         # Header navigation and mobile menu functionality
│   │   ├── hero.js           # Hero banner with background and floating shapes
│   │   ├── about.js          # About section with images and feature points
│   │   ├── service.js        # Services grid with six transport options
│   │   ├── feature.js        # Features section with circular icons
│   │   ├── project.js        # Projects gallery with horizontal scroll
│   │   ├── blog.js           # Blog posts with date badges
│   │   ├── footer.js         # Footer with links and social media
│   │   └── backTop.js        # Back-to-top button with scroll detection
│   │
│   └── images/               # Hero banners, service icons, project photos, blog images
│
└── README.md                 # Project documentation
    </pre>
  </details>

  <details> 
    <summary><h4>Key Features</h4></summary>
    <ul>
      <li><strong>Modular JavaScript Architecture</strong> - Each section in separate ES6 module with init function for clean code organization</li>
      <li><strong>Component-Based Rendering</strong> - Template literal HTML generation inside dedicated render functions</li>
      <li><strong>Mobile-First Navigation</strong> - Slide-in drawer menu with overlay, smooth transitions, and close-on-click functionality</li>
      <li><strong>Scroll-Triggered Header</strong> - Transparent header changes to solid background after 80px scroll</li>
      <li><strong>Animated Hero Section</strong> - Bouncing floating shapes with 3-second animation duration</li>
      <li><strong>Horizontal Scrollable Gallery</strong> - Projects section with snap scrolling and overflow handling</li>
      <li><strong>Hover Effects</strong> - Service cards change border color, project images reveal expand buttons on hover</li>
      <li><strong>Date Badge Design</strong> - Blog posts feature floating date cards with shadow offset styling</li>
      <li><strong>Custom Tailwind Configuration</strong> - Extended color palette and font families defined in inline script</li>
      <li><strong>Back-to-Top Button</strong> - Appears at 300px scroll with fade and slide animation</li>
      <li><strong>Fully Responsive Design</strong> - Grid layouts adapt from mobile to desktop with Tailwind breakpoints</li>
      <li><strong>Easy Customization</strong> - All content stored in data objects at the top of each module file</li>
    </ul>
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
          <li>Update company name and navigation in <code>header.js</code></li>
          <li>Change hero content and background image in <code>hero.js</code></li>
          <li>Modify service offerings in <code>service.js</code> data object</li>
          <li>Replace project images in <code>assets/images/</code> folder</li>
        </ul>
      </li>
    </ol>
  </details>

  <details> 
    <summary><h4>Customization</h4></summary>
    <ul>
      <li><strong>Content Data:</strong> Each JS module has a data object at the top - update text, titles, descriptions, and links there
        <pre><code>const heroData = {
  backgroundImage: './assets/images/hero-banner.jpg',
  titleHighlight: 'Moving Your',
  titleMain: 'World Forward',
  description: 'Your description here...',
};</code></pre>
      </li>
      <li><strong>Colors:</strong> Update Tailwind config in <code>index.html</code> inside the <code>&lt;script&gt;</code> tag
        <pre><code>tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#f97316',      // Orange accent color
        secondary: '#0f2a44',    // Dark navy blue
        accent: '#1e88e5',       // Light blue
      },
    },
  },
};</code></pre>
      </li>
      <li><strong>Images:</strong> Replace files in <code>assets/images/</code> folder - update file names in data objects if needed</li>
      <li><strong>Fonts:</strong> Change Google Fonts link in HTML <code>&lt;head&gt;</code> and update <code>fontFamily</code> in Tailwind config</li>
      <li><strong>Services:</strong> Add or remove services by editing the <code>services</code> array in <code>service.js</code></li>
      <li><strong>Projects:</strong> Update project cards in <code>project.js</code> data array with new images and descriptions</li>
      <li><strong>Blog Posts:</strong> Modify blog entries in <code>blog.js</code> data object with dates, titles, and content</li>
      <li><strong>Footer Links:</strong> Edit footer columns and social media links in <code>footer.js</code> data structure</li>
      <li><strong>Navigation:</strong> Add or remove menu items in <code>header.js</code> menu array</li>
      <li><strong>Animations:</strong> Adjust animation duration by changing <code>[animation-duration:3s]</code> classes in component templates</li>
    </ul>
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
    <strong>You can view the live project here ➜</strong>
    <a href="https://nawazdevx.github.io/wemove-transport/" target="_blank">
      <strong>Live Demo</strong>
    </a>
  </p>

  <img src="./assets/images/readme-image.png" alt="Desktop Demo" />
</div>
