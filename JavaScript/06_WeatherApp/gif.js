
const img = document.querySelector("div#img") //will use image background of div

function getGif(search){
  let searchWord = search;
  if(search == "Clear"){
    searchWord = "Sunny"
  }
      
  fetch("https://api.giphy.com/v1/gifs/translate?api_key=NlsdWV3r4s7I08VNHnH44MG2zFw2Szw8&s=" + searchWord + " weather", {mode: "cors"})
  .then(function(response){
    return response.json();
  })
  .then(function(response) {
    img.style.backgroundImage = "linear-gradient(rgba(0,255,255, 0.7), rgba(255, 0, 255, 0.7)),url(" + response.data.images.original.url + ")";
  })
  .catch(function(err){
    console.error("Uh oh! Seems there was an error with generating a GIF!")
    img.style.backgroundImage = "https://media2.giphy.com/media/KD4o8c4e6CY2A/giphy.gif?cid=3b9908fe290bd60ebd5e588acaae8d3f46353b5ed2b8ef8d&rid=giphy.gif&ct=g"
  })
}