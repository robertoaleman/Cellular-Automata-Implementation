# Cellular-Automata-Implementation
This project implements a variety of cellular automata models using HTML, JavaScript, and an optional CSS file for styling. The implementation includes examples of different types of cellular automata, such as classical (Game of Life), continuous, probabilistic, and more.
<p><img src="celullar_automata.jpg" /></p>
<h1>Cellular Automata Implementation</h1>
Author : Roberto Alemán, <a href="https://ventics.com/">ventics.com</a>

This project implements a variety of <strong>cellular automata</strong> models using HTML, JavaScript, and an optional CSS file for styling. The implementation includes examples of different types of cellular automata, such as classical (Game of Life), continuous, probabilistic, and more.

<hr />

<h2>Features</h2>
<ol>
 	<li><strong>Classical Automata (Game of Life)</strong>:
<ul>
 	<li>Cells have binary states (alive or dead).</li>
 	<li>Evolution follows simple rules based on the number of alive neighbors.</li>
</ul>
</li>
 	<li><strong>Continuous Automata</strong>:
<ul>
 	<li>Cells have continuous states (values between 0 and 1).</li>
 	<li>Smooth transitions are applied to state changes.</li>
</ul>
</li>
 	<li><strong>Probabilistic Automata</strong>:
<ul>
 	<li>Rules include probabilistic elements, introducing randomness in state transitions.</li>
</ul>
</li>
 	<li><strong>Non-Uniform Automata</strong>:
<ul>
 	<li>Each cell can have a different set of rules for its state transition.</li>
</ul>
</li>
 	<li><strong>Asynchronous Automata</strong>:
<ul>
 	<li>Updates occur asynchronously, meaning not all cells are updated simultaneously.</li>
</ul>
</li>
 	<li><strong>Quantum Automata</strong> (Planned):
<ul>
 	<li>Extends cellular automata to quantum principles (not implemented in this version).</li>
</ul>
</li>
 	<li><strong>Reversible Automata</strong>:
<ul>
 	<li>State transitions are invertible, allowing the system to return to an earlier configuration.</li>
</ul>
</li>
</ol>

<hr />

<h2>File Structure</h2>
<ol>
 	<li><code>index.html</code>: Contains the structure of the user interface and references the JavaScript and CSS files.</li>
 	<li><code>script.js</code>: Implements the logic for the different types of cellular automata.</li>
 	<li><code>style.css</code> (Optional): Provides basic styling for the UI and canvas.</li>
</ol>

<hr />

<h2>Usage Instructions</h2>
<h3>1. Requirements</h3>
<ul>
 	<li>A modern web browser (e.g., Chrome, Firefox, Safari).</li>
 	<li>No backend is required; everything runs in the browser.</li>
</ul>
<h3>2. Setup</h3>
<ol>
 	<li>Download the project files (<code>index.html</code>, <code>script.js</code>, and optionally <code>style.css</code>).</li>
 	<li>Open the <code>index.html</code> file in a web browser.</li>
</ol>
<h3>3. Controls</h3>
<ul>
 	<li><strong>Start</strong>: Initializes the automaton and begins the simulation.</li>
 	<li><strong>Stop</strong>: Stops the simulation.</li>
 	<li><strong>Automaton Type</strong>: A dropdown menu to select the type of automaton to simulate.</li>
</ul>

<hr />

<h2>Automata Types</h2>
<h3>Classical Automata (Game of Life)</h3>
<ul>
 	<li><strong>Description</strong>: The state of each cell (alive or dead) is updated based on simple rules:
<ul>
 	<li>A live cell with fewer than 2 or more than 3 neighbors dies.</li>
 	<li>A dead cell with exactly 3 neighbors becomes alive.</li>
</ul>
</li>
 	<li><strong>Implementation</strong>:
<ul>
 	<li>Binary states (<code>1</code> for alive, <code>0</code> for dead).</li>
 	<li>Updates occur synchronously for all cells in each frame.</li>
</ul>
</li>
</ul>
<h3>Continuous Automata</h3>
<ul>
 	<li><strong>Description</strong>: Each cell has a continuous state value between 0 and 1.</li>
 	<li><strong>Implementation</strong>:
<ul>
 	<li>The state of each cell is updated based on the average state of its neighbors.</li>
 	<li>Smooth transitions create a gradual evolution of states.</li>
</ul>
</li>
</ul>
<h3>Probabilistic Automata</h3>
<ul>
 	<li><strong>Description</strong>: Adds randomness to the rules. For example:
<ul>
 	<li>A dead cell might become alive with a certain probability, even if neighbors don't meet the usual criteria.</li>
</ul>
</li>
 	<li><strong>Implementation</strong> (Planned):
<ul>
 	<li>A random factor is introduced in the update rules.</li>
</ul>
</li>
</ul>
<h3>Non-Uniform Automata</h3>
<ul>
 	<li><strong>Description</strong>: Each cell has different transition rules.</li>
 	<li><strong>Implementation</strong> (Planned):
<ul>
 	<li>Define a rule set per cell and apply updates accordingly.</li>
</ul>
</li>
</ul>
<h3>Asynchronous Automata</h3>
<ul>
 	<li><strong>Description</strong>: Not all cells are updated at the same time.</li>
 	<li><strong>Implementation</strong> (Planned):
<ul>
 	<li>Randomly select a subset of cells to update on each frame.</li>
</ul>
</li>
</ul>
<h3>Quantum Automata</h3>
<ul>
 	<li><strong>Description</strong>: Applies principles from quantum mechanics, such as superposition and entanglement.</li>
 	<li><strong>Implementation</strong>: Currently not implemented but planned for future work.</li>
</ul>
<h3>Reversible Automata</h3>
<ul>
 	<li><strong>Description</strong>: The system can revert to previous states by using invertible rules.</li>
 	<li><strong>Implementation</strong>:
<ul>
 	<li>Store the previous state and allow backward transitions.</li>
</ul>
</li>
</ul>

<hr />

<h2>Code Overview</h2>
<h3><code>index.html</code></h3>
Provides the structure for the UI, including:
<ul>
 	<li>A canvas element to visualize the automata.</li>
 	<li>Buttons for starting and stopping the simulation.</li>
 	<li>A dropdown menu to select the automaton type.</li>
</ul>
<h3><code>script.js</code></h3>
Contains the logic for:
<ul>
 	<li>Initializing the grid with random states.</li>
 	<li>Updating the grid based on the selected automaton type.</li>
 	<li>Rendering the grid on the canvas.</li>
</ul>
<h3><code>style.css</code> (Optional)</h3>
Adds basic styling for the webpage and canvas.

<hr />

<h2>Example Walkthrough</h2>
<h3>Game of Life</h3>
<ol>
 	<li>Select "Classical (Game of Life)" from the dropdown menu.</li>
 	<li>Click "Start" to initialize the grid and begin the simulation.</li>
 	<li>Observe how patterns evolve over time according to the rules of the Game of Life.</li>
</ol>
<h3>Continuous Automaton</h3>
<ol>
 	<li>Select "Continuous" from the dropdown menu.</li>
 	<li>Click "Start" to see the smooth transitions of states across the grid.</li>
</ol>

<hr />

<h2>Future Enhancements</h2>
<ul>
 	<li>Add support for probabilistic, non-uniform, asynchronous, and quantum automata.</li>
 	<li>Implement a configuration panel for custom rules and grid settings.</li>
 	<li>Optimize rendering for large grids.</li>
</ul>

<hr />

<h2>Dependencies</h2>
The implementation does not require any external libraries. It uses plain JavaScript and HTML5's <code>&lt;canvas&gt;</code> element for visualization.
