let gridSize = 16;
let gridWidth = 600;
let type = 'rainbow'
let color = 'red';

const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('button');
const allCol = document.querySelectorAll('.colGridSpace');
createGrid();
colorEventListeners();
let allGrid = document.querySelectorAll('.gridSpace');
buttonEvents();
gridEvents();

const sizeText = document.querySelector('.sizing');
sizeText.textContent = `${gridSize} x ${gridSize}`;

function gridEvents(){
    allGrid.forEach((space) => {
        space.addEventListener('mouseover', () => {
            if(type == 'rainbow'){
                space.style.backgroundColor = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
            } else if (type == 'colours'){
                space.style.backgroundColor = color;
            } else if (type == 'eraser'){
                space.style.backgroundColor = 'rgb(230, 230, 230)';
            }
        });
    });
}

function createGrid(){
    for(let i = 0; i < gridSize; i++){
        const container = document.createElement('div');
        container.classList.add('column');
        grid.appendChild(container);
        for(let j = 0; j < gridSize; j++){
            const div = document.createElement('div');
            div.classList.add('gridSpace');
            container.appendChild(div);
            div.style.width = gridWidth/gridSize + 'px';
            div.style.height = gridWidth/gridSize + 'px';
        }
    }
}

function colorEventListeners(){
    allCol.forEach((clr) => {
        clr.addEventListener('click', () => {
            type = 'colours';
            color = clr.id;
            allCol.forEach((col) => col.classList.remove('colActive'));
            buttons.forEach((button) => button.classList.remove('active'));
            clr.classList.add('colActive');
            colorConverter();
        });
    });
}

function colorConverter(){
    switch(color){
        case 'red':
            color = "rgb(204, 0, 0)";
            break;
        case 'orange':
            color = "rgb(238, 156, 4)";
            break;
        case 'yellow':
            color = "rgb(238, 234, 4)";
            break;
        case 'darkGreen':
            color = "rgb(1, 129, 8)";
            break;
        case 'lightGreen':
            color = "rgb(114, 235, 110)";
            break;
        case 'lightBlue':
            color = "rgb(4, 238, 226)";
            break;
        case 'darkBlue':
            color = "rgb(15, 0, 219)";
            break;
        case 'purple':
            color = "rgb(144, 4, 238)";
            break;
        case 'pink':
            color = "rgb(219, 10, 219)";
    }
}

function buttonEvents(){
    const rainbow = document.querySelector('#rainbow');
    const clear = document.querySelector('#clear');
    const eraser = document.querySelector('#eraser');

    rainbow.addEventListener('click', () => {
        type = 'rainbow';
        buttons.forEach((button) => button.classList.remove('active'));
        allCol.forEach((col) => col.classList.remove('colActive'));
        rainbow.classList.add('active');
    });
    eraser.addEventListener('click', () => {
        type = 'eraser'
        buttons.forEach((button) => button.classList.remove('active'));
        allCol.forEach((col) => col.classList.remove('colActive'));
        eraser.classList.add('active');
    });
    clear.addEventListener('click', reset);
} 

function reset(){
    answer = prompt("How many squares do you want the grid to be wide? (minimum 10, maximum 100)");
    if(!isNaN(answer) && (answer >= 10 && answer <= 100)){
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
        gridSize = answer;
        createGrid();
        allGrid = document.querySelectorAll('.gridSpace');
        gridEvents();
        sizeText.textContent = `${gridSize} x ${gridSize}`;
    }
}

function random(min, max){
    return Math.floor(Math.random()*(max - min + 1) + min)
}
