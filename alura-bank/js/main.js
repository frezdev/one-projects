import { isACuil, isOfLegalAge} from './validations/index.js';
import { errorMessages, typesErrors } from './errors/customErrors.js';
import { LocalStorage } from './utils/LocalStorage.js';

const form = document.querySelector('[data-formulario]');
const formInputs = form.querySelectorAll('[required]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const entries = Object.fromEntries(formData);

  LocalStorage.setItem('register', entries);
  window.location.href = 'abrir-cuenta-form-2.html'
});

formInputs.forEach((input) => {
  input.addEventListener('input', () => validateInput(input));
  input.addEventListener('invalid', (event) => event.preventDefault());
});

function validateInput (input) {
  let message = '';
  input.setCustomValidity('');
  if (input.name == 'cuil' && input.value.length >= 11) isACuil(input);

  if (input.name == 'fecha_nacimiento' && input.value !== '') isOfLegalAge(input);

  //console.log(input.validity);
  typesErrors.forEach(error => {
    if (input.validity[error]) {
      message = errorMessages[input.name][error];
      console.log({message});
    }
  })
  const errorMessageElement = input.parentNode.querySelector('.mensaje-error');

  const validateInputCheck = input.checkValidity()
  if (!validateInputCheck) {
    errorMessageElement.textContent = message;
  } else {
    errorMessageElement.textContent = '';
  }
}
