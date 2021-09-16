var student = {
    name: "vikram",
    id: 123,
    department: {
        name: 'cse',
        hod: 'vinay',
        staffs: 30
    },
    classes: [{
        nameOfClass: 'Business',
        profName: "ronak"
    },
    {
        nameOfClass: 'French',
        profName: "Vinay"
    },
    {
        nameOfClass: 'Economics',
        profName: "Gagan"
    },
    ]
    // name of the class, prof name
}

// Print the entire classinformation
console.log(student.classes)

// Print first prof of Vikram ie ronak
console.log(student.classes[0].profName)


// Print all the prof of Vikram
for(var i=0; i < student.classes.length; i++){
    console.log(student.classes[i].profName)
}

console.log(student.classes.profName)
// prints undefined


