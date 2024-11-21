"use strict";

const avatar = document.getElementById("monkey-avatar");


avatar.addEventListener("mouseover", function () {
  avatar.style.animation = "rotateMonkey 1s linear infinite";
});

avatar.addEventListener("mouseout", function () {
  avatar.style.animation = "moveMonkey 2s infinite";
});


const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes rotateMonkey {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`, styleSheet.cssRules.length);
