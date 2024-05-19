// take input of 1 - 10, generate random num, sum of them two, take mod. if even = you win, else lose

var n = parseInt(prompt("Enter any random number between 1-10"));
if(n<1 || n>10){
    alert("Invalid selection!");
} else if(isNaN(n)){
    alert("Enter integer only!");
}

function isEven(n){
    document.write("The user num is:\n", n);
    let rand = Math.random();
    let floor = Math.floor(rand * 10)+1;
    document.write("\nThe random num is:",floor);
    let sum = n + floor;
    document.write("\nThe sum is:",sum);
    if(sum % 2 == 0){
    return true;
    }
}

if(isEven(n)==true){
    alert("You win!");
} else {
    alert("You lose!");
}
