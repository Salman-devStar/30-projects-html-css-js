document.addEventListener("DOMContentLoaded", function () {
  const hueInput = document.querySelector("#hue");
  const saturationInput = document.querySelector("#saturation");
  const lightnessInput = document.querySelector("#lightness");

  const hueValueSpan = document.querySelector("#hueValue");
  const saturationValueSpan = document.querySelector("#saturationValue");
  const lightnessValueSpan = document.querySelector("#lightnessValue");

  const colorDisplay = document.querySelector(".color-display");
  const copyButton = document.querySelector("#copyButton");

  hueInput.addEventListener("input", updateColor);
  saturationInput.addEventListener("input", updateColor);
  lightnessInput.addEventListener("input", updateColor);

  updateColor();

  function updateColor() {
    const hue = hueInput.value;
    const saturation = saturationInput.value;
    const lightness = lightnessInput.value;

    const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

    colorDisplay.style.backgroundColor = color;

    hueValueSpan.textContent = hue;
    saturationValueSpan.textContent = `${saturation}%`;
    lightnessValueSpan.textContent = `${lightness}%`;
  }

  copyButton.addEventListener("click", copyClipboard);

  function copyClipboard() {
    const textToCopy = `hsl(${hueInput.value}, ${saturationInput.value}%, ${lightnessInput.value}%)`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        alert("The Color is Copied to clipboard");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
});
