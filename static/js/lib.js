
function get_message(cantity,name) {
    console.log(`LEN 2  ${name} `)
    let itemsCardsTemplate = document.querySelectorAll(`.cards_item_${name}`);
    const h_container = getComputedStyle(document.documentElement).getPropertyValue('--H-container').trim();
    itemsCardsTemplate.forEach((card, index) => {
        card.style.height = `calc((var(--H-cards) / ${cantity})*0.80)`;
    });
    console.log(`LEN 3  ${itemsCardsTemplate.length} ${h_container} `)
    return "222 33 444"+name
}
function close_modal(){
    const elementosVisiblesA = [];
    const elementosVisiblesB = [];
    let scrollable = document.getElementById(`scrollable`);
    const rectContenedor = scrollable.getBoundingClientRect();
    let itemsCL = scrollable.querySelectorAll(`.page`);
    let boxSizeA = 0
    let boxSizeB = 0
    let navSize = document.querySelector('nav').offsetHeight;
    itemsCL.forEach((page, index) => {
        let itemsPage = page.querySelectorAll(`.box`);
        if(boxSizeA == 0){
            boxSizeA = (itemsPage[0].offsetHeight - navSize) - 50
        }
        if(boxSizeB == 0){
            boxSizeB = (itemsPage[0].offsetHeight) - 50
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
                    elementosVisiblesB.push(box);
                }
                else{
                    elementosVisiblesA.push(box);
                }
            }
        });
        let step = 0
        for (let index = 0; index < boxSizeA; index++) {
            elementosVisiblesA.forEach((boxi, index) => {
                boxi.style.transform = `translateY(-${index}px)`;
            });
            elementosVisiblesB.forEach((boxi, index) => {
                boxi.style.transform = `translateY(${step}px)`;
            });
        }
        elementosVisiblesA.forEach((boxi, index) => {
            animate_box(boxi,"a",boxSizeA)
        });
        elementosVisiblesB.forEach((boxi, index) => {
            animate_box(boxi,"b",boxSizeB)
        });
        
    });
}
function open_modal(){
    const elementosVisiblesA = [];
    const elementosVisiblesB = [];
    let scrollable = document.getElementById(`scrollable`);
    const rectContenedor = scrollable.getBoundingClientRect();
    let itemsCL = scrollable.querySelectorAll(`.page`);
    let boxSizeA = 0
    let boxSizeB = 0
    let navSize = document.querySelector('nav').offsetHeight;
    itemsCL.forEach((page, index) => {
        let itemsPage = page.querySelectorAll(`.box`);
        if(boxSizeA == 0){
            boxSizeA = (itemsPage[0].offsetHeight - navSize) - 50
        }
        if(boxSizeB == 0){
            boxSizeB = (itemsPage[0].offsetHeight) - 50
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
                    elementosVisiblesB.push(box);
                }
                else{
                    elementosVisiblesA.push(box);
                }
            }
        });
        let step = 0
        for (let index = 0; index < boxSizeA; index++) {
            elementosVisiblesA.forEach((boxi, index) => {
                boxi.style.transform = `translateY(-${index}px)`;
            });
            elementosVisiblesB.forEach((boxi, index) => {
                boxi.style.transform = `translateY(${step}px)`;
            });
        }
        elementosVisiblesA.forEach((boxi, index) => {
            animate_box(boxi,"a",boxSizeA)
        });
        elementosVisiblesB.forEach((boxi, index) => {
            animate_box(boxi,"b",boxSizeB)
        });
        
    });
}
function get_content_modal(){
    let modal_content = document.getElementById(`modal_content`);
    modal_content.style.display = "flex";
    modal_content.style.opacity = "1";
    let text_modal_content = document.getElementById(`text_modal_content`);
    text_modal_content.innerHTML = "4444HHJJJJ"
}
function open_container2(){
    console.log("44")
    open_modal()
    get_content_modal()
}
function open_container(){
    console.log("4455")
    console.log(principal_modal)
}

function animate_box(element,type_box,boxSize){
    step = 0
    const animate = setInterval(() => {
        step += 1;
        console.log(step)
        if(step >= boxSize){
            clearInterval(animate);
        }
        if(type_box=="a"){
            element.style.transform = `translateY(-${step}px)`;
        }
        else{
            element.style.transform = `translateY(${step}px)`;
        }
        // elementosVisiblesB.forEach((boxi, index) => {
        //     boxi.style.transform = `translateY(${step}px)`;
        // });
    }, 3);
}
function get_cards_sizes(){
    let itemsCardsTemplate = document.querySelectorAll('.cards_item_{{ section.content.name }}');
    let totalItemsCards = itemsCardsTemplate.length;
    let w = document.documentElement.style.getProperty('--H-container')
    console.log(`LEN 2  ${itemsCardsTemplate} `)
    let cardsHeightTemplate = w * 0.40;
    let cardsItemHeightTemplate = cardsHeightTemplate / 6;
    console.log(cardsItemHeightTemplate)
}
function get_sizes(container,update=false){
    const navHeight = document.querySelector('nav').offsetHeight;
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const mainWidth = windowWidth * 4;
    const mainWidth2 = windowWidth * 3;
    const containerHeight = windowHeight - navHeight;
    const carrouselHeight = containerHeight * 0.40;
    const carrouselItemHeight = carrouselHeight / 3;
    const cardsHeight = containerHeight * 0.40;
    if(update == true){
        document.documentElement.style.setProperty('--H-container', `${containerHeight}px`);
        document.documentElement.style.setProperty('--W-container', `${mainWidth}px`);
        document.documentElement.style.setProperty('--W2-container', `-${mainWidth2}px`);
        document.documentElement.style.setProperty('--H-carrousel', `${carrouselHeight}px`);
        document.documentElement.style.setProperty('--H-carrouselItem', `${carrouselItemHeight}px`);
        document.documentElement.style.setProperty('--H-cards', `${cardsHeight}px`);
    }
    if(container == "carrousel_item"){
        return carrouselItemHeight
    }
    if(container == "carrousel_item"){
        return carrouselItemHeight
    }
}