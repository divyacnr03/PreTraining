var student = {
    name : "vikram",
    id : 123
}


// dot opertaor
console.log("Value of of name is " + student.name)
console.log("Value of of id is " + student.id)

var abc = student.name;
console.log("value of abc", abc)

console.log("addition on id", student.id + 1)


// using []

console.log("Value of of name is " + student["name"])
console.log("Value of of id is " + student["id"])

var abc = student.name;
console.log("value of abc", abc)

console.log("addition on id", student["id"] + 1)


// varibles with []
var key1 = "name";
var key2 = "id"
console.log("Value of of name is " + student[key1])
console.log("Value of of id is " + student[key2])

var abc = student.name;
console.log("value of abc", abc)

console.log("addition on id", student[key2] + 1)




// varible with . - NOT POSSIBLE




// assigning values to a key

var student2 = {
    name: "vikram",
    id: 123,
    // trying to add dept : 'cse'
}
student2['dept'] = 'cse';
student2.deptSecond = 'ece';
var keyName = "deptThird";
student2[keyName] = 'it'
// console.log(student2)



// updating existing value of a particular key

var student3 = {
    name: "vikram",
    id: 123,
    // trying to update the id to 124
}

student3.id += 1;
student3["name"] = "Sweta";
console.log(student3)



// ============================================================

var todayWeather = {
    "temp": 68.34,
    "pressure": 1014,
    "humidity": 73,
    "temp_min": 63,
    "temp_max": 72,
    "isGoingtoRain": false
}


// Find the avgerage temperature
var avgTemp = (todayWeather.temp_min + todayWeather.temp_max) / 2;
console.log("the avg temps is ", avgTemp)




// update isGongtoRain to the opposite whats currently present

todayWeather["isGoingtoRain"] = !todayWeather.isGoingtoRain;

console.log(todayWeather)