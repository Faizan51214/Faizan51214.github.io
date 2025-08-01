// Modern Portfolio Interactive Effects
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for scroll animations
  const animateElements = document.querySelectorAll(
    ".skill, .experience-item, .project, .education-item"
  );

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.classList.add("animated");
      }
    });
  }, observerOptions);

  animateElements.forEach((element) => {
    element.classList.add("animate-in");
    observer.observe(element);
  });

  // Parallax effect for header
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector("header");
    const speed = scrolled * 0.5;

    if (parallax) {
      parallax.style.transform = `translateY(${speed}px)`;
    }
  });

  // Dynamic typing effect for header subtitle
  const subtitle = document.querySelector("header p");
  if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = "";
    subtitle.style.opacity = "1";

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        subtitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    };

    setTimeout(typeWriter, 2000);
  }

  // Enhanced hover effects
  const interactiveElements = document.querySelectorAll(
    ".skill, .experience-item, .project, nav a, .resume-btn"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      element.style.transition = "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
    });
  });

  // Floating contact button animation
  const floatingContact = document.querySelector(".floating-contact");
  if (floatingContact) {
    floatingContact.addEventListener("click", (e) => {
      e.preventDefault();

      // Create ripple effect
      const ripple = document.createElement("span");
      ripple.style.position = "absolute";
      ripple.style.borderRadius = "50%";
      ripple.style.background = "rgba(255,255,255,0.6)";
      ripple.style.transform = "scale(0)";
      ripple.style.animation = "ripple 0.6s linear";
      ripple.style.left = "50%";
      ripple.style.top = "50%";
      ripple.style.width = "20px";
      ripple.style.height = "20px";
      ripple.style.marginLeft = "-10px";
      ripple.style.marginTop = "-10px";

      floatingContact.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
        window.open(floatingContact.href, "_blank");
      }, 600);
    });
  }

  // Add ripple effect animation to CSS
  const style = document.createElement("style");
  style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
  document.head.appendChild(style);

  // Staggered animation for skills grid
  const skills = document.querySelectorAll(".skill");
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.2}s`;
  });

  // Staggered animation for projects
  const projects = document.querySelectorAll(".project");
  projects.forEach((project, index) => {
    project.style.animationDelay = `${index * 0.3}s`;
  });

  // Cursor follow effect for large screens
  if (window.innerWidth > 768) {
    const cursor = document.createElement("div");
    cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(34, 34, 59, 0.1);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
        `;
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";
    });

    // Scale cursor on hover
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.background = "rgba(34, 34, 59, 0.2)";
      });

      element.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.background = "rgba(34, 34, 59, 0.1)";
      });
    });
  }

  // Loading animation for page elements
  const pageElements = document.querySelectorAll("section");
  pageElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
  });

  // Header elements animation sequence
  const headerElements = document.querySelectorAll(
    "header .profile-pic, header h1, header p, header nav, header .resume-container"
  );
  headerElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.3}s`;
  });
});
