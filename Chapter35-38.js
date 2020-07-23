


// Write a function that displays current date & time in your browser. 
// function dateTime(){
//    var date = new Date();
//    document.write(date);
// }
// dateTime();



// Write a function that takes first & last name and then it greets the user using his full name
// function greet(){
//    var firstName = prompt("Enter a first name");
//    var lastName = prompt("Enter a last name");
//    document.write("Hello "+firstName.concat(" "+lastName));

// }
// greet();



// Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
// var a = +prompt("Enter a first name");
// var b = +prompt("Enter a last name");
// function add(a,b){

//    return a+b;
// }
// var c=add(a,b);
// document.write(c);



// Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser. 
// var num1 = +prompt("Enter first number");
// var operator= prompt("Enter an operator");
// var num2 = +prompt("Enter Second number");

// function calculator(num1,operator,num2){
//    if(operator == "+"){
//       return num1 + num2;
//    }
//    else if(operator == "-"){
//       return num1 - num2;
//    }
// }
// var a = calculator(num1,operator,num2);
// document.write(a);



// Write a function that squares its argument. 
// var num = prompt("Enter a number");
// function squares(num){
//    var a = num*num;
//    return a;
// }
// var squ = squares(num);
// document.write("Square of a number: "+squ);



// Write a function that computes factorial of a number. 
// var num = prompt("Enter a number");
// function factorial(){
//   var fact=1;
//    for(var i=1; i<=num; i++){
//       var fact = fact*i;
//    }
//    document.write("Factorial: "+fact);
// }
// factorial();



// Write a function that take start and end number as inputs & display counting in your browser. 
// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter Second number");
// function counting(){
//    for(var i=num1; i<=num2; i++){
//       document.write(i+"<br>");
//    }
// }
// counting();



// Write a nested function that computes hypotenuse of a right angle triangle.  Hypotenuse2 = Base2 + Perpendicular2 
// Take base and perpendicular as inputs. Outer function : calculateHypotenuse() Inner function: calculateSquare() 
// var base =+prompt("enter your base ")
// var pre =+prompt("enter your prependicular")

// function outer(){
//     var hypoo=base*base + pre*pre
//     inner()
//     function inner(){
//         var result=Math.sqrt(hypoo)
//         document.write("<br>"+ result)
//     }
// }
// outer()



// Write a function that calculates the area of a rectangle.      
// A = width * height     
// Pass width and height in following manner: 
// i. Arguments as value 
// ii. Arguments as variables 



// i. Arguments as value
// var width;
// var height;
// function AreaOfRectangle(width = 10, height = 5){
//    var A = width* height;
//    return A;
// }
// var total = AreaOfRectangle(width,height);
// document.write("Area of Rectangle"+total);


// ii. Arguments as variables 
// var width = prompt("Enter a width");
// var height = prompt("Enter a height");
// function AreaOfRectangle(width, height){
//    var A = width* height;
//    return A;
// }
// var total = AreaOfRectangle(width,height);
// document.write("Area of Rectangle: "+total);




// Write a JavaScript function that checks whether a passed string is palindrome or not?   
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. 

// var word = prompt("Enter a word");
// var check="";
// function palindrome(){
//    for(var i=word.length-1; i>=0; i--){
//       check= check + word[i];
//    }
//    if(word == check){
//       document.write(word+" is a palindrome");
//    }
//    else{
//       document.write(word+" is not a palindrome");
//    }
// }
// palindrome();




// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  
// EXAMPLE STRING : 'the quick brown fox'  
// EXPECTED OUTPUT : 'The Quick Brown Fox' 
// var str =  prompt("Enter a string");
// var s = str.split('');
// document.write(s+"<br>");
// var letter = s[0].toUpperCase();
// document.write(letter);
// function upperCase(){
//    for(var i=1; i<str.length; i++){
//       if(s[i] === ' '){
//          s[i+1] = s[i+1].toUpperCase();
//          // document.write()
//       }
//    }
//    for(var i=1; i<str.length; i++){
//       document.write(s[i]);
//    }
// } 
// upperCase();




// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'
// var str = "Web Development Tutorial";
// var splitStr = str.split(' ');
// document.write(splitStr+"<br>");
// var word1 = splitStr[0].length;
// var word2 = splitStr[1].length;
// var word3 = splitStr[2].length;
// function greater(){
//    if(word1 >= word2){
//       document.write(splitStr[0]);
//    }
//    else if(word2 >= word3){
//       document.write(splitStr[1]);
//    }
//    else{
//       document.write(splitStr[2]);
//    }
// }
// greater();




// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'
// var str = "JSResourceS.com";
// var letter = "o";
// var count=0;

// var strSplit = str.split('')
// function count1(str,letter){

// for (var i=0; i < 15; i++) {
//     if (strSplit[i] === letter) {
//         count = count + 1;
//     }
// }
//  return count;
// }
// var result = count1(str,letter);
// document.write(result);



// Create 2 functions that calculate properties of a circle, using the definitions here. 
// Create a function called calcCircumference: 
// • Pass the radius to the function. 
// • Calculate the circumference based on the radius, and output "The circumference is NN". 

// Create a function called calcArea: 
// • Pass the radius to the function. 
// • Calculate the area based on the radius, and output "The area is NN". 
 
// Circumference of circle    =     2πr 
// Area of circle       =     πr2 
 
// var radius=+prompt("Enter a number");
// function calcCircumference(radius){
//    var Circumferenceofcircle =2*3.142*radius;
//    document.write("Circumference of circle: "+Circumferenceofcircle+"<br>");
// }
// function calcArea(radius){
//    var Areaofcircle =3.142*radius*radius;
//    document.write("Area of circle: "+Areaofcircle);
// }
// calcCircumference(radius);
// calcArea(radius);












