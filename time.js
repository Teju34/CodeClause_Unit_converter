// Time Conversion
document.addEventListener("DOMContentLoaded", convertTime);
document.getElementById("time").addEventListener("input", convertTime);
document.getElementById("timeUnit").addEventListener("change", convertTime);

function convertTime() {
    var time = parseFloat(document.getElementById("time").value || 0);
    var unit = document.getElementById("timeUnit").value;
    var result = "";

    if (unit === "hour") {
        var minute = time * 60;
        var second = time * 3600;
        result = time + " hours = " + minute.toFixed(2) + " minutes = " + second.toFixed(2) + " seconds";
    } else if (unit === "minute") {
        var hour = time / 60;
        var second = time * 60;
        result = time + " minutes = " + hour.toFixed(2) + " hours = " + second.toFixed(2) + " seconds";
    } else if (unit === "second") {
        var hour = time / 3600;
        var minute = time / 60;
        result = time + " seconds = " + hour.toFixed(2) + " hours = " + minute.toFixed(2) + " minutes";
    }

    document.getElementById("timeResult").textContent = result;
}
