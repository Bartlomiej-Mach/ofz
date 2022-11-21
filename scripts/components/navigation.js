class Navigation {
    init = () => {
        this.initDOMElements();
        this.openNavigationMenu();
    }

    initDOMElements = () => {
        this.hamburgerButton = document.querySelector('.nav-section__mobile-nav--menu');
        this.navList = document.querySelector('.nav-section__links--list');
        this.navContainer = document.querySelector('.nav-container');
        this.mobileNavBg = document.querySelector('.nav-section__mobile-bg');
    }

    openNavigationMenu = () => {
        this.hamburgerButton.addEventListener('click', () => {
            this.navList.classList.toggle('nav-list--active');
            this.hamburgerButton.classList.toggle('menu-button--active');
            this.mobileNavBg.classList.toggle('mobile-bg--active');
        });
        document.addEventListener('click', event => {
            if(!this.navContainer.contains(event.target)){
                this.navList.classList.remove('nav-list--active');
                this.hamburgerButton.classList.remove('menu-button--active');
                this.mobileNavBg.classList.remove('mobile-bg--active'); 
            }
        });
    }

    
}

let objNavigation = new Navigation();
objNavigation.init();