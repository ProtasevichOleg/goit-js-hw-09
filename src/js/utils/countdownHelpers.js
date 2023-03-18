import Notiflix from 'notiflix';
import { options } from '../02-timer';
import { refs } from '../02-timer';

export function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

export function updateCountdown(remainingMs) {
  const { days, hours, minutes, seconds } = convertMs(remainingMs);

  refs.secondsEl.textContent = seconds.toString().padStart(2, '0');
  refs.minutesEl.textContent = minutes.toString().padStart(2, '0');
  refs.hoursEl.textContent = hours.toString().padStart(2, '0');
  refs.daysEl.textContent = days.toString().padStart(2, '0');
}

export function startCountdown(selectedDate) {
  const timeUntilSelectedDate = selectedDate.getTime() - refs.startDate;

  refs.countdownInterval = setInterval(() => {
    const timeLeft = timeUntilSelectedDate - (Date.now() - refs.startDate);

    if (timeLeft <= 0) {
      clearInterval(refs.countdownInterval);
      updateCountdown(0);
      return;
    }

    updateCountdown(timeLeft);
  }, 1000);
}

export function onDateSelected(selectedDate) {
  const isOnPast = selectedDate < options.defaultDate;
  if (isOnPast) {
    Notiflix.Report.warning(
      'Warning',
      'Please choose a date in the future',
      'OK'
    );
    refs.startButtonEl.disabled = true;
    return;
  }

  refs.startButtonEl.disabled = false;
  refs.startButtonEl.addEventListener('click', () => {
    refs.startDate = Date.now();
    refs.startButtonEl.disabled = true;
    startCountdown(selectedDate);
  });
}
