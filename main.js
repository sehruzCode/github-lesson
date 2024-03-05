// const fs = require("fs")
// import superheroes from "superheroes";



// console.log(superheroes.all);

// fs.writeFile("message.txt", "hello world", err => {
//     if(err) throw err
//     console.log("succes");
// })
// fs.readFile("./message.txt", "utf8", (err,data) => {
//     if(err) throw err
//     console.log(data);
// })

// import inquirer from "inquirer"
// import qr from 'qr-image'
// import fs from 'fs'


// inquirer
// .prompt([
//     {
//         message: "type in your URL",
//         name: "URL"
//     }
// ])
// .then((answers) => {
//     const url = answers.URL;
//     var qr_svg = qr.image(url);
//     qr_svg.pipe(fs.createWriteStream('i_love_qr.png'));
// })
//   .catch((error) => {
//     if (error.isTtyError) {

//     } else {

//     }
//   });


// function sema() {

//     let num = +prompt("ededleri daxil et");

//     for (let i = num; i >= 1; i--) {

//         let ededler = true;


//         for (let j = 2; j < i; j++) {
//             if (i % j === 0) {
//                 ededler = false;
//             }

//         }

//         if (ededler) {
//             console.log(i);
//         }


//     }
// }

// sema();


let arr = [1,2,3,4,5,6]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]


// let [a,b, ...newArr] = arr


// console.log(newArr);


// let text = '32, 31, 34, 36, 31'


let array = [12,21,9,49,102,3]

console.log(array.find(e => e == 10));

































