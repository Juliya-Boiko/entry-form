export const setValidStyles = (elem) => {
  const id = elem.getAttribute('name');
  const parent = document.querySelector(`label[for='${id}']`);
  if (parent.classList.contains('homepage-entry-form__label-invalid')) {
    parent.classList.replace('homepage-entry-form__label-invalid', 'homepage-entry-form__label-valid');
  }
  parent.classList.add('homepage-entry-form__label-valid');
};

export const setInvalidStyles = (elem) => {
  const id = elem.getAttribute('name');
  const parent = document.querySelector(`label[for='${id}']`)
  parent.classList.add('homepage-entry-form__label-invalid')
};