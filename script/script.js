// geo.ipify key:   at_Q0XXNFVU3TrquYkcbERMkEljCLqSk
const arrowBtn = document.querySelector("#arrow");
const inputIp = document.querySelector(".input-ip");
const ipPage = document.querySelector(".ip");
const locationPage = document.querySelector(".loc");
const timePage = document.querySelector(".time");
const ispPage = document.querySelector(".isp");
const eaches = document.querySelectorAll(".each");
const errorMsg = document.querySelector(".error-msg");

const displayMap = function (coordinates) {
  let map = L.map("map", {
    center: coordinates,
    zoom: 13,
  });
};

const displayError = function () {
  document.querySelector(".map").classList.add("bg-danger");
  eaches.forEach((each) => {
    each.classList.add("d-none");
  });
  errorMsg.classList.remove("d-none");
};

const findIP = async function (ip) {
  try {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_Q0XXNFVU3TrquYkcbERMkEljCLqSk&ipAddress=${ip}`);
    const data = await response.json();
    ipPage.textContent = `${data.ip}`;
    locationPage.textContent = `${data.location.region}`;
    timePage.textContent = `UTC ${data.location.timezone}`;
    ispPage.textContent = `${data.isp.split("(")[0]}`;
    const coordinates = [data.location.lat, data.location.lng];
    errorMsg.classList.add("d-none");
    eaches.forEach((each) => {
      each.classList.remove("d-none");
    });
    displayMap(coordinates);
    // console.log(data);
  } catch (err) {
    displayError();
    // console.log(err);
  }
};

const runInput = function () {
  try {
    if (inputIp.value.split(".").length === 4) {
      findIP(inputIp.value);
      map.remove();
      document.querySelector(".back").insertAdjacentHTML("afterend", "<div class='map' id='map'></div>");
    } else throw new Error("input value is not correct");
  } catch (err) {
    displayError();
  }
};

const initApp = function () {
  findIP("");
  arrowBtn.addEventListener("click", runInput);

  inputIp.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      runInput();
    }
  });
};

initApp();
