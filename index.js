
// function returning value



function printName(){
    let firstName = "obi"
    return firstName
    var name = 'precious'
}

console.log(printName())

function functionName(parm1){
    //code 
}

function sumTwoNumbers(num1, num2){
    return num1 + num2
}

console.log(sumTwoNumbers(1,4))



const square =  (n) => {
    return n * n
}
console.log(square(7))

const rectangle = {
    length:20,
    width:40,

    getFullName: function(){
        return this.length
    }
}
console.log(rectangle.length, rectangle.width)


//function that takes other functions as a parameter 

const callback = (n) => {
  return n ** 2
}

function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000)

//functional programming 

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']

const car = ['Benz', 'Toyota', 'Camry', 'Honda', 'Lexus']


countries.forEach((element) => {console.log(element.toUpperCase())})