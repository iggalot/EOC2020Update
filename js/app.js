// Toggles the menu icon shape
function toggleMenubar(x) {
    x.classList.toggle("change");
}

function init() {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    const backgrounds = [
        `radial-gradient(#4E2768, #0B1023)`,  // blue
        `radial-gradient(#4E3022, #161616)`,  // brown
        `radial-gradient(#2B3760, #0B1023)`,  // blue
        `radial-gradient(#4E3022, #161616)`,  // gray
        `radial-gradient(#4E4342, #161616)`,  // gray
        `radial-gradient(#4E4342, #161616)`,  // gray

    ];
    // Tracker
    let current = 0;
    let scrollSlide = 0;

    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            changeDots(this);
            nextSlide(index);
            scrollSlide = index;
        });
    });

    function changeDots(dot) {
        slides.forEach(slide => {
            slide.classList.remove("active");
        })
        dot.classList.add("active");
    }

    function nextSlide(pageNumber) {
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextLeft = nextPage.querySelector(".hero .model-left");
        const nextRight = nextPage.querySelector(".hero .model-right");
        const currentLeft = currentPage.querySelector(".hero .model-left");
        const currentRight = currentPage.querySelector(".hero .model-right");
        const nextText = nextPage.querySelector(".details");
        const portofolio = document.querySelector(".portofolio");

        const tl = new TimelineMax({
            onStart: function() {
                slides.forEach(slide => {
                    slide.getElementsByClassName.pointerEvents = "none";
                })
            },
            onComplete: function() {
                slides.forEach(slide => {
                    slide.getElementsByClassName.pointerEvents = "all";
                })
            }

        });

        tl.fromTo(currentLeft, 0.3, { y: '-10%' }, { y: '-100%' })
            .fromTo(currentRight, 0.3, { y: '10%' }, { y: '-100%' }, '-=0.2')
            .to(portofolio, 0.3, { backgroundImage: backgrounds[pageNumber] })
            .fromTo(currentPage, 0.3, { opacity: 1, pointerEvents: 'all' }, { opacity: 0, pointerEvents: 'none' })
            .fromTo(nextPage, 0.3, { opacity: 0, pointerEvents: 'none' }, { opacity: 1, pointerEvents: 'all' }, "-=0.6")
            .fromTo(nextLeft, 0.3, {y: '-100%'}, {y:'-10%'}, '-=0.6')
            .fromTo(nextRight, 0.3, {y: '-100%'}, {y:'10%'}, '-=0.8')
            .fromTo(nextText, 0.3, {opacity: 0, y: 0}, {opacity:1, y:0})
            .set(nextLeft, {clearProps: 'all'})
            .set(nextRight, {clearProps: 'all'})

        current = pageNumber;
        console.log(pageNumber);
    }

    //OPTIONAL
    document.addEventListener("wheel", throttle(scrollChange, 1500));
    document.addEventListener("touchmove", throttle(scrollChange, 1500));

    function switchDots(dotNumber) {
        const activeDot = document.querySelectorAll(".slide")[dotNumber];
        slides.forEach(slide => {
            slide.classList.remove("active");
        })
        activeDot.classList.add("active");
    }

    function scrollChange(e) {
        if(e.deltaY > 0) {
            scrollSlide += 1;
        } else {
            scrollSlide -= 1;
        }

        if(scrollSlide > 5) {
            scrollSlide = 0;
        }
        if(scrollSlide < 0) {
            scrollSlide = 5;
        }

        switchDots(scrollSlide)

        nextSlide(scrollSlide);
    }

    const hamburger = document.querySelector('.menu-icon');
    const navOpen = document.querySelector('.nav-open');
    const social = document.querySelector('.menu-social');
    const classes = document.querySelector('.menu-classes');
    const events = document.querySelector('.menu-events');
    const members = document.querySelector('.menu-members');
    const about = document.querySelector('.menu-about');
    const favorites = document.querySelector('.menu-favorites');
    const logo = document.querySelector('.menu-logo');

    const tl = new TimelineMax({paused: true, reversed: true});

    tl.to(navOpen, 0.5, {y:0})
    .fromTo(logo, 0.2,  {opacity: 0, y:10}, {opacity: 1, y:0}, '-=1')
    .fromTo(classes, 0.2,  {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1')
    .fromTo(events, 0.2,  {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1')
    .fromTo(members, 0.2,  {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1')
    .fromTo(about, 0.2,  {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1')
    .fromTo(favorites, 0.2,  {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1')
    .fromTo(social, 0.2,  {opacity: 0, y:10}, {opacity: 1, y:0}, '-=0.1');


    hamburger.addEventListener('click', ()=> {
        tl.reversed() ? tl.play() : tl.reverse();
        toggleMenubar(hamburger);
    })
}

// Scroll wheel functionality
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

init();
