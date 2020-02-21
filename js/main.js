let nav = document.querySelector('#nav');
let sort = document.querySelector('#sorte');


window.onscroll = function () {
    if (window.pageYOffset > 10) {
        sort.style.background = 'rgb(216,216,216)'
        nav.style.background = 'rgb(216,216,216)'
        nav.style.height = '3em'
        nav.style.boxShadow = "0px 3px 4px 0px rgba(50, 50, 50, 0.38)"

    } else {
        nav.style.background = 'transparent';
        sort.style.background = 'transparent';
        nav.style.boxShadow = "none"
    }
}