const inputForm = document.getElementById('input-form');
const packageNameInput = document.getElementById('package-name');
const entityNameInput = document.getElementById('entity-name');
const idTypeInput = document.getElementById('id-datatype');
const output = document.getElementById('output');

inputForm.addEventListener('submit', submit);

function submit(e) {
    e.preventDefault();
    renderNames('classname-upper', entityNameInput.value, toFirstLetterUpper);
    renderNames('classname-lower', entityNameInput.value, toFirstLetterLower);
    renderNames('package-name-output', packageNameInput.value, toFirstLetterLower);
    renderNames('id-type-upper', idTypeInput.value, toFirstLetterUpper);
    renderNames('id-type-lower', idTypeInput.value, toFirstLetterLower);
    
    output.style.display = 'block'
    // entityNameInput.value = '';
}
 
function renderNames(className, input, caseConversionFn) {
    const classElements = document.getElementsByClassName(className);
    const convertedName = caseConversionFn(input);
    for (let classElement of classElements) {
        classElement.innerText = convertedName;
    }
}

function toFirstLetterUpper(entityNameInput) {
    return entityNameInput[0].toUpperCase() + entityNameInput.slice(1).toLowerCase();
}

function toFirstLetterLower(entityNameInput) {
    return entityNameInput[0].toLowerCase() + entityNameInput.slice(1).toLowerCase();
}

function openPage(pageName, element) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(pageName).style.display = "block";

    element.className += " active";

}

function copyToClipBoard(e) {
    navigator.clipboard.writeText(e.target.parentElement.textContent.replace(/^ {1,24}/gm, ""))
    fade(e);
}

function fade(e) {
    const feedback = document.getElementById('feedback');

    if (feedback.classList.contains('fade-out')) {
        feedback.classList.remove('fade-out');
        feedback.style.display = 'none';
        void feedback.offsetWidth; // Trigger reflow
        feedback.style.display = 'block';
    }
    feedback.classList.add('fade-out')
    feedback.style.display = 'block'
    // feedback.style.top = e.clientY;
    // feedback.style.left = e.clientX;
}
  
for (let element of document.getElementsByClassName('tablink')) {
    element.addEventListener('click', (e) => {
        openPage(e.target.innerText, e.target)
    })
}

for (let element of document.getElementsByClassName('tabcontent')) {
    element.addEventListener('click', copyToClipBoard)
}

document.getElementById("defaultOpen").click(); 