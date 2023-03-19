import { onPromiseFormSubmit } from './utils/promiseHelpers';

const form = document.querySelector('.form');
form.addEventListener('submit', evt => onPromiseFormSubmit(evt, form));
