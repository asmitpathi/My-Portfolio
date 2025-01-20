const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.getElementById('navlinks');
const contactForm = document.querySelector('form');
const backToTopButton = document.getElementById("back-to-top");

//check for saved theme in local storage
const savedTheme = localStorage.getItem('theme') || 'light-theme';
body.className = savedTheme;
themeToggle.checked = savedTheme === 'dark-theme';

//theme toggle
themeToggle.addEventListener('change', () => {
    const newTheme = themeToggle.checked ? 'dark-theme' : 'light-theme';
    body.className = newTheme;
    localStorage.setItem('theme', newTheme);
});

//Toggle burger menu
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('active');
    burgerMenu.classList.toggle('open');
    
});

//Form submission
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const { email, subject, message } = event.target;

    if (email.value.trim() && subject.value.trim() && message.value.trim()) {
        alert('Message sent successfully! Thank you for reaching out.');
        contactForm.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

//for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.cta-button').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//back-to-top
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        document.body.classList.add("show-back-to-top");
    } else {
        document.body.classList.remove("show-back-to-top");
    }
});

//Smooth Scroll to Top on Click
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}); //fix this

