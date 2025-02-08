# Weather App Using ReactJs 

This is a weather application built using React that provides real-time weather information for any city. The app uses a weather API to fetch data and displays key weather metrics, such as the current temperature, humidity, and weather conditions. It also provides dynamic images and descriptions based on the weather's temperature and humidity.

# Features

Search for any city: Users can search for any city to get weather information.
Real-time Weather Information: Displays the current temperature, minimum and maximum temperatures, humidity, and the "feels like" temperature.
Weather Details: Provides details on weather conditions such as "Clear", "Rain", "Cloudy", etc.
Dynamic Images: The app changes the displayed weather image based on temperature and humidity to give a better visual representation of the current conditions.
Responsive Design: The app is designed to work seamlessly on both desktop and mobile devices.


# Technologies Used

React: For building the user interface of the app.
OpenWeatherMap API (or any other weather API): To fetch weather data based on the user's input city.
JavaScript (ES6): For writing the core functionality.
CSS: For styling and making the app responsive.
React Hooks (useState, useEffect): For managing the state and side effects in the application.

How to Use : 
Clone the repository:


git clone <https://github.com/Mohit-Rajak/WeatherApp-.git>
Install dependencies:

Navigate to the project directory and install the necessary dependencies:


cd weather-app
npm install
Set up your API key:

Get your API key from OpenWeatherMap or another weather API provider.
Replace the placeholder API_KEY in the API request URL with your actual key.
Run the app:

After installing the dependencies, run the following command to start the application:


npm start
This will start the app in your default browser, typically at  http://localhost:5173/.


# App Functionality

1. City Search
The user can input any city name into the search bar to get weather details for that specific city. The weather data is fetched from the API and displayed on the screen.

2. Weather Information Display
Once the city is searched, the app fetches the following information:

Current Temperature: The temperature in Celsius or Fahrenheit (depending on the user's settings).
Minimum and Maximum Temperature: The minimum and maximum temperatures expected for the day.
Humidity: The percentage of moisture in the air.
Feels Like: The "feels like" temperature, which accounts for wind and humidity.

3. Dynamic Image Changes
The app changes the background image based on the weather conditions. For example:
If the temperature is hot (above a certain threshold), a sunny or clear sky image is displayed.
If it's raining, a rain-themed image is shown.
The image also changes with humidity levels, with cloudier images for higher humidity and clearer ones for lower humidity.

4. Responsive Design
The app adjusts its layout to fit any screen size, ensuring a seamless experience on mobile, tablet, or desktop devices.

Future Enhancements
Unit Selection: Add functionality for users to switch between temperature units (Celsius/Fahrenheit).
Multiple Cities: Enable the option to compare the weather of multiple cities.
Forecast: Implement a 5-day weather forecast feature.
Error Handling: Improve error handling for cases such as invalid city names or network errors.
Dark Mode: Add an option for dark mode to improve user experience at night.
Contributing
If you'd like to contribute to this project, feel free to fork the repository, create a new branch, make your changes, and submit a pull request.

License
This project is open-source and available under the MIT License.


Thank You for Check Out Created By Mohit Rajak 
