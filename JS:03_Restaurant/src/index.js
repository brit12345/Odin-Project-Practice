import _ from 'lodash';
import Html from './create.js';
import './style.css';
import Menu from './menu.js';

import Contact from './contact.js';

//need buttons, and depending on which clicked, change variable?
let current = "Home";
Html.initPage();
updateCurrent();
events();


function updateCurrent() {
  console.log(current)
  if(current == "Home"){
    if(Menu.getExist()){
      Menu.del();
    }
    if(Contact.getExist()){
      Contact.del();
    }
    if(!Html.getExist()){ //if doesn't already exist
      Html.createMain();
    }

  } else if(current == "Menu") {
    if(Html.getExist()){
      Html.del();
    }
    if(Contact.getExist()){
      Contact.del();
    }
    if(!Menu.getExist()){
      Menu.createMain();
    }

  } else if(current == "Contact"){
    if(Menu.getExist()){
      Menu.del();
    }
    if(Html.getExist()){
      Html.del();
    }
    if(!Contact.getExist()){
      Contact.createMain();
    }

  }
}

function events() {
  const buttons = document.querySelectorAll("button.tab");
  console.log(buttons)
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {btn.classList.remove('active')})
      current = button.textContent;
      updateCurrent();

      button.classList.add('active');
    })
  })
}
