const input=document.querySelector(".input");
const btn=document.querySelector(".button");
const tem=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind-speed");
const image=document.querySelector(".weather-img");

async function Checkweather(city)
{
    const api_key ="829b4e2e9f42fe6b3e59d1671d600020";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    
    const weatherData=await fetch(`${url}`).then(response =>
        response.json());
        
        tem.innerHTML=`${Math.round(weatherData.main.temp-273.15)}°C`;
        description.innerHTML=`${weatherData.weather[0].description}`;
        humidity.innerHTML=`${weatherData.main.humidity}%`;
        wind.innerHTML=`${weatherData.wind.speed}km/h`;

        switch(weatherData.weather[0].main)
        {
            case 'Clouds':
                image.src="cloud.png";
                break;
                case 'Rain':
                image.src="rain.png";
                break;
                case 'Clear':
                image.src="clear.png";
                break;
                case 'Mist':
                image.src="mist.png";
                break;
                case 'Snow':
                image.src="snow.png";
                break;
        }

        console.log(weatherData);
}

btn.addEventListener('click',()=>{
    Checkweather(input.value);
});

