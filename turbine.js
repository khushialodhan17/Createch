let pumpSpeed = 1500; // Centrifugal pump speed in RPM (1000 - 2000 RPM)
const efficiencyFactor = 0.03; // Power per RPM (kW)
const turbineRatio = 0.12; // Ratio between pump and turbine speed

let turbineSpeed = 0; // Initially turbine is OFF
let powerOutput = 0;
let totalEnergyGenerated = 0;
let operatingHours = 0;
let interval;
let accelerating = true; // Acceleration control

// Function to start turbine
function startTurbine() {
    if (!interval) {
        turbineSpeed = pumpSpeed * turbineRatio; // Set initial turbine speed
        document.getElementById("turbineStatus").innerText = "ON";
        document.getElementById("turbineStatus").style.color = "green";

        interval = setInterval(() => {
            if (operatingHours < 10) { // Run for 10 simulated hours
                if (accelerating) {
                    turbineSpeed += 5; // Speed up
                    if (turbineSpeed >= 180) accelerating = false; // Start slowing down
                } else {
                    turbineSpeed -= 5; // Slow down
                    if (turbineSpeed <= 100) accelerating = true; // Start speeding up
                }

                powerOutput = turbineSpeed * efficiencyFactor; // Calculate power
                totalEnergyGenerated += powerOutput;
                operatingHours++;

                // Update UI
                document.getElementById("turbineSpeed").innerText = turbineSpeed.toFixed(0);
                document.getElementById("currentPower").innerText = powerOutput.toFixed(2);
                document.getElementById("totalPower").innerText = totalEnergyGenerated.toFixed(2);
            } else {
                stopTurbine(); // Auto-stop after 10 hours
            }
        }, 1000);
    }
}

// Function to stop turbine
function stopTurbine() {
    clearInterval(interval);
    interval = null;
    turbineSpeed = 0;
    powerOutput = 0;

    document.getElementById("turbineStatus").innerText = "OFF";
    document.getElementById("turbineStatus").style.color = "red";
    document.getElementById("turbineSpeed").innerText = "0";
    document.getElementById("currentPower").innerText = "0";
}
