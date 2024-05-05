const apiKey = "70f4b6229b0c4f438b785731240505";
const baseUrl = "http://api.weatherapi.com/v1";

const button = document.querySelector('.button');
const input = document.querySelector('.input');

async function getWeather(city) {
    try {
        const response = await fetch(`${baseUrl}/current.json?key=${apiKey}&q=${city}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('city not found:', error);
    }
}

button.addEventListener('click', async () => {
    const cityName = input.value
    
    if (cityName === '') {
        alert('Please,enter a city name!');
        return;
    }

    try {
        const weatherData = await getWeather(cityName);
        console.log(weatherData);
    } catch (error) {
        console.log(error);
    }
});


function weatherLocation(data){
    const locationElement = document.querySelector('.location')
    locationElement.innerHTML=`
    <h2 class="country">${data.location.country}</h2>
    <h3 class="city-name">Baku</h3>`
}





