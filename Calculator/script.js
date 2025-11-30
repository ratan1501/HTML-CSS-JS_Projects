let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerText.trim();  // IMPORTANT FIX

        if (value === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }

        else if (value === "AC") {
            string = "";
            input.value = "";
        }

        else if (value === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }

        else {
            string += value;
            input.value = string;
        }
    });
});

input.addEventListener("keydown", function (e) {
    const allowedKeys = [
        "0","1","2","3","4","5","6","7","8","9",
        "+","-","*","/","%","Backspace","Delete",
        "ArrowLeft","ArrowRight","."
    ];

    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
    }
});
