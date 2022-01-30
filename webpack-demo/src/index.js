import _ from 'lodash';
import myName from './myName.js';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');
 

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //add the image to our existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);
  console.log(Notes);

  return element;
}

function component2() {
  const element2 = document.createElement('div');

  //my functon from another file
  element2.innerHTML = myName('britney');

  return element2;
}

document.body.appendChild(component());
document.body.appendChild(component2());



