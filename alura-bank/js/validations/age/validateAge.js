export function isOfLegalAge (input) {
  const dateOfBirth = new Date(input.value);
  if (!validateAge(dateOfBirth)) {
    input.setCustomValidity('Necesitas ser mayor de edad');
  }
}

function validateAge (date) {
  const currentDate = new Date();
  const datePlus18 = new Date(
    date.getUTCFullYear() + 18,
    date.getUTCMonth(),
    date.getUTCDate()
  )

  return currentDate >= datePlus18;
}