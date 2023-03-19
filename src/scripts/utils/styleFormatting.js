export const setValidStyles = (elem) => {
  const id = elem.getAttribute('name');
  const parent = document.querySelector(`label[for='${id}']`)
  if (parent.classList.contains('entry-form__label-invalid')) {
    parent.classList.replace('entry-form__label-invalid', 'entry-form__label-valid');
  }
  parent.classList.add('entry-form__label-valid');
};

export const setInvalidStyled = (elem) => {
  const id = elem.getAttribute('name');
  const parent = document.querySelector(`label[for='${id}']`)
  parent.classList.replace('entry-form__label-valid', 'entry-form__label-invalid');
}