// Toggle sub-nav menu in/out
function menuIn () {
    subNavUl.classList.remove('menu-out');
    subNavUl.classList.add('menu-in');
}
function menuOut () {
    subNavUl.classList.remove('menu-in');
    subNavUl.classList.add('menu-out');
}

// listens for click on mobile menu, runs functions
document.addEventListener('click', function(event) {
    let menu = document.getElementById('menu');
    let subNavUl = document.getElementById('subNavUl');
    if (event.target === menu) {
        if (subNavUl.classList.contains('menu-out')) {
            menuIn();
        } else if (subNavUl.classList.contains('menu-in')) {
            menuOut();
        } else {
            menuIn();
        }
    } else if (event.target !== menu) {
        if (subNavUl.classList.contains('menu-in')) {
            menuOut();
        }
    }
}, false);

// runs function to show / hide to-top based on page position
window.onscroll = function () {
    scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
toTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}, false);

// To-top button show/hide on scroll
function scrollFunction () {
    let toTop = document.getElementById('toTop');
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        if (toTop.classList.contains('toTopFadeOut')) {
            toTop.classList.remove('toTopFadeOut');
            toTop.classList.add('toTopFadeIn');
        } else  {
            toTop.classList.add('toTopFadeIn');
        }
    } else if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
        if (toTop.classList.contains('toTopFadeIn')) {
            toTop.classList.remove('toTopFadeIn');
            toTop.classList.add('toTopFadeOut');
        }
    }
}

// gallery image click resize\
document.addEventListener('click', function(e) {
    let largeImgs = document.querySelectorAll('.imgExpand');
    if (e.target.classList.contains('gallery-img')) {
        e.target.classList.remove('gallery-img');
        for (i = 0; i < largeImgs.length; i++) {
            largeImgs[i].classList.add('gallery-img');
            largeImgs[i].classList.remove('imgExpand');
        }
        e.target.classList.add('imgExpand');
    } else if (e.target.classList.contains('imgExpand')) {
        e.target.classList.remove('imgExpand');
        e.target.classList.add('gallery-img');
    } else {
        for (i = 0; i < largeImgs.length; i++) {
            largeImgs[i].classList.add('gallery-img');
            largeImgs[i].classList.remove('imgExpand');
        }
    }
}, false);