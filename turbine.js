let pumpSpeed = 1000; // Centrifugal pump speed in RPM (1000 RPM fixed)
const efficiencyFactor = 0.03; // Power per RPM (kW)
const turbineRatio = 0.12; // Ratio between pump and turbine speed

let turbineSpeed = pumpSpeed * turbineRatio; // Initial turbine speed
let powerOutput = 0; // Initial power output
let totalEnergyGenerated = 0;
let interval; // Interval for power generation
let speedDecayInterval; // Interval for speed decrease

// Function to start turbine
function startTurbine() {
    if (!interval) { // Prevent multiple intervals
        document.getElementById("turbineStatus").innerText = "ON";
        document.getElementById("turbineStatus").style.color = "green";

        interval = setInterval(() => {
            powerOutput = turbineSpeed * efficiencyFactor; // Calculate instantaneous power
            totalEnergyGenerated += powerOutput; // Sum all past power outputs

            // Update UI
            document.getElementById("turbineSpeed").innerText = turbineSpeed.toFixed(0);
            document.getElementById("currentPower").innerText = powerOutput.toFixed(2);
            document.getElementById("totalPower").innerText = totalEnergyGenerated.toFixed(2);
        }, 1000); // Update every second

        // Reduce speed every 4 sec by 2 RPM
        speedDecayInterval = setInterval(() => {
            turbineSpeed = Math.max(0, turbineSpeed - 2); // Ensure it doesn't go negative
        }, 4000); // Every 4 seconds

        // Stop after 10 hours (10 hours = 36000 seconds)
        setTimeout(() => {
            stopTurbine();
        }, 10 * 60 * 60 * 1000);
    }
}

// Function to stop turbine
function stopTurbine() {
    clearInterval(interval);
    clearInterval(speedDecayInterval);
    interval = null;
    turbineSpeed = 0;
    powerOutput = 0;

    document.getElementById("turbineStatus").innerText = "OFF";
    document.getElementById("turbineStatus").style.color = "red";
    document.getElementById("turbineSpeed").innerText = "0";
    document.getElementById("currentPower").innerText = "0";
}
