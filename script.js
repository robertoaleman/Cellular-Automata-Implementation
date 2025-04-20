// JavaScript Document
// Cellular Automata Implementation Author Roberto Alemán, ventics.com

const canvas = document.getElementById("grid");
const ctx = canvas.getContext("2d");
const gridSize = 50; // 50x50 grid
const cellSize = canvas.width / gridSize;
let grid = [];
let running = false;

// Initialize the grid
function initGrid(type) {
    grid = Array(gridSize)
        .fill(null)
        .map(() =>
            Array(gridSize).fill(null).map(() =>
                type === "continuous"
                    ? Math.random() // Continuous (values between 0 and 1)
                    : Math.random() > 0.5 ? 1 : 0 // Classical (binary states)
            )
        );
}

// Draw the grid
function drawGrid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const value = grid[x][y];
            ctx.fillStyle = value === 1
                ? "black"
                : `rgba(0, 0, 0, ${value})`; // Continuous uses transparency
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        }
    }
}

// Update for classical automaton
function updateClassical() {
    const newGrid = grid.map((row, x) =>
        row.map((cell, y) => {
            const neighbors = [
                grid[x - 1]?.[y - 1],
                grid[x - 1]?.[y],
                grid[x - 1]?.[y + 1],
                grid[x]?.[y - 1],
                grid[x]?.[y + 1],
                grid[x + 1]?.[y - 1],
                grid[x + 1]?.[y],
                grid[x + 1]?.[y + 1],
            ].filter((n) => n === 1).length;
            if (cell === 1 && (neighbors < 2 || neighbors > 3)) return 0; // Dies
            if (cell === 0 && neighbors === 3) return 1; // Comes to life
            return cell; // Stays the same
        })
    );
    grid = newGrid;
}

// Update for continuous automaton
function updateContinuous() {
    grid = grid.map((row, x) =>
        row.map((cell, y) => {
            const avg =
                [
                    grid[x - 1]?.[y - 1],
                    grid[x - 1]?.[y],
                    grid[x - 1]?.[y + 1],
                    grid[x]?.[y - 1],
                    grid[x]?.[y + 1],
                    grid[x + 1]?.[y - 1],
                    grid[x + 1]?.[y],
                    grid[x + 1]?.[y + 1],
                ].reduce((sum, n) => sum + (n || 0), 0) / 8;
            return (cell + avg) / 2; // Smooth transition
        })
    );
}

// Main loop
function loop() {
    if (!running) return;
    const type = document.getElementById("automata-type").value;
    if (type === "classical") updateClassical();
    else if (type === "continuous") updateContinuous();
    drawGrid();
    requestAnimationFrame(loop);
}

// Event listeners
document.getElementById("start").addEventListener("click", () => {
    running = true;
    const type = document.getElementById("automata-type").value;
    initGrid(type);
    loop();
});

document.getElementById("stop").addEventListener("click", () => {
    running = false;
});