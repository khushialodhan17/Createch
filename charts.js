let salinityChart, phChart, bacteriaChart, temperatureChart;

function updateCharts() {
    // Get user input values
    const salinityData = document.getElementById("salinityData").value.split(",").map(Number);
    const phData = document.getElementById("phData").value.split(",").map(Number);
    const bacteriaData = document.getElementById("bacteriaData").value.split(",").map(Number);
    const temperatureData = document.getElementById("temperatureData").value.split(",").map(Number);

    const labels = ["Jan", "Feb", "Mar", "Apr", "May"]; // Default labels

    // Destroy previous charts if they exist
    if (salinityChart) salinityChart.destroy();
    if (phChart) phChart.destroy();
    if (bacteriaChart) bacteriaChart.destroy();
    if (temperatureChart) temperatureChart.destroy();

    // Create Salinity Chart
    const ctxSalinity = document.getElementById("salinityChart").getContext("2d");
    salinityChart = new Chart(ctxSalinity, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Salinity Levels",
                data: salinityData,
                borderColor: "blue",
                fill: false
            }]
        }
    });

    // Create pH Level Chart
    const ctxpH = document.getElementById("phChart").getContext("2d");
    phChart = new Chart(ctxpH, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "pH Levels",
                data: phData,
                borderColor: "green",
                fill: false
            }]
        }
    });

    // Create Bacteria Level Chart
    const ctxBacteria = document.getElementById("bacteriaChart").getContext("2d");
    bacteriaChart = new Chart(ctxBacteria, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Bacteria Levels (CFU/mL)",
                data: bacteriaData,
                borderColor: "red",
                fill: false
            }]
        }
    });

    // Create Temperature Chart
    const ctxTemperature = document.getElementById("temperatureChart").getContext("2d");
    temperatureChart = new Chart(ctxTemperature, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Water Temperature (°C)",
                data: temperatureData,
                borderColor: "orange",
                fill: false
            }]
        }
    });
}
