const pageNumber = document.querySelectorAll('.position');
const currentNav = document.querySelectorAll('.navlink');
const currentFrame = document.querySelectorAll('.frame');
let pageIndex = 0;
let isAnimating = false;
/**const navigation = document.getElementById('mid-left');
const menuButton = document.getElementById('menu-button');

menuButton.addEventListener('click', event => {
    console.log("open");
	navigation.classList.add('open');
	event.stopPropagation();
});


document.addEventListener('click', () => {
    console.log("close");
	navigation.classList.remove('open');
});
*/

function forward() {
    if (pageIndex < currentFrame.length - 1) {

        if (!isAnimating) {
            isAnimating = true;
            pageNumber[pageIndex].classList.remove('current-page');
            currentFrame[pageIndex].classList.remove('current-frame');
            currentFrame[pageIndex].classList.add('past-frame');
            currentNav[pageIndex].classList.remove('current-nav');
            pageIndex += 1
            pageNumber[pageIndex].classList.add('current-page');
            currentNav[pageIndex].classList.add('current-nav');
            currentFrame[pageIndex].classList.add('current-frame');
     
            loading();
        }
    }
}

function backward() {
    if (pageIndex > 0) {

        if (!isAnimating) {
            isAnimating = true;
            pageNumber[pageIndex].classList.remove('current-page');
            currentNav[pageIndex].classList.remove('current-nav');
            currentFrame[pageIndex].classList.remove('current-frame');
            pageIndex -= 1
            currentFrame[pageIndex].classList.remove('way-past-frame');
            pageNumber[pageIndex].classList.add('current-page');
            currentFrame[pageIndex].classList.add('current-frame');
            currentFrame[pageIndex].classList.remove('past-frame');
            currentNav[pageIndex].classList.add('current-nav');

            loading();
        }
    }
}

function newPage(event) {

    if (!isAnimating) {
        isAnimating = true;
        let targetIndex;
        
        for (i = 0; i < currentNav.length; i++) {
            if (currentNav[i].id === event.target.id) {
                targetIndex = i;
            }
        }

        if (targetIndex > pageIndex) {
            pageNumber[pageIndex].classList.remove('current-page');
            currentFrame[pageIndex].classList.remove('current-frame');
            currentFrame[pageIndex].classList.add('past-frame');
            currentNav[pageIndex].classList.remove('current-nav');
            pageIndex += 1;
            pageNumber[targetIndex].classList.add('current-page');
            currentNav[targetIndex].classList.add('current-nav');
            currentFrame[targetIndex].classList.add('current-frame');

        
            for (i = pageIndex; i < targetIndex; i++) {
                currentFrame[i].classList.add('past-frame');
            }
            pageIndex = targetIndex
        }
        else if (targetIndex < pageIndex) {
            pageNumber[pageIndex].classList.remove('current-page');
            currentNav[pageIndex].classList.remove('current-nav');
            currentFrame[pageIndex].classList.remove('current-frame');
            pageIndex -= 1;
            currentFrame[targetIndex].classList.remove('way-past-frame');
            pageNumber[targetIndex].classList.add('current-page');
            currentFrame[targetIndex].classList.add('current-frame');
            currentFrame[targetIndex].classList.remove('past-frame');
            currentNav[targetIndex].classList.add('current-nav');

            for(i = pageIndex; i > targetIndex; i--) {
                currentFrame[i].classList.remove('way-past-frame');
                currentFrame[i].classList.remove('past-frame');
            }
            pageIndex = targetIndex;
        }

        loading();
    }
}

function contactCalled() {
    /*while (pageIndex < currentFrame.length - 1) {

            if (!isAnimating) {
                isAnimating = true;
                pageNumber[pageIndex].classList.remove('current-page');
                currentFrame[pageIndex].classList.remove('current-frame');
                currentFrame[pageIndex].classList.add('past-frame');
                currentNav[pageIndex].classList.remove('current-nav');
                pageIndex += 1
                pageNumber[pageIndex].classList.add('current-page');
                currentNav[pageIndex].classList.add('current-nav');
                currentFrame[pageIndex].classList.add('current-frame');
        
                loading();
            }
    }*/
    window.location.href = "mailto:adair.sempe@gmail.com";
}

function loading(){
    setTimeout(function(){ 
        isAnimating = false; 
    }, 1500);
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
