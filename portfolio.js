let menu = document.querySelector('ul');
let bars = document.querySelector('.header .fa-bars');

bars.addEventListener('click', () => {
    menu.classList.toggle('show');
});

var typed = new Typed('#text' , {
    strings: ['Web Developer', 'AI Engineer', 'Python Developer'],
    typeSpeed: 10,
    backSpeed: 10,
    smartBackspace: true,
    loop: true,
});

const GITHUB_USERNAME = 'HyperShark1007'; // Replace with your github username

async function fetchGithubProjects() {
    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
        const projects = await response.json();

        const container = document.querySelector('.projects-container');
        projects.forEach((project) => {
            // Create a project card
            const card = document.createElement('div');
            card.classList.add('project-card');

            // Add project details
            card.innerHTML = `
                 <h3 class="project-title">${project.name}</h3>
                 <p class="project-description">${project.description || 'No description provided.'}</p>
                 <a href="${project.html_url}" target="_blank" class="project-link">View on GitHub</a>
                 `;

            // Append card to container
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
} 

// Call the function to fetch and display projects
fetchGithubProjects();

// Contact Us
document.getElementById("contact-link").addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    // Select the WhatsApp icon
    const whatsappIcon = document.getElementById("whatsapp-icon");

    // Add the wiggle class
    whatsappIcon.classList.add("wiggle");

    // Remove the wiggle class after the animation is complete (0.5s)
    setTimeout(() => {
        whatsappIcon.classList.remove("wiggle");
    }, 500);

    // Open WhatsApp client
    const whatsappLink = "https://wa.me/447405848146?text=Hi,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20job%20opportunity."; // Replace <your-number> with your WhatsApp number
    window.open(whatsappLink, "_blank"); // Opens WhatsApp in a new tab or app
});
