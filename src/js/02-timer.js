import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { onDateSelected } from './utils/countdownHelpers';

export const refs = {
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
  startButtonEl: document.querySelector('[data-start]'),
  dateTimePickerEl: document.querySelector('#datetime-picker'),
  countdownInterval: null,
  startDate: null,
};

export const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    onDateSelected(selectedDate);
  },
};

refs.startButtonEl.disabled = true;
flatpickr(refs.dateTimePickerEl, options);
