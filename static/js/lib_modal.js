class Modal{
    constructor(){
        this.elementosVisiblesA = [];
        this.elementosVisiblesB = [];
        this.name="222"
        this.scrollable = document.getElementById(`scrollable`);
        this.modal = document.getElementById(`modal`);
        this.modal_content = document.getElementById(`modal_content`);
        this.text_modal_content = document.getElementById(`text_modal_content`);
        this.step = 0
        this.active = false
        this.load_modal()
    }
    load_modal(){
        let close_modal = document.getElementById("close_modal")
        console.log("1111")
        console.log(close_modal)
        close_modal.addEventListener('click', () => {
            this.close_modal()
        });
    }
    open_modal(){
        this.active = true
        this.scrollable = document.getElementById(`scrollable`);
        const rectContenedor = this.scrollable.getBoundingClientRect();
        let itemsCL = this.scrollable.querySelectorAll(`.page`);
        let boxSizeA = 0
        let boxSizeB = 0
        let navSize = document.querySelector('nav').offsetHeight;
        itemsCL.forEach((page, index) => {
            let itemsPage = page.querySelectorAll(`.box`);
            if(boxSizeA == 0){
                boxSizeA = (itemsPage[0].offsetHeight - navSize) - 30
            }
            if(boxSizeB == 0){
                boxSizeB = (itemsPage[0].offsetHeight) - 30
            }
            itemsPage.forEach((box, index) => {
                let rectElemento = box.getBoundingClientRect();
                const visible =
                    rectElemento.right >= 0 &&
                    rectElemento.left <= window.innerWidth;
                if (visible) {
                    let rectBox = box.getBoundingClientRect();
                    let top = rectBox.top
                    if(top > navSize){
                        this.elementosVisiblesB.push(box);
                    }
                    else{
                        this.elementosVisiblesA.push(box);
                    }
                }
            });
            let step = 0
            this.elementosVisiblesA.forEach((boxi, index) => {
                this.animate_box(boxi,"a",boxSizeA,"out")
            });
            this.elementosVisiblesB.forEach((boxi, index) => {
                this.animate_box(boxi,"b",boxSizeB,"out")
            });
            
        });
    }
    animate_box(element,type_box,boxSize,direction){
        const animate = setInterval(() => {
            if(direction == "out"){
                this.step += 1;
                if(this.step >= boxSize){
                    clearInterval(animate);
                }
            }
            else if(direction == "in"){
                this.step -= 1;
                if(this.step <= boxSize){
                    clearInterval(animate);
                }
            }
            console.log(this.step)
            
            if(type_box=="a"){
                element.style.transform = `translateY(-${this.step}px)`;
            }
            else{
                element.style.transform = `translateY(${this.step}px)`;
            }
            // elementosVisiblesB.forEach((boxi, index) => {
            //     boxi.style.transform = `translateY(${step}px)`;
            // });
        }, 3);
    }
    
    get_content_modal(){
        this.modal_content.style.display = "flex";
        this.modal_content.style.opacity = "1";
        this.modal.style.zIndex = "1000";
        this.text_modal_content.innerHTML = "4444HHJJJJ"
    }
    close_modal(){
        this.elementosVisiblesA.forEach((boxi, index) => {
            this.animate_box(boxi,"a",0,"in")
        });
        this.elementosVisiblesB.forEach((boxi, index) => {
            this.animate_box(boxi,"b",0,"in")
        });
        this.modal_content.style.display = "none";
        this.modal_content.style.opacity = "0";
        this.modal.style.zIndex = "11";
        this.text_modal_content.innerHTML = ""
    }
    open_container(){
        console.log("44")
        this.open_modal()
        this.get_content_modal()
    }
    close_container(){
        console.log("888")
        this.close_modal()
    }
}