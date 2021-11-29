const body = document.querySelector('body');

createAndAddP();
createAndAddHeading3();
createContainer();
createAndAddHeading1();
createAndAddP2();

body.appendChild(container);



function createAndAddP(){
    const p = document.createElement('p');
    p.style.color = 'red';
    p.textContent = "Hey I'm red!";
    
    body.appendChild(p);
}

function createAndAddHeading3(){
    const heading3 = document.createElement('h3');
    heading3.style.color = 'blue';
    heading3.textContent = "I'm a blue h3!";
    
    body.appendChild(heading3);
}

function createContainer(){
    const container = document.createElement('div');
    container.style.border = 'solid';
    container.style.borderColor = 'black';
    container.style.backgroundColor = 'pink';
}

function createAndAddHeading1(){
    const heading1 = document.createElement('h1');
    heading1.textContent = "I'm in a div";
    container.appendChild(heading1);
}

function createAndAddP2(){
    const p2 = document.createElement('p');
    p2.textContent = "ME TOO!";
    container.appendChild(p2);
}