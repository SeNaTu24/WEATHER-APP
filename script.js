const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const result = document.getElementById("result");

// sample api key
const apiKey = "22ba7299871a459985c171051251108";
const baseUrl = "http://api.weatherapi.com/v1/current.json";

sendBtn.addEventListener("click", () => {
    const city = userInput.value.trim();
    if (city === "") {
        result.textContent = "Please enter a city name.";
        return;
    }

    // 1. Build full URL
    const url = `${baseUrl}?key=${apiKey}&q=${city}&aqi=no`;

    // 2. Fetch data
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json(); // 3. Convert to JSON
        })
        .then((data) => {
            // 4. Display something
            result.textContent = `Weather in ${data.location.name}: ${data.current.temp_c}°C, ${data.current.condition.text}`;
        })
        .catch((error) => {
            // 5. Handle errors
            result.textContent = error.message;
        });
});
