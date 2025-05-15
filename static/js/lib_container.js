class Container{
    constructor(cantity){
        this.cantity = cantity
        this.sections = ["Home","Servicios","Proyectos","Contactos","Demo"]
        this.container = document.querySelector('#scrollable');
        this.scrollAmount = 0;
        this.lastItem = this.container.lastElementChild
        this.firstItem = this.container.firstElementChild;
        this.movWidth = window.innerWidth * (this.cantity - 1)
        this.windowWidthE = window.innerWidth / 2;
        this.windowHeight = window.innerHeight
        this.elementos = document.querySelectorAll('.box');
        this.navHeight = document.querySelector('nav').offsetHeight;
        this.currentSection = "Home"
        this.output_section = document.querySelector('#output_section')
        this.nav_buttons = document.querySelector('#nav_buttons')
        this.nav_children = Array.from(this.nav_buttons.children)
        this.nav_childs = []
        this.getSections()
    }
    getSections(){
        this.nav_children.forEach((child, index) => {
            if (!this.nav_childs.includes(child)) {
                this.nav_childs.push(child)
            }
        });
        console.log(this.nav_childs)
    }
    adjustSizes() {
        this.navHeight = document.querySelector('nav').offsetHeight;
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const mainWidth = windowWidth * this.cantity;
        const mainWidth2 = windowWidth * 3;
        const containerHeight = windowHeight - this.navHeight;
        const carrouselHeight = containerHeight * 0.43;
        const carrouselItemHeight3 = (carrouselHeight / 3) * 1;
        const carrouselItemHeight2 = (carrouselHeight / 2) * 1;
        const cardsHeight = containerHeight * 0.28 ;
        document.documentElement.style.setProperty('--H-container', `${containerHeight}px`);
        document.documentElement.style.setProperty('--W-container', `${mainWidth}px`);
        document.documentElement.style.setProperty('--W2-container', `-${mainWidth2}px`);
        document.documentElement.style.setProperty('--H-carrousel', `${carrouselHeight}px`);
        document.documentElement.style.setProperty('--H-carrouselItem3', `${carrouselItemHeight3}px`);
        document.documentElement.style.setProperty('--H-carrouselItem2', `${carrouselItemHeight2}px`);
        document.documentElement.style.setProperty('--H-cards', `${cardsHeight}px`);
        document.documentElement.style.setProperty('--H-nav', `${this.navHeight}px`);
    }
    get_scrolling(deltaY){
        const num_d = 25
        const num_b = 0 - (num_d * 2)
        let scrollAmount2 = this.scrollAmount * 0.75
        if (deltaY > 0) {
            this.scrollAmount += num_d // Ajusta la cantidad de desplazamiento
        } else {
            this.scrollAmount -= num_d; // Ajusta la cantidad de desplazamiento
        }
        if (this.scrollAmount > this.movWidth) {
            this.scrollAmount = num_b; // Volver al inicio
            console.log("Volver")
            this.lastItem = this.container.lastElementChild
            this.firstItem = this.container.firstElementChild;
            this.firstItem.insertAdjacentElement('beforebegin', this.lastItem);
            this.scrollAmount = 0
            this.container.style.transform = `translateX(-${this.scrollAmount}px)`;

        } else if (this.scrollAmount < num_b) {
            this.scrollAmount = this.movWidth; // Ir al final
            console.log("Final")
            this.lastItem = this.container.lastElementChild
            this.firstItem = this.container.firstElementChild;
            this.lastItem.insertAdjacentElement('afterend', this.firstItem);
        }
        scrollAmount2 = this.scrollAmount * 0.2
        scrollAmount2 = -this.movWidth + scrollAmount2
        this.container.style.transform = `translateX(-${this.scrollAmount}px)`;
        document.querySelector('#background').style.transform = `translateX(${scrollAmount2}px)`;
        this.findSections()
    }
    findSections(){
        this.elementos.forEach((elemento, index) => {
            const rect = elemento.getBoundingClientRect();
            const posicionX = rect.left;
            const posicionY = rect.top;
            
            if(posicionX < this.windowWidthE && posicionX > 0){
                //console.log(elemento)
                //console.log(posicionX)
                //console.log(elemento.classList)
                this.nav_childs.forEach((section, index) => {
                    //console.log(section)
                    let sectionText = section.innerText
                    if (elemento.classList.contains(sectionText) && sectionText != this.currentSection) {
                        this.currentSection = sectionText
                        console.log(`NEW ${this.currentSection} JJJ ${this.nav_children}`)
                        console.log(this.nav_children)
                        this.output_section.innerHTML=this.currentSection
                        this.nav_children.forEach((ch, index) => {
                            ch.classList.remove('bot_active');
                            ch.classList.add('bot_inactive');
                        });
                        section.classList.remove('bot_inactive');
                        section.classList.add('bot_active');
                    }
                });
            }
            let typeV = "A"
            let halfH = this.windowHeight / 2
            if(posicionX <= 0 && posicionX > -this.windowWidthE){
                let w_obj = elemento.offsetWidth
                let w_obj_q = w_obj - posicionY
                if(posicionY > 0){
                    w_obj_q = w_obj - posicionY
                }
                else if(posicionY < 0){
                    w_obj_q = w_obj + posicionY
                }
                let trs_position = posicionY
                if(posicionY > halfH){
                    typeV = "B"
                }
                if (typeV == "A"){
                    trs_position = posicionX
                }
                else if (typeV == "B"){
                    trs_position = Math.abs(posicionX)
                }
                trs_position = trs_position * 0.25
                elemento.style.transform = `translateY(${trs_position}px)`;
                console.log(`TYPE:: ${typeV}`)
            } 
            else{
                elemento.style.transform = `translateY(0px)`;
            }
            console.log(`Y:: ${posicionY}px) C ${this.navHeight} NCC:: ${elemento.classList}`)
        });
    }
}