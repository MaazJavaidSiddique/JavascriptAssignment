// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city=prompt("enter city name");
// if(city==="karachi"){
//     alert("Welcome to the user to the city of light");
// }



// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender=prompt("enter your gender");
// if(gender==="male"){
//     alert("Good Morning Sir");
// }
// else{
//     alert("Good Morning Ma'am");
// }




// 3. Write a program to take input color of road traffic signal from the user & show the message

// var col=prompt("enter color ");
// if(col==="Red"){
//     alert("Must Stop");
// }
// else if(col==="Yellow"){
//     alert("Ready to move");
// }
// else{
//     alert("Move now");
// }



// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres,show the message “Please refill the fuel in your car”


// var fuel=prompt("enter your remaining fuel in car");
// if(fuel <= 0.25){
//     alert("“Please refill the fuel in your car”");
// }


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// dialog box appear



// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// dialog box not appear


// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// dialog box not appear




// if (c === 13){
// alert("condition 2 is true");
// }
// dialog box not appear





// if (++c < 14){
// alert("condition 3 is true");
// }
// dialog box appear




// if(c === 14){
// alert("condition 4 is true");
// }
// dialog box not appear

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// dialog box  appear

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// dialog box  appear


// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    
// dialog box  appear


// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade


// var mark1=prompt("enter your subject1 obtain number")
// var mark2=prompt("enter your subject2 obtain number")
// var mark3=prompt("enter your subject3 obtain number")


// var mark4=(+mark1)+(+mark2)+(+mark3);
// var per=((mark4/300)*100);


// if(per >= 80)
//     {
//         var grade="Grade A";
//         var mark="Excellent"
//     }
//     else if(per >= 70)
//     {
//         var grade=("Grade B");
//         var mark="good"
//     }
//     else if(per >= 60)
//     {
//         var grade="Grade C";
//         var mark="need improvement"
//     }
//     else
//     {
//         var grade="Grade F";
//         var mark="sorry"

//     }

//     document.write("MARKS SHEET")

//     document.write("total marks 300")
//     document.write("Obtain number  "+mark4)
//     document.write("persentage "+per+"%")
//     document.write("grade "+grade)
//     document.write("remarks "+mark)

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var a=5;
// var no=prompt("to guess the secret number.");
// var no1=no+1;

// if(no===5){
//     alert("“Bingo! Correct answer”.")
// }
// else if(no===4 & no===6){
//     alert("“Close enough to the correct answer”.")
// }


// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.


// var digit=prompt("enter your no");
// if(digit%3==0){
//     alert("number is divisible by 3")
// }


// 9. Write a program that checks whether the given input is an even number or an odd number.

//  var digit=prompt("enter your no");
// if(digit%2==0){
//     alert("your digit is even")
// }
// else{
//     alert("your digit is odd")

// }

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//  var temp=prompt("enter your temp");
// if(temp >= 40){
//     alert(" “It is too hot outside.”")
// }
// else if(temp >= 30){
//     alert("The Weather today is Normal.”")

// }else if(temp >= 30){
//     alert("“Today’s Weather is cool.”")

// }
// else{
//     alert(" “OMG! Today’s weather is so Cool.”")
// }



// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var val1=prompt("enter your frst no")
// var val2=prompt("enter your second no")
// var sgn=prompt("enter your operator")
// var val3;

// if(sgn==="+"){
//     val3=(+val1)+(val2)
//     alert=(val3)
// }
// else if(sgn==="-"){
//     val3=val1-val2
//     alert=(val3)
// }
// else if(sgn==="*"){
//     val3=val1*val2
//     alert=(val3)
// }
// else if(sgn==="/"){
//     val3=val1/val2
//     alert=(val3)
// }
// else if(sgn==="%"){
//     val3=val1%val2
//     alert=(val3)
// }