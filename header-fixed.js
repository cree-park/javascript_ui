
const header = document.querySelector('.header');
const headerTop = header.clientHeight;

function stickyNav() {
    if (window.scrollY >= headerTop) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

window.addEventListener('scroll', stickyNav);

