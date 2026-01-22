//Ensures that document has loaded and parsed by listening to 'DOMContentLoaded' event
//

document.addEventListener("DOMContentLoaded", () => {
  //Finds the data-simple-carousel attribute in the document
  //If found assigns it to the carousel variable otherwise returns null
  const carousel = document.querySelector("[data-simple-carousel]");
  if (!carousel) return;

  //Finds the track and slides within the carousel
  const track = carousel.querySelector("[data-simple-track]");
  //Node List to array
  const slides = Array.from(carousel.querySelectorAll("[data-simple-slide]"));

  //Finds the previous and next button within the carousel
  const prevBtn = carousel.querySelector("[data-simple-prev]");
  const nextBtn = carousel.querySelector("[data-simple-next]");

  //This line checks if the track exists and if there are any slides

  if (!track || slides.length === 0) return;

  let current = 0; //keeps the track of which is currently visible
  let animating = false; //flag to prevent multiple transitions at once
  const duration = 800; //sets the speed of the slide transition in milli seconds
  const easing = "ease-in-out"; // controls the animation curve eg-cubic-bezier(0.22,1,0.36, 1)

  //the transform property of this track will change often
  //allows the browser to optimize rendering and make animations smoother using GPU
  track.style.willChange = "transform";

  function animateTo(index) {
    if (animating) return;
    animating = true;

    //Wrap index to handle looping
    current = (index + slides.length) % slides.length;

    //Move the track to show the target slide
    track.style.transition = `transform ${duration}ms ${easing}`;
    track.style.transform = `translate3d(-${current * 100}%, 0, 0)`;

    //Update accessibility attributes
    slides.forEach((s, i) => s.setAttribute("aria-hidden", i === current ? "false" : "true"));

    //Disable buttons during animation
    prevBtn?.setAttribute("disabled", "true");
    nextBtn?.setAttribute("disabled", "true");
  }

  //This event listener waits for the slide transition to finish
  track.addEventListener("transitionend", (e) => {
    if (e.propertyName !== "transform") return;

    animating = false;

    prevBtn?.removeAttribute("disabled");
    nextBtn?.removeAttribute("disabled");
  });

  prevBtn?.addEventListener("click", () => {
    animateTo(current - 1);
  });

  nextBtn?.addEventListener("click", () => {
    animateTo(current + 1);
  });

  //Keyboard navigation support
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevBtn?.click();
    }
    if (e.key === "ArrowRight") {
      nextBtn?.click();
    }
  });

  track.style.transform = `translateX(0%)`;
  slides.forEach((s, i) =>
    s.setAttribute("aria-hidden", i === 0 ? "false" : "true"),
  );
});
