const regName = /^[a-zA-Z]+ [a-zA-Z]{3,}$/;
const regCard = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
const regDate = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
const regCvv = /^\d{3}$/;

export const cvvValidation = (cvv) => {
  return regCvv.test(cvv) ? true : false;
}

export const dateValidation = (date) => {
  return regDate.test(date) ? true : false;
}

export const cardValidation = (card) => {
  return regCard.test(card) ? true : false;
};

export const nameValidation = (name) => {
  return regName.test(name.trim()) ? true : false;
};

