document.addEventListener('DOMContentLoaded', () => {
    const container_base = new Container(4)
    console.log(container_base)
    console.log("999")
    console.log(principal_modal.active)
    container_base.adjustSizes()
    window.addEventListener('wheel', function(event) {
        console.log(principal_modal.active)
        let modal_activated = principal_modal.active
        if (modal_activated == false) {
            container_base.get_scrolling(event.deltaY)
        }
        
    });
    window.addEventListener('resize', function(event) {
        container_base.adjustSizes()
    });
});