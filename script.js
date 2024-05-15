
window.document.body.style.cursor = "wait";

document.querySelector('button').addEventListener('click', () => {
    window.print();
})



// var myChars = ["a", "b", "c", "d"];
// delete myChars[0];
// console.log(myChars);
// console.log(myChars[0]);
// console.log(myChars.length);

var array1 = new Array(3);
console.log(array1.length);

console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
console.log(10 - "10");

console.log([0] == false);

console.log([1, 2] + [3, 4]);


const browser = new Set("FireFox");
console.log(browser);

let [a, ...b] = [1, 2, 3, 4, 5];
console.log(a, b);

async function func() {
    return 10;
}
console.log(func());


function curried(a, b, c) {
    return a + b + c
}


console.log(curried(1, 2, 3));


function curry(a, b, c) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    };
}

const sum = a => b => c => a + b + c;


console.log(curry(1)(2)(1))
console.log(sum(3)(2)(1))


let sum1 = sum(1);
let sum2 = sum1(2);
let result = sum2(4);

console.log(result)



//   promise

// const promise = new Promise((resolve , reject) => {
//     let isAdmin = true;
//     return isAdmin  ? resolve("yaa I am admin") : reject("Somthing went wrong")
// })

// // promise.then((result) => console.log(result))

// promise.then(res => console.log(res)).catch(data => {
//     console.log(data)
// })

// Write a function delay that returns a promise. And that promise should return a setTimeout that calls resolve after 1000ms

// const delay = () => {
//     return new Promise((resolve , reject) => {
//         return setTimeout(() => {
//            resolve("Hello brother");
//         },1000)
//     })
// }

// delay().then(data => console.log(data));

