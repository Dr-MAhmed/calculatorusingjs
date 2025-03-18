let value = document.querySelector("#calculatorVal");
let btn = document.querySelectorAll("button");
Array.from(btn).forEach((button) => {
    button.addEventListener("click", function (e) {

        let val = e.target.textContent;

        if (val === "c") {
            value.value = "";
        } else if (val === "=") {
            try {
                value.value = eval(value.value);
            } catch (err) {
                value.value = err + "Error";
            }
        } else if (val === "+/-") {
            if (value.value !== "") {
                value.value = -1 * parseFloat(value.value);
            }
        } else {
            value.value += val;
        }
    });
});
