import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailElement = document.querySelector('input');
const messageElement = document.querySelector('textarea');

checkingLocaleStorage();

form.addEventListener('input', throttle(findInputValues, 500));

function findInputValues(event) {
    event.preventDefault();

    let formData = localStorage.getItem('feedback-form-state')
        ? JSON.parse(localStorage.getItem('feedback-form-state'))
        : {};
    formData[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
  
const onFormSubmit = event => {
    event.preventDefault();
    
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;
    
    if (email === '' || message === '') {
        alert('Пожалуйста, заполните все поля!')
    } else {
    localStorage.removeItem('feedback-form-state');   
    console.log({ email, message })
}
    event.currentTarget.reset()
}
form.addEventListener("submit", onFormSubmit);

//--------------------
function checkingLocaleStorage() {
    let formData = localStorage.getItem('feedback-form-state')
    if (formData) {
        formData = JSON.parse(formData);
        Object.entries(formData).forEach(([name, value]) => {
            form.elements[name].value = value
        })
    }
}
 
