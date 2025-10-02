// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault(); // відміняємо стандартну відправку форми

  const delay = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  // Функція для створення промісу
  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  }

  createPromise(delay, state)
    .then(ms => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${ms}ms`,
        timeout: 3000,
        position: 'topRight',
      });
    })
    .catch(ms => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${ms}ms`,
        timeout: 3000,
        position: 'topRight',
      });
    });
});
