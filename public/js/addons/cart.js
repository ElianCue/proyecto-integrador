
setTimeout(() => {
    //Abrir y cerrar el modal//
    const  header = document.querySelector(".main-header");
    const cart = document.querySelector(".fa-cart-shopping")
    header.addEventListener('click', e =>{
        if (e.target.contains(cart)){
            openModal()
        }
        if (e.target.matches(".fa-xmark") || !e.target.closest(".main-header__cart-button-container")) {
            closeModal();
        }
    })
    
    document.addEventListener('keydown',e=>{
        if (e.key === 'Escape'){
            closeModal();
        }
    })
    function openModal (i){
        document.querySelector(".cart-box").style.display="block"
        i= i+1;
    }
    function closeModal (){
        document.querySelector(".cart-box").style.display="none"
    }

    // agregar al carrito//

}, 600);