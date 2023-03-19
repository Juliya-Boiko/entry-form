import { formValidation, submitValidation } from "./utils/formValidation";

const form = document.getElementById('entry-form');
const submitBtn = document.getElementById('submitBtn');

const formValues = {
  name: '',
  card: '',
  date: '',
  cvv: ''
};

const formEventController = (e) => {
  // HANDLE EVENT VALUES IN MIDDLEWARE
  const { name, value } = e.target;
  formValues[name] = value;

  // VALIDATE INPUTS
  const isValid = formValidation(formValues);
  isValid ? submitBtn.removeAttribute('disabled') : submitBtn.setAttribute('disabled', true);
};

const formSubmitController = (e) => {
  e.preventDefault();
  submitValidation(formValues);
}; 

form.addEventListener('input', formEventController);
form.addEventListener('submit', formSubmitController);
