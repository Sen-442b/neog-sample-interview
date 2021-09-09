// Create two objects with name, age, and yuga as Ram, 25, Treta. Krishna, 31, Dwapar. Write a function which takes two objects and return the person with more age.


const characterOne = {
    "name": "Ram",
    "age": 25,
    "yuga":"Treta"
} 
const characterTwo = {
    "name": "Krishna",
    "age": 31,
    "yuga":"Dwapar"
} 




console.log(getOlderCharacter(characterOne,characterTwo));





function getOlderCharacter(objOne,objTwo){
    if(objOne.age>objTwo.age){
        return`${objOne.name} is the person with more age`
    }else{
        return `${objTwo.name} is the person with more age`
    }

}

