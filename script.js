// Toggle Micro-Filter Status
document.getElementById("microFilterToggle").addEventListener("change", function() {
    let statusText = document.getElementById("filterStatus");
    if (this.checked) {
        statusText.textContent = "Micro-Filter: ON";
    } else {
        statusText.textContent = "Micro-Filter: OFF";
    }
});

