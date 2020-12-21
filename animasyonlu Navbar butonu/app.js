const hamburger = document.querySelector(".hamburger");
const about = document.querySelector(".about");

hamburger.addEventListener("click", () => {
  about.classList.toggle("açık");
  const t1 = gsap.timeline();
  if (about.classList.contains("açık")) {
    t1.to(about, 0.5, { clipPath: "circle(2000px at 100% -20%)" });
    t1.to(".çizgi1", 0.5, { rotate: "45deg", y: "5px" }, "-=0.5");
    t1.set(".çizgi2", { display: "none" }, "-=0.5");
    t1.to(".çizgi3", 0.5, { rotate: "-45deg", y: "-5px" }, "-=0.5");
    t1.fromTo(".social-links", 1, { opacity: 0 }, { opacity: 1 });
    t1.fromTo(".about-text", 1, { opacity: 0 }, { opacity: 1 }, "-=0.75");
  } else {
    t1.to(about, 0.5, { clipPath: "circle(50px at 100% -20%)" });
    t1.to(".çizgi1", 0.5, { rotate: "0", y: 0 }, "-=0.5");
    t1.set(".çizgi2", { display: "block" }, "-=0.5");
    t1.to(".çizgi3", 0.5, { rotate: "0", y: 0 }, "-=0.5");
  }
});
