class DashboardMain {
    init = () => {
        this.initDOMElements();
        this.mainSlider();
        this.paralaxAnimation();
        this.welcomeAnimation();
    }

    initDOMElements = () => {
        this.getRatio = '';
        this.tl = gsap.timeline();
        this.heading = document.querySelector('.swiper-slide__content--heading h1');
        this.subheading = document.querySelector('.slide-animate p');
        this.buttonMore = document.querySelector('.slide-animate a');
        this.sliderNav = document.querySelector('.nav-container');
    }
    
    mainSlider = () => {
        const swiperOptions = {
            loop: true,
            speed: 1000,
            grabCursor: true,
            watchSlidesProgress: true,
            mousewheelControl: true,
            keyboardControl: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
        };
        const swiper = new Swiper(".swiper-container", swiperOptions);
    }

    paralaxAnimation = () => {
        this.getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

        gsap.utils.toArray('.dashboard-main .swiper-slide').forEach((section, i) => {
            section.bgImage = section.querySelector('.slide-inner'); 
            
            gsap.fromTo(section.bgImage, {
                backgroundPosition: () => i ? `50% ${-window.innerHeight * this.getRatio(section)}px` : "50% 0px"
            }, {
                backgroundPosition: () => `50% ${window.innerHeight * (1 - this.getRatio(section))}px`,
                    ease: "none",
                    scrollTrigger: {
                    trigger: section,
                    start: () => i ? "top bottom" : "top top", 
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });
        });
    }

    welcomeAnimation = () => {
        this.tl.to(this.heading, {
            y: 0,
            duration: 1,
            ease: Circ.easeOut,
            delay: .3,
        });
        this.tl.to(this.subheading, {
            y: 0,
            duration: 1,
            ease: Circ.easeOut,
            delay: .3,
        }, '<');
        this.tl.to(this.buttonMore, {
            y: 0,
            duration: 1,
            ease: Circ.easeOut,
            delay: .3,
        }, '<');
        this.tl.to(this.sliderNav, {
            opacity: 1,
            duration: 1,
            delay: .3,
        }, '<');
    }
    
    
}

let objDashboard = new DashboardMain();
objDashboard.init();
