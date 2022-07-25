import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const emailElement = document.querySelector('input');
const messageElement = document.querySelector('textarea');
const formData = {};

checkLocaleStorage();

emailElement.addEventListener('input', throttle(findInputValues, 500));
messageElement.addEventListener('input', throttle(findInputValues, 500));

function findInputValues(event) {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;
  
    formData[name] = value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
  
function onFormSubmit (event) {
    event.preventDefault();
    
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    
    if (email === '' || message === '') {
        alert('Пожалуйста, заполните все поля!')
    } 
    localStorage.removeItem('feedback-form-state');   
    console.log({ email, message })
    form.reset()
    return
};
form.addEventListener("submit", onFormSubmit);

//--------------------
function checkLocaleStorage() {
    const storageData = localStorage.getItem('feedback-form-state')
        ? JSON.parse(localStorage.getItem('feedback-form-state'))
        : {};
    if (storageData.email) {
        emailElement.value = storageData.email;
    }
    if (storageData.message) {
        messageElement.value = storageData.message;
    }
}
 
