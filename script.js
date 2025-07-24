// Typing animation
const typingText = document.getElementById("typing-text");
const descriptions = [
  "Fast learner, loves solving real-world problems.",
  "AI & Data Analytics Enthusiast.",
  "Passionate about data-driven solutions.",
  "Eager to learn new technologies."
];

let descIndex = 0;
let charIndex = 0;
let typingSpeed = 70;
let deleting = false;

function typeEffect() {
  const current = descriptions[descIndex];

  if (!deleting) {
    typingText.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typingText.textContent = current.substring(0, charIndex--);
    if (charIndex === 0) {
      deleting = false;
      descIndex = (descIndex + 1) % descriptions.length;
    }
  }

  setTimeout(typeEffect, deleting ? 40 : typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Back to top button logic
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Change header style on scroll
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
