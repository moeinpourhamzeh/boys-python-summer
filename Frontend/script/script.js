function clickMe() {

    var a = 10
    var b = 20

    var average = (a + b) / 2
    alert(average)
}

function showMessage(message) {
    alert(message)
}

function myArrayCodes() {
    var myArray = ['ali', 'amir', 'homayoun']

    console.log(myArray)
    console.log(myArray[0])
    console.log(myArray[0].toUpperCase())

    for (var i = 0; i < myArray.length; i++) {
        console.log('For Loop ' + myArray[i].toUpperCase())
    }

    myArray.forEach((item) => {
        console.log('Foreach Loop ' + item.toUpperCase())
    })
}

// ================ OOP ========================================
class Student {
    firstName = ''
    lastName = ''
    age = 0
    constructor(firstName = '', lastName = '', age = 0) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

class Course {
    title = ''
    students = []
    constructor(title = '', students = []) {
        this.title = title
        this.students = students
    }
}

var ali = new Student('ALi', 'Alinezhad', 16)
var jafar = new Student('Jafar', 'Jafarnezhad', 20)
var amir = new Student('Amir', 'Amirzadeh', 18)

var myCourse = new Course('Python Class', [ali, jafar, amir])

function addNewStudent() {
    var firstName = '' + document.querySelector('#firstName').value
        // console.log(firstName)
    var lastName = '' + document.querySelector('#lastName').value
        // console.log(lastName)
    var age = parseInt(document.querySelector('#age').value)
        // console.log(age)

    var newStudent = new Student(firstName, lastName, age)

    myCourse.students.push(newStudent)
    console.log(myCourse)
}