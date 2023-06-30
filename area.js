// Area Conversion
document.addEventListener("DOMContentLoaded", convertArea);
document.getElementById("area").addEventListener("input", convertArea);
document.getElementById("areaUnit").addEventListener("change", convertArea);

function convertArea() {
    var area = parseFloat(document.getElementById("area").value || 0);
    var unit = document.getElementById("areaUnit").value;
    var result = "";

    if (unit === "square-meter") {
        result = area + " square meters";
    } else if (unit === "square-kilometer") {
        result = (area * 1000000) + " square kilometers";
    }

    document.getElementById("areaResult").textContent = result;
}
