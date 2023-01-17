const defaultSize = 15;
const defaultMode = 'color';
const defaultColor = '#333333';

let currentSize = defaultSize;
let currentMode = defaultMode;
let currentColor = defaultColor;

function updateSize(newSize) {
	currentSize = newSize;
}

function updateMode(newMode) {
	//activateButton(newMode);
	currentMode = newMode;
}

function updateColor(newColor) {
	currentColor = newColor;
}

const color = document.getElementById('colorSelector');
const penBtn = document.getElementById('penBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const darkBtn = document.getElementById('darkBtn');
const brightBtn = document.getElementById('brightBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeDisplay = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('grid-size');
const grid = document.getElementById('gridbox');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let gridSize = sizeSlider.value;

sizeSlider.onchange = (e) => updateSizeValue(e.target.vaule);
sizeSlider.onchange = (e) => changeSize(e.target.value);


//Update GRID size on any range change on the slider button
function changeSize(size) {
	updateSize(size);
	updateSizeValue(size);
	reloadGrid();
}

function updateSizeValue(value) {
	sizeDisplay.innerHTML = `${value} x ${value}`;
}

function clearGrid() {
	grid.innerHTML = "";
}

function reloadGrid() {
	clearGrid();
	createGrid(currentSize);
}

//GRID
function createGrid(size) {
	grid.style.gridTemplateColumns = `grid-template-columns: repeat(${size}, 1fr)`;
	grid.style.gridTemplateRows = `grid-template-rows: repeat(${size}, 1fr);`
	
	for (let i=0; i < size * size; i++) {
		const gridCell = document.createElement('div');
		gridCell.classList.add('grid-cell');
		//gridCell.addEventListener('mouseover', changeColor);
		//gridCell.addEventListener('mousedown', changeColor);
		grid.appendChild(gridCell);
	}
}


//Toggle active and inactive on buttons, change background of btn


//Add EventListeners to the buttons;


//AUTOMATIC LAUNCH SETUP
window.onload = () => {
	createGrid(defaultSize);
	//activateButton(defaultMode);
}
