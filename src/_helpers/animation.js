import gsap from "gsap";

// Home Animations
export function animateHomePage() {
  gsap.to(".home__title--1", {
    x: 100,
    ease: "elastic",
    duration: 1.5,
    backgroundColor: "red",
  });
  gsap.to(".home__title--2", {
    x: -100,
    ease: "elastic",
    delay: 0.5,
    duration: 1.5,
    backgroundColor: "red",
  });
  gsap.to(".home__title--3", {
    x: 100,
    ease: "elastic",
    delay: 1,
    duration: 1.5,
    backgroundColor: "red",
  });
  gsap.to(".home__navbar", {
    opacity: 1,
    ease: "power",
    delay: 2,
    duration: 1,
  });
  gsap.to(".home__scroll", {
    y: 50,
    opacity: 1,
    ease: "power",
    delay: 2,
    duration: 1,
  });
  gsap.to(".home__scroll", {
    y: 50,
    opacity: 1,
    ease: "power",
    delay: 2,
    duration: 1,
  });
  gsap.to(".home__scroll", {
    y: 30,
    ease: "linear",
    delay: 3,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });
}
