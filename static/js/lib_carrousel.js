class Carrousel{
    constructor(totalItems,name,division){
        this.name=name
        this.startIndex = 0;
        this.startIndexOld = 0;
        this.pos_old = this.startIndexOld * 100
        this.count_delay = 0
        this.pos = 0
        this.itemsLength=0
        this.divisions = parseInt(division)
        this.carruselContenido = document.querySelector(`#carrusel_contenido_${this.name}`)
        this.firstItem = this.carruselContenido.firstElementChild;
        this.lastItem = this.carruselContenido.lastElementChild;
        this.totalItems = totalItems
        this.get_items_size()
        this.current_item = 1
        this.update_output()
        console.log(`Y::${this.divisions}`)
    }
    get_size_x(){
        let navHeight = document.querySelector('nav').offsetHeight;
        let windowHeight = window.innerHeight;
        let containerHeight = windowHeight - navHeight;
        let carrouselHeight = containerHeight * 0.43;
        let carrouselItemHeight = carrouselHeight / this.divisions;
        return carrouselItemHeight
    }
    get_items_size(){
        let items = this.get_size_x()
        console.log(items)
        this.itemsLength = items
    }
    actualizarCarrusel(option) {
        let step = 0
        const animate = setInterval(() => {
            step += 1;
            let next = this.startIndex * this.itemsLength
            if(option == 'next'){
                if (this.pos >= next){
                    clearInterval(animate);
                }
                this.pos += 1
            }
            else if (option == 'prev'){
                if (this.pos <= next){
                    clearInterval(animate);
                }
                this.pos -= 1
            }
            this.carruselContenido.style.transform = `translateY(-${this.pos}px)`;
        }, 10);
    }
    relocated_items(cant,option){
        for(let i = 1; i <= cant; i++){
            this.firstItem = this.carruselContenido.firstElementChild;
            this.lastItem = this.carruselContenido.lastElementChild;
            if(option=="before"){
                this.firstItem.insertAdjacentElement('beforebegin', this.lastItem);
            }
            else if(option=="after"){
                this.lastItem.insertAdjacentElement('afterend', this.firstItem);
            }
        }
    }
    get_next(){
        let index_limit = this.totalItems  - 2
        this.startIndexOld = this.startIndex
        this.startIndex = (this.startIndex + 1) % this.totalItems;
        this.pos = this.startIndexOld * this.itemsLength
        if (this.startIndex == index_limit){
            this.relocated_items(3,"before")
            this.carruselContenido.style.transform = `translateY(0px)`;
            this.pos = 0
            this.startIndex  = 1
            this.startIndexOld = 0 
        }
        this.actualizarCarrusel('next');
        this.current_item = (this.current_item + 1) > this.totalItems ? 1 : this.current_item + 1
        this.update_output()
    }
    get_prev(){
        this.startIndexOld = this.startIndex
        this.startIndex = (this.startIndex - 1 + this.totalItems) % this.totalItems;
        this.pos = this.startIndexOld * this.itemsLength
        if(this.startIndexOld == 0 ){
            this.relocated_items(3,"after")
            this.startIndex = this.totalItems  - 3
            this.pos = this.startIndex * this.itemsLength
            this.carruselContenido.style.transform = `translateY(-${this.pos}px)`;
            this.startIndexOld = this.startIndex
            this.startIndex = (this.startIndex - 1 + this.totalItems) % this.totalItems;
            this.pos = this.startIndexOld * this.itemsLength
        }
        this.actualizarCarrusel('prev');
        this.current_item = (this.current_item - 1) == 0 ? this.totalItems : this.current_item - 1
        this.update_output()
    }
    update_output(){
        let e = document.querySelector(`#output_${this.name}`)
        e.innerHTML = this.current_item
    }
}