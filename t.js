// Length Conversion
document.addEventListener("DOMContentLoaded", convertLength);
document.getElementById("length").addEventListener("input", convertLength);
document.getElementById("lengthUnit").addEventListener("change", convertLength);

function convertLength() {
    var length = parseFloat(document.getElementById("length").value || 0);
    var unit = document.getElementById("lengthUnit").value;
    var result = "";

    if (unit === "meter") {
        result = length + " meters";
    } else if (unit === "kilometer") {
        result = (length * 1000) + " kilometers";
    }

    document.getElementById("lengthResult").textContent = result;
}
