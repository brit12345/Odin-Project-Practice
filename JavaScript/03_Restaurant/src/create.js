//header, main area: picture, title, description
import Img from './chef.png';

const Html = (() => {
  let body = document.querySelector("body")
  let container = document.createElement("div")
  let header = document.createElement("header");
  let main;
  let desc1 = document.createElement("p");
  let desc2 = document.createElement("p");
  let title = document.createElement("h1");
  let Icon;
  let exist = false;

  const createHeader = function() {
    for(let i = 0; i < 3; i++){
      let button = document.createElement("button");
      button.classList.add("tab");
      switch (i){
        case 0:
          button.textContent = "Home"
          button.classList.add("home");
          button.classList.add("active");
          
          break;
        case 1:
          button.textContent = "Menu"
          button.classList.add("menu");
          break;
        case 2:
          button.textContent = "Contact"
          button.classList.add("contact");
      }
 
      header.appendChild(button);
    }
    container.appendChild(header);
  }

  const createTitle = function() {
    title.textContent = "The Restaurant";
  }

  const createImg = function() {
    Icon = new Image();
    Icon.src = Img;
  }

  const createDesc = function() {
    desc1.textContent = "All of our menu items are inspired by human cuisine and have been created by our head chef, Human Chef, after studying authentic human cuisine in human school. Not only do we have fresh flown-in seafood from the northeast, but we also have a variety of handcrafted cocktails, wine, and beer to choose from."
    desc2.textContent = "Come dine with us & experience an authentic human meal in an intimate dining space. We look forward to serving you!";
  }

  const initPage = function() {
    createHeader();
    appendAll();
  }

  const createMain = function() {  
    main = document.createElement("section");
    main.setAttribute('id', 'Html')
    exist = true;
    createTitle();
    createImg();
    createDesc();
    main.appendChild(title)
    main.appendChild(Icon) //need to add source, also adding abcakground image
    main.appendChild(desc1)
    main.appendChild(desc2)
    container.classList.add('container');

    container.appendChild(main)

    appendAll();

  }
  
  const del = function() {
    container.removeChild(main);
    exist = false;
    console.log("del")
  }

  const appendAll = function() {
    body.appendChild(container)
  }

  const getExist = function() {
    return exist;
  }

  return {
    createMain,
    del,
    container,
    getExist,
    initPage
  }
})()

export default Html