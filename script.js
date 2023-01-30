// Elements
const numInput = document.getElementById("num");
const convertBtn = document.getElementById("convert-btn");
const lengthResultEl = document.getElementById("length-result");
const volumeResultEl = document.getElementById("volume-result");
const massResultEl = document.getElementById("mass-result");
const results = document.getElementById("results");

convertBtn.addEventListener("click", function () {
  const numToConvert = numInput.value;
  const [length, volume, mass] = convert(numToConvert);
  results.innerHTML = resultsDOM(numToConvert, length, volume, mass);
});

function convert(numToConvert) {
  let lengthConversionRate = 3.281; // 1 meter = 3.281 feet
  let volumeConversionRate = 0.264; // 1 liter = 0.264 gallon
  let massConversionRate = 2.204; // 1 kilogram = 2.204 pound

  let length = conversionObj(numToConvert, lengthConversionRate);
  let volume = conversionObj(numToConvert, volumeConversionRate);
  let mass = conversionObj(numToConvert, massConversionRate);

  return [length, volume, mass];
}

// Returns an object with metric and imperial keys and the result of the conversion as a value.
function conversionObj(numToConvert, conversionRate) {
  return {
    imperial: (numToConvert * conversionRate).toFixed(3), // round down to three decimal places
    metric: (numToConvert / conversionRate).toFixed(3),
  };
}

function resultsDOM(num, length, volume, mass) {
  return `
    <div class="card">
        <h5 class="card-title">Length (Meter/Feet)</h5>
        <p class="card-results" id="length-result">${num} meters = ${length.imperial} feet | ${num} feet = ${length.metric} meters</p>
    </div>
    <div class="card">
        <h5 class="card-title">Volume (Liters/Gallons)</h5>
        <p class="card-results" id="volume-result">${num} liters = ${volume.imperial} gallons | ${num} gallons = ${volume.metric} liters</p>
    </div>
    <div class="card">
        <h5 class="card-title">Mass (Kilograms/Pounds)</h5>
        <p class="card-results" id="mass-result">${num} kilos = ${mass.imperial} pounds | ${num} pounds = ${mass.metric} kilos</p>
    </div>`;
}
