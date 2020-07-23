
// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b
// var a = +prompt("Enter a number one")
// var b = +prompt("Enter a number two")
// function power(a,b){
  
//    document.write(a+" raised to the power of "+b+" is: " +Math.pow(a,b));
// }
// power(a,b);


// 2. Any year is entered through the keyboard. Write a function to determine whether the year is a leap year or not
// var year = prompt("Enter a year that you want to find leap year!")
// function leapYear(year){
//    return (year%100 === 0) ? (year%400 === 0) : (year%4 === 0);
   
// }
// console.log(leapYear(year))


// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then 
// area of triangle is given by area = S(S − a)(S − b)(S − c) where, S = ( a + b + c ) / 2 
// Calculate area of triangle using 2 functions 
// var a = +prompt("Enter a number one")
// var b = +prompt("Enter a number two")
// var c = +prompt("Enter a number three")

// function find(a,b,c){
//    S = ( a + b + c ) / 2
//    document.write(S+"<br>");
// }
// find(a,b,c);

// function Area(){
//    find(a,b,c);
//    var area = S(S - a)(S - b)(S - c);
//    document.write(area);
// }
// Area();



// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions from mainFunction and display result in mainFunction.
// var a = +prompt("Enter a first subject number")
// var b = +prompt("Enter a second subject number")
// var c = +prompt("Enter a third subject number")
// function percentage(a,b,c){
//    var result = ((a+b+c)*100)/300;
//    document.write(result+"<br>");
// }

// function average(){
//    var Average =((a+b+c)/3);
//    document.write(Average);
// }
// function Mainfunction(){
//    percentage(a,b,c)
//    average();

// }
// Mainfunction();



//5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code for single character as of now. 
// function index(){
//    var character = prompt("Enter a character!")
//    var name = "I live in Karachi";
//    var n=name.split('');
//    document.write(n+"<br>")
//    for(var i=0; i<n.length; i++){
//       if(character == n[i]){
//          document.write(i);
//       }
//    }
// }
// index();



// 6. Write a function to delete all vowels from a sentence. Assume that the sentence is not more than 25 characters long.



// 7. Write a function with switch statement to count the number of occurrences of any two vowels in succession in a line of text. For example, in the sentence 
// “Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui. 
// function Vowel(){
//    var str = prompt();
//    var res = str.match(/[aeiou]{2}/g);
//    var c = res.length
//    document.write(c)
// }
// Vowel()






// 8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert and print this distance in meters, feet, inches and centimeters. 
// var distance = prompt("Enter a distance in km");
// function inMeter(){
// var meter=distance*1000;
// document.write("Meter: "+meter+"<br>");
// }
// function inFeet(){
//    var feet = distance* 3280.8;
//    document.write("Feet: "+feet+"<br>")
// }
// function inInches(){
//    var inche = distance*39370.1;
//    document.write("Inches: "+inche+"<br>");
// }
// function inCentimeter(){
//    var centimeter = distance*100000;
//    document.write("Centimeter: "+centimeter+"<br>");
// }
// function Main(){
//    inMeter();
//    inFeet();
//    inInches();
//    inCentimeter();
// }
// Main();



// 9. Write a program to calculate overtime pay of employees. Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. Assume that employees do not work for fractional part of an hour. 
// function pay(){
//    var basicPay=15000;
//    document.write("Basic Salary: "+basicPay+"<br>");
//    var overtime=prompt("Enter an overtime hour");
//    if(overtime>=40){
//       var a = 12*overtime;
//       document.write("Overtime: "+a);
//    }
//    else{
//       document.write("You can take overtime pay at the rate of Rs.12");
//    }
// }
// pay()

//10.  A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the keyboard in hundreds, find the total number of currency notes of each denomination the cashier will have to give to the withdrawer. 
// var amount= prompt("Enter a amount to withdraw")
// function note(){
//    var a = amount%100;
//    var c = amount-a;
//    var f = a-50;


//    var d= c/100;
//    document.write(d+" hundred notes"+"<br>");
 
//    if(a<50){
//       var e = a/10;
//       document.write(e+" ten notes"+"<br>");
//       if(a>=50){
//          document.write("1 fifty note"+"<br>");
        
//       }
//    }

//    else  if(a>=50){
//       document.write("1 fifty note"+"<br>");
//       if(a<50){
//          var e = a/10;
//          document.write(e+" ten notes"+"<br>");
//       }
//    }
   
//     if(f>=10){
//       var g=f/10;
//       document.write(g+" ten notes"+"<br>");
//    }
// }
// note();
