import Notiflix from 'notiflix';

export function onPromiseFormSubmit(evt, form) {
  evt.preventDefault();

  const { delay, step, amount } = getFormValues(form);
  processPromises(delay, step, amount);
}

function getFormValues(form) {
  const { value: delay } = form.querySelector('input[name="delay"]');
  const { value: step } = form.querySelector('input[name="step"]');
  const { value: amount } = form.querySelector('input[name="amount"]');

  return {
    delay: parseInt(delay),
    step: parseInt(step),
    amount: parseInt(amount),
  };
}

function processPromises(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay + (i - 1) * step)
      .then(onPromiseSuccess)
      .catch(onPromiseError);
  }
}

function onPromiseSuccess({ position, delay }) {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}

function onPromiseError({ position, delay }) {
  Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
