// Copy Text
document.getElementById("copyBtn").addEventListener("click",
    function (){
        const sourceText = document.getElementById("source").textContent;
        document.getElementById("target").textContent = 
        sourceText;
    }
);

//Multiple Elements

const items = document.querySelectorAll(".item");

items.forEach(item => console.log(item.textContent));

items[1].textContent = "Banana (Edite)";

//Change styles 

document.querySelector("#styleBtn").addEventListener("click",
    function () {
        const text = document.querySelector("#styleText");
        text.style.color = "red";
        text.style.fontSize = "20px";
        text.style.background = "yellow";
    }
);

//Toggle class
document.getElementById("toggleBtn").addEventListener("click",
    function () {
        document.getElementById("box").classList.toggle("active");
    }
);

//Create Elements

let count = 1;

document.getElementById("addItem").addEventListener("click",
    function () {
        const li = document.createElement("li");
        li.textContent = "Item: " + count++;
        document.getElementById("list").appendChild(li);

        li.addEventListener("click",
            function () {
                li.remove();
            }
        );
        
    }
);

// Input to output

document.getElementById("submitBtn").addEventListener("click",
    function() {
        //
        const input = document.getElementById("nameInput");
        document.getElementById("output").textContent = input.value;
        input.value = "";
    }
);

// Real time input output

document.getElementById("liveInput").addEventListener("input",
    function (e) {
        const length = e.target.value.length;
        const countEl = document.getElementById("count");

        countEl.textContent = "Characters: " + length;
        countEl.style.color = length < 5 ? "black" : "grey";
    }
);

