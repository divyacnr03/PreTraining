var todayWeather = {
    "coord": {
      "lon": -121.95,
      "lat": 37.35
    },
    "weather": [
      {
        "id": 803,
        "main": "Rains",
        "description": "heavy clouds",
        "icon": "03d"
      },
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
      "all": 40,
      // "moreInfo" : {type :'clear', probility : '80%'}
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



//   In our scenario , we want to pull out the wind speed 
// console.log(todayWeather.wind.speed)



//   In our scenario , we want to pull out weather info second item
// console.log(todayWeather.weather[1])


//   In our scenario , we want to pull out weather info of only the id 803
for(var i= 0; i < todayWeather.weather.length; i++){
  if(todayWeather.weather[i].id === 803){
    // console.log(todayWeather.weather[i])
  }
}


// console.log(todayWeather.weather[1].id === 803)


// Add clouds to add a object {type :'clear', probility : 80%} within the key moreInfo
//     "clouds": {
//   "all": 40,
//   "moreInfor" : {type :'clear', probility : 80%}

// },

var moreInfo = {type :'clear', probility : '80%'};


todayWeather.clouds['moreInfo'] = {type :'clear', probility : '80%'};

console.log(todayWeather)