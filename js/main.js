const formControl = document.querySelector(".speed__control");
const formInput = document.querySelector("#speed__input");
const formBtn = document.querySelector(".speed__btn");
const resultFoot = document.querySelector(".speed__result--foot");
const resultBicycle = document.querySelector(".speed__result--bicycle");
const resultDrive = document.querySelector(".speed__result--drive");
const resultAir = document.querySelector(".speed__result--air");
const list = document.querySelector(".speed__list");
formBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  list.style.display = "flex";
  const value = Number(formInput.value);

  let foot = 3.6;
  let elResult = value / foot;
  let hour = Math.trunc(elResult);
  let minuts = elResult - hour;
  let minut = 60 * minuts;
  let min = Math.trunc(minut);
  let secunds = minut - min;
  let secund = secunds * 60;
  let sec = Math.trunc(secund);

  resultFoot.textContent =
    hour + "soat" + " " + min + "minut" + " " + sec + "secund";
});

formBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  const value = Number(formInput.value);

  let bicycle = 20.1;
  let elResult = value / bicycle;
  let hour = Math.trunc(elResult);
  let minuts = elResult - hour;
  let minut = 60 * minuts;
  let min = Math.trunc(minut);
  let secunds = minut - min;
  let secund = secunds * 60;
  let sec = Math.trunc(secund);

  resultBicycle.textContent =
    hour + "soat" + " " + min + "minut" + " " + sec + "secund";
});
formBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  const value = Number(formInput.value);

  let drive = 70;
  let elResult = value / drive;
  let hour = Math.trunc(elResult);
  let minuts = elResult - hour;
  let minut = 60 * minuts;
  let min = Math.trunc(minut);
  let secunds = minut - min;
  let secund = secunds * 60;
  let sec = Math.trunc(secund);

  resultDrive.textContent =
    hour + "soat" + " " + min + "minut" + " " + sec + "secund";
});

formBtn.addEventListener("click", function (evt) {
  evt.preventDefault();

  const value = Number(formInput.value);
  let air = 800;
  let elResult = value / air;
  let hour = Math.trunc(elResult);
  let minuts = elResult - hour;
  let minut = 60 * minuts;
  let min = Math.trunc(minut);
  let secunds = minut - min;
  let secund = secunds * 60;
  let sec = Math.trunc(secund);

  resultAir.textContent =
    hour + "soat" + " " + min + "minut" + " " + sec + "secund";
});
