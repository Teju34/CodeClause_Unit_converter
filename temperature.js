// Temperature Conversion
document.addEventListener("DOMContentLoaded", convertTemperature);
document.getElementById("temperature").addEventListener("input", convertTemperature);
document.getElementById("temperatureUnit").addEventListener("change", convertTemperature);

function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value || 0);
    var unit = document.getElementById("temperatureUnit").value;
    var result = "";

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9/5) + 32;
        var kelvin = temperature + 273.15;
        result = temperature + " °C = " + fahrenheit.toFixed(2) + " °F = " + kelvin.toFixed(2) + " K";
    } else if (unit === "fahrenheit") {
        var celsius = (temperature - 32) * 5/9;
        var kelvin = (temperature + 459.67) * 5/9;
        result = temperature + " °F = " + celsius.toFixed(2) + " °C = " + kelvin.toFixed(2) + " K";
    } else if (unit === "kelvin") {
        var celsius = temperature - 273.15;
        var fahrenheit = (temperature * 9/5) - 459.67;
        result = temperature + " K = " + celsius.toFixed(2) + " °C = " + fahrenheit.toFixed(2) + " °F";
    }

    document.getElementById("temperatureResult").textContent = result;
}
