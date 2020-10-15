const vacImages = document.querySelectorAll('.image');
const schoolImages = document.querySelectorAll('.high-school-image');
let schoolIndex = 0;
let vacIndex = 0;

function vacForward() {

    vacImages[vacIndex].classList.remove('current-image');

    if (vacIndex >= vacImages.length - 1) {
        vacIndex = 0;
    }
    else {
        vacIndex += 1;
    }

    vacImages[vacIndex].classList.add('current-image');
}

function vacBackward() {

    vacImages[vacIndex].classList.remove('current-image');
    
    if (vacIndex <= 0) {
        vacIndex = vacImages.length - 1;
    }
    else {
        vacIndex -= 1;
    }

    vacImages[vacIndex].classList.add('current-image');
}

function schoolForward() {

    schoolImages[schoolIndex].classList.remove('current-high-school-image');

    if (schoolIndex >= schoolImages.length - 1) {
        schoolIndex = 0;
    }
    else {
        schoolIndex += 1;
    }

    schoolImages[schoolIndex].classList.add('current-high-school-image');
}

function schoolBackward() {
    
    schoolImages[schoolIndex].classList.remove('current-high-school-image');

    if (schoolIndex <= 0) {
        schoolIndex = schoolImages.length - 1;
    }
    else {
        schoolIndex -= 1;
    }

    schoolImages[schoolIndex].classList.add('current-high-school-image');
}

let el = document.getElementById('vacation-arrow-right');
if(el){
    el.addEventListener('click', vacForward);
}

el = document.getElementById('vacation-arrow-left');
if(el){
    el.addEventListener('click', vacBackward);
}

el = document.getElementById('high-school-arrow-right');
if(el){
    el.addEventListener('click', schoolForward);
}

el = document.getElementById('high-school-arrow-left');
if(el){
    el.addEventListener('click', schoolBackward);
}