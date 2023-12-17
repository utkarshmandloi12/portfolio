"use strict";

document.querySelector(".show").addEventListener("click", function () {
  document.querySelector(".show").style.display = "none";
  document.querySelector(".hide").style.display = "block";
  document.querySelector(".menu-content").style.display = "block";
  document.querySelector(".menu-content").style.paddingLeft = "40vw";
});

document.querySelector(".hide").addEventListener("click", function () {
  document.querySelector(".show").style.display = "block";
  document.querySelector(".hide").style.display = "none";
  document.querySelector(".menu-content").style.display = "none";
});
