class Faq {
  init = () => {
    this.initDOMElements();
    this.accordionOpener();
    this.formInputsFocus();
  }

  initDOMElements = () => {
    this.accordionItems = document.querySelectorAll('.faq-section__content--accordion-item');
    this.inputContainer = document.querySelectorAll('.input-container');
    this.inputSpan = document.querySelectorAll('.input-container span');
    this.inputInside = document.querySelectorAll('.input-container .input-inside');
  }

  accordionOpener = () => {
    if(this.accordionItems) {
      for (let index = 0; index < this.accordionItems.length; index++) {
        this.accordionItems[index].addEventListener('click', () => {
          this.accordionItems[index].classList.toggle('accordion--active');
        });
      }
    }
  }

  formInputsFocus = () => {
    if(this.inputContainer) {
      for (let index = 0; index < this.inputContainer.length; index++) {
        this.inputInside[index].addEventListener('focus', () => {
          if(!this.inputInside[index].value) {
            this.inputSpan[index].classList.toggle('input--active');
          }
        });
      }
      document.addEventListener('click', event => {
        for (let index = 0; index < this.inputContainer.length; index++) {
          if(!this.inputContainer[index].contains(event.target)){
            if(!this.inputInside[index].value) {
              this.inputSpan[index].classList.remove('input--active');
            }
          }
        }
      });
    }
  }




    
}

let objFaq = new Faq();
objFaq.init();