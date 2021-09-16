var student = {
    name : "vikram",
    id : 123,
    classes : ['bussiness', 'economics', 'French'],
    department : {
        name : 'cse',
        hod : 'vinay',
        staffs : 30
    }
}



// accessing the department details 


// print the numbe of staffs in the dept that vikram is associated to 
console.log(student.department.staffs)
console.log(student.department["staffs"])
console.log(student["department"]["staffs"])
console.log(student["department"].staffs)






