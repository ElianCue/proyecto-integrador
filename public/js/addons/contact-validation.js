const nameUsser=/^[a-zA-Z\-]+$/;
const emailUsser= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let inputContact = document.querySelectorAll('.camp');
let formContact = document.querySelector('form');
let nameContact = document.querySelector('#name');
let emailContact = document.querySelector('#email');
let buttonContact = document.querySelector('.button-submit')

console.log(inputContact)

events();

function events(){

    document.addEventListener('DOMContentLoaded',btnDisabled)

    emailContact.addEventListener('blur', sendForm)
    nameContact.addEventListener('blur', sendForm)
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

    if(e.target.type === 'email'){
        if (emailUsser.test(e.target.value)){
            const errorTextAdv = document.querySelector('p.error')
            if(errorTextAdv){
                errorTextAdv.remove();
            }
            e.target.classList.remove('invalid')
            e.target.classList.add('valid')
        }else{
            messageError('Ingrese un email valido')
            e.target.classList.remove('valid')
            e.target.classList.add('invalid')
        }
    }

    if(e.target.type === 'text'){
        if(nameUsser.test(e.target.value)){
            const errorTextAdv = document.querySelectorAll('p.error')
            if(errorTextAdv){
                errorTextAdv.remove();
            }
            e.target.classList.remove('invalid')
            e.target.classList.add('valid')
        }else{
            messageError('Ingrese un nombre valido')
            e.target.classList.remove('valid')
            e.target.classList.add('invalid')
        }
    }

    if((nameUsser.test(e.target.value)) !== '' && (mailUsser.test(e.target.value)) !== ''){
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