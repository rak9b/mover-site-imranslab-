// Import functions that initialize each section of the website
import { initHeader } from './header.js';
import { initHero } from './hero.js';
import { initAbout } from './about.js';
import { initService } from './service.js';
import { initFeature } from './feature.js';
import { initProject } from './project.js';
import { initBlog } from './blog.js';
import { initFooter } from './footer.js';
import { initBackTop } from './backTop.js';

// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Load and render the header section
  initHeader();

  // Load and render the hero section
  initHero();

  // Load and render the about section
  initAbout();

  // Load and render the services section
  initService();

  // Load and render the features section
  initFeature();

  // Load and render the projects section
  initProject();

  // Load and render the blog section
  initBlog();

  // Load and render the footer section
  initFooter();

  // Initialize the back-to-top button functionality
  initBackTop();
});
