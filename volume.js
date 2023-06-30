// Volume Conversion
document.addEventListener("DOMContentLoaded", convertVolume);
document.getElementById("volume").addEventListener("input", convertVolume);
document.getElementById("volumeUnit").addEventListener("change", convertVolume);

function convertVolume() {
    var volume = parseFloat(document.getElementById("volume").value || 0);
    var unit = document.getElementById("volumeUnit").value;
    var result = "";

    if (unit === "cubic-meter") {
        result = volume + " cubic meters";
    } else if (unit === "liter") {
        result = (volume * 1000) + " liters";
    }

    document.getElementById("volumeResult").textContent = result;
}
