const  inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


 async function checkWeather(city){
    const api_key = "52bc77f434f0708a1c5022c4d2cde7f2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const  weather_data = await fetch(`${url}`).then(response=>
        response.json());


        if(weather_data.cod==='404'){
            location_not_found.style.display = "flex";
            weather_body.style.display = "none"
            
            return;
        }

        location_not_found.style.display = "none";
        weather_body.style.display = "flex";

        temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;

        description.innerHTML = `${weather_data.weather[0].
        description}`;

        humidity.innerHTML = `${weather_data.main.humidity}%`;

        wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

        switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_data.src="weather-app-img/clouds.png";
                break;

            case 'Clear':
                weather_data.src="weather-app-img/clear.png";
                break;

            case 'Rain':
                weather_data.src="weather-app-img/rain.png";
                break;
                
            case 'Mist':
                weather_data.src="weather-app-img/mist.png";
                break;
                
            case 'Snow':
                weather_data.src="weather-app-img/snow.png";
                break;    
        }


}



searchbtn.addEventListener('click',()=>{
    checkWeather(inputbox.value)
})