//1.Write a function that accepts an array of strings and console.logs each element using a for loop.
function details(strings){
    for(let i=0;i<strings.length;i++){
    console.log(strings[i])}
}
const strings=["Rose","Mombasa","Student","Thirdyear"]
details(strings)

//2.Write a function that accepts an array of numbers and uses the forEach() 
//method to console.log each number multiplied by 2.

function myFunction(x){
     let y= x*2
    console.log(y)
}
let numbs=[1,2,3,4,5,6,7,8,9]
numbs.forEach(myFunction)

//3.Write a function that takes in an array of numbers and consoles the first 
//four items multiplied by 8 and the last two added by 5. 
//Console the array with the new values
let nuu=[2,3,4,5,6,7,8,55,14,33]
let d=[]
function arraynums(nuu){
    for(let i=0; i<nuu.length; i++){
        if (i<4){
            d.push(nuu[i]*8)
        }
        else if(i<-2){
            d.push(nuu[i]+5)
        }
    }
    console.log(d)
}
arraynums(nuu)

//4.Write a function that takes in the following array and use a while loop 
//to iterate and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum=[1,2,3,4,5,6,7,8,9]
function breakl(arrNum){
    let i=0;
    while(i<arrNum.length){
        if(i===5){
      break;
    }
    console.log(arrNum[i])
    i++
}}
breakl(arrNum)


//Write a function that takes in a an array of strings and use a continue 
//statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']

let fruits=[`apple`, `plum`, `banana`, `strawberries`, `kiwi`]
function continueb(fruits){
    for(let i=0; i<fruits.length; i++){
        if(i==2){
            continue;
        
    }        console.log({"continue at": fruits[i]})
}}
continueb(fruits)



