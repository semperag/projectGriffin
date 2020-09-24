const pageNumber = document.querySelectorAll('.position');
const currnetNav = document.querySelectorAll('.navlink');
let pageIndex = 0;

function forward() {
    if (pageIndex < pageNumber.length - 1) {
        pageNumber[pageIndex].classList.remove('current-page');
        currnetNav[pageIndex].classList.remove('current-nav');
        pageIndex += 1
        pageNumber[pageIndex].classList.add('current-page');
        currnetNav[pageIndex].classList.add('current-nav');
    }
}

document.getElementById('arrow-down').addEventListener('click', forward);