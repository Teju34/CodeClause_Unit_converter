// Weight Conversion
document.addEventListener("DOMContentLoaded", convertWeight);
document.getElementById("weight").addEventListener("input", convertWeight);
document.getElementById("weightUnit").addEventListener("change", convertWeight);

function convertWeight() {
    var weight = parseFloat(document.getElementById("weight").value || 0);
    var unit = document.getElementById("weightUnit").value;
    var result = "";

    if (unit === "kilogram") {
        var pound = weight * 2.20462;
        var ounce = weight * 35.274;
        result = weight + " kilograms = " + pound.toFixed(2) + " pounds = " + ounce.toFixed(2) + " ounces";
    } else if (unit === "pound") {
        var kilogram = weight / 2.20462;
        var ounce = weight * 16;
        result = weight + " pounds = " + kilogram.toFixed(2) + " kilograms = " + ounce.toFixed(2) + " ounces";
    } else if (unit === "ounce") {
        var kilogram = weight / 35.274;
        var pound = weight / 16;
        result = weight + " ounces = " + kilogram.toFixed(2) + " kilograms = " + pound.toFixed(2) + " pounds";
    }

    document.getElementById("weightResult").textContent = result;
}
