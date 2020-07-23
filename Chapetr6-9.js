// Chapter No 6-9
// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// document.write("--a");
// --a
//  1
// document.write("result would be"+1);

// document.write("--a - --b");

// --a - --b
//  1  -  0
//  document.write("result would be"+1);

// document.write("--a - --b + ++b");

// --a - --b + ++b
//  1  -  0  + 1

//  document.write("result would be"+2);

// document.write("--a - --b + ++b + b--");

// --a - --b + ++b + b--
// 1   -  0  + 1   + 0

// document.write("result would be"+2);







// 3. Write a program that takes input a name from user & greet the user.

// var name=prompt("what is your name");
// alert("welcome to our saite "+name );
// 69-5
// var num=prompt('enter your no');
// if(num===""){
//     for( a=1 ; a<=10 ; a++){
//             document.write("2" + "*" + a + "=" +2*a +"<br>");
            
//     }
// }
// else{
//     for( a=1 ; a<=10 ; a++){
//     document.write(num + "*" + a + "=" +num*a +"<br>");
// }
// }



// 6. Take a) Take three subjects name from user and store them in 3 different variables. b) Total marks for each subject is 100, store it in another variable. c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables. e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 
// var sub1=prompt("enter your subject name 1")
// var sub2=prompt("enter your subject name 2")
// var sub3=prompt("enter your subject name 3")

// var mark1=prompt("enter your subject1 obtain number")
// var mark2=prompt("enter your subject2 obtain number")
// var mark3=prompt("enter your subject3 obtain number")

// var per1=((mark1/100)*100);
// var per2=((mark2/100)*100);
// var per3=((mark3/100)*100);

// var mark4=(+mark1)+(+mark2)+(+mark3);
// var per=((mark4/300)*100);


// document.write("Suject Total Marks Obtain  marks persentage"+"<br>")
// document.write(sub1+"         100   "+mark1+"     "+per1+"%<br>")
// document.write(sub2+"         100   "+mark2+"     "+per2+"%<br>")
// document.write(sub3+"         100   "+mark3+"     "+per3+"%<br>")
// document.write(total+"        300   "+mark4+"     "+per+"%<br>")


