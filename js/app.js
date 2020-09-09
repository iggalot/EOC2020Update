
// Constants
let current = 0;
let scrollSlide = 0;
const pages = getPages();
const slides = getSlides();
const backgrounds = [
    `radial-gradient(#4E2768, #0B1023)`,  // blue
    `radial-gradient(#4E3022, #161616)`,  // brown
    `radial-gradient(#2B3760, #0B1023)`,  // blue
    `radial-gradient(#4E3022, #161616)`,  // gray
    `radial-gradient(#4E4342, #161616)`,  // gray
    `radial-gradient(#4E4342, #161616)`,  // gray
];

// Array of the "pages" defined in this html document.
function getPages() {
    return document.querySelectorAll(".page");
}

function getSlides() {
    return document.querySelectorAll(".slide");
}

function nextSlide(pageNumber) {
    const nextPage = pages[pageNumber];
    console.log(nextPage);
    const currentPage = pages[current];
    const nextLeft = nextPage.querySelector(".hero .model-left");
    const currentLeft = currentPage.querySelector(".hero .model-left");
    const nextText = nextPage.querySelector(".details");
    const portofolio = document.querySelector(".portofolio");

    const tl = new TimelineMax({
        onStart: function () {
            slides.forEach(slide => {
                slide.getElementsByClassName.pointerEvents = "none";
            })
        },
        onComplete: function () {
            slides.forEach(slide => {
                slide.getElementsByClassName.pointerEvents = "all";
            })
        }
    });

    tl.fromTo(currentLeft, 0.3, { y: '-10%' }, { y: '-100%' })
        .to(portofolio, 0.3, { backgroundImage: backgrounds[pageNumber] })
        .fromTo(currentPage, 0.3, { opacity: 1, pointerEvents: 'all' }, { opacity: 0, pointerEvents: 'none' })
        .fromTo(nextPage, 0.3, { opacity: 0, pointerEvents: 'none' }, { opacity: 1, pointerEvents: 'all' }, "-=0.6")
        .fromTo(nextLeft, 0.3, { y: '-100%' }, { y: '-10%' }, '-=0.6')
        .fromTo(nextText, 0.3, { opacity: 0, y: 0 }, { opacity: 1, y: 0 })
        .set(nextLeft, { clearProps: 'all' })
        ;
    current = pageNumber;
}

// Setup the basic page behavior
function init() {
    slides.forEach((slide, index) => {
        slide.addEventListener('click', function () {
            changeDots(this);
            nextSlide(index);
            scrollSlide = index;
        });
    });

    // //OPTIONAL for mousewheel and touch screen scrolling
    // document.addEventListener("wheel", throttle(scrollChange, 1500));
    // document.addEventListener("touchmove", throttle(scrollChange, 1500));



}



// // Scroll wheel functionality
// function throttle(func, limit) {
//     let inThrottle;
//     return function () {
//         const args = arguments;
//         const context = this;
//         if (!inThrottle) {
//             func.apply(context, args);
//             inThrottle = true;
//             setTimeout(() => (inThrottle = false), limit);
//         }
//     };
// }

// // Actions for switching the dot indicators
// function switchDots(dotNumber) {
//     const activeDot = document.querySelectorAll(".slide")[dotNumber];
//     slides.forEach(slide => {
//         slide.classList.remove("active");
//     })
//     activeDot.classList.add("active");
// }

// function changeDots(dot) {
//     slides.forEach(slide => {
//         slide.classList.remove("active");
//     })
//     dot.classList.add("active");
// }


// // Scroll button function helpers.
// function scrollChange(e) {
//     if (e.deltaY > 0) {
//         scrollSlide += 1;
//     } else {
//         scrollSlide -= 1;
//     }

//     if (scrollSlide > 5) {
//         scrollSlide = 0;
//     }
//     if (scrollSlide < 0) {
//         scrollSlide = 5;
//     }

//     switchDots(scrollSlide)

//     nextSlide(scrollSlide);
// }

// The main funciton call
init();

