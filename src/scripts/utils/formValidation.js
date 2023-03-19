import { nameValidation, cardValidation, dateValidation, cvvValidation } from './inputValidation';

const validFields = {
  name: false,
  card: false,
  date: false,
  cvv: false
};

// EVENT FORM VALIDATION 
export const formValidation = (values) => {
  const { name, card, date, cvv } = values;
  validFields.name = nameValidation(name);
  validFields.card = cardValidation(card);
  validFields.date = dateValidation(date);
  validFields.cvv = cvvValidation(cvv);
  const isValid = Object.entries(validFields).map(item => item[1]).every(item => item === true);
  return isValid;
};

// SUBMIT FORM VALIDATION
const numberValidation = (str) => {
  const arr = str.split('');
  const data = arr.map(item => +item).includes(NaN);
  return data;
}

const monthValidation = (str) => {
  const arr = str.split('/');
  const month = +arr[0];
  return !month || month > 12 ? false : true
};

export const submitValidation = (values) => {
  const { name, card, date, cvv } = values;
  if (!name || !card || !date || !cvv) {
    alert('All fields should be filled');
  }
  if (numberValidation(card)) {
    alert('Card number must includes only numbers');
  }
  if (!monthValidation(date)) {
    alert('Month numeration must be from 01 to 12');
  }
  if (numberValidation(cvv)) {
    alert('Cvv code must includes only numbers');
  }
  alert('Success!');
};