$(document).ready(function () {

    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius: 10

    });

    const bars = document.querySelectorAll('.progress-bar');
    bars.forEach(function (bar) {
        let percenteage = bar.dataset.percent;
        let tooltip = bar.children[0];
        tooltip.innerText = percenteage + '%';
        bar.style.width = percenteage + '%';
    });

    // counter

    const counters = document.querySelectorAll('.counter');

    function runCounter() {
        counters.forEach(counter => {
            counter.innerText = 0;
            let target = +counter.dataset.count;

            let step = target / 100;

            let counted = function () {
                let displayedNumber = +counter.innerText;
                if (displayedNumber < target) {
                    counter.innerText = Math.ceil(displayedNumber + step);
                    setTimeout(counted, 1);
                }
                else {
                    counter.innerText = target;
                }
            }
            counted();

        });
    }

    let counterSection = document.querySelector('.counter-wrapper');

    let options = {
        rootMargin: '0px 0px -200px 0px'
    }

    let done = 0;

    const sectionObserver = new IntersectionObserver(function (enteries) {
        if (enteries[0].isIntersecting && done !== 1) {
            done = 1;
            runCounter();

        }
    }, options)
    sectionObserver.observe(counterSection);




    //image filter


    var $wrapper = $('.portfolio-wrapper');


    // inititalize isotopes

    $wrapper.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }

    });

    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            let selector = link.dataset.filter;

            $wrapper.isotope({
                filter: selector,
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }

            });

            links.forEach(link => {
                link.classList.remove('active');
            });
            e.target.classList.add('active');

        });
    })


    // magnify pop up


    $('.magnify').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true
        }
    });

    //slider

    $('.slider').slick({
        arrows: false,
        autoplay: true
    });


});