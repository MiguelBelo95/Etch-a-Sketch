const color = document.getElementById('colorSelector');
const penBtn = document.getElementById('penBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const darkBtn = document.getElementById('darkBtn');
const brightBtn = document.getElementById('brightBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeDisplay = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('grid-size');

sizeDisplay.textContent = `${sizeSlider.value} X ${sizeSlider.value}`;

//GRID SIZE
sizeDisplay.textContent = `${sizeSlider.value} X ${sizeSlider.value}`;

function changeValue() {
	sizeDisplay.textContent = "" ;
	let gridSize = sizeSlider.value;
	sizeDisplay.append(`${gridSize} X ${gridSize}`);
}

//Toggle active and inactive on buttons, change background of btn


//Add EventListeners to the buttons;

