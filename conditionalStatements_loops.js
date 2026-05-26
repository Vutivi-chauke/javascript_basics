//Temperature check 

temp = 54

if(temp < 0) {
    console.log("its freezing.")
}
if(temp > 0 && temp < 14) {
    console.log("its cold.")
}
if(temp > 16 && temp < 25) {
    console.log("its mid.")
}
if(temp > 25) {
    console.log("its warm.")
}

//Divisibility check

number = 7

if (number % 2 == 0 && number % 3 == 0) {
    console.log("Divisible by both.")
    
}else if (number % 3 ==0 ) {
    console.log("Divisible by 3.")
}else if (number % 2 ==0 ) {
    console.log("Divisible by 2.")
}else {
    console.log("Not divisible by 2 or 3.")
}
