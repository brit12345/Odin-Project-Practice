let gridSize = 16;
let gridWidth = 600;
let type = 'rainbow'
let color;
let alpha = 0;

const grid = document.querySelector('.grid');
const buttons = document.querySelectorAll('button');
const allCol = document.querySelectorAll('.colGridSpace');
const slider = document.querySelector('#myRange');
createGrid();
colorEventListeners();
let allGrid = document.querySelectorAll('.gridSpace');
buttonEvents();
gridEvents();

const sizeText = document.querySelector('.sizing');
sizeText.textContent = `${gridSize} x ${gridSize}`;

function gridEvents(){
    allGrid.forEach((space) => { 
        space.alphAtt = 1;
    });
    allGrid.forEach((space) => {
        space.addEventListener('mouseover', () => {
            if(alpha == 0){
                space.alphAtt = 1;
            }
            if(type == 'rainbow'){
                if(space.alphAtt > 0){
                    space.alphAtt -= alpha;
                }
                space.style.backgroundColor = `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, ${space.alphAtt})`;
            } else if (type == 'colours'){
                let temp;
                if(space.alphAtt > 0){
                    space.alphAtt -= alpha;
                    temp = colorConverter(space.alphAtt);
                }
                space.style.backgroundColor = temp;
                
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
            buttons.forEach((button) => {
                if(button.id != 'transparent')
                {button.classList.remove('active')}
            });
            clr.classList.add('colActive');
            
        });
    });
}

function colorConverter(space){
    switch(color){
        case 'red':
            return `rgba(204, 0, 0, ${space})`;
        case 'orange':
            return `rgba(238, 156, 4, ${space})`;
        case 'yellow':
            return `rgba(238, 234, 4, ${space})`;
        case 'darkGreen':
            return `rgba(1, 129, 8, ${space})`;
        case 'lightGreen':
            return `rgba(114, 235, 110, ${space})`;
        case 'lightBlue':
            return `rgba(4, 238, 226, ${space})`;
        case 'darkBlue':
            return `rgba(15, 0, 219, ${space})`;
        case 'purple':
            return `rgba(144, 4, 238, ${space})`;
        case 'pink':
            return `rgba(219, 10, 219, ${space})`;
    }

}

function buttonEvents(){
    const rainbow = document.querySelector('#rainbow');
    const clear = document.querySelector('#clear');
    const eraser = document.querySelector('#eraser');
    const transparent = document.querySelector('#transparent');

    rainbow.addEventListener('click', () => {
        type = 'rainbow';
        buttons.forEach((button) => {
            if(button.id != 'transparent'){
                button.classList.remove('active')
            }
        });
        allCol.forEach((col) => col.classList.remove('colActive'));
        rainbow.classList.add('active');
    });
    eraser.addEventListener('click', () => {
        type = 'eraser'
        buttons.forEach((button) => button.classList.remove('active'));
        allCol.forEach((col) => col.classList.remove('colActive'));
        allGrid.forEach((space) => space.alphAtt = 1);
        eraser.classList.add('active');
    });
    transparent.addEventListener('click', () => {
        transparent.classList.toggle('active');
        if(alpha == 0.1){
            alpha = 0;
        } else if(alpha == 0){
            alpha = 0.1;
        }
    })
    clear.addEventListener('click', reset);
    //reset if slider changes
    slider.oninput = reset;

} 

function reset(){
    answer = slider.value;
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
