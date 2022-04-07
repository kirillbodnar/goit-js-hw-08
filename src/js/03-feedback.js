import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  message: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};

const formData = {};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input', throttle(onFormInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

fillSavedInput();

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInputChange() {
  formData['email'] = refs.email.value;
  formData['message'] = refs.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillSavedInput() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const parsedMessage = JSON.parse(savedMessage);
    refs.email.value = parsedMessage.email;
    refs.message.value = parsedMessage.message;
  }
}
