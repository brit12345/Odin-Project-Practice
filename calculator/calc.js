let curSel = null; //current selection (number)
let history = [];
let operator;
let display;

let curNum = null; //current number (combination of previous presses)

const histText = document.querySelector('#history');
const displayText = document.querySelector('#current-number');
const numBtns = document.querySelectorAll('.num');
const mathOp = document.querySelectorAll('.column .operators button');

buttonEvents();

function buttonEvents() {
    numBtns.forEach((button) => {
        button.addEventListener('click', updateNum);
    })

    mathOp.forEach((button) => operator = button.id); //empty curSel, add curNum to history and the operator
    
}
function operators(pastNum, newNum){
    switch(operator){
        case 'divide':
            return pastNum/newNum;
        case 'plus':
            return pastNum + newNum;
        case 'minus':
            return pastNum - newNum;
        case 'multiply':
            return pastNum * newNum;
    }
}

function updateNum(){ //if there is a current selection already, combine as strings. needs to set curSel as the btn id. empty the current selection.
    if(curSel != null){
        curNum = `${curSel}${this.id}`;
        curSel = curNum;
    } else {
        curSel = this.id;
    }

    //when operator pressed, empty curSel
}


/*current number, when operator pressed make it a past number by adding it to an array. clear empties the array. current total?
    need to make the operator button currently active change color 
    how to make it so when you press a number, it adds it when there's no operator selected?
    remember doing + with strings concatenates sometimes
    
    when operator is pressed, need a function too probably*/