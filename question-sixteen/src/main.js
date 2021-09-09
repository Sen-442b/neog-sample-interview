// Create two objects with name, power, and yuga as Ram, 2500, Treta. Krishna, 2325, Dwapar. Write a function which takes two objects and return the person with more power.

const characterOne = {
    "name": "Ram",
    "power": 2500,
    "yuga":"Treta"
} 
const characterTwo = {
    "name": "Krishna",
    "power": 2325,
    "yuga":"Dwapar"
} 





console.log(getStrongerCharacter(characterOne,characterTwo));





function getStrongerCharacter(objOne,objTwo){
    if(objOne.power>objTwo.power){
        return`${objOne.name} is the person with more power`
    }else{
        return `${objTwo.name} is the person with more power`
    }

}
