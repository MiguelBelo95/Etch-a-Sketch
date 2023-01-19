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
	activateButton(newMode);
	currentMode = newMode;
}

function updateColor(newColor) {
	currentColor = newColor;
}

const color = document.getElementById('colorSelector');
const colorBtn = document.getElementById('penBtn');
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
		gridCell.addEventListener('mouseover', changeColor);
		gridCell.addEventListener('mousedown', changeColor);
		grid.appendChild(gridCell);
	}
}


//Toggle active and inactive on buttons, change background of btn
function activateButton (newMode) {
	switch(currentMode) {
		case 'rainbow':
			rainbowBtn.classList.remove('active');
			break;
		case 'color':
			colorBtn.classList.remove('active');
			break;
		case 'eraser':
			eraserBtn.classList.remove('active');
			break;
		case 'brighter':
			brightBtn.classList.remove('active');
			break;
		case 'darker':
			darkBtn.classList.remove('active');
			break;
	};

	switch(newMode) {
		case 'rainbow':
			rainbowBtn.classList.toggle('active');
			break;
		case 'color':
			colorBtn.classList.toggle('active');
			break
		case 'eraser':
			eraserBtn.classList.toggle('active');
			break;
		case 'brighter':
			brightBtn.classList.toggle('active');
			break;
		case 'darker':
			darkBtn.classList.toggle('active');
			break;
	};
}


//Add EventListeners to the buttons;
rainbowBtn.onclick = () => updateMode('rainbow');
colorBtn.onclick = () => updateMode('color');
darkBtn.onclick = () => updateMode('darker');
brightBtn.onclick = () => updateMode('brighter');
eraserBtn.onclick = () => updateMode('erase');
clearBtn.onclick = () => reloadGrid();

// BUTTONS functions

function changeColor(e) {
	if(e.type === 'mouseover' && !mouseDown) return;
	switch (currentMode) {
		case 'color':
			e.target.style.backgroundColor = currentColor;
			break;
		case 'eraser':
			e.target.style.backgroundColor = '#ffffff';
			break;
		case 'brighter':
			e.target.style.backgroundColor = colorLightness(currentMode, e.target.style.backgroundColor);
			break;
		case 'darker':
			e.target.style.backgroundColor = colorLightness(currentMode, e.target.style.backgroundColor);
			break;
		case 'rainbow':
			e.target.style.backgroundColor = getRandomColor();
			break;
	}
}

function getRandomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function colorLightness(method, color) {
	let colorValues = color.substring(4, color.length-1).split(",");
	let value;
	for (let i = 0; i < colorValues.length-1; i++) {
		console.log(colorValues[i]);
		if (isNaN(colorValues[i])) {
			colorValues[i] = 255;
		}
		console.log(colorValues[i]);
	}

	if (method === 'brighter') {
		value = 20;
	} else value = -20;

	R = parseInt(colorValues[0]) + value;
	G = parseInt(colorValues[1]) + value;
	B = parseInt(colorValues[2]) + value;
	console.log(R);


	R = Math.min(255, Math.max(0, R));
	G = Math.min(255, Math.max(0, G));
	B = Math.min(255, Math.max(0, B));
	let newColor = "rgb(" + R + ", " + G + ", " + B + ")";
	console.log(newColor);
	return newColor;
}


//AUTOMATIC LAUNCH SETUP
window.onload = () => {
	createGrid(defaultSize);
	activateButton(defaultMode);
}
