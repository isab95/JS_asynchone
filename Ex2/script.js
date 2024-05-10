const add = document.getElementById("SubmitButton");
add.addEventListener("click", function() { contactApi()});

async function contactApi (){
    const ApiUrl = "https://api.agify.io?name=";
    const input = document.getElementById("name").value;
    const requestUrl = `${ApiUrl}${input}`
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const result = await response.json();
    
    addDiv(result);
}

function addDiv(obj){
    const body = document.querySelector("body");
    const age = obj.age;
    const myDiv = document.createElement("div");
    myDiv.textContent = `Name: ${input} - age : ${age}`
    myDiv.appendChild(body);
}