import _ from 'lodash';
import myName from './myName.js';

function component() {
  const element = document.createElement('div');
 

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

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



