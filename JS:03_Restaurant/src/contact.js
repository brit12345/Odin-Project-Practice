import Html from "./create";

const Contact = (() => {
  let exist = false;
  let main;

  const createMain = function() {
    main = document.createElement('section');
    main.setAttribute('id', 'Contact')
    chef();
    manager();
    owner();

    Html.container.appendChild(main)
    exist = true;

  }

  const chef = function() {
    let person = document.createElement('address')
    let name = document.createElement('h2');
    name.setAttribute('id', 'name')
    name.textContent = "Human Chef";

    let job = document.createElement('p');
    job.setAttribute('id', 'job')
    job.textContent = "Chef"

    let number = document.createElement('p');
    number.setAttribute('id', 'phone')
    number.textContent = "0435 465 823"

    person.appendChild(name)
    person.appendChild(job)
    person.appendChild(number)

    person.setAttribute('id', 'first')
    main.appendChild(person)
  }

  const manager = function() {
    let person = document.createElement('address')
    let name = document.createElement('h2');
    name.setAttribute('id', 'name')
    name.textContent = "Bob Cheeseman";

    let job = document.createElement('p');
    job.setAttribute('id', 'job')
    job.textContent = "Manager"

    let number = document.createElement('p');
    number.setAttribute('id', 'phone')
    number.textContent = "0420 693 420"

    person.appendChild(name)
    person.appendChild(job)
    person.appendChild(number)

    main.appendChild(person)
  }
  const owner = function() {
    let person = document.createElement('address')
    let name = document.createElement('h2');
    name.setAttribute('id', 'name')
    name.textContent = "Mr Money";

    let job = document.createElement('p');
    job.setAttribute('id', 'job')
    job.textContent = "Owner/Founder"

    let number = document.createElement('p');
    number.setAttribute('id', 'phone')
    number.textContent = "04660 666 666"

    person.appendChild(name)
    person.appendChild(job)
    person.appendChild(number)

    main.appendChild(person)
  }

  const del = function() {
    Html.container.removeChild(main);
    exist = false;
  }

  const getExist = function() {
    return exist;
  }

  return {
    getExist,
    createMain,
    del
  }
})()

export default Contact