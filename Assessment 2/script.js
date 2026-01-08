// Declaring the variables
let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("back-Btn");  
let nextBtn = document.getElementById("next-Btn");

let backComputedStyle = window.getComputedStyle(backBtn);
let nextComputedStyle = window.getComputedStyle(nextBtn);


if (nextComputedStyle.display !== 'none' && backComputedStyle.display !== 'none') {
    // Adding an event listener with the "wheel" event
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})

// Event listener that listens for a click from the Next Button, sliding left between the images
nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 460;
})

// Event listener that listens for a click from the Back Button, sliding right between the images
backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 460;
})
}

function openMenu() {
    let menu = document.querySelector('.menu');
    let menuBtn = document.querySelector('.menu-Btn')
    let nav = document.querySelector('nav');
    let closeBtn = document.querySelector('.close-Btn');

    menu.style.display = 'block';
    nav.style.backgroundColor = '#160635';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
    closeBtn.style.justifyContent = 'end';
}

function closeMenu() {
    let menu = document.querySelector('.menu');
    let menuBtn = document.querySelector('.menu-Btn')
    let nav = document.querySelector('nav');
    let closeBtn = document.querySelector('.close-Btn');

    menu.style.display = 'none';
    nav.style.backgroundColor = 'rgba(0,0,0,0)';
    menuBtn.style.display = 'flex';
    menuBtn.style.justifyContent = 'end';
    closeBtn.style.display = 'none';
}
