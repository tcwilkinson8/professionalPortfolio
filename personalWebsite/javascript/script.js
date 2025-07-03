window.onload = function () {
    const heroImg = document.getElementById("hero-img");
    const heroImgNext = document.getElementById("hero-img-next");
    const heroText = document.querySelector(".hero-text");
    let currentImageIndex = 0;

    const images = [
        { src: "personalWebsite/Images/York.jpg", text: '"Hello world!"' }, 
        { src: "personalWebsite/Images/Stockholm.jpg", text: '"Hej världen!"' }, 
        { src: "personalWebsite/Images/Osaka.jpg", text: '"こんにちは世界!"' }, 
        { src: "personalWebsite/Images/Hongkong.jpg", text: '"你好世界!"' }, 
        { src: "personalWebsite/Images/Berlin.jpg", text: '"Hallo Welt!"' }, 
        { src: "personalWebsite/Images/Belfast.jpg", text: '"Dia duit ar domhan!"' }, 
        { src: "personalWebsite/Images/Amsterdam.jpg", text: '"Hallo wereld!"' }
    ];

    // Set initial image and text
    heroImg.src = images[currentImageIndex].src;
    heroText.innerHTML = `<h1>${images[currentImageIndex].text}</h1>`;

    function deleteText(text, callback) {
        let i = text.length;
        function erase() {
            if (i >= 0) {
                heroText.innerHTML = `<h1>${text.substring(0, i)}</h1>`;
                i--;
                setTimeout(erase, 50);
            } else {
                callback();
            }
        }
        erase();
    }

    function typeText(text) {
        let i = 0;
        function type() {
            if (i <= text.length) {
                heroText.innerHTML = `<h1>${text.substring(0, i)}</h1>`;
                i++;
                setTimeout(type, 100);
            }
        }
        type();
    }

    function changeImage() {
        const nextIndex = (currentImageIndex + 1) % images.length;
        heroImgNext.src = images[nextIndex].src;
        heroImgNext.style.opacity = 1;

        deleteText(heroText.innerText, () => {
            typeText(images[nextIndex].text);
        });

        setTimeout(() => {
            heroImg.src = images[nextIndex].src;
            heroImgNext.style.opacity = 0;
            currentImageIndex = nextIndex;
            setTimeout(changeImage, 2000); // Regular transition timing
        }, 3000);
    }

    // **Start with York longer before cycling begins**
    setTimeout(changeImage, 4000); // Delay the first transition for 8 seconds
};



/* Contact Form */
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formStatus = document.getElementById("form-status");

    // Validation
    if (!name || !email.includes("@") || !message) {
        formStatus.textContent = "Please enter valid details.";
        formStatus.style.color = "red";
        return;
    }

    // Simulate a successful message (can be replaced with an actual backend submission)
    formStatus.textContent = "Message sent successfully!";
    formStatus.style.color = "green";

    // Clear form fields after submission
    document.getElementById("contact-form").reset();
});





  
/* Hamburger Menu */
document.addEventListener("DOMContentLoaded", function () {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");

    hamMenu.addEventListener("click", function () {
        offScreenMenu.classList.toggle("open");
        hamMenu.classList.toggle("active");
    });
});

/* Scrolling for Navigation */
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

/* Dynamic Project Cards */
const projects = [
    { name: "Portfolio Website", description: "A fully responsive portfolio", link: "#" },
    { name: "Navigation Optimization", description: "Improved UX for menus", link: "#" }
];

const projectContainer = document.getElementById("projects");

projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href="${project.link}" class="btn">View Project</a>`;
    projectContainer.appendChild(projectDiv);
});

/* Contact form validation*/
document.querySelector("form").addEventListener("submit", function (event) {
    const email = document.getElementById("email").value;
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    }
});

/* Dark mode toggle */
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});
