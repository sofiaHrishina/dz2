function fetchWeatherData() {
    const latitude = 51.4982;
    const longitude = 31.2893;
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m&timezone=Europe/Kiev`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            processWeatherData(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function processWeatherData(data) {
    const temperature = data.current.temperature_2m;
    console.log(`Temperature in Chernihiv is: ${temperature}°C`);
}
fetchWeatherData();

