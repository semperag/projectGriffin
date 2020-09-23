const pageNumber = document.querySelectorAll('.position');
const currnetNav = document.querySelectorAll('.navlink');
let pageIndex = 0;
let navIndex = 0;

function forward() {
    if (pageIndex < pageNumber.length - 1) {
        pageNumber[pageIndex].classList.remove('current-page');
        pageIndex += 1
        pageNumber[pageIndex].classList.add('current-page');
    }
}

document.getElementById('arrow-down').addEventListener('click', forward);