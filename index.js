const pageNumber = document.querySelectorAll('.position');
const currentNav = document.querySelectorAll('.navlink');
const currentFrame = document.querySelectorAll('.frame');
let pageIndex = 0;

function forward() {
    if (pageIndex < currentFrame.length - 1) {
        pageNumber[pageIndex].classList.remove('current-page');
        currentFrame[pageIndex].classList.remove('current-frame');
        currentFrame[pageIndex].classList.add('past-frame');
        currentNav[pageIndex].classList.remove('current-nav');
        pageIndex += 1
        pageNumber[pageIndex].classList.add('current-page');
        currentNav[pageIndex].classList.add('current-nav');
        currentFrame[pageIndex].classList.add('current-frame');
    }
}

function backward() {
    if (pageIndex > 0) {
        pageNumber[pageIndex].classList.remove('current-page');
        currentNav[pageIndex].classList.remove('current-nav');
        currentFrame[pageIndex].classList.remove('current-frame');
        
        pageIndex -= 1
        pageNumber[pageIndex].classList.add('current-page');
        currentFrame[pageIndex].classList.add('current-frame');
        currentFrame[pageIndex].classList.remove('past-frame');
        currentNav[pageIndex].classList.add('current-nav');
    }
}

function newPage(event) {

    let targetIndex;
    for (i = 0; i < currentNav.length; i++) {
        if (currentNav[i].id === event.target.id) {
            targetIndex = i;
        }
    }

    if (targetIndex > pageIndex) {
        for (i = pageIndex; i < targetIndex; i++) {
            forward();
        }
    }
    else if (targetIndex < pageIndex) {
        for(i = pageIndex; i > targetIndex; i--) {
            backward();
        }
    }
    console.log(pageIndex);
}

function contactCalled() {
    for (i = pageIndex; i < currentFrame.length; i++) {
        forward();
    }
}

let el = document.getElementById('arrow-down');
if(el){
    el.addEventListener('click', forward);
}

el = document.getElementById('arrow-up');
if(el){
    el.addEventListener('click', backward);
}

el = document.getElementById('contact-email')
if(el){
    el.addEventListener('click', contactCalled);
}

for (let i = 0; i < currentNav.length; i++) {

    el = document.getElementById(currentNav[i].id);

    if(el){
        el.addEventListener('click', newPage);
    }

}
