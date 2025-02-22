// Toggle Micro-Filter Status
document.getElementById("microFilterToggle").addEventListener("change", function() {
    let statusText = document.getElementById("filterStatus");
    if (this.checked) {
        statusText.textContent = "Micro-Filter: ON";
    } else {
        statusText.textContent = "Micro-Filter: OFF";
    }
});

const slider = document.querySelector('.slider');
let isPaused = false;

document.querySelector('.slider-container').addEventListener('mouseenter', () => {
    isPaused = true;
    slider.style.animationPlayState = 'paused';
});

document.querySelector('.slider-container').addEventListener('mouseleave', () => {
    isPaused = false;
    slider.style.animationPlayState = 'running';
});
