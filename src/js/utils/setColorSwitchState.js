import { startBtnEl } from '../01-color-switcher';
import { refs } from '../01-color-switcher';

export default function setColorSwitchState(state) {
  refs.startBtnEl.disabled = state;
  refs.stopBtnEl.disabled = !state;
}
