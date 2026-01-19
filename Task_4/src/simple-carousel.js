//Ensures that document has loaded and parsed by listening to 'DOMContentLoaded' event
//

document.addEventListener('DOMContentLoaded', () => {
    
    //Finds the data-simple-carousel attribute in the document
    //If found assigns it to the carousel variable otherwise returns null
    const carousel = document.querySelector('[data-simple-carousel]');
    if (!carousel) return;

    //Finds the track and slides within the carousel
    const track = carousel.querySelector('[data-simple-track]');
    const slides = Array.from(carousel.querySelectorAll('[data-simple-slide]'));


    //Finds the previous and next button within the carousel
    const prevBtn = carousel.querySelector('[data-simple-prev]');
    const nextBtn = carousel.querySelector('[data-simple-next]');

    //This line checks if the track exists and if there are any slides

    if(!track || slides.length === 0) return;

    let current = 0; //keeps the track of which is currently visible
    let animating = false; //flag to prevent multiple transitions at once
    const duration = 600; //sets the speed of the slide transition in milli seconds
    const easing = 'cubic-bezier(0.22,1,0.36, 1)'; // controls the animation curve

    //the transform property of this track will change often
    //allows the browser to optimize rendering and make animations smoother using GPU
    track.style.willChange = 'transform';


    function animateTo(index){
        //safety guard
        if (animating) return;
        animating = true;

        //slide changing logic
        current = (index + slides.length) % slides.length;

        //setting transition and transform properties
        
        track.style.transition = `transform ${duration}ms ${easing}`; //transform 500s 
        track.style.transform = `translate3d(-${current * 100}%, 0, 0)`;

        //setting aria-hidden false if i === current slide
        slides.forEach((s,i) => s.setAttribute('aria-hidden',i===current ? 'false' : 'true'));

        //disabling navigation button during the animation to prevent the triggering
        prevBtn?.setAttribute('disabled','true');
        nextBtn?.setAttribute('disabled','true');
    }
    
    //This event listener waits for the slide transition to finish
    track.addEventListener('transitionend', (e)=>{
        if (e.propertyName !== 'transform') return;

        animating = false;

        
        prevBtn?.removeAttribute('disabled');
        nextBtn?.removeAttribute('disabled');
    });

    prevBtn?.addEventListener('click', () =>{
        animateTo(current - 1);
    });

    nextBtn?.addEventListener('click', () => {
        animateTo(current + 1);
    });

    //Keyboard navigation support
    carousel.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevBtn?.click();
        }
        if (e.key === 'ArrowRight') {
            nextBtn?.click();
        }
    });
    


    track.style.transform = `translateX(0%)`;
    slides.forEach((s,i) => s.setAttribute('aria-hidden', i===0 ? 'false' : 'true'));
});