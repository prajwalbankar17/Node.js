import readline from "readline";
import fetch from "node-fetch";

const API_KEY = "a0398e53d2a9b91f28f5cf7fda46ed33";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getWeather = async (city) => {
  const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("city not found. Please check the city name.");
    }
    const weatherData = await response.json();
    console.log(weatherData);

    console.log('\nWeather Information:');
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}°C`);
    console.log(`Weather: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
  } catch (error) {
    console.log(error);
  }
};

const city = await rl.question("Enter a city name to get its weather:");
await getWeather(city);
rl.close();





// import readline from "readline";
// import fetch from "node-fetch";

// const API_KEY = "a0398e53d2a9b91f28f5cf7fda46ed33";
// const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const askQuestion = (query) =>
//   new Promise((resolve) => rl.question(query, resolve));

// const getWeather = async (city) => {
//   const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("city not found. Please check the city name.");
//     }
//     const weatherData = await response.json();
//     console.log("\nWeather Information:");
//     console.log(`City: ${weatherData.name}`);
//     console.log(`Temperature: ${weatherData.main.temp}°C`);
//     console.log(`Weather: ${weatherData.weather[0].description}`);
//     console.log(`Humidity: ${weatherData.main.humidity}%`);
//     console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// const city = await askQuestion("Enter a city name to get its weather: ");
// await getWeather(city);
// rl.close();
