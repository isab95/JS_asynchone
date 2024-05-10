const add = document.getElementById("MyButton");
add.addEventListener("click", displayJson());


function displayJson(){
    const myStrings = test.json();

    const body = document.querySelector("body");
    const myUl = document.createElement("ul");
    
    // const ul = document.querySelector("ul");
    for (const myString of myStrings){
        const myLi = document.createElement("li");
        myLi.textContent = myString.string;
        myUl.appendChild(myLi);
    }
    body.appendChild(myUl);
}