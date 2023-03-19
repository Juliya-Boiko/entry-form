import { nameValidation, dateValidation, cardValidation, cvvValidation } from "./utils/inputValidation";
import { dateFormatting, cardFormatting } from "./utils/numberformatting";
import { setInvalidStyled, setValidStyles } from "./utils/styleFormatting";

const inputName = document.getElementById("name");
const inputCard = document.getElementById("card");
const inputDate = document.getElementById("date");
const inputCvv = document.getElementById("cvv");

const inputNameController = () => {
  nameValidation(inputName.value) ? setValidStyles(inputName) : setInvalidStyled(inputName);
};

const inputCvvController = () => {
  cvvValidation(inputCvv.value) ? setValidStyles(inputCvv) : setInvalidStyled(inputCvv);
};

const inputCardController = () => {
  if (cardValidation(inputCard.value) && inputCard.value.length === 19) {
    setValidStyles(inputCard);
    inputDate.focus()
  } else {
    setInvalidStyled(inputCard);
    inputCard.value = cardFormatting(inputCard.value.replaceAll(" ", ""))
  }
};

const inputDateController = () => {
  if (dateValidation(inputDate.value) && inputDate.value.length === 5) {
    setValidStyles(inputDate);
    inputCvv.focus();
  } else {
    setInvalidStyled(inputDate);
    inputDate.value = dateFormatting(inputDate.value.replaceAll("/", ""))
  }
};


inputName.addEventListener('input', inputNameController);
inputCard.addEventListener("input", inputCardController);
inputDate.addEventListener("input", inputDateController);
inputCvv.addEventListener('input', inputCvvController);