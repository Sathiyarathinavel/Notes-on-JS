console.log('hi')

function add(a, b) {
  return a + b
}
num = add(15, 67)
console.log(num)

function add(y) {
  return y + 10
}
function callback(a, add) {
  var y = a * 10;
  add(y)
}
console.log(callback(5, add))

function sum(a, b) { return a + b }

function foddcount(food, tip) {
  tipper = tip / 100
  tipamount = food * tipper
  total = sum(food, tipamount)
  return total
}
console.log(foddcount(200, 50))

const countnum = (a, b) => {
  return a + b
}

console.log(countnum(5, 7))

const countnum2 = (a, b) => a + b

console.log(countnum2(5, 7))

const multi = (a, b) => a * b
console.log(multi(5, 7))

fruits = ['apple', 'banana', 'orange', 'pinapple', 'papayaa']
console.log(fruits.join(' - '))
console.log(fruits[3])
console.log(fruits.push('tomatto'))
console.log(fruits)
console.log(fruits.includes("apple"))
console.log(fruits.slice(3, 6))
console.log(fruits.indexOf('apple'))
console.log(fruits.length)
console.log(fruits.join(','))
let text = "apple mango pinapple orange grapes pappaya"
console.log(text.split("").length)
let text2 = "The rain in SPAIN stays mainly in the plain";
let result = text2.repeat(2).match(/ain/gi)
console.log(result)
let array1 = ["sam", "jhon", "siva", "maaran"]
console.log(array1.copyWithin(0, 0))

const emp = (name, age) => {
  const person = {
    name: names,
    age: ages
  }
  const exp = `Hi i am ${person.names} how are you happy to see you again and i am ${person.ages} old`
  return exp
}
console.log(emp('sathiyaseelan', 24))

const emp = (name, age) => {
  const det = {
    person: name,
    ageof: age,
    icome: 4000,
    salvages: 3000,
  }
  {
    const exp = `hi how are you guys my name is ${name} and i am ${age} old and also his $${det.icome - det.salvages}`
    return exp;
  }
}
console.log(emp("sathiya", 24));


const emp = (name, age) => {
  const det = {
    person: name,
    ageof: age,
    income: 4000,
    salvages: 3000,
    networth: function() {
      // return det.income - det.salvages;
      return this.income - this.salvages;
    }
  }
  const exp = `hi how are you guys my name is ${name} and i am ${age} old and also his $${det.networth()}`
  return exp;
}
console.log(emp("sathiya", 24));

fruits = ['apple', 'banana', 'orange', 'pinapple', 'papayaa']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for(const x of fruits){
  console.log(fruits)
}

using new method alter for for loop
const number=[1,2,3,4,5,6,7,8,9,10]
for(const x of number){
  console.log(x*2)
}

let result =[];
const number=[1,2,3,4,5,6,7,8,9,10]
for(const x of number){
  result.push(x*2)
}
console.log(result)

multiplication of array
const multi=(numbers,multi)=>{
  let result = []
  for(const x of numbers){
  result.push(x*multi)
}
  return result
}
console.log(multi([1,2,3,4,5,6,7],67))

const multi=(numbers)=>{
  let result = []
  for(const x of numbers){
  result.push(x*2)
}
  return result
}
console.log(multi([1,2,3,4,5,6,7]))

count letters given in the list(for in method)
const countletters = () =>{
  const prahse = 'hi how are you have a nice day welcome'
  for(const x in prahse){
    console.log(x)
  }
}
countletters()

list the  letters given in the list(for of method)
const countletters = () =>{
  const prahse = 'hi how are you have a nice day welcome'
  for(const x of prahse){
    console.log(x)
  }
}
countletters()

const prahse = 'hi how are you have a nice day welcome'
  for(const x of prahse){
    console.log(x)}

let number ='hi maaran how are you when u go to your native place'
number.length;
console.log(number.length)

const max =(numbers) =>{
  let result= numbers[0];
  for(const x of numbers){
    if(x>result){
      result = x
    }
  }
  return(result)
}
console.log(max([1,2,3,4,5,6,7,100]))

let num =[1,2,3,4,5,6,7,100]
console.log(max(num))

const letterfreq = (letters)

let num =[1,2,3,4,5,6,7,8,9]
console.log(num.map(x=>x*2))
console.log(num)

let num =[1,2,3,4,5,6,7,8,9]
for(const x in num){
  console.log(((num.x)+1))
}

filter function
const filter =(number,givenum)=>{
  let result =[]
  for(let x of number){
    if(x>givenum){
    result.push(x)}
  }
return result
}
console.log(filter([1,2,3,4,5,67,6],2))

let num =[1,2,3,4,5,6,7,8,9]
console.log(num.filter(x=>x>5 && x<9))

const num2 =[1,2,3,4,5,6,7,8,9]
console.log(num.map(x=>x>5 && x<9))

const api =fetch('https://jsonplaceholder.typicode.com/todos/18')
.then(response =>response.json())
.then(json=>console.log('Run',json))
console.log(api)

fetch('https://jsonplaceholder.typicode.com/todos/4')
.then(response=>response.json())
.then(json=>console.log('RUN',json))

const imger = document.getElementById("img")

function cmd() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    console.log(json.message)
    imger.innerHTML = `<img  src='${json.message}' height=200 width=200/>`
  })
}
const te = document.getElementById('text')
const write = function() {
  te.innerHTML = `hi every one i am sathiya`
}


asycronous programmingp
const tea = () => console.log('tea is preparing')
console.log('i am going to the nearest tea stall and i have order my tea')
setInterval(tea, 6000)
setTimeout(tea,4000)
console.log('just cilling')


promise 
const promis = new Promise((resolve, reject) => {
  setTimeout(() => {
    isready = [true, false][Math.floor(Math.random() * 2)]
    isready ? resolve('hi welcome') : reject('sorry not yet ready')
  }, 2000)
})
console.log(promis
  .then(success => console.log({success}))
  .catch(error => console.log({error}))
)

const getapi = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const response =  await fetch(url)
  const data = await response.json()
  console.log(data)
}
  getapi()

this keyword
  class Car {
    constructor(name,model,color) {
      this.name = name
      this.color = color
      this.speed = '50mph'
    }   
  }
// const laborgini = new Car('laborgini','202','black')
// console.log(laborgini.name)

const ferrari = new Car('ferrari','green',55)
console.log(ferrari 

this and bind method
function lop(){
  for(let i=0;i<10;i++){
    console.log(i);
  }
}
lop();

const car={
  name:'ferari',
  repair(){
    console.log(this)
  }
}
car.repair()

const rep =car.repair;
rep()

const rep =car.repair.bind(car);
rep()
const square = (num1, num2) => num1 * num2

console.log(square(4, 2))

const cube = (num) => num ** 4;
console.log(cube(4))console.log('hi')

function add(a, b) {
  return a + b
}
num = add(15, 67)
console.log(num)

function add(y) {
  return y + 10
}
function callback(a, add) {
  var y = a * 10;
  add(y)
}
console.log(callback(5, add))

function sum(a, b) { return a + b }

function foddcount(food, tip) {
  tipper = tip / 100
  tipamount = food * tipper
  total = sum(food, tipamount)
  return total
}
console.log(foddcount(200, 50))

const countnum = (a, b) => {
  return a + b
}

console.log(countnum(5, 7))

const countnum2 = (a, b) => a + b

console.log(countnum2(5, 7))

const multi = (a, b) => a * b
console.log(multi(5, 7))

fruits = ['apple', 'banana', 'orange', 'pinapple', 'papayaa']
console.log(fruits.join(' - '))
console.log(fruits[3])
console.log(fruits.push('tomatto'))
console.log(fruits)
console.log(fruits.includes("apple"))
console.log(fruits.slice(3, 6))
console.log(fruits.indexOf('apple'))
console.log(fruits.length)
console.log(fruits.join(','))
let text = "apple mango pinapple orange grapes pappaya"
console.log(text.split("").length)
let text2 = "The rain in SPAIN stays mainly in the plain";
let result = text2.repeat(2).match(/ain/gi)
console.log(result)
let array1 = ["sam", "jhon", "siva", "maaran"]
console.log(array1.copyWithin(0, 0))

const emp = (name, age) => {
  const person = {
    name: names,
    age: ages
  }
  const exp = `Hi i am ${person.names} how are you happy to see you again and i am ${person.ages} old`
  return exp
}
console.log(emp('sathiyaseelan', 24))

const emp = (name, age) => {
  const det = {
    person: name,
    ageof: age,
    icome: 4000,
    salvages: 3000,
  }
  {
    const exp = `hi how are you guys my name is ${name} and i am ${age} old and also his $${det.icome - det.salvages}`
    return exp;
  }
}
console.log(emp("sathiya", 24));


const emp = (name, age) => {
  const det = {
    person: name,
    ageof: age,
    income: 4000,
    salvages: 3000,
    networth: function() {
      // return det.income - det.salvages;
      return this.income - this.salvages;
    }
  }
  const exp = `hi how are you guys my name is ${name} and i am ${age} old and also his $${det.networth()}`
  return exp;
}
console.log(emp("sathiya", 24));

fruits = ['apple', 'banana', 'orange', 'pinapple', 'papayaa']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for(const x of fruits){
  console.log(fruits)
}

using new method alter for for loop
const number=[1,2,3,4,5,6,7,8,9,10]
for(const x of number){
  console.log(x*2)
}

let result =[];
const number=[1,2,3,4,5,6,7,8,9,10]
for(const x of number){
  result.push(x*2)
}
console.log(result)

multiplication of array
const multi=(numbers,multi)=>{
  let result = []
  for(const x of numbers){
  result.push(x*multi)
}
  return result
}
console.log(multi([1,2,3,4,5,6,7],67))

const multi=(numbers)=>{
  let result = []
  for(const x of numbers){
  result.push(x*2)
}
  return result
}
console.log(multi([1,2,3,4,5,6,7]))

count letters given in the list(for in method)
const countletters = () =>{
  const prahse = 'hi how are you have a nice day welcome'
  for(const x in prahse){
    console.log(x)
  }
}
countletters()

list the  letters given in the list(for of method)
const countletters = () =>{
  const prahse = 'hi how are you have a nice day welcome'
  for(const x of prahse){
    console.log(x)
  }
}
countletters()

const prahse = 'hi how are you have a nice day welcome'
  for(const x of prahse){
    console.log(x)}

let number ='hi maaran how are you when u go to your native place'
number.length;
console.log(number.length)

const max =(numbers) =>{
  let result= numbers[0];
  for(const x of numbers){
    if(x>result){
      result = x
    }
  }
  return(result)
}
console.log(max([1,2,3,4,5,6,7,100]))

let num =[1,2,3,4,5,6,7,100]
console.log(max(num))

const letterfreq = (letters)

let num =[1,2,3,4,5,6,7,8,9]
console.log(num.map(x=>x*2))
console.log(num)

let num =[1,2,3,4,5,6,7,8,9]
for(const x in num){
  console.log(((num.x)+1))
}

filter function
const filter =(number,givenum)=>{
  let result =[]
  for(let x of number){
    if(x>givenum){
    result.push(x)}
  }
return result
}
console.log(filter([1,2,3,4,5,67,6],2))

let num =[1,2,3,4,5,6,7,8,9]
console.log(num.filter(x=>x>5 && x<9))

const num2 =[1,2,3,4,5,6,7,8,9]
console.log(num.map(x=>x>5 && x<9))

const api =fetch('https://jsonplaceholder.typicode.com/todos/18')
.then(response =>response.json())
.then(json=>console.log('Run',json))
console.log(api)

fetch('https://jsonplaceholder.typicode.com/todos/4')
.then(response=>response.json())
.then(json=>console.log('RUN',json))

const imger = document.getElementById("img")

function cmd() {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    console.log(json.message)
    imger.innerHTML = `<img  src='${json.message}' height=200 width=200/>`
  })
}
const te = document.getElementById('text')
const write = function() {
  te.innerHTML = `hi every one i am sathiya`
}


asycronous programmingp
const tea = () => console.log('tea is preparing')
console.log('i am going to the nearest tea stall and i have order my tea')
setInterval(tea, 6000)
setTimeout(tea,4000)
console.log('just cilling')


promise 
const promis = new Promise((resolve, reject) => {
  setTimeout(() => {
    isready = [true, false][Math.floor(Math.random() * 2)]
    isready ? resolve('hi welcome') : reject('sorry not yet ready')
  }, 2000)
})
console.log(promis
  .then(success => console.log({success}))
  .catch(error => console.log({error}))
)

const getapi = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos/1'
  const response =  await fetch(url)
  const data = await response.json()
  console.log(data)
}
  getapi()

this keyword
  class Car {
    constructor(name,model,color) {
      this.name = name
      this.color = color
      this.speed = '50mph'
    }   
  }
// const laborgini = new Car('laborgini','202','black')
// console.log(laborgini.name)

const ferrari = new Car('ferrari','green',55)
console.log(ferrari 

this and bind method
function lop(){
  for(let i=0;i<10;i++){
    console.log(i);
  }
}
lop();

const car={
  name:'ferari',
  repair(){
    console.log(this)
  }
}
car.repair()

const rep =car.repair;
rep()

const rep =car.repair.bind(car);
rep()
const square = (num1, num2) => num1 * num2

console.log(square(4, 2))

const cube = (num) => num ** 4;
console.log(cube(4))