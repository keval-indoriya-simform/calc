let string = ""
const op_list = ["+", "-", "/", "*", "%", "."]
var memory_storage = []
let inputOnDisplay = document.querySelector("#op-input")
let resultOnDisplay = document.querySelector("#op-result")

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
            btn.addEventListener("click", ln_handler)
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
            btn.addEventListener("click", pow)
            break;

        case "fact":
            btn.addEventListener("click", fact)
            break;

        case "10pow":
        case "**":
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

selector.addEventListener("click", () => {
    let string = inputOnDisplay.innerHTML
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
            document.activeElement.blur();
            let string = event.key
            append_input(string)
            break;

        case "Enter":
            document.activeElement.blur();
            evaluate();
            break;

        case "Backspace":
            document.activeElement.blur();
            back()
            break;

    }
}





function display(string) {
    inputOnDisplay.append(string)
}

function append_input(input) {
    if (op_list.includes(input)) {
        let string = inputOnDisplay.innerHTML
        display(input)
        if (op_list.includes(string[string.length - 1])) {
            inputOnDisplay.innerHTML = ""
            string = string.slice(0, -1)
            string += input
            display(string)
        }
    } else {
        display(input)
    }
}


function evaluate() {
    if (inputOnDisplay.innerHTML != "") {
        let string = inputOnDisplay
        if (string.innerHTML.includes("1/0")) {
            string.innerHTML = ""
            resultOnDisplay.innerHTML = Infinity
        } else if (string.innerHTML.includes("/0")) {
            string.innerHTML = ""
            resultOnDisplay.innerHTML = undefined

        } else if (string.innerHTML[0] == "*" | string.innerHTML[0] == "/" | string.innerHTML[0] == "%") {
            alert("there is invalid operator at first place so can't evaluate")
            clear_screen();

        } else {
            let result = eval(string.innerHTML)
            string.innerHTML = ""
            resultOnDisplay.innerHTML = result
        }
    } else {
        alert("enter something to evaluate")
    }

}

function clear_screen() {
    let string = ""
    inputOnDisplay.innerHTML = string
    resultOnDisplay.innerHTML = "0"
}

function back() {
    let string = inputOnDisplay.innerHTML
    string = string.slice(0, -1)
    inputOnDisplay.innerHTML = string
}

function plus_minus_toggle() {
    let string = inputOnDisplay.innerHTML
    let index_of_last_plus_minus = string.lastIndexOf("+")
    if (index_of_last_plus_minus == -1) {
        index_of_last_plus_minus = string.lastIndexOf("-")
    } else {
        string = "+" + string
        index_of_last_plus_minus = 0;
    }
    if (string.charAt(index_of_last_plus_minus) == "+") {
        string[index_of_last_plus_minus] = "-"
    } else if (string.charAt(index_of_last_plus_minus) == "-") {
        string[index_of_last_plus_minus] = "+"
    }
    // if (string[(string.length - 1)] == "+") {
    //     string = string.slice(0, -1)
    //     string += "-"
    // } else if (string[(string.length - 1)] == "-") {
    //     string = string.slice(0, -1)
    //     string += "+"
    // } else if (string[string.length - 1] != "+" || string[string.length - 1] !== "-") {
    //     string = string += "+"
    // }
    // inputOnDisplay.innerHTML = string

}

function pi_value() {
    let string = inputOnDisplay.innerHTML
    if (string.endsWith("3.1416")) {
    } else {
        display(3.1416)
    }
}

function e_value() {
    let string = inputOnDisplay.innerHTML
    if (string.endsWith("2.7183")) {

    } else {
        display(2.7183)
    }
}

function log10_handler() {
    if (inputOnDisplay.innerHTML != "") {
        let string = inputOnDisplay.innerHTML
        inputOnDisplay.innerHTML = ""
        let result = log_base(string, 10)
        resultOnDisplay.innerHTML = result
    }
}

function ln_handler() {
    if (inputOnDisplay.innerHTML != "") {
        let string = inputOnDisplay.innerHTML
        inputOnDisplay.innerHTML = ""
        let result = log_e(string)
        resultOnDisplay.innerHTML = result
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
    if (inputOnDisplay.innerHTML != "") {
        let string = inputOnDisplay.innerHTML
        inputOnDisplay.innerHTML = ""
        let result = string * string
        resultOnDisplay.innerHTML = result
    }
}

function sqrt() {
    if (inputOnDisplay.innerHTML != "") {
        let string = inputOnDisplay.innerHTML
        inputOnDisplay.innerHTML = ""
        let result = string ** 0.5
        resultOnDisplay.innerHTML = result
    }
}

function inverse() {
    let string = inputOnDisplay.innerHTML
    let result = 0;
    inputOnDisplay.innerHTML = ""
    if (string == 0 | string == '0' | string == null | string == undefined) {
        result = 0;
    } else {
        result = 1 / string;
    }
    if (result == 0 | result == '0' | result == null | result == undefined | result == 'NaN' | isNaN(result)) {
        alert("you can not find inverse of this or nothing to inverse")
        clear_screen()
    }
    else {
        resultOnDisplay.innerHTML = result;
    }
}

function abs() {
    if (inputOnDisplay.innerHTML != "") {
        let string = inputOnDisplay.innerHTML
        result = String(eval(string))
        inputOnDisplay.innerHTML = ""
        if (result.includes("-")) {
            result = result.slice(1, result.length)
        }
        resultOnDisplay.innerHTML = result
    }
}

function pow() {
    let string = inputOnDisplay.innerHTML
    if (string != "" && string.slice(-2) != "**") {
        display("**")
    }
}

function gamma(z) {
    return Math.sqrt(2 * Math.PI / z) * Math.pow((1 / Math.E) * (z + 1 / (12 * z - 1 / (10 * z))), z);
  }

function fact() {
    if (inputOnDisplay.innerHTML != "") {
        let string = parseFloat(inputOnDisplay.innerHTML)
        inputOnDisplay.innerHTML = ""
        let result = gamma(string + 1.00)
        resultOnDisplay.innerHTML = result
    }
}


function _10pow() {
    let string = inputOnDisplay.innerHTML
    if (string != "" && string.slice(-5) != "*10**") {
        display("*10**")
    }
}

function op_sin(degree) {
    let result = Math.sin(degree * Math.PI / 180)
    inputOnDisplay.innerHTML = ""

    resultOnDisplay.innerHTML = result
}

function op_cos(degree) {
    let result = Math.cos(degree * Math.PI / 180)
    inputOnDisplay.innerHTML = ""

    resultOnDisplay.innerHTML = result
}

function op_tan(degree) {
    let result = Math.tan(degree * Math.PI / 180)
    inputOnDisplay.innerHTML = ""

    resultOnDisplay.innerHTML = result
}

function op_cot(degree) {
    let result = 1 / Math.tan(degree * Math.PI / 180)
    inputOnDisplay.innerHTML = ""

    resultOnDisplay.innerHTML = result
}

function op_sec(degree) {
    let result = 1 / Math.cos(degree * Math.PI / 180)
    inputOnDisplay.innerHTML = ""

    resultOnDisplay.innerHTML = result
}

function op_cosec(degree) {
    let result = 1 / Math.sin(degree * Math.PI / 180)
    inputOnDisplay.innerHTML = ""
    resultOnDisplay.innerHTML = result
}

function mc() {
    memory_storage = []
}
function mr() {
    if (memory_storage.length == 0) {
        alert("no thing to recall")
    } else {
        let last_item = memory_storage[memory_storage.length - 1]
        inputOnDisplay.innerHTML = ""
        display(last_item)
        resultOnDisplay.innerHTML = last_item
    }
}
function ms() {
    let string = inputOnDisplay.innerHTML
    if (string == 0 | string == '0' | string == null | string == undefined) {
    } else {
        let int = parseInt(string)
        memory_storage.push(int)
        clear_screen()
    }
}
function m_plus() {
    if (memory_storage.length == 0) {
        alert("no thing in memory")
    } else {
        let string = inputOnDisplay.innerHTML
        let int = parseInt(string)
        let last_item = memory_storage[memory_storage.length - 1]
        last_item += int
        memory_storage[memory_storage.length - 1] = last_item
        inputOnDisplay.innerHTML = ""
        display(last_item)
        resultOnDisplay.innerHTML = last_item
    }
}
function m_minus() {
    if (memory_storage.length == 0) {
        alert("no thing in memory")
    } else {
        let string = inputOnDisplay.innerHTML
        let int = parseInt(string)
        let last_item = memory_storage[memory_storage.length - 1]
        last_item -= int
        memory_storage[memory_storage.length - 1] = last_item
        inputOnDisplay.innerHTML = ""
        display(last_item)
        resultOnDisplay.innerHTML = last_item

    }
}

