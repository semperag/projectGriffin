let showSemesters = false;
const semesters = document.querySelector('.year-selector-content');
const currentSemester = document.querySelectorAll('.semester');
const currentYear = document.querySelectorAll('.year');

function displaySemesterSelector() {
    if (showSemesters === false) {
        semesters.classList.add('display-content');
        showSemesters = true;
    }
    else {
        semesters.classList.remove('display-content');
        showSemesters = false;
    }
}

function displaySemester(event) {
    for (i = 0; i < currentSemester.length; i++) {
        currentSemester[i].classList.remove('current-semester');
        currentYear[i].classList.remove('current-year');

        if (currentSemester[i].id === event.target.id) {
            currentSemester[i].classList.add('current-semester');
            currentYear[i].classList.add('current-year');
        }
    }
}

let el = document.getElementById('button');
if(el){
    el.addEventListener('click', displaySemesterSelector);
}

for (let i = 0; i < currentSemester.length; i++) {
    el = document.getElementById(currentSemester[i].id)

    el.addEventListener('click', displaySemester)
}