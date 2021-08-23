const outputDiv = document.querySelector(".output-div");
const btnResult = document.querySelector("#btn-result");




btnResult.addEventListener("click",getData)

function getData(){
    
fetch("https:/reqres.in/api/unknown/23")
.then(res =>{
    if(!res.ok){
        throw res.status

        //or throw status text depending on the details provided by the server

    }
    console.log(res)
    return res.json()

})
.then(data=>{console.log(data)})
.catch(error=> outputDiv.innerText=`${error} Error try again later `)
}


