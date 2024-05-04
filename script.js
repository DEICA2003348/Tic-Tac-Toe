// let fullname="Tony star";
// let FULLNAME="Aparna"
// var age=24
// const price=150.0

// x=null;
// y=undefined;
// console.log(x);
// console.log(y);
// console.log(fullname);
// console.log(FULLNAME);
// console.log(age);
// console.log(price);
// const student={
//     fullName: "Rahul",
//     age: 20,
//     cgpa: 9.7,
//     isPass: true,
// };
// const product={
//     title: "Ball Pen",
//     rating: 4,
//     offer: 32,
//     price: 270,
// };

//chap2

//Arithmetic OPerators
// let a = 5;
// let b = 10;
// console.log("a+b =",a+b);
// console.log("a-b =",a-b);
// console.log("a*b =",a*b);
// console.log("a/b =",a/b);
// console.log("a%b =",a%b);
// console.log("a**b =",a**b);

//Unary operator

// console.log("a=",a--);
// console.log("a=",--a);
// console.log("b=",--b);
// console.log("b=",b--);
// console.log("a=",a++);
// console.log("a=",++a);
// console.log("b=",b++);
// console.log("b=",++b);

//Assignment Operator
// a += 4;
// console.log("a=",a);

// a==8;
// a *= 4;
// console.log("a=",a);
// a /= 4;
// console.log("a=",a);
// a **= 4;
// console.log("a=",a);
// a %= 4;
// console.log("a=",a);

//comparision operator

// console.log("6==8",a==b);//false
// console.log("6!=8",a!=b);
// console.log("6===8",a===b);
// console.log("6>8",a>b);
// console.log("6<8",a<b);
// console.log("6<=8",a<=b);
// console.log("6>=8",a>=b);

//Logical operator
// {let cond7 =a<b;//true
// let cond8= a==5;//true
// console.log("cond7&&cond8",cond7&&cond8);

// let cond1 =a>b;//false
// let cond2= a==5;//true
// console.log("cond1&&cond2",cond1&&cond2);

// let cond3 =a<b;//true
// let cond4= a<=5;//false
// console.log("cond3&&cond4",cond3&&cond4);
// let cond5 =a<b;//false
// let cond6= a<=5;//false
// console.log("cond5&&cond6",cond5&&cond6);}
// {let cond7 =a<b;//true
// let cond9= a==5;//true
// console.log("cond7||cond8",cond7||cond8);

// let cond1 =a>b;//false
// let cond2= a==5;//true
// console.log("cond1||cond2",cond1||cond2);

// let cond3 =a<b;//true
// let cond4= a<=5;//false
// console.log("cond3||cond4",cond3||cond4);
// let cond5 =a<b;//false
// let cond6= a<=5;//false
// console.log("cond5||cond6",cond5||cond6);}

//conditional statement
// let age=26;
// if (age>=18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }

// let num=10;
// if(num%2==0){
//     console.log(num,"is even");
// }
// else{
//     console.log(num,"is odd");
// }
// let mode="dark";
// if (mode=="dark"){
//     color="black";
    
// }
// else if(mode=="pink"){
//     color="black";
// }
// else{
//     color="white";
// }
// console.log(color);

// let Age=24;
// let result=Age>=18?console.log("adult"):console.log("not adult");
// alert("hello");//pop up

// let num=prompt("enter a number");

// if(num %5==0){
//     console.log(num,"multipe of 5");
// }
// else{
//     console.log(num,"not multiple of 5");
// }

// let score =prompt("enter a score");
// if(score>=90 && score<=100){
//  grade="A";
// }
// else if(score>=70 && score<=89){
//     grade="B";
// }
// else if(score>=60 && score<=69){
//     grade="C";
// }
// else if(score>=50 && score<=59){
//     grade="D";
// }
// else if(score>=0 && score<=49) {
//     grade="F";
// }
// console.log(grade);

//chap3
//loop
// for(let count=1; count<=5; count++){
//     console.log("Apna College")
// }
//to calculate sum  to 5
// let sum=0;
// for(let i=1; i<=5; i++){
//     sum=sum+1;
// }
// console.log("sum = ",sum);
// console.log("loop is ended");

//Print 1 to 5
// 
// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i=i++;
// }

//for-of-loop
// let str="JavaScript";

// let size=0;
// for(let i of str){
//     console.log("i=",i);
//     size++;
// }
// console.log("string size",size);

//for-in-loop

// let student={
//     name: "aparna",
//     age:23,
// };
// for(let key in student){
//     console.log("Key",key,"value",student[key]);
// }

//pratice question 1
// for(let i=0; i<=100; i++){
//     if(i % 2 != 0){
//     console.log("i = ",i);
// }

// }
//Pratice ques2

// let gameNum = "25";
// let userNum = prompt("Gusses the game num:");
// console.log(userNum);

// while(userNum !== gameNum){
// prompt("you entered wrong number.guss again:");
// }
// console.log("congraluations,you are right");

//Strings
// let str="apnacollege";
// let str2="Aparna";
// console.log(str[8]);


// let obj = {
//     item : "pen",
//     price : 10,
// };
// let output = `the cost of ${obj.item} is${obj.price} ruppes`;
// console.log(output);
// console.log("the cost of",obj.item,"is",obj.price,"ruppes");
// //Template literals
// let Sentence=`This special string`;
// console.log(typeof Sentence);

// let str3 = "ApnaCollege ";
// let newStr3=str3.toUpperCase();
// console.log(str3);
// console.log(newStr3);

// let str4 ="  Apna College ";
//  str4 = str4.trim();
//  console.log(str4);

//  let str5="3345564646";
//  console.log(str5.slice(1,5));
//  console.log(str5.replace("55","A"));

//  console.log(str.charAt(3));

//  let res=str.concat(str2);
//  console.log(res);

 //Practice ques

//  let str7=prompt("enter your name");
//   let str6= "@";
//  let str8=str7.length;

//  let str0=str6+str7+str8;

//  console.log(str0);

//chap4
//Array
// let marks=[45,97,45,35];
// console.log(marks);
// console.log(marks.length);//property
// let heroes=["ironman","hulk","thor","batmam"];
// //for loop
// for(let idx=0; idx<marks.length; idx++ ){
//     console.log(heroes[idx]);
// }
// //for of
// for(let hero of heroes){
//     console.log(hero.toUpperCase());
// }

// let mar =[85,97,44,37,76,60];
// let sum=0;
// for( let val of marks){
//     sum=sum+val;
// }
// let avg=sum/mar.length;
// console.log(`avg marks of the class = ${avg}`);

// let item=[250,645,300,900,50];
// let i=0;
// for(let val of item){
   
//    let offer=item[i]/100;
//     item[i]=item[i]-offer;
//     console.log(`value after offer=${val}`);
//     i++;
// } 

// let foodItems=["potato","apple","banana","grapes"];
// foodItems.push("chips","bugger","pizza");
// console.log(foodItems);
// console.log(foodItems.toString());
// let deleted=foodItems.pop();
// console.log(deleted);

// let marverlheroes=["thor","spiderman","ironman","antman","Dr.Strange"];
// console.log( marverlheroes);
// console.log( marverlheroes.slice(1,3));

// marverlheroes.unshift();
// let dcHeroes=["superman","batman"];
// let heroe=marverlheroes.concat(dcHeroes);
// console.log(heroe);

// let arr=[1,2,3,4,5];
//arr.splice(2,2,101,102);
//element add
//arr.splice(2,0,101);
//delete element
//arr.splice(3,1);
//replace
//arr.splice(3,1,101);

//Practice ques
// let companies=["Blooming","Microsoft","Uber","Google","IBM","Netlfix"];
// companies.shift();
// console.log(companies);
// companies.splice(2,1,"Add Ola");
// companies.push(Amazon);
// 
//chap5
// 
// function abc(){
// console.log("hello");
// }
// function myFun(abc){
//     return abc;
// }
// let arr1=[1,2,3,4,5,6];
// // arr1.forEach(function printval(val){
// //     console.log(val.toUppercase());
// });
//practice question
// let arr1=[1,2,3,4,5];
// arr1.forEach((val ,i,arr)=>{
//     console.log(val*val,i,arr1);
// });
// let num=[455,45,344];
// let newArr = num.map((val) => {
//     return val;
// });
// console.log(newArr);

// let arr =[1,4,6,8,3,4,5,6];

// let evenArrr = arr.filter((val) =>{
//     return val>3;
// });
// console.log(evenArrr);

// let arr=[1,2,3,4];
//  const output=arr.reduce((res,curr) =>{
//     return res+curr;
// });
// console.log(output);//10

// let arr2=[4,5,3,6,8];
//  const out=arr2.reduce((prev,curr) =>{
//     return prev>curr? prev:curr;
// });
// console.log(out);//10

//chap-6 DOM
// console.log("hello");
// alert("apna college");
// console.dir(document.body);

//  let heading=document.getElementById("heading");//h1
// console.log(heading);

// let headings=document.getElementsByClassName(".myClass");
// console.dir(headings);
// console.log(headings);

// let parahs =document.getElementsByTagName("p");
// console.log(parahs);

// let elements=document.querySelector("p"); //1 element 
// console.dir(elements);
// let Allelements=document.querySelectorAll("p"); //1 element 
// console.dir(Allelements);
//  let div = document. querySelector("div");
//  console.dir(div);

//  let h2=document.querySelector("h2");
//  console.dir(h2.innerText);
//  h2.innerText=h2.innerText+"form Apna College students";

// let divs =document.querySelectorAll(".box");
// for(div of divs){
//     div.innerText=`new unique value ${idx}`
// }

// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


// let div=document.querySelector("div");
// console.log(div);

// let id= div.getAttribute("id");
// console.log(id);
// let name= div.getAttribute("name");
// console.log(name);

// let para =document.querySelector("p");
// console.log(para.getAttribute("class"));

// console.log(para.setAttribute("class",newclass"));

// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";

// div.style.fontSize="26px";
// div.innerText="Hello";

// let newBtn=document.createElement("button");
// newBtn.innerText = "click me !";
// console.log(newBtn);

// let div =document.querySelector("div");
// div.append(newBtn);

// div.after(newBtn);

// let newheading = document.createElement("h1");
// newheading.innerHTML ="<i> Hi , i am new</i>";

// document.querySelector("body").prepend( newheading);

// let para =document.querySelector("p");
// para.remove();

//pratice ques

// let newBtn =document.createElement("button");
// newBtn.innerText ="clickMe!";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";

// document.querySelector("body").prepend(newBtn);
//html
// <!-- <p class ="content">I am paragraph</p> -->
// <!-- <div id ="box" name="JSDiv"> this is div
//     <ul>
//         list
//         <li>item1</li>
//         <li>item2</li>
//         <li>item3</li>
//     </ul>
// </div>
// <p class ="para">this is a simple line</p>
// <!-- <h2>Hello JavaScript</h2>
// <div class="Box">first div</div>
// <div class="Box">second div</div>
// <div class="Box">third div</div> --> -->
// <button onclick="console.log("button on click");alert('hello')">click me!</button>
//<script src="script.js"></script>
//chap -8
let btn1=document.createElement







































































