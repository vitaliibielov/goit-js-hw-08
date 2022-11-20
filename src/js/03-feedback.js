import throttle from 'lodash.throttle';
import localStorageApi from './localStorageApi';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;
let formData = {}; 

fillForm();

form.addEventListener('input', throttle(onFormInput, 500)); /* You can use form.addEventListener('change', onFormInput); in this case you don't need to use debounce or throttle; */
form.addEventListener('submit', onSumbitBtn);

function onFormInput(e) {
    formData.email = email.value;
    formData.message = message.value;
    // const name = e.target.name;
    // const value = e.target.value;

    // formData[name] = value;

    localStorageApi.save('formData', formData);
    // localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

function onSumbitBtn(e) {
    e.preventDefault();
    e.target.reset();
    // localStorage.removeItem('feedback-form-state');
      console.log(localStorageApi.load('formData'))
    localStorageApi.remove('formData');
}

function fillForm() {
    // const userDataFromLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    const userDataFromLS = localStorageApi.load('formData');

    for (const prop in userDataFromLS) {
        if (userDataFromLS.hasOwnProperty(prop)) {
            form.elements[prop].value = userDataFromLS[prop];
        }
    }
}

