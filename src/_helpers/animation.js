import gsap from "gsap";

// Home Animations
export function animateHomePage() {
  gsap.to(".home__title--1", {
    ease: "elastic",
    duration: 1.5,
    backgroundColor: "red",
  });
  gsap.to(".home__title--2", {
    ease: "elastic",
    delay: 0.5,
    duration: 1.5,
    backgroundColor: "red",
  });
  gsap.to(".home__title--3", {
    ease: "elastic",
    delay: 1,
    duration: 1.5,
    backgroundColor: "red",
  });
  gsap.to(".navbar", {
    opacity: 1,
    ease: "power",
    delay: 2,
    duration: 1,
  });
  gsap.to("#footer", {
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

// Projects Animations
export function animateProjectsPage() {
  gsap.to("#project__cards", {
    ease: "linear",
    opacity: 1,
    duration: .2,
  });
  gsap.to(".project__click__me", {
    y: -10,
    opacity: 1,
    ease: "power",
    delay: 2,
    duration: 1,
  });
  gsap.to(".project__click__me", {
    y: 10,
    ease: "linear",
    delay: 3,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });
}
