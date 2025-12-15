document.addEventListener("DOMContentLoaded", function() {
  // Modal handling from about.js and resume.js combined
  const modal = document.getElementById("resumeModal");
  const openBtn = document.getElementById("openResume");
  const closeBtn = document.querySelector(".close");
  const resumeModal = document.getElementById("resumeModal");
  const resumeBtn = document.getElementById("resumeBtn");
  const aboutModal = document.getElementById("aboutModal");
  const aboutBtn = document.getElementById("aboutBtn");
  const closeBtns = document.querySelectorAll(".close");

  // Open resume modal
  if (openBtn) {
    openBtn.onclick = function() {
      modal.style.display = "flex";
    }
  }
  if (resumeBtn) {
    resumeBtn.onclick = () => resumeModal.style.display = "flex";
  }

  // Open about modal
  if (aboutBtn) {
    aboutBtn.onclick = () => aboutModal.style.display = "flex";
  }

  // Close modals
  if (closeBtn) {
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  }
  closeBtns.forEach(btn => {
    btn.onclick = () => btn.closest(".modal").style.display = "none";
  });

  // Combined window.onclick for closing modals
  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
    if (event.target.classList.contains("modal")) {
      event.target.style.display = "none";
    }
  }

  // Animations from animations.js
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  function checkVisibility() {
    animatedElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 100) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkVisibility);
  checkVisibility();

  const clickableElements = document.querySelectorAll('.animate-on-click');
  clickableElements.forEach(el => {
    el.addEventListener('click', function() {
      this.classList.add('clicked');
      setTimeout(() => {
        this.classList.remove('clicked');
      }, 300);
    });
  });

  // Navigation and portfolio from portfolio.js
  const menu = document.getElementById('menu');
  const nav = document.querySelector('.nav');
  if (menu) {
    menu.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }

  const navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });

  const projects = [
    {
      title: "Electricity Billing System",
      description: "A system for managing electricity usage and billing records."
    },
    {
      title: "Real-Time Chat Website",
      description: "A live chat platform with instant messaging and notifications."
    },
    {
      title: "Login Form System",
      description: "A secure login and registration form with validation."
    },
    {
      title: "Enrollment System",
      description: "A student enrollment system for managing courses and records."
    },
    {
      title: "Booking System",
      description: "A hotel and event booking system with payment integration."
    },
    {
      title: "Locator System",
      description: "A real-time locator system for tracking locations."
    }
  ];

  const boxes = document.querySelectorAll(".portfolio-box");
  boxes.forEach((box, index) => {
    if (projects[index]) {
      const overlay = document.createElement("div");
      overlay.classList.add("overlay");
      overlay.innerHTML = `
        <h3>${projects[index].title}</h3>
        <p>${projects[index].description}</p>
      `;
      box.appendChild(overlay);
    }
  });
});
