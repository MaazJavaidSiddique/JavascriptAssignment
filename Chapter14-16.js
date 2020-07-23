// Declare an empty array using JS literal notation to store student names in future.
// var arr = [];


// Declare an empty array using JS object notation to store student names in future.
// var arr = new Array();


// Declare and initialize a strings array. 
// var arr = ["Karachi", "Lahore","Islamabad","Multan"];


// Declare and initialize a numbers array. 
// var arr = [1,2,3,4,5,6,7,8,9,10];


// var arr =["Apple",{1: "Pie", 2: "Dumpling", 3: "Cider"}, "Banana", {1: "Bread", 2: "Republic"}];
// document.write(arr);


// Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like: 
// document.write("Qualifications"+"<br>");
// var arr = ["1) SSC <br> " , "2) HSC <br>", "3) BCS <br>", "4) BS <br>", "5) BCOM <br>" , "6) MS <br>"];
// document.write(arr);


// Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like
// var arr = ["Ali" , "Haris" , "Fahad"];
// var score =[320, 230, 450];
// for(var i=0; i<3; i++){
//    var percent = (score[i]*100)/500;
// document.write("Score of "+arr[i]+" is "+score[i]+". Percentage: "+percent+"<br>");
// }



// Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method
// var arr =[79,63,98,82,95,74];
// document.write("Scores of Students: "+arr+"<br>");
// var otherstudent= arr.sort();
// document.write("Ordered Scores of Students: "+otherstudent);



// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
// var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list:"+"<br>"+city+"<br>"+"<br>");
// var selectedcities= city.slice(2,4);
// document.write("Selected Cities list:"+"<br>"+selectedcities);


// Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method) 
// var arr = ["This" , "is" , "my" , "cat"];
// document.write("Array:"+"<br>"+arr+"<br>"); 
// var stringarray= arr.join(" ");
// document.write("String:"+"<br>"+stringarray); 



// Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out) 
// var arr = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write("Device:"+"<br>"+arr+"<br>"+"<br>");
// for(var i=0; i<arr.length; i++){
//    document.write("<br>"+"Out:"+"<br>"+arr[i]);
// }


// Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last InFirst Out) 
// var arr = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write("Device:"+"<br>"+arr+"<br>"+"<br>");
// for(var i=arr.length-1; i>=0; i--){
//    document.write("<br>"+"Out:"+"<br>"+arr[i]);
// }