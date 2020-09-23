const pageNumber = document.querySelectorAll('.position');
let i = 0;

function forward() {
    if (i < pageNumber.length - 1) {
        pageNumber[i].classList.remove('current');
        i += 1
        pageNumber[i].classList.add('current');
    }
}

document.getElementById('arrow-down').addEventListener('click', forward);