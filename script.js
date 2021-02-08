// date
let now = new Date();

let time = document.querySelector("h3")

let date = now.getDate()
let years = now.getFullYear()

let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let day = days[now.getDay()]

let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let month = months[now.getMonth()]

time.innerHTML = "Today's date is "+`${day}, ${month} ${date}, ${years}`

//temperature
function convertToFarenheit(event,){
  event.preventDefault()
  let temperatureElement = document.querySelector(".temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature * 1.8)+ 32)
}

function convertToCelsius (event){
  event.preventDefault()
  let temperatureElement = document.querySelector(".temperature");
  let temperature = temperatureElement.innerHTML;
  temperatureElement.innerHTML = Math.round((temperature -32) * 0.5556)
}
let farenheitLink = document.querySelector(".faren")
farenheitLink.addEventListener("click", convertToFarenheit)


let celsiusLink = document.querySelector(".celsi")
celsiusLink.addEventListener("click", convertToCelsius)

//search
function searchWeather(event){
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  console.log(searchInput.value);
  let h2 = document.querySelector ("h2");
  h2.innerHTML = searchInput.value;

let city = searchInput.value
let apiKey = "a0c13833abc217a0181faa947d5ff7c5"
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?"

function showTemp (response){
  console.log (response.data.main.temp)
  let change = document.querySelector(".temperature")
  change.innerHTML = response.data.main.temp
}
axios.get(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`).then (showTemp)
}
let form = document.querySelector (".form-example");

form.addEventListener("submit",searchWeather);

// current location (MUST FIX LATER)
let apiKey = "a0c13833abc217a0181faa947d5ff7c5";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

function showPosition(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;

axios.get(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}`).then(showTemp);


 // function showTemp (response){
  //console.log (response.data.main.temp)
  // change = document.querySelector(".temperature")
  //change.innerHTML = response.data.main.temp
//}
}

navigator.geolocation.getCurrentPosition(showPosition)

let current = document.querySelector ('#current')
current.addEventListener("click",showPosition)

