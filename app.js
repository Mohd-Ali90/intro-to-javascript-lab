console.log("Exercise-2")
console.log("--------------")
function isAdult(age){
if (age >= 18){
    return 'Adult'
}
else {
    return 'Minor'
}
}
console.log('Exercise 2 Result:', isAdult(21))

console.log("--------------")
console.log("Exercise-3")
console.log("--------------")
function isCharAVowel(char){
if (char==="a"||char==="i"||char==="e"||char==="o"||char==="u"){
    return true
}
else {
    return false
}
}
console.log('Exercise 3 Result:', isCharAVowel("a"))
console.log("--------------")
console.log("Exercise-4")
console.log("--------------")

function generateEmail(userName,domain){
return userName+"@"+domain
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"))
console.log("--------------")
console.log("Exercise-5")
console.log("--------------")
function greetUser (name, timeOfDay){
const greeting= ("Good "+timeOfDay + ","+" " + name+"!")
return greeting
}
console.log('Exercise 5 Result:', greetUser("Sam", "morning"))
console.log("--------------")
console.log("Exercise-6")
console.log("--------------")
function maxOfThree(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
     const largestNumber = num1
     return largestNumber
    }
    else{
         if (num2 > num1 && num2 > num3){
     const largestNumber = num2
     return largestNumber
    }
else{
    if (num3 > num1 && num3 > num2){
     const largestNumber = num3
     return largestNumber
    }  
}
}
}
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8))
console.log("--------------")
console.log("Exercise-7")
console.log("--------------")

function calculateTip(billAmount,tipPercentage){
    const tip= (billAmount * tipPercentage) / 100
    return tip
}
console.log('Exercise 7 Result:', calculateTip(50, 20));
console.log("--------------")
console.log("Exercise-8")
console.log("--------------")
function convertTemperature(degrees,unit){
    if (unit==="F"){
       const temp= (degrees-32) * (5/9)
    return temp
}
else{
    if(unit==="C"){
const temp= (degrees*(9/5)) + 32
    return temp
    }
}
}
console.log('Exercise 8 Result:', convertTemperature(32, "C"))
console.log("--------------")
console.log("Exercise-9")
console.log("--------------")

function basicCalculator(num1,num2,operation)
{
    if (operation==="subtract"){
        const result= num1 - num2
        return result
    }
    else if (operation==="add"){
        const result= num1 + num2
        return result
    }   
    else if (operation==="multiply"){
        const result= num1 * num2
        return result
    }  
    else {
        if (operation==="divide"){
        const result= num1 / num2
        return result
    } 
    }
    }
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"))