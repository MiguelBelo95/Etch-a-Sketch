const color = document.getElementById('colorSelector');
const penBtn = document.getElementById('penBtn');
const rainbowBtn = document.getElementById('rainbowBtn');
const darkBtn = document.getElementById('darkBtn');
const brightBtn = document.getElementById('brightBtn');
const eraserBtn = document.getElementById('eraserBtn');
const clearBtn = document.getElementById('clearBtn');
const sizeDisplay = document.getElementById('sizeValue');
const sizeSlider = document.getElementById('sizeSlider');



let sizeValue = sizeSlider.value;

sizeDisplay.append(`${sizeValue} X ${sizeValue}`) 

//Toggle active and inactive on buttons, change background of btn


//Add EventListeners to the buttons;

