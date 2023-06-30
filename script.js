// Length Conversion
document.getElementById("length").addEventListener("input", convertLength);
document.getElementById("lengthUnit").addEventListener("change", convertLength);

function convertLength() {
    var length = parseFloat(document.getElementById("length").value);
    var unit = document.getElementById("lengthUnit").value;
    var result = "";

    switch (unit) {
        case "meter":
            result = length + " meters";
            break;
        case "feet":
            result = (length * 3.281).toFixed(2) + " feet";
            break;
        case "kilometer":
            result = (length / 1000).toFixed(2) + " kilometers";
            break;
        case "mile":
            result = (length * 0.00062137).toFixed(2) + " miles";
            break;
        case "inch":
            result = (length * 39.37).toFixed(2) + " inches";
            break;
        case "yard":
            result = (length * 1.094).toFixed(2) + " yards";
            break;
        default:
            result = "Invalid unit";
            break;
    }

    document.getElementById("lengthResult").textContent = result;
}

// Temperature Conversion
document.getElementById("temperature").addEventListener("input", convertTemperature);
document.getElementById("temperatureUnit").addEventListener("change", convertTemperature);

function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("temperatureUnit").value;
    var result = "";

    switch (unit) {
        case "celsius":
            var fahrenheit = (temperature * 9 / 5) + 32;
            var kelvin = temperature + 273.15;
            result = temperature + " °C = " + fahrenheit.toFixed(2) + " °F = " + kelvin.toFixed(2) + " K";
            break;
        case "fahrenheit":
            var celsius = (temperature - 32) * 5 / 9;
            var kelvin = (temperature - 32) * 5 / 9 + 273.15;
            result = temperature + " °F = " + celsius.toFixed(2) + " °C = " + kelvin.toFixed(2) + " K";
            break;
        case "kelvin":
            var celsius = temperature - 273.15;
            var fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
            result = temperature + " K = " + celsius.toFixed(2) + " °C = " + fahrenheit.toFixed(2) + " °F";
            break;
        default:
            result = "Invalid unit";
            break;
    }

    document.getElementById("temperatureResult").textContent = result;
}


// Area Conversion
document.addEventListener("DOMContentLoaded", convertArea);
document.getElementById("area").addEventListener("input", convertArea);
document.getElementById("areaUnit").addEventListener("change", convertArea);

function convertArea() {
    var area = parseFloat(document.getElementById("area").value || 0);
    var unit = document.getElementById("areaUnit").value;
    var result = "";

    switch (unit) {
      case "squareMeter":
          result = area + " square meters";
          break;
      case "squareFeet":
          result = (area * 10.764).toFixed(2) + " square feet";
          break;
      case "squareKilometer":
          result = (area / 1000000).toFixed(2) + " square kilometers";
          break;
      case "squareMile":
          result = (area * 0.0000003861).toFixed(2) + " square miles";
          break;
      default:
          result = "Invalid unit";
          break;
  }

    document.getElementById("areaResult").textContent = result;
}

// Volume Conversion
document.addEventListener("DOMContentLoaded", convertVolume);
document.getElementById("volume").addEventListener("input", convertVolume);
document.getElementById("volumeUnit").addEventListener("change", convertVolume);

function convertVolume() {
    var volume = parseFloat(document.getElementById("volume").value || 0);
    var unit = document.getElementById("volumeUnit").value;
    var result = "";

    
    switch (unit) {
      case "liter":
          result = volume + " liters";
          break;
      case "milliliter":
          result = volume * 1000 + " milliliters";
          break;
      case "gallon":
          result = (volume * 0.264172).toFixed(2) + " gallons";
          break;
      case "ounce":
          result = (volume * 33.814).toFixed(2) + " ounces";
          break;
      
      default:
          result = "Invalid unit";
          break;
  }

    document.getElementById("volumeResult").textContent = result;
}

// Weight Conversion
document.addEventListener("DOMContentLoaded", convertWeight);
document.getElementById("weight").addEventListener("input", convertWeight);
document.getElementById("weightUnit").addEventListener("change", convertWeight);

function convertWeight() {
    var weight = parseFloat(document.getElementById("weight").value || 0);
    var unit = document.getElementById("weightUnit").value;
    var result = "";

    switch (unit) {
      case "kilogram":
          result = weight + " kilograms";
          break;
      case "gram":
          result = weight * 1000 + " grams";
          break;
      case "pound":
          result = (weight * 2.20462).toFixed(2) + " pounds";
          break;
      case "ounce":
          result = (weight * 35.274).toFixed(2) + " ounces";
          break;
      default:
          result = "Invalid unit";
          break;
  }


    document.getElementById("weightResult").textContent = result;
}

// Time Conversion
document.addEventListener("DOMContentLoaded", convertTime);
document.getElementById("time").addEventListener("input", convertTime);
document.getElementById("timeUnit").addEventListener("change", convertTime);

function convertTime() {
    var time = parseFloat(document.getElementById("time").value || 0);
    var unit = document.getElementById("timeUnit").value;
    var result = "";

    switch (unit) {
      case "second":
          result = time + " seconds";
          break;
      case "minute":
          result = time * 60 + " minutes";
          break;
      case "hour":
          result = time * 3600 + " hours";
          break;
      case "day":
          result = time * 86400 + " days";
          break;
      default:
          result = "Invalid unit";
          break;
  }

    document.getElementById("timeResult").textContent = result;
}