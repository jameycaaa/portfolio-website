// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust offset for fixed header
        behavior: 'smooth'
      });

      // Update active link in navigation
      document.querySelectorAll('nav a').forEach(navLink => {
        navLink.classList.remove('active');
      });
      this.classList.add('active');
    }
  });
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navList = document.getElementById('nav-list');

mobileMenuToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

// Filter projects by category
const filterButtons = document.querySelectorAll('.filters button');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');

    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');

    projects.forEach(project => {
      if (filter === 'all' || project.getAttribute('data-category') === filter) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});

// Modal functionality
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');
const viewDetailsButtons = document.querySelectorAll('.view-details');
const modalProjectTitle = document.getElementById('modal-project-title');
const modalProjectDescription = document.getElementById('modal-project-description');

// Example project data (replace with your actual project details)
const projectData = {
  '1': {
    title: 'Project Title 1',
    description: 'Detailed description for Project 1. Lorem ipsum dolor sit amet...'
  },
  '2': {
    title: 'Project Title 2',
    description: 'Detailed description for Project 2. Consectetur adipiscing elit...'
  }
  // Add more project data as needed
};

viewDetailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    const projectId = button.getAttribute('data-project-id');
    const project = projectData[projectId];

    modalProjectTitle.textContent = project.title;
    modalProjectDescription.textContent = project.description;

    modal.style.display = 'block';
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Skill progress animation
const skillsSection = document.getElementById('about');
const skillProgressBars = document.querySelectorAll('.progress-bar');

function animateSkills() {
  if (isElementInViewport(skillsSection)) {
    skillProgressBars.forEach(progressBar => {
      const width = progressBar.getAttribute('style').split(':')[1];
      progressBar.style.width = width;
    });
  }
}

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener('scroll', animateSkills);
// Initial check for skills animation on page load
animateSkills();

const logoImage = document.getElementById("logo-sound");
const logoAudio = document.getElementById("logo-audio");

logoImage.addEventListener("click", function () {
  logoAudio.currentTime = 0; // Reset the audio to the beginning
  logoAudio.play();
});