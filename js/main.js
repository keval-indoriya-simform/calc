let string = ""
const op_list = ["+", "-", "/", "*", "%", "."]
var memory_storage = []

let btns = document.querySelectorAll("button");
btns.forEach(btn => {
    switch (btn.value) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "(":
        case ")":
        case "+":
        case "-":
        case "/":
        case "*":
        case ".":
        case "%":
            btn.addEventListener("click", () => {
                let string = btn.value
                append_input(string)
            })
            break;

        case "clear":
            btn.addEventListener("click", clear_screen)
            break;

        case "back":
            btn.addEventListener("click", back)
            break;

        case "=":
            btn.addEventListener("click", evaluate)
            break;

        case "plus_minus":
            btn.addEventListener("click", plus_minus_toggle)
            break;

        case "pi":
            btn.addEventListener("click", pi_value)
            break;

        case "e":
            btn.addEventListener("click", e_value)
            break;

        case "log10":
            btn.addEventListener("click", log10_handler)
            break;

        case "log2":
            btn.addEventListener("click", log2_handler)
            break;

        case "square":
            btn.addEventListener("click", square)
            break;

        case "sqrt":
            btn.addEventListener("click", sqrt)
            break;

        case "inverse":
            btn.addEventListener("click", inverse)
            break;

        case "abs":
            btn.addEventListener("click", abs)
            break;

        case "pow":
        case "**":
            btn.addEventListener("click", pow)
            break;

        case "fact":
            btn.addEventListener("click", fact)
            break;

        case "10pow":
            btn.addEventListener("click", _10pow)
            break;

        case "MC":
            btn.addEventListener("click", mc)
            break;

        case "MS":
            btn.addEventListener("click", ms)
            break;

        case "MR":
            btn.addEventListener("click", mr)
            break;

        case "M+":
            btn.addEventListener("click", m_plus)
            break;

        case "M-":
            btn.addEventListener("click", m_minus)
            break;

        default:
            alert("something went wrong")

    }
});


let selector = document.getElementById("Trigonometry");

selector.addEventListener("change", () => {
    let string = document.querySelector("#op-input").innerHTML
    switch (selector.value) {
        case "sin":
            op_sin(string)
            break;
        case "cos":
            op_cos(string)
            break;
        case "tan":
            op_tan(string)
            break;
        case "cot":
            op_cot(string)
            break;
        case "sec":
            op_sec(string)
            break;
        case "cosec":
            op_cosec(string)
            break;

    }
});


document.onkeydown = function (event) {
    switch (event.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
        case "+":
        case "-":
        case "/":
        case "*":
        case ".":
        case "%":
        case "(":
        case ")":
        case "**":
            let string = event.key
            append_input(string)
            break;

        case "Enter":
            evaluate()
            break;

        case "Backspace":
            back()
            break;
    }
}





function display(string) {
    document.querySelector("#op-input").append(string)
}

function append_input(input) {
    if (op_list.includes(input)) {
        let string = document.querySelector("#op-input").innerHTML
        display(input)
        if (op_list.includes(string[string.length - 1])) {
            document.querySelector("#op-input").innerHTML = ""
            string = string.slice(0, -1)
            string += input
            display(string)
        }
    } else {
        display(input)
    }
}


function evaluate() {
    if (document.querySelector("#op-input").innerHTML != "") {
        let result = eval(document.querySelector("#op-input").innerHTML)
        document.querySelector("#op-input").innerHTML = result
        document.querySelector("#op-result").innerHTML = result
    } else {
        alert("enter something to evaluate")
    }

}

function clear_screen() {
    let string = ""
    document.querySelector("#op-input").innerHTML = string
    document.querySelector("#op-result").innerHTML = "0"
}

function back() {
    let string = document.querySelector("#op-input").innerHTML
    string = string.slice(0, -1)
    document.querySelector("#op-input").innerHTML = string
    if (document.querySelector("#op-result").innerHTML != "0") {
        document.querySelector("#op-result").innerHTML = string
    }
}

function plus_minus_toggle() {
    let string = document.querySelector("#op-input").innerHTML
    if (string[(string.length - 1)] == "+") {
        string = string.slice(0, -1)
        string += "-"
    } else if (string[(string.length - 1)] == "-") {
        string = string.slice(0, -1)
        string += "+"
    } else if (string[string.length - 1] != "+" || string[string.length - 1] !== "-") {
        string = string += "+"
    }
    document.querySelector("#op-input").innerHTML = string

}

function pi_value() {
    display(3.1416)
}

function e_value() {
    display(2.7183)
}

function log10_handler() {
    if (document.querySelector("#op-input").innerHTML != "") {
        let string = document.querySelector("#op-input").innerHTML
        document.querySelector("#op-input").innerHTML = ""
        let result = log_base(string, 10)
        display(result)
        document.querySelector("#op-result").innerHTML = result
    }
}

function log2_handler() {
    if (document.querySelector("#op-input").innerHTML != "") {
        let string = document.querySelector("#op-input").innerHTML
        document.querySelector("#op-input").innerHTML = ""
        let result = log_base(string, 2)
        display(result)
        document.querySelector("#op-result").innerHTML = result
    }
}

function log_e(x) {
    n = 10000
    return n * ((x ** (1 / n)) - 1)
}

function log_base(value, base) {
    return log_e(value) / log_e(base)
}

function square() {
    if (document.querySelector("#op-input").innerHTML != "") {
        let string = document.querySelector("#op-input").innerHTML
        document.querySelector("#op-input").innerHTML = ""
        let result = string * string
        display(result)
        document.querySelector("#op-result").innerHTML = result
    }
}

function sqrt() {
    if (document.querySelector("#op-input").innerHTML != "") {
        let string = document.querySelector("#op-input").innerHTML
        document.querySelector("#op-input").innerHTML = ""
        let result = string ** 0.5
        display(result)
        document.querySelector("#op-result").innerHTML = result
    }
}

function inverse() {
    let string = document.querySelector("#op-input").innerHTML
    document.querySelector("#op-input").innerHTML = ""
    let result = 1 / string
    display(result)
    document.querySelector("#op-result").innerHTML = result
}

function abs() {
    if (document.querySelector("#op-input").innerHTML != "") {
        let string = document.querySelector("#op-input").innerHTML
        let index = string.lastIndexOf("-")
        let result = string.substring(0, index) + string.substring(index + 1);
        document.querySelector("#op-input").innerHTML = ""
        display(result)
        document.querySelector("#op-result").innerHTML = result
    }
}

function pow() {
    let string = document.querySelector("#op-input").innerHTML
    if (string != "" && string.slice(-2) != "**") {
        display("**")
    }
}

function fact() {
    if (document.querySelector("#op-input").innerHTML != "") {
        let string = document.querySelector("#op-input").innerHTML
        document.querySelector("#op-input").innerHTML = ""
        let result = factorial(string)
        display(result)
        document.querySelector("#op-result").innerHTML = result
    }
}

function factorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

function _10pow() {
    let string = document.querySelector("#op-input").innerHTML
    if (string != "" && string.slice(-5) != "*10**") {
        display("*10**")
    }
}

function op_sin(degree) {
    let result = Math.sin(degree * Math.PI / 180)
    document.querySelector("#op-input").innerHTML = ""
    display(result)
    document.querySelector("#op-result").innerHTML = result
}

function op_cos(degree) {
    let result = Math.cos(degree * Math.PI / 180)
    document.querySelector("#op-input").innerHTML = ""
    display(result)
    document.querySelector("#op-result").innerHTML = result
}

function op_tan(degree) {
    let result = Math.tan(degree * Math.PI / 180)
    document.querySelector("#op-input").innerHTML = ""
    display(result)
    document.querySelector("#op-result").innerHTML = result
}

function op_cot(degree) {
    let result = 1 / Math.tan(degree * Math.PI / 180)
    document.querySelector("#op-input").innerHTML = ""
    display(result)
    document.querySelector("#op-result").innerHTML = result
}

function op_sec(degree) {
    let result = 1 / Math.cos(degree * Math.PI / 180)
    document.querySelector("#op-input").innerHTML = ""
    display(result)
    document.querySelector("#op-result").innerHTML = result
}

function op_cosec(degree) {
    let result = 1 / Math.sin(degree * Math.PI / 180)
    document.querySelector("#op-input").innerHTML = ""
    display(result)
    document.querySelector("#op-result").innerHTML = result
}

function mc(){
    memory_storage = []
    
}
function mr(){
    let last_item = memory_storage[memory_storage.length - 1]
    document.querySelector("#op-input").innerHTML = ""
    display(last_item)
    document.querySelector("#op-result").innerHTML = last_item
}
function ms(){
    let string = document.querySelector("#op-input").innerHTML
    let int = parseInt(string)
    memory_storage.push(int)
}
function m_plus(){
    let string = document.querySelector("#op-input").innerHTML
    let int  = parseInt(string)
    let last_item = memory_storage[memory_storage.length - 1]
    last_item += int
    memory_storage[memory_storage.length - 1] = last_item
    document.querySelector("#op-input").innerHTML = ""
    display(last_item)
    document.querySelector("#op-result").innerHTML = last_item
}
function m_minus(){
    let string = document.querySelector("#op-input").innerHTML
    let int  = parseInt(string)
    let last_item = memory_storage[memory_storage.length - 1]
    last_item -= int
    memory_storage[memory_storage.length - 1] = last_item
    document.querySelector("#op-input").innerHTML = ""
    display(last_item)
    document.querySelector("#op-result").innerHTML = last_item
}

