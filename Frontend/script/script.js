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
        console.log(myArray[i].toUpperCase())
    }

    myArray.forEach((item) => {
        console.log(item.toUpperCase())
    })
}