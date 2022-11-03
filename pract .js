//default parameter
//in default parameter first value will be 
// intializable even we assign a value for b ex:add(a=15,b),
// if we give add(5)it will asiign to a not for b value
function add1(b = 15, c = 9) {
    return c + b;
}
add1(5)

//spread operator
let arr = [1, 2, 3, 4];
let crr = [1, 2, 3, 4];
let drr = [...arr, ...crr]
console.log(drr)
//rest parameter
function add(...a) {
    let c = 0;
    for (let index = 0; index < a.length; index++) {
        c += a[index];
    }
    console.log(c)
}
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
//rest parametr shoud be the last parameter
function add2(b, ...a) {
    let c = 0;
    for (let index = 0; index < a.length; index++) {
        c += a[index];
    }
    console.log(c + b)
}
add2(5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5)

//for loop
let fruits=["apple",'papaya','orange','grape','banana'];
console.log(fruits);
function showfor(){
    let fruitnames="";
    for (let index = 0; index < fruits.length; index++) {
        fruitnames += `the index of ${fruits[index]} is ${index}`+'\n';
        
    }
    console.log(fruitnames);
}
showfor();
//for in
function showIn(){
    let fruitnames2="";
   for (let fruit in fruits) {
        fruitnames2 += `the fuitrs are ${fruits[fruit]} `+'\n';
   }
    console.log(fruitnames2);
}
showIn();
//for ForEacheach
function showForEach(){
    let fruitnames3="";
    fruits.forEach( fruit=> {
        console.log(`the fuitrs are ${fruit} `+'\n');
    });
}
showForEach();
//for of
function showOf(){
    let fruitnames4="";
    for (const fruit of fruits) {
        fruitnames4 += ` ${fruit} `+'\n';
    }
    console.log("the fuits in for of loop"+'\n'+fruitnames4);
}
showOf();
//map
fruits.map(fruit=>console.log(`fruits in map ${fruit} is 🍌`))
//ther is a predifined metheod called entries 
//it will lopp allthe leeters in the array
let animals=['dog','fox','tiger','zebra'];
for (let [index,name] of animals.entries()) {
    console.log(`${name} is at ${index}`)
}
//and in for of loop if we not mention the all entries we will
//itrate each elemnt by giveing their loop
for (let [firstletter,secondletter,third] of animals) {
    console.log(`${firstletter},${secondletter} is at ${third}`)
}