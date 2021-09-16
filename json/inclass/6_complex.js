var todayWeather = {
    "coord": {
      "lon": -121.95,
      "lat": 37.35
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 68.34,
      "pressure": 1014,
      "humidity": 73,
      "temp_min": 63,
      "temp_max": 72
    },
    "visibility": 16093,
    "wind": {
      "speed": 3.36
    },
    "clouds": {
      "all": 40
    },
    "dt": 1566664878,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0106,
      "country": "US",
      "sunrise": 1566653501,
      "sunset": 1566701346
    },
    "timezone": -25200,
    "id": 0,
    "name": "Santa Clara",
    "cod": 200
  }



//   In our scenario , we want to pull out the wind speed part of the JSON response. Here’s the dot notation you use: