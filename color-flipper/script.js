const colorDisplaySection = document.querySelector("#colour-display");
const newColorBtnElement = document.querySelector("#new-color-btn");
const currentColorElement = document.querySelector("#current-colour");

const hexDigits = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getRandomHexValue() {
  const randomIndexPosition = Math.floor(Math.random() * hexDigits.length);
  const randomHexValue = hexDigits[randomIndexPosition];
  return randomHexValue;
}

function getRandomHexString(strlength) {
  let hexString = "";
  for (let i = 0; i < strlength; i++) {
    hexString += getRandomHexValue();
  }

  return hexString;
}

newColorBtnElement.addEventListener("click", function () {
  const randomHexString = "#" + getRandomHexString(6);
  document.body.style.backgroundColor = randomHexString;

  currentColorElement.textContent = randomHexString;
  colorDisplaySection.style.borderColor = randomHexString;
});
