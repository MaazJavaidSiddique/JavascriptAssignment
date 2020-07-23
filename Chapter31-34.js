


// Write a program that displays current date and time in your browser. 
// var date = new Date();
// document.write(date);



// Write a program that alerts the current month in words. For example December. 
// var month =["Januaray","February","March","April","May","June","July","August","September","October","November","December"]
// var date = new Date();
// var getMonth = date.getMonth();
// for(var i=0; i<12; i++){
//    if(i === getMonth){
//       document.write("Current month: "+month[i]);
//    }
// }


// Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun
// var day = ["Sun" , "Mon" , "Tue", "Wed" , "Thur" , "Fri" , "Sat" ];
// var date = new Date();
// var getDay = date.getDay();
// var nameOfDay = day[getDay];
// alert("Today is "+nameOfDay);



// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 
// var day = prompt("Enter a day");
// var day = day.toLowerCase();
// if(day == "sunday" || day == "saturday"){
//    alert("It's Fun Day");
// }
// else{
//    alert("It's Working Day");
// }


// Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 
// var date = new Date();
// document.write(date+"<br>");
// var getDate = date .getDate();
// if(getDate < 16){
//    document.write("First fifteen days of the month");
// }
// else{
//    document.write("Last sixteen days of the month");
// }


// Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object. 
// var date = new Date();
// document.write(date+"<br>");
// var gTime = date.getTime()
// document.write(gTime+"<br>");
// document.write(gTime/(1000*60));


// Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 



// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 
// var fixDate = new Date("Dec 31, 2020");
// document.write(fixDate+"<br>");


// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 
// var date = new Date();
// var gTime = date.getTime();
// var fixDate = new Date("April 23, 2020");
// document.write(fixDate+"<br>");
// var gFTime = fixDate.getTime();
// document.write(gFTime+"<br>");
// var diff = gTime - gFTime;
// var sol = diff/(1000*60*60*24)
// document.write(Math.floor(sol));





// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015. 
// var date1 = new Date("Dec 01, 2015");
// document.write(date1+"<br>");
// var gTime = date1.getTime();
// document.write(gTime+"<br>");
// var date2 = new Date("Dec 05, 2015 22:50");
// document.write(date2+"<br>");
// var gFTime = date2.getTime();
// document.write(gFTime+"<br>")
// var diff = gFTime - gTime;
// document.write(diff/(1000)+"<br>")



// Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 
// var date1 = new Date();
// document.write(date1+"<br>");
// var a = date1.toString();

// var copy1 = a.slice(0,16);
// var copy2 = a.slice(16,18);
// var integer = parseInt(copy2);
// var copy3 = a.slice(18,57);
// if(integer == 23){
//    integer = 00;
//    document.write(copy1+integer+copy3);
// }
// else{
//    integer--;
//    document.write(copy1+integer+copy3);
// }



// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 
// var date = new Date();
// document.write(date+"<br>");
// var a = date.toString();
// var copy1 = a.slice(0,11);
// var copy2 = a.slice(11,15);
// var integer = parseInt(copy2);
// var copy3 = a.slice(15,57);
// integer++;
// document.write(copy1+integer+copy3);



// Write a program to ask the user about his age. Calculate and show his birth year in your browser. 
// var date1 = new Date();
// var timemili = date1.getTime()
// var date2 = new Date("Dec 12,2000");
// var fixTmili = date2.getTime();
// var diff = timemili - fixTmili;
// var total = diff/(1000*60*60*24*30*12);
// document.write("Your age is "+Math.floor(total)+"<br>");
// var fixYear = date2.getFullYear();
// document.write("Your birth year is "+fixYear+"<br>");


// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge 

// var name = prompt("Enter Customer Name");
// document.write("Customer Name: "+name+"<br>");
// var date = new Date();
// var month =["Januaray","February","March","April","May","June","July","August","September","October","November","December"]
// var getmon = date.getMonth();
// document.write("Current month: "+month[getmon]+"<br>");
// document.write("Number of units: 410"+"<br>");
// document.write("Charges per unit: 16"+"<br>");
// var nAmount = 410 * 16;
// document.write("Net Amount Payable (within Due Date): "+nAmount+"<br>");
// document.write("Late payment charges: 350"+"<br>");
// var gAmount = nAmount+350;
// document.write("Gross Amount Payable (after Due Date):"+gAmount+"<br>");





