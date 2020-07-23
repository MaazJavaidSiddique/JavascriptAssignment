
// Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Second Name");
// var fullName = firstName +" "+ lastName;
// document.write(fullName);


// Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser 
// var favouritePhone = prompt("Enter your favourite phone");
// document.write("My favourite phone is: "+favouritePhone+"<br>");
// var length = favouritePhone.length;
// document.write("Length of string: "+length);


// Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . 
// var country = "Pakistani";
// var string = country.indexOf("n");
// document.write("String: "+country+"<br>");
// document.write("Index of 'n': "+string);


// Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser. 
// var greet = "Hello World";
// document.write("String: "+greet+"<br>");
// var lastIndex = greet.lastIndexOf('l');
// document.write("Last index of 'l': "+lastIndex);


// Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser. 
// var country = "Pakistani";
// document.write("String: "+country+"<br>");
// var ind = country.charAt(3);
// document.write("Character of index 3: "+ind);


// Repeat Q1 using string concat() method. 
// var firstName = prompt("Enter First Name");
// var lastName = prompt("Enter Second Name");
// var fullName = firstName.concat(' '+lastName);
// document.write(fullName);


// Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser
// var city = "Hyderabad";
// var ind = city.indexOf("Hyder");
// var anocity = "Islam";
// var a = city.slice(ind + 5);
// var third = anocity + a;
// alert(third);





// Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”; 
// var message = "Ali and Sami are best friends. They play cricket and football together";
// var a = message.indexOf("and");
// var b = message.lastIndexOf("and");
// for(var i=0; i<message.length; i++){
//    var third = message.slice(0,a) + "&" +message.slice(a+3,b) + "&"+ message.slice(b+3);
// }
// document.write(third);


// Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 
// var number = "472";
// document.write("Value: "+number+"<br>");
// document.write("Type: string"+"<br>");
// var a = parseInt(number);
// document.write("Value: "+a+"<br>");
// document.write("Type: number"+"<br>");


// Write a program that takes user input. Convert and show the input in capital letters
// var name = prompt("Enter name");
// document.write("User input: "+name+"<br>");
// var n = name.toUpperCase();
// document.write("Uppr case: "+n);

// Write a program that takes user input. Convert and show the input in title case
// var name = prompt("Enter name");
// document.write("User input: "+name+"<br>");
// var n = name.charAt(0);
// var a = name.slice(0+1);
// document.write("Title case: "+n.toUpperCase()+a.toLowerCase());








// Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser
// var num = 35.36;
// document.write("Number: "+num+"<br>");
// var text = num.toString();
// var ind = text.indexOf('.');
// var a = text.slice(0,ind);
// var b = text.slice(ind+1)
// var c = a+b;
// document.write("Result: "+c);



// Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ . 
 
//    Note: 
//    ASCII code of ! is 33 
//    ASCII code of , is 44 
//    ASCII code of . is 46 
//    ASCII code of @ is 64

// var userInput = prompt("Enter a text")

// for(var i=0; i<userInput; i++){
//    if(i === "33" || i === "44" || i === "46" || i === "64"){
//       alert("Please enter a valid username")
//    }
//    else{
//       alert(userInput);
//    }
// }


// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability
// var arr = ["cake" , "apple pie" , "cookie" , "chips" , "patties"];
// var item = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// for(var i=0; i<arr.length; i++){
//    if(arr[i] == item){
//       document.write(arr[i]+" is available at index "+i+"in our bakery");
     
//    }
//    else{
//       document.write("we are sorry. "+item+" is not available in our bakery");
     
//    }
// }




// var pro = ["cake","applepie", "cookie", "chips", "patties"];
// var ord=prompt("enter your food")
// var ord1=ord.toLowerCase()

// for(var i=0 ; i<pro.length; i++ ){
//     if(ord1===pro[i]){
//         document.write(ord+"is available at index "+ pro.indexof(pro[i])+"in the bakery")
//     }
//     else{
//         document.write("we are sorry "+ord+"is not available in our bakery")
//     }
// }







// Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser. 
// var university = "University of Karachi";
// for(var i=0; i<university.length; i++){
//    var b = university.charAt(i);
//    document.write(b+"<br>");
// }



//  var university = 'University of Karachi';
// var spl=university.split(' ')

// var sp1=spl[0].split('')
// for(var i=0 ; i<sp1.length ;i++){
// document.write(sp1[i] +"<br>")
// }
// document.write("<br>")

// var sp2=spl[1].split('')
// for(var i=0 ; i<sp2.length ;i++){
// document.write(sp2[i] +"<br>")
// }

// document.write("<br>")

// var sp3=spl[2].split('')
// for(var i=0 ; i<sp3.length ;i++){
// document.write(sp3[i] +"<br>")
// }









// Write a program to display the last character of a user input. 
// var input = prompt("Enter a text");
// var a = input.length;
// var b = input.length-1;
// var c = a+b;
// var d = c-a;
// var e = input.charAt(d);
// document.write("User input: "+input+"<br>");
// document.write("Last character of input: "+e);


// You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var h="The quick brown fox jumps over the lazy dog"
// var text=h.toLowerCase()
// var text1=text.split(' ')
// document.write(text1+"<br>")
// document.write(text1.length+"<br>")
// var num=0;
// for(var i=0 ; i<text1.length ; i++){
//     if(text1[i]=="the"){
//         num=num+1;
//     }
   
// }
// document.write("NO of THE: "+num)




































