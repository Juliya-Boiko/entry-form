export const setValidStyles = (elem) => {
  if (elem.classList.contains('error')) {
    elem.classList.replace('error', 'green');
  }
  elem.classList.add('green');
};

export const setInvalidStyled = (elem) => {
  elem.classList.replace('green', 'error');
}