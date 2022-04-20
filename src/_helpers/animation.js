import gsap from "gsap";

    // import ScrollTrigger from 'gsap/ScrollTrigger'

    // gsap.registerPlugin(ScrollTrigger)

    // gsap.to("#home__details--container", {
    //   scrollTrigger: ".home__details", 
    //   ease: 'linear',
    //   opacity: 0
    // });

// Home Animations
export function animateHomePage() {
  gsap.to("#home", {
    ease: "power",
    duration: 1.5,
    opacity: 1
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
    y: 40,
    opacity: 1,
    ease: "power",
    delay: 2,
    duration: 1,
  });
  gsap.to(".home__scroll", {
    y: 20,
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

// Contact Animations
export function animateContactPage() {
  gsap.to("#contact", {
    ease: "linear",
    opacity: 1,
    duration: 2,
  });
  gsap.to(".contact__form", {
    ease: "linear",
    delay: 2,
    opacity: 1,
    duration: 1,
  });
}
