const body = document.querySelector('body');
let p, heading3, container, heading1, p2;
createAndAddP();
createAndAddHeading3();
createContainer();
createAndAddHeading1();
createAndAddP2();

body.appendChild(container);

method2();
method3(); //best method

parameters();

multiple();



function createAndAddP(){
    p = document.createElement('p');
    p.style.color = 'red';
    p.textContent = "Hey I'm red!";
    
    body.appendChild(p);
}

function createAndAddHeading3(){
    heading3 = document.createElement('h3');
    heading3.style.color = 'blue';
    heading3.textContent = "I'm a blue h3!";
    
    body.appendChild(heading3);
}

function createContainer(){
    container = document.createElement('div');
    container.style.border = 'solid';
    container.style.borderColor = 'black';
    container.style.backgroundColor = 'pink';
}

function createAndAddHeading1(){
    heading1 = document.createElement('h1');
    heading1.textContent = "I'm in a div";
    container.appendChild(heading1);
}

function createAndAddP2(){
    p2 = document.createElement('p');
    p2.textContent = "ME TOO!";
    container.appendChild(p2);
}

function method2(){
    const btn = document.querySelector('#btn');
    btn.onclick = () => alert('Hello World');
}

function method3(){
    const btn = document.querySelector('#btn2');
    btn.addEventListener('click', () => {
        alert("Hello World");
    });
}

function parameters(){
    const btn = document.querySelector('#btn3');
    btn.addEventListener('click', function (e) {
        e.target.style.background = 'blue';
    });
}

function multiple(){
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', function (e){
            e.target.style.background = 'yellow';
        });
    });
}