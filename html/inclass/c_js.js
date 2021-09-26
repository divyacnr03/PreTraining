


function clickmeInvoked(){
    alert("Hellow world");
    console.log("hi there")
    document.getElementById("canada").innerHTML = "Hello India"
}


function renderStudentTable(){
    var students = [{
        name: 'sweta',
        class: 'mern'
    },
    {
        name: 'vinay',
        class: 'mern'
    },
    {
        name: 'vatsal',
        class: 'mern'
    }]

    // var tableRows = students.map(element => `<tr> <td>${element.name}</td> <td>${element.class}</td></tr>`)

    // document.getElementById("dynamicRendering").innerHTML = tableRows.join(" ")


    var resultTableRows = [];
    for(var i=0 ; i <students.length; i++){
        resultTableRows.push(`<tr>
        <td>${students[i].class}</td>
        <td>${students[i].class}</td>
                </tr>`)
    }

    
    document.getElementById("dynamicRendering").innerHTML = resultTableRows.join(' ')

}