async function fetchWeatherData() {
    const invalidApiUrl = "https://lalalo1212l-api.com/data";
    const validApiUrl = "https://api.open-meteo.com/v1/forecast?latitude=51.4982&longitude=31.2893&current=temperature_2m&timezone=Europe/Kiev";

    try {
        const response = await fetch(invalidApiUrl);

        if (!response.ok) {
            throw new Error(`Error on the first resourse: ${response.status}`);
        }

        const data = await response.json();
        processWeatherData(data);
    } catch (error) {
        console.log("Uses second resourse because:", error.message);
        try {

            const response = await fetch(validApiUrl);

            if (!response.ok) {
                throw new Error(`Error on the second resourse: ${response.status}`);
            }

            const data = await response.json();
            processWeatherData(data);
        } catch (MyError) {
            console.error("Unable to get any info:", MyError);
            throw new Error("Unable to get any info. Try again later.");
        }
    }
}

function processWeatherData(data) {
    const temperature = data.current.temperature_2m;
    console.log(`Temperature in Chernihiv is: ${temperature}°C`);
}

fetchWeatherData();
