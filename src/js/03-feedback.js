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

  const userDataJson = localStorage.getItem(STORAGE_KEY);
  const userData = JSON.parse(userDataJson);
  if (userData.message && userData.email) {
    console.log(userData);
  } else {
    console.log('Please fill in all the boxes');
  }
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInputChange() {
  formData['email'] = refs.email.value;
  formData['message'] = refs.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function fillSavedInput() {
  const savedInput = localStorage.getItem(STORAGE_KEY);

  if (savedInput) {
    const parsedInput = JSON.parse(savedInput);
    refs.email.value = parsedInput.email;
    refs.message.value = parsedInput.message;
  }
}
