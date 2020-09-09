function menuBarNavigation() {
// Menubar animation
    const hamburger = document.querySelector('.menu-icon');
    const navOpen = document.querySelector('.nav-open');
    const social = document.querySelector('.menu-social');
    const classes = document.querySelector('.menu-classes');
    const events = document.querySelector('.menu-events');
    const members = document.querySelector('.menu-members');
    const about = document.querySelector('.menu-about');
    const favorites = document.querySelector('.menu-favorites');
    const logo = document.querySelector('.menu-logo');

    const tl = new TimelineMax({ paused: true, reversed: true });

    tl.to(navOpen, 0.5, { y: 0 })
        .fromTo(logo, 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=1')
        .fromTo(classes, 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.1')
        .fromTo(events, 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.1')
        .fromTo(members, 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.1')
        .fromTo(about, 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.1')
        .fromTo(favorites, 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.1')
        .fromTo(social, 0.2, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.1');


    // Add the event listener for the animation
    hamburger.addEventListener('click', () => {
        tl.reversed() ? tl.play() : tl.reverse();
        toggleMenubar(hamburger);
    });
}


// Toggles the menu icon shape
function toggleMenubar(x) {
    x.classList.toggle("change");
}

menuBarNavigation();