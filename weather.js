//Complete the Weather API Backend part using openweathermap api
const apikey = '59f43a9525fd83b327d1fde400282b8c';

document.getElementsByClassName("search-box")[0].addEventListener("keyup", ()=>{
    // variables
    let cityname = document.getElementsByClassName("city")[0];
    let temprature = document.getElementsByClassName("temp")[0];
    let abt = document.getElementsByClassName("weather")[0];
    let highlow = document.getElementsByClassName("hi-low")[0];
    // event.preventDefault();
    if (event.keyCode === 13) {
        const url =`http://api.openweathermap.org/data/2.5/weather?q=${document.getElementsByClassName("search-box")[0].value}&units=metric&appid=${apikey}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            cityname.innerHTML=`${data.name}, ${data.sys.country}`;
            temprature.innerHTML=`${(data.main.temp).toFixed(0)}°c`;
            abt.innerHTML=data.weather[0].main;
            highlow.innerHTML=`${(data.main.temp_min).toFixed(0)}°c / ${(data.main.temp_max).toFixed(0)}°c`;
        });
    }
})  