import './styles/style.scss';

const button = document.getElementById('counter');
const value = document.getElementById('value');


let total = 0;

const increment = () => {
  total += 1;
  value.textContent = total;
}

button.addEventListener('click', increment);