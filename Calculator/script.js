let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll
('button')

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{
            string  += e.target.innerHTML;
            input.value = string;
        }
    })
})


input.addEventListener('keydown', function (e) {
    const allowedKeys = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
         '+', '-', '*', '/', '%',
        'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight'
    ];

    if (!allowedKeys.includes(e.key)) {
        e.preventDefault(); 
    }
});


//  maine newly js complete kiya hai par mujhe confidence nhi a raha is liye maine ek yt se calulator ka tutoria dekha par mujhe uske se js se kaffi confusion ho rha hai or mai tum ye js ki har ek line dunga tum use depth me or easy language me samjha dena jisse mere doubt clear  hojaye