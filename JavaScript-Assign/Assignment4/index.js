// JavaScript DOM Manipulation Assignment

// 1.
const button = document.getElementById("changeTextButton");
const paragraph = document.getElementById("text");

button.addEventListener("click", function() {
    paragraph.innerText = "The paragraph text has been changed!";
});


// 2. 
const Event= document.getElementById("Mydiv").addEventListener("mouseover",function(){
Mydiv.style.backgroundColor="blue";
})
document.getElementById("Mydiv").addEventListener("mouseout",function(){
Mydiv.style.backgroundColor="lightgreen";
})

// 3. 
document.getElementById("addlist").addEventListener("click",function(){
let add=document.getElementById("itemList");
let li=document.createElement("li")
li.innerHTML=`new item <button class="removeButton">Remove</button>`;
add.appendChild(li)

})


// 4. 
document.getElementById("removelist").addEventListener("click",function(){

const buttons = document.querySelectorAll(".removeButton");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const listItem = this.parentElement;
                listItem.remove(); 
            });
        });

})

// 5.
const form = document.getElementById("userForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
event.preventDefault(); 

const name = document.getElementById("name").value;

message.innerText = `Thank you for submitting, ${name}!`;
});

// 6. 
const alertbutton = document.getElementById("alertButton");

alertbutton.addEventListener("click", function() {
alert("Button was clicked!");
});

// 7.
const toggleButton = document.getElementById("toggleButton");
        const toggleElement = document.getElementById("toggleElement");

        toggleButton.addEventListener("click", function() {
            toggleElement.classList.toggle("hidden");
        });

// 8.
const inputField = document.getElementById("userInput");
        const displayButton = document.getElementById("displayButton");
        const displayText = document.getElementById("displayText");

        displayButton.addEventListener("click", function() {
            const inputValue = inputField.value; 
            displayText.innerText = "You entered: " + inputValue; 
        });

// 9.
const contentElement = document.getElementById("contentElement");
        const innerHTMLButton = document.getElementById("getInnerHTML");
        const textContentButton = document.getElementById("getTextContent");

        const innerHTMLResult = document.getElementById("innerHTMLResult");
        const textContentResult = document.getElementById("textContentResult");

        innerHTMLButton.addEventListener("click", function() {
            const innerHTML = contentElement.innerHTML; 
            innerHTMLResult.innerText = "innerHTML: " + innerHTML; 
        });

        textContentButton.addEventListener("click", function() {
            const textContent = contentElement.textContent; 
            textContentResult.innerText = "textContent: " + textContent; 
        });

// 10. 
function updateClock() {
const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;

document.getElementById("clock").innerText = timeString;
}

updateClock();

setInterval(updateClock, 1000);