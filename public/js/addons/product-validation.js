const nameUsser=
const priceNumber = 
const minLength = /^[a-zA-Z]{10,20}$/
const maxLength = /^[a-zA-Z]{20,500}$/
let inputContact = document.querySelectorAll('.camp');
let formContact = document.querySelector('form');
let nameContact = document.querySelector('#name');
let priceContact = document.querySelector('#price');
let minLengthDesc = document.querySelector('#description-short')
let maxLengthDesc = document.querySelector('#description-large')
let buttonContact = document.querySelector('.button-submit')


events();

function events(){

    document.addEventListener('DOMContentLoaded',btnDisabled)

    priceContact.addEventListener('blur', sendForm)
    nameContact.addEventListener('blur', sendForm)
    minLengthDesc.addEventListener('blur', sendForm)
    maxLengthDesc.addEventListener('blur', sendForm)
}

function btnDisabled(){
    buttonContact.disabled = true;
}

function sendForm (e){

    if(e.target.value.length > 0){
        const errorTextAdv = document.querySelector('p.error')
        if(errorTextAdv){
            errorTextAdv.remove();
        }
        e.target.classList.remove('invalid')
        e.target.classList.add('valid')
    }else {
        e.target.classList.remove('valid')
        e.target.classList.add('invalid')
        messageError('Todos los campos son obligatorios')
    }
    checkIt(e,'number',priceNumber);
    checkIt(e,'text',nameUsser);
    checkIt(e,'textarea',minLength);
    checkIt(e,'textarea',maxLength);



    if((nameUsser.test(e.target.value)) !== '' && (priceNumber.test(e.target.value)) !== '' && (minLength.test(e.target.value)) 
    !== '' && (maxLength.test(e.target.value)) !== ''){
        buttonContact.disabled = false;
    }
}

function messageError(message){
    const errorText = document.createElement('p')
    errorText.textContent = message;
    errorText.classList.add('invalidMessage','error')


    const error = document.querySelectorAll('.error')
    if (error.length === 0){
        formContact.appendChild(errorText);
    }
}
function checkIt (e,typeAnalisis,expression) {
    if(e.target.type === typeAnalisis){
        if (expression.test(e.target.value)){
            const errorTextAdv = document.querySelector('p.error')
            if(errorTextAdv){
                errorTextAdv.remove();
            }
            e.target.classList.remove('invalid')
            e.target.classList.add('valid')
        }else{
            messageError('Ingrese un valor valido')
            e.target.classList.remove('valid')
            e.target.classList.add('invalid')
        }
    }
}

///////////////////////
// CART
// window.setTimeout(() => {
//     const  header = document.querySelector(".main-header");
//     const cart = document.querySelector(".fa-cart-shopping")
//     header.addEventListener('click', e =>{
//         if (e.target.contains(cart)){
//             openModal()
//         }
//         if (e.target.matches(".fa-xmark") || !e.target.closest(".main-header__cart-button-container")) {
//             closeModal();
//         }
//     })
    
//     document.addEventListener('keydown',e=>{
//         if (e.key === 'Escape'){
//             closeModal();
//         }
//     })
//     function openModal (){
//         document.querySelector(".cart-box").style.display="block"
//     }
//     function closeModal (){
//         document.querySelector(".cart-box").style.display="none"
//     }
// }, 600);
////////////////////