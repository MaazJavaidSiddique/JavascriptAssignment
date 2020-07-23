// Declare and initialize an empty multidimensional array. (Array of arrays)  Declare and initialize an empty multidimensional array. (Array of arrays)  
// var arr = [[ , , ],[ , , ],[ , , ]];



// Declare and initialize a multidimensional array representing the following matrix: 
// var arr =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for(var i=0; i<4; i++){
//    for(var j=0; j<4; j++){
//       document.write(arr[i][j]+" ");
//    }
//    document.write("<br>");
// }


// Write a program to print numeric counting from 1 to 10. 
// for(var i=1; i<=10; i++){
//    document.write(i+"<br>");
// }

// Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// var tablenum =+prompt("Enter a number to show its multiplication table");
// var tablelength =+prompt("Enter a length of table");
// for(var i=1;i<=tablelength; i++){
//    document.write(tablenum+" x "+i+" = "+tablenum*i+"<br>");
// }


// Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
// var fruits =["apple" , "banana" , "mango" , "orange" , "strawberry"];
// for(var i=0; i<fruits.length; i++){
//    document.write(fruits[i]+"<br>");
// }
// for(var i=0; i<fruits.length; i++){
//    document.write("Element at index "+i+" is "+fruits[i]+"<br>");
// }



// Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 

// document.write("Counting"+"<br>");
// for(var i=0; i<15; i++){
//    document.write(i+" ");
// }
// document.write("<br><br>")
// document.write("Reverse counting"+"<br>");
// for(var i=10; i>=1; i--){
//    document.write(i+" ");
// }
// document.write("<br><br>")
// document.write("Even"+"<br>");
// for(var i=0; i<=20; i=i+2){
//    document.write(i+" ");
// }
// document.write("<br><br>")
// document.write("Odd"+"<br>");
// for(var i=1; i<=20; i=i+2){
//    document.write(i+" ");
// }
// document.write("<br><br>")
// document.write("Series"+"<br>");
// for(var i=2; i<=20; i=i+2){
//    document.write(i+"k ");
// }


// You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not
// var arr =["cake", "apple pie", "cookie", "chips", "patties"];
// var item= prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am")
// for(var i=0; i<arr.length; i++){
//    if(arr[i]== item){
//       document.write(arr[i]+" is available at index "+i+" in our bakery");
//    }
//    else{
//       document.write(item+" is not available in our bakery");
//       break;
//    }   
// }


// Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 
// var arr = [24, 53, 78, 91, 12];
// document.write(arr+"<br>");
// for(var i=0; i<arr.length; i++){
//    if(arr[0] < arr[i]){
//       arr[0] = arr[i];
//    }
// }
// document.write("Largest element is: "+arr[0]);



// Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 
// var arr = [24, 53, 78, 91, 12];
// document.write(arr+"<br>");
// for(var i=0; i<arr.length; i++){
//    if(arr[0] > arr[i]){
//       arr[0] = arr[i];
//    }
// }
// document.write("Smallest element is: "+arr[0]);



// Write a program to print multiples of 5 ranging 1 to 100. 
// for(var i=5; i<=100; i=i+5){
//    document.write(i+" ");
// } 