function showweatherDetails(event) {
      event.preventDefault();
 const lat = document.getElementById('latitude').value;
    const lon = document.getElementById('longitude').value;
    const apiKey = '74fdce054495b0aaa902f9ecbf417911'; // Your actual API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
 
        fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather at Latitude ${lat} and Longitude ${lon}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })

        .catch(error => {
          console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
    }

     document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );