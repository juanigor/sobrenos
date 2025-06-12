const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bgColor = entry.target.getAttribute("data-bg");
        if (bgColor) {
          document.body.style.backgroundColor = bgColor;
        }
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => {
  observer.observe(section);
});
