const schoolImages = document.querySelectorAll('.high-school-image');
let schoolIndex = 0;

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