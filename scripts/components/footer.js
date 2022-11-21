class Footer {
    init = () => {
        this.initDOMElements();
        this.getCurrentlyYear();
    }

    initDOMElements = () => {
        this.policyContainer = document.querySelector('.footer .currently-year');
        this.currentlyYear = '';
    }
    
    getCurrentlyYear = () => {
        const date = new Date();
        this.currentlyYear = date.getFullYear();
        this.policyContainer.innerText = this.currentlyYear;
    }
}

let objFooter = new Footer();
objFooter.init();