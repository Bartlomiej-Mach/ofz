class OffertSlider {
    init = () => {
        this.initDOMElements();
        this.setSlideNumbers();
        this.mainSlider();
        this.setCorrectHeight();
        this.onScreenResize();
    }

    initDOMElements = () => {
        this.sliderParagraphs = document.querySelectorAll('.swiper-slide--content p');
        this.sliderHeadings = document.querySelectorAll('.swiper-slide--content .slider-heading');
        this.minHeightParagraph = 0;
        this.minHeightSpan = 0;
        this.currentHeightParagraph = 0;
        this.currentHeightSpan = 0;
        this.slideNumber = 3;
    }
    
    mainSlider = () => {
        const swiperOptions = {
            speed: 500,
            grabCursor: true,
            watchSlidesProgress: true,
            mousewheelControl: true,
            keyboardControl: true,
            slidesPerView: this.slideNumber,
            spaceBetween: 50,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            
        };
        const swiper = new Swiper(".swiper-container-2", swiperOptions);
    }
    
    setCorrectHeight = () => {
        if(this.sliderParagraphs) {
            this.sliderParagraphs.forEach(element => {
                element.style.minHeight = 0;
                this.currentHeightParagraph = element.offsetHeight;
                if(this.currentHeightParagraph > this.minHeightParagraph) {
                    this.minHeightParagraph = this.currentHeightParagraph;
                } 
            });
        }
        

        if(this.sliderHeadings) {
            this.sliderHeadings.forEach(element => {
                element.style.minHeight = 0;
                this.currentHeightSpan = element.offsetHeight;
                if(this.currentHeightSpan > this.minHeightSpan) {
                    this.minHeightSpan = this.currentHeightSpan;
                } 
            });
        }

        this.addCorrectHeightToElement();
        this.minHeightSpan = 0;
        this.minHeightParagraph = 0;
    }

    setSlideNumbers = () => {
        if(window.innerWidth < 824) {
            this.slideNumber = 1;
        } else if (window.innerWidth < 1024) {
            this.slideNumber = 2;
        }
    }

    onScreenResize = () => {
        window.addEventListener('resize', () => {
            this.setCorrectHeight();
        });
    }

    addCorrectHeightToElement = () => {
        if(this.sliderParagraphs) {
            this.sliderParagraphs.forEach(element => {
                element.style.minHeight = this.minHeightParagraph + 'px';
            });
        }
        if(window.innerWidth > 824) {
            if(this.sliderHeadings) {
                this.sliderHeadings.forEach(element => {
                    element.style.minHeight = this.minHeightSpan + 'px';
                });
            }
        }
    }
    
}

let objOffertSlider = new OffertSlider();
objOffertSlider.init();
