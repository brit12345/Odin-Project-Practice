//Note: did not add code to stop errors when buttons are pressed before a search

// --------------------- //
//         Data          //
// --------------------- //
let weatherObj;

async function getData(city){
  let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cf323a21e80eb74076f9e698daea5ba2")
  let json = await response.json()
  return json;
}

function createWeatherObj(main, weather, wind, name){
  return {
    units: "Celsius",
    city: name,
    temp: {
      Maximum: toCFromK(main.temp_max), //default is Kelvin, change immediately to Celsius
      Minimum: toCFromK(main.temp_min),
      "Current Temperature": toCFromK(main.temp),
      "Feels Like": toCFromK(main.feels_like)
    },
    weather: weather[0].main,
    wind: wind.speed
   
  }
}

async function getDataAndGif(city){
  const response = await getData(city);
  weatherObj = createWeatherObj(response.main, response.weather, response.wind, response.name);
  getGif(weatherObj.weather); //default img
}

// --------------------- //
//         DOM           //
// --------------------- //
const search = document.querySelector("input")
const searchBtn = document.querySelector("button#search")
const unitsBtn = document.querySelector("button#units")

function getSearch(){
  return search.value;
}

searchBtn.addEventListener("click", () => {
  getDataAndGif(getSearch()).then(() => drawObj())
})


search.addEventListener("keydown", (event) => { //means pressing enter clicks button
  if(event.key == "Enter"){
    getDataAndGif(getSearch()).then(() => drawObj())
  }
})

unitsBtn.addEventListener("click",  () => {
  let func;
  if(weatherObj.units == "Celsius"){
    func = toF
  } else if(weatherObj.units == "Farenheit"){
    func = toC
  }
  unitBtnChange(weatherObj.units)
  changeUnits(weatherObj, func)
  drawObj()
  
})
function unitBtnChange(units){
  if(units == "Celsius") {
    unitsBtn.textContent = "Farenheit"
    weatherObj.units = "Farenheit"
  } else if(units == "Farenheit"){
    unitsBtn.textContent = "Celsius"
    weatherObj.units = "Celsius"
  }
}

function drawObj(){
  const container = document.querySelector("#info") //contains city info
  const city = document.querySelector("h2") //contains city name
  while(container.firstChild){ //remove all the children elements
    container.removeChild(container.firstChild);
  }
  let weatherType = document.createElement("h3")
  weatherType.textContent = weatherObj.weather
  weatherType.setAttribute("id", "weather")
  container.appendChild(weatherType)

  for(const prop in weatherObj.temp){
    let unit
    if(weatherObj.units == "Celsius"){
      unit = "°C"
    } else if(weatherObj.units == "Farenheit"){
      unit = "°F"
    }
    let p = document.createElement("p")
    city.textContent = weatherObj.city
    city.setAttribute("id", "city")
    p.textContent = `${prop}: ${Math.round(weatherObj.temp[prop] * 10) / 10}${unit}`
    p.classList.add("temp")

    container.appendChild(p)

  }

  let wind = document.createElement("p")
  wind.textContent = "Wind Speed: " + weatherObj.wind + "m/s"
  wind.setAttribute("id", "wind")
  container.appendChild(wind)
}

// --------------------- //
//    Unit Conversion    //
// --------------------- //
function toC(f){ //converts farenheit to celsius
  weatherObj.units = "Celsius"
  return (f - 32) * 5/9
}
function toF(c){ //converts celsius to farenheit
  weatherObj.units = "Farenheit"
  return (c * 9/5) + 32
}
function toCFromK(K){
  return K - 273.15
}
function changeUnits(obj, direction){ //obj to convert, in this case "weatherObj"
  for(const property in obj.temp){           //direction function (either "toC" or "toF"), units is "Celsius" or "Farenheit" (before change)
    obj.temp[property] = direction(obj.temp[property])
  }
}

