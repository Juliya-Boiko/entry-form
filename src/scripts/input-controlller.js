import { nameValidation, dateValidation, cardValidation, cvvValidation } from "./utils/inputValidation";
import { dateFormatting, cardFormatting } from "./utils/numberFormatting";
import { setInvalidStyles, setValidStyles } from "./utils/styleFormatting";

const inputName = document.getElementById("name");
const inputCard = document.getElementById("card");
const inputDate = document.getElementById("date");
const inputCvv = document.getElementById("cvv");

// TYPE CONTROLLERS
const nameController = (e) => {
  const { target } = e;
  nameValidation(target.value) ? setValidStyles(target) : setInvalidStyles(target);
};

const inputCardController = (e) => {
  const { target } = e;
  target.value = cardFormatting(target.value.replaceAll(" ", ""));
  cardValidation(target.value) && target.value.length === 19 ? setValidStyles(target) : setInvalidStyles(target);
};

const inputDateController = (e) => {
  const { target } = e;
  target.value = dateFormatting(target.value.replaceAll("/", ""));
  dateValidation(target.value) && target.value.length === 5 ? setValidStyles(target) : setInvalidStyles(target);
};

const inputCvvController = (e) => {
  const { target } = e;
  cvvValidation(target.value) ? setValidStyles(target) : setInvalidStyles(target);
};

// NUMBERS & ALPHA CONTROLLERS
const onlyNumbersController = (e) => {
  const { key } = e;
  if(isNaN(key) && key !== 'Backspace') {
    e.preventDefault();
  }
}

const onlyAlphasController = (e) => {
  const { keyCode } = e;
  if (keyCode < 65 && keyCode !== 8 && keyCode !== 32 || keyCode > 90 && keyCode !== 8 && keyCode !== 8) {
    e.preventDefault();
  }
};

inputName.addEventListener('keydown', onlyAlphasController);
inputName.addEventListener('input', nameController);

inputCard.addEventListener('keydown', onlyNumbersController);
inputCard.addEventListener("input", inputCardController);

inputDate.addEventListener('keydown', onlyNumbersController);
inputDate.addEventListener("input", inputDateController);

inputCvv.addEventListener('keydown', onlyNumbersController);
inputCvv.addEventListener('input', inputCvvController);