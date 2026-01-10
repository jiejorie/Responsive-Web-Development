// Declaring Global variables
let scrollContainer = document.querySelector(".gallery")
let backBtn = document.getElementById("back-btn");  
let nextBtn = document.getElementById("next-btn");

let backComputedStyle = window.getComputedStyle(backBtn);
let nextComputedStyle = window.getComputedStyle(nextBtn);


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

// Opens Hamburger Menu
function openMenu() {
    let menu = document.querySelector('.menu');
    let menuBtn = document.querySelector('.menu-btn')
    let nav = document.querySelector('nav');
    let closeBtn = document.querySelector('.close-btn');

    menu.style.display = 'block';
    nav.style.backgroundColor = '#160635';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'flex';
    closeBtn.style.justifyContent = 'end';
}

// Closes Hamburger Menu
function closeMenu() {
    let menu = document.querySelector('.menu');
    let menuBtn = document.querySelector('.menu-btn')
    let nav = document.querySelector('nav');
    let closeBtn = document.querySelector('.close-btn');

    menu.style.display = 'none';
    nav.style.backgroundColor = 'rgba(0,0,0,0)';
    menuBtn.style.display = 'flex';
    menuBtn.style.justifyContent = 'end';
    closeBtn.style.display = 'none';
}

// Directs to a separate Wiki Page
function openWiki() {
    window.open('https://alienstage.fandom.com/wiki/ALIEN_STAGE_Wiki', '_blank');
}

// Directs to YouTube Channel
function openYT() {
    window.open('https://youtube.com/playlist?list=PLQ-JZOYFII4dHqeSu6yeGj-30sZohX_oX&si=dfypuPmSrIxK0vS7', '_blank');
}
