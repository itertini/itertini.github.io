
const projects = [
    {
        title: 'ATM Application',
        description: 'The ATM API is a robust and scalable backend service designed using the Spring Boot framework. It provides essential functionalities required for managing ATM operations, ensuring seamless interactions between users and their bank accounts.',
        link: 'https://gitlab.com/itertini/projects/atm-spring-boot',
        techStack: ['java', 'springBoot', 'hibernate', 'lombok']
    },
    {
        title: 'Exercise Tracker',
        description: 'This project is a Spring Boot implementation of the Node.js Exercise Tracker API project. You can find the original project on Exercise Tracker API on FreeCodeCamp.',
        link: 'https://gitlab.com/itertini/freecodecamp/exercise-tracker-spring-boot',
        techStack: ['html', 'css', 'javaScript', 'java', 'springBoot', 'hibernate', 'lombok']
    },
    {
        title: 'PfuschDB',
        description: 'A platform to offer crafts or to search for and contact suitable craftsmen for a specific job',
        link: 'https://gitlab.com/itertini/codersbay-2.7/pfuschdb',
        techStack: ['html', 'css', 'javaScript', 'vueJS', 'vuetify', 'java', 'springBoot', 'hibernate', 'lombok']
    },
]

const tools = [
    {
        title: 'Phone Number Validator',
        description: 'Validate phone numbers and get Provider',
        link: '/util/number-checker.html'
    },
    {
        title: 'Roman Numeral Converter',
        description: 'Convert any decimal number to roman numeral ',
        link: '/util/roman-converter.html'
    },
]

const techStackImages = {
    html: './img/html.png',
    css: './img/css3.png',
    javaScript: './img/JavaScript.png',
    vueJS: './img/Vue.png',
    vuetify: './img/vuetify.png',
    java: './img/java.png',
    springBoot: './img/spring-boot.png',
    hibernate: './img/hibernate.svg',
    lombok: './img/lombok.png'
}

const title = document.getElementById('title');
let i = 0

function renderProjectElements() {
    const projectsDiv = document.querySelector('#projects-row');

    for (let project of projects) {
        const projectEntry = document.createElement('div');
        const techStackHtml = project.techStack.map(tech => {
            const imgUrl = techStackImages[tech]
            return `<img src=${imgUrl} class="tech-icon me-2" />`
        }).join('')
        projectEntry.innerHTML = `
            <a href=${project.link} target="_blank">
                <div class="card p-2 h-100">
                    <div class="card-body">
                        <h5 class="card-title py-3 fw-semibold">${project.title}</h5>
                        <hr>
                        <p class=" card-text pt-4">${project.description}</p>
                    </div>
                    <div class="card-footer">
                      ${techStackHtml}
                    </div>                
                </div>
            </a>
        `
        projectEntry.classList.add('col')
        projectsDiv.append(projectEntry)
    }
}

function renderToolElements() {
    const toolsDiv = document.querySelector('#tools');

    for (let tool of tools) {
        const row = document.createElement('div');
        row.classList.add('tool-data')
        row.innerHTML = `
            <div class="tool-title"><a href="${tool.link}">${tool.title}</a></div>
            <div class="tool-desc">${tool.description}</div>
            `
        toolsDiv.append(row);
    }
}

function typeWriter() {
    const txt = 'Hey, I\'m Ideal';

    if (i < txt.length) {
        title.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

document.addEventListener('load',
    renderProjectElements(),
    renderToolElements(),
    particlesJS.load('particles-js', '../config/particlesjs-config.json'), () => {
        console.log('loaded')
    },
    typeWriter())
