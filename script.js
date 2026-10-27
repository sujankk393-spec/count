/*let name1 = "sujan k k";
let student = "true";
let age = 19 ;
document.getElementById("p1").textContent = ` my name is ${name1}` ;
document.getElementById("p3").textContent = ` I am a student: ${student}` ;
document.getElementById("p2").textContent = ` I am ${age} years old.` ;
let name1;
document.getElementById("button").onclick = function() {
    name1 = document.getElementById("username").value;
    document.getElementById("h1").textContent = `welcome , ${name1}`;
};
let age = window.prompt("Enter your age");
 age = Number(age);
 console.log(age , typeof age);
 let pi = 3.14;
 let r;
 let cercumference;
  r = window.prompt("enter the radius");
  cercumference = 2 * pi * r;
  alert(`the cercumference of the circle is ${cercumference}`);*/
const incbutton = document.getElementById("incbutton");
const decbutton = document.getElementById("decbutton");
const resbutton = document.getElementById("resbutton");
const number = document.getElementById("number");
let count = 0;
incbutton.onclick = function() {
    count++;
    number.textContent = count;
};
decbutton.onclick =  function() {
    count--;
    number.textContent = count;
};
resbutton.onclick = function() {
    count = 0;
    number.textContent = count;
};
