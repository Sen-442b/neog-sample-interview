


// Create a CLI app which takes name, unit test marks, pre final marks, final marks of 5 students. And then print who has the highest marks. What if I ask you to print the average as well?
const readLineSync = require('readline-sync');

let highestMarks = 0;
let topper = "";
let toppersList = [];
let classTotal=0
for (let i =0;i<5;i++){
const studentName = readLineSync.question("Enter your name \n");
const unitTestMarks = readLineSync.question("Enter your unit text marks \n");
const preFinalMarks = readLineSync.question("Enter your pre final marks \n");
const finalMarks = readLineSync.question("Enter your final marks \n");
let totalMarks = Number(unitTestMarks) + Number(preFinalMarks) + Number(finalMarks);
console.log(`You scored ${totalMarks}`);
classTotal+=totalMarks
if(totalMarks>highestMarks){
    highestMarks=totalMarks;
    topper = studentName;
    // toppersList.push( );
    // console.log(highestMarks)



}
}
console.log(`High Score is ${highestMarks} scored by ${topper}`);
console.log(`The Average Score of the class is ${classTotal/5}`);


// function getTopScorers(toppersArr){
//     for(let i =0;i<toppersArr.length;i++){
//     console.log(toppersArr[i])
//     }



// }

//same marks bugs to be resolved 