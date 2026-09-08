const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");

hamburger.addEventListener("click", function(){
    navMenu.classList.toggle("active");
});

window.addEventListener("scroll", function (){
    sections.forEach(function(section){
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY;

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
            ) {
         const currentSection = section.id;
         console.log(currentSection);
         navLinks.forEach(function(navLink){
            navLink.classList.remove("active");
         });
         const activeLink = document.querySelector(
            `.nav-link[href="#${currentSection}"]`
        );
         if (activeLink) {
            activeLink.classList.add("active");
         }
        
        }
    });
})