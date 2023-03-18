import getRandomHexColor from './utils/getRandomHexColor';
import setBodyBgColor from './utils/setBodyBgColor';
import setColorSwitchState from './utils/setColorSwitchState';

export const refs = {
  startBtnEl: document.querySelector('[data-start]'),
  stopBtnEl: document.querySelector('[data-stop]'),
};

let colorSwitchIntervalId = null;
let currentColor = null;

setColorSwitchState(false);

refs.startBtnEl.addEventListener('click', startColorSwitch);
refs.stopBtnEl.addEventListener('click', stopColorSwitch);

const startColorSwitch = () => {
  setColorSwitchState(true);

  colorSwitchIntervalId = setInterval(() => {
    currentColor = getRandomHexColor();
    setBodyBgColor(currentColor);
  }, 1000);
};

const stopColorSwitch = () => {
  setColorSwitchState(false);

  clearInterval(colorSwitchIntervalId);
  if (currentColor) setBodyBgColor(currentColor);
};
