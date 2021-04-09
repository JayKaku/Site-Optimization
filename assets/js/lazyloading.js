// for img tags only
const targets = document.querySelectorAll("img");

const lazyload = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-src");

        img.setAttribute("src", src);
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyload);
