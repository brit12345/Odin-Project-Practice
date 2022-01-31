import Html from './create.js';


const Menu = (() => {
  let main;
  let items = require('./menu.json'); 
  let exist = false;

  const createList = function() { //http://www.fourwindsrestaurant.com.au/menu/
    for(let i = 0; i < items.list.length; i++){
      let list = document.createElement('ul')

      let listTitle = document.createElement('h2');
      listTitle.textContent = items.list[i][0];
      listTitle.classList.add("listTitle");

      for(let w = 1; w < items.list[i].length; w++){    
        let point = document.createElement('li');
        point.textContent = items.list[i][w]
        list.appendChild(point);

      }

      main.appendChild(listTitle)
      main.appendChild(list)
      
    }

  }

  const createTitle = function() {
    let title = document.createElement('h1');
    title.textContent = "Menu";
    main.appendChild(title);
  }

  const del = function() {
    Html.container.removeChild(main);
    exist = false;
  }

  const createMain = function() {
    main = document.createElement("section");
    main.setAttribute('id', 'Menu')
    Html.container.appendChild(main);
    createTitle()
    createList()
    exist = true;


  }

  const getExist = function() {
    return exist;
  }

  return {
    createMain,
    del,
    getExist
  }
})()

export default Menu