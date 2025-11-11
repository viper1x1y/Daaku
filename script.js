// Venom-style motion effect
const venomBg = document.querySelector(".venom-bg");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  venomBg.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(0,255,180,0.2), transparent 80%)`;
});

// Smooth section reveal
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});
