import accessoryCard from './cards';
import validate from './validate';

if (typeof document !== 'undefined') {
  const input = document.querySelector('input');

  input.addEventListener('input', () => {
    const type = accessoryCard(input.value);

    if (type) {
      document.querySelector(type).style.opacity = 1;
    }
  });

  input.parentNode.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = document.getElementById('result');
    result.textContent = '';
    validate(input.value) ? result.textContent = 'Valid' : result.textContent = 'Not valid'; // eslint-disable-line no-unused-expressions
  });
}
