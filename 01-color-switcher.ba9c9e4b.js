function t(t){document.body.style.backgroundColor=t}function n(t){e.startBtnEl.disabled=t,e.stopBtnEl.disabled=!t}const e={startBtnEl:document.querySelector("[data-start]"),stopBtnEl:document.querySelector("[data-stop]")};let l=null,o=null;n(!1),e.startBtnEl.addEventListener("click",(function(){n(!0),l=setInterval((()=>{o=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t(o)}),1e3)})),e.stopBtnEl.addEventListener("click",(function(){n(!1),clearInterval(l),o&&t(o)}));
//# sourceMappingURL=01-color-switcher.ba9c9e4b.js.map