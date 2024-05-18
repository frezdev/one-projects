import { repeatNumbers, validFirstDigits } from './dictionary.js'

export function isACuil (input) {
  const cuil = input.value.replaceAll(/[-\/]/g, '');

  if (hasRepeatNumbers(cuil)) {
    console.log('Valores repetidos');
    input.setCustomValidity('Valores repetidos');
  } else if (validateFirstDigits(cuil) && validateLastDigit(cuil)) {
    console.log('cuil valido');
    input.setCustomValidity('Cuil no valido');
  } else {
    console.log('Cuil invalido');
  }
}

function hasRepeatNumbers (cuil) {
  return repeatNumbers.includes(cuil);
}

function validateFirstDigits (cuil) {
  let firstDigits = cuil.substring(0, 2);

  return validFirstDigits.includes(firstDigits);
}

function validateLastDigit (cuil) {
  let acum = 0;
  const factors = [5,4,3,2,7,6,5,4,3,2];

  for (let i in factors) {
    acum += parseInt(cuil[i], 10) * factors[i];
  }

  let theoricNumber = 11 - (acum % 11);

  if (theoricNumber === 11) {
    theoricNumber = 0;
  } else if (theoricNumber === 10) {
    theoricNumber = 9;
  }

  const verificatorDigit = parseInt(cuil[10], 20);

  return verificatorDigit === theoricNumber;
}