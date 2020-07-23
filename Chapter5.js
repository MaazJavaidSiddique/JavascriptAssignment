// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
 
// var a=+prompt("Enter a First value");
// var b=+prompt("Enter a Second value");
// var c = a + b;
// document.write("Sum of "+a+" and "+b+" is "+c);







// 2. Repeat task1 for subtraction, multiplication, division & modulus. 
// var a=+prompt("Enter a First value");
// var b=+prompt("Enter a Second value");
// var c = a - b;
// document.write("Sum of "+a+" and "+b+" is "+c);

// var a=+prompt("Enter a First value");
// var b=+prompt("Enter a Second value");
// var c = a * b;
// document.write("Sum of "+a+" and "+b+" is "+c);

// var a=+prompt("Enter a First value");
// var b=+prompt("Enter a Second value");
// var c = a / b;
// document.write("Sum of "+a+" and "+b+" is "+c);






// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number. 
// d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable. 
// h. Show the value of variable in your browser like “Value 
// i. Decrement the variable. 
// j. Show the value of variable in your browser like “Value after decrement is: 12”. 
// k. Show the remainder after dividing the variable’s value by 3.  
// l. Output : “The remainder is : 0”. 

// var a;
// document.write("Value after variable declaration is undefined"+"<br>");
// a=5;
// document.write("Initial value: 5"+"<br>");
// a++;
// document.write("Value after increment is: "+a+"<br>");
// a=a+7;
// document.write("Value after addition is: "+a+"<br>");
// a--;
// document.write("Value after decrement is: "+a+"<br>");
// a=a%3;
// document.write("The remainder is: "+a+"<br>");






// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
// var ticketPrice=600;
// ticketPrice=ticketPrice*5;
// document.write("Total cost to buy 5 tickets to a movie is "+ticketPrice+"PKR")







// 5. Write a script to display multiplication table of any number in your browser.
// var a=+prompt("Enter a table number");
// document.write("Table of "+a+"<br>");
// for(var i=1; i<=10; i++){
//    document.write(a+"x"+i+"="+a*i+"<br>");
// }







// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 
// var celsius=25;
// var fahrenhiet=70;
// celsius=(fahrenhiet-32)*5/9;
// fahrenhiet=(celsius*9/5)+32;
// document.write("25oC is "+celsius+"<br>");
// document.write("70oC is "+fahrenhiet);








// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1 b. Price of item 2 c. Ordered quantity of item 1 d. Ordered Quantity of item 2 e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 
// document.write("<b>"+"Shopping Cart"+"</b>"+"<br>"+"<br>");
// var item1=+prompt("Enter item 1 price");
// document.write("Price of item 1 is "+item1+"<br>");
// var quantity1=+prompt("Enter quantity of 1 item");
// document.write("Quantity of item 1 is "+quantity1+"<br>");
// var item2=+prompt("Enter item 1 price");
// document.write("Price of item 1 is "+item2+"<br>");
// var quantity2=+prompt("Enter quantity of 1 item");
// document.write("Quantity of item 1 is "+quantity2+"<br>");
// document.write("Shipping Charges 100"+"<br>"+"<br>")
// var a1=item1*quantity1;
// var a2=item2*quantity2;
// var tCost=a1+a2+100;
// document.write("Total cost of your order is "+tCost);






// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 
// document.write("<b>"+"Marks Sheet"+"</b>"+"<br>"+"<br>");
// var marks1=+prompt("Enter Total marks ");
// var marks2=+prompt("Enter Marks obtained ");
// document.write("Total marks: "+marks1+"<br>");
// document.write("Marks obtained: "+marks2+"<br>");
// var per=(marks2*100)/marks1;
// document.write("Percentage: "+per)





// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
// document.write("<b>"+"Currency in PKR"+"</b>"+"<br>"+"<br>");
// var dollar=10;
// var riyal=25;
// var total=dollar*104.80+riyal*28;
// document.write("Total Currency in PKR: "+total);







// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence: a. Add 5 b. Multiply by 10 c. Divide the result by 2 Perform all calculations in a single expression 
// var a=10;
// a=(a+5)+(a*10)+(a/2);
// document.write("Arithmetic: "+a);









// 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values. 
// Output them to the screen like so: “They are either NN or NN years old”. 
 
// document.write("<b>"+"Age Calculator"+"</b>"+"<br>"+"<br>");
// var cYear=+prompt("Enter Current Year ");
// var bYear=+prompt("Enter Birth Year ");
// document.write("Current Year: "+cYear+"<br>");
// document.write("Birth Year: "+bYear+"<br>");
// var age=cYear-bYear;
// document.write("Your Age is: "+age);










// 12. The Geometrizer: Calculate properties of a circle. a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
// document.write("<b>"+"The Geometrizer"+"</b>"+"<br>"+"<br>");
// var radius=+prompt("Enter radius of a circle ");
// document.write("Radius of a circle: "+radius+"<br>");
// var circumference=2*3.142*radius;
// var area=3.142*radius*radius;
// document.write("The circumference is: "+circumference+"<br>");
// document.write("The  area is: "+area+"<br>");








//13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. a. Store your favorite snack into a variable b. Store your current age into a variable. c. Store a maximum age into a variable. d. Store an estimated amount per day (as a number). e. Calculate how many would you eat total for the rest of your life. 
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 
 
// document.write("<b>"+"The Lifetime Supply Calculator"+"</b>"+"<br>"+"<br>");
// var fSnack="Chocolate chip";
// var age=15;
// var mAge=65;
// var perDay=3;
// var total=(mAge-age)*perDay;
// document.write("Favourite Snack: "+fSnack+"<br>");
// document.write("Current age: "+age+"<br>");
// document.write("Estimated Maximum Age: "+mAge+"<br>");
// document.write("Amount of snacks per day: "+perDay+"<br>");
// document.write("You will need "+total+" "+fSnack+" to last you until the ripe old age of "+mAge);



