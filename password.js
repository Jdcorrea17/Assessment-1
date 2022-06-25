let password = "ferrari123"

if(password.length >= 10){
    console.log("Yes has 10 or more characters")
} else if(password.length < 10) {
    console.log("No has less than 10 characters")
}

let containsLetter = password.includes('a')
    console.log(containsLetter)
let containsNumber = password.includes('1')
    console.log(containsNumber)
let containsSpace = password.includes(' ')
console.log(containsSpace)
let constainsEasyPass = password.includes('password', 'letmein')
console.log(constainsEasyPass)
let constainsUpperCaseLetters = password.includes('A-Z')
console.log(constainsUpperCaseLetters)

if(password.length > 20){
    console.log("Maximum length hit")
} else if(password.length < 20){
    console.log("Under maximum length")
}