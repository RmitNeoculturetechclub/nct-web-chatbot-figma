const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbar = document.getElementsByClassName("navbar")[0];
// const navbarLinks = document.querySelectorAll("hover");

// console.log(navbarLinks);

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    
    // navbarLinks.forEach(link => {
    //     link.classList.remove('hover');
    // })
})