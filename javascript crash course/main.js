// alert('hi!!');
// console.log('hello');
// console.error('this is an error');
// console.warn('this is a warning');
// let score=10;
// score=13;
// console.log(score);
// const a=10;
// console.log(a);
// const name = 'John';
// const age = 30;
// // const rating = 4.5;
// const iscool= true;
// const x= null;
// const y= undefined;
// let z;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof rating);
// console.log(typeof rating);
// console.log(typeof iscool);
// console.log(typeof x);
// console.log(typeof y);
// console.log(typeof z);

// console.log('my name is ' + name + ' and age is ' + age); ////--------------CONCATENATION
// const hello = 'my name is ${name} and age is ${age}';
// console.log(hello); ////------------not working //-------------- template string

// const c= 'hello world';
// console.log(c.length);
// console.log(c.toUpperCase());
// console.log(c.toLowerCase());
// console.log(c.substring(0,7).toUpperCase());
// console.log(c.split(''));

// const s='technology, computer, pc, calculators, amplifiers';
// console.log(s.split(', '));

// //----------------- arrays
// const a= new Array(1,2,3,5);
// console.log(a);
// const fruits =['appls', 'mangoes', 'pears', 'oranges', 10, true, null];
// console.log(fruits);
// console.log(fruits[2]);
// fruits[3]='grapes'; ////------------- for const we can do this but cant assign fruits[] like this;
// //fruits[];
// fruits.push('hello');
// fruits.unshift('hi');
// fruits.pop();
// console.log(Array.isArray('apples'));
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('grapes'));
// console.log(fruits);


// //----------------object literals
// const person={
//     first_name:'John',
//     last_name:'Doe',
//     age:'20',
//     hobbies:['singing', 'gardening' , 'watching movies', 'sports'],
//     address:{
//         street:'50 st.',
//         city:'Delhi',
//     }
// }
// alert(person);
// console.log(person);
// console.log(person.first_name, person.hobbies);
// console.log(person.hobbies[2]);
// console.log(person.address.city);
// //-----------destructuring
// const {first_name, last_name, address:{street, city}}=person;
// console.log(first_name, city);
// person.email='a@gamil.com';
// console.log(person);
// const todo=[
//     {
//         id:1,
//         task:'dentist app',
//         isCompleted: false
//     },
//     {
//         id:2,
//         task:'take out trash',
//         isCompleted: true 
//     },
//     {
//         id:3,
//         task:'water the plants',
//         isCompleted: true 
//     }
// ];

// console.log(todo);
// console.log(todo[1].task);

// const todoJSON= JSON.stringify(todo);
// console.log(todoJSON);

// //-------------------loops
// for(let i=0; i<10; i++){
//     console.log(i);
// }
// for(let i=0; i<10; i++){
//     console.log('for loop no: '+i);
// }

// //----------while loop
// let i=0;
// while(i<10){
//     console.log('while loop no: '+i);
//     i++;
// }

// //---------------for loops for arrays
// for(let i=0; i<10; i++){
//     console.log(todo[i].task);
// } ////---------------- not the efficient way

// //------------------- a good way to represent arrays by for loops
// for(let t of todo){
//     console.log(t.task);
// }

// //-------------high order array method
// --------------forEach, map, filter
// todo.forEach(function(t){
//     console.log(t.task);
// });

// const todo_id= todo.map(function(t){
//     return t.id;
// });
// console.log(todo_id);

// const todoCompleted= todo.filter(function(t){
//     return t.isCompleted === true;
// }).map(function(t){
//     return t.task;
// })
// console.log(todoCompleted);

// //--------------------if else conditional statements
// const x=107;
// if(x===10){
//     console.log('x is 10');
// } 
// else if(x>10){
//     console.log('x is greater than 10');
// }
// else{
//     console.log('x is less then 10');
// }
// const x=9;
// const y=10;
// if(x>9 || y<11){
//     console.log('x is greater than 9 or y is smaller than 11');
// }

// //----------Ternary operator
// const x=9;
// const color= x>10 ? 'red':'blue';
// const color= 'green';
// console.log(color);
// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is neither red nor blue');
//         break;
// }

// //--------------functions
// function add(a, b){
//     return a+b;
// }
// console.log(add());
// const add = (a, b)=>a+b; //----another way
// console.log(add(5,5));

// //--------------object oriented programming
// //------------constructor function
// function person(first_name, last_name, dob){
//     this.first_name=first_name;
//     this.last_name=last_name;
//     this.dob= new Date(dob);
// this.getBirthYear= function(){
//     return this.dob.getFullYear();
// }
// this.full_name=function(){
//     return `${this.first_name} ${this.last_name}`;
// }
// }
// person.prototype.getBirthyear= function(){
//     return this.dob.getFullYear();
// }
// person.prototype.fullName=function(){
//     return `${this.first_name} ${this.last_name}`;
// }

// const person1= new person('John', 'Doe', '10-02-1988');
// const person2= new person('Mike', 'Ross', '11-3-1999');



// console.log(person1);
// console.log(person2.first_name);
// console.log(person1.dob);
// console.log(`Server is running on port: ${person1.first_name}`);
// console.log(person1.getBirthYear());
// console.log(person1.full_name());
// console.log(person1.getBirthyear());
// console.log(person1.fullName());
// console.log(person1);

// //----------classes
// class person {
// //     constructor(firstname, lastname, dob) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dob = new Date(dob);
//     }
//     getbirthyear() {
//         return this.dob.getFullYear();
//       }
//     getfullname() {
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// console.log(person);
// const person1 = new person('John', 'Doe', '2-03-1980');
// const person2 = new person('Hello', 'Singh', '9-09-1999');
// console.log(person1.getfullname());
// console.log(person2.getfullname());
// console.log(person1.getbirthyear());
// console.log(person1);


// //----------selecteor are two types 1. single element selecters and another is 2. multiple element selectors
// //-----------DOM(Document Object Model)
// console.log(window);
// window.alert();
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));
// console.log(document.querySelector(''));

// //---------multiple element selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

//---for each item separately
// const i= document.querySelectorAll('.item');
// i.forEach((item)=>console.log(item));

// const ul= document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent='hello';
// ul.children[1].innerText='hi';
// ul.lastElementChild.innerHTML= '<h1>hello</h1>';

// const btn= document.querySelector('.btn');
// btn.style.background='indigo';
// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target.id);
// });

////------small application
// Put DOM elements into variables
// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// // Listen for form submit
// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//   e.preventDefault();
  
//   if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Add HTML
//     // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
// }