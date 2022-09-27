"use strict";

const overlay = document.querySelector(".overlay");

const submitHandler = (e) => {
  e.preventDefault();

  overlay.classList.add("active");
};

const closeOverlay = () => {
  overlay.classList.remove("active");
};

const clickListenerForSubmit = () => {
  const button = document.querySelector("#submit");

  button.addEventListener("click", submitHandler);
};

const clickListenerForClosing = () => {
  const button = document.querySelector("#close-overlay");

  button.addEventListener("click", closeOverlay);
};

clickListenerForSubmit();
clickListenerForClosing();
