
var albums = [
    {
        "name": "Bleach",
        "artist": "Nirvana",
        "unitsSold": 1700000
    },
    {
        "name": "Nevermind",
        "artist": "Nirvana",
        "unitsSold": 30000000
    },
    {
        "name": "In Utero",
        "artist": "Nirvana",
        "unitsSold": 15000000
    },
    {
        "name": "Ten",
        "artist": "Pearl Jam",
        "unitsSold": 10000000
    },
    {
        "name": "Vs",
        "artist": "Pearl Jam",
        "unitsSold": 6100000
    },
    {
        "name": "Vitalogy",
        "artist": "Pearl Jam",
        "unitsSold": 4770000
    }
]


console.log(albums)

// Code to print all the names of the albums
// Bleach, Nervermind, In Utero, Ten , Vs, Vitalogy
for (var i = 0; i < albums.length; i++) {
    console.log(albums[i].name);
    // console.log(albums[i]["name"]);
}



// Summ of all the unitSold

var result = 0;
for (var i = 0; i < albums.length; i++) {
    result += albums[i].unitsSold;
}
console.log(result)


  // Print all the ablums by artist "Pearl Jam" ie. Ten Vs, Vitalogy

for (var i=0; i<albums.length; i++){
	if(albums[i].artist == "Pearl Jam")
	{
		console.log(albums[i].name)
	}
}
