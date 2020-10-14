const images = document.querySelectorAll('.image');
let imageIndex = 0;

function forward() {

        images[imageIndex].classList.remove('current-image');

        if (imageIndex >= images.length - 1) {
            imageIndex = 0;
        }
        else {
            imageIndex += 1;
        }

        images[imageIndex].classList.add('current-image');
}

function backward() {

        images[imageIndex].classList.remove('current-image');
        
        if (imageIndex <= 0) {
            imageIndex = images.length - 1;
        }
        else {
            imageIndex -= 1;
        }

        images[imageIndex].classList.add('current-image');
        images[imageIndex].classList.remove('past-image');
}

let el = document.getElementById('arrow-right');
if(el){
    el.addEventListener('click', forward);
}

el = document.getElementById('arrow-left');
if(el){
    el.addEventListener('click', backward);
}