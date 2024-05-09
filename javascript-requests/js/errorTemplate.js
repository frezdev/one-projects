const errorContainer = document.querySelector('[data-error]');

export function errorTemplate (message) {
  errorContainer.innerHTML = `
    <div class="error-container">
      <p>${message}</p>
    </div>
  `
  return {
    clear: () => errorContainer.innerHTML = ''
  }
}