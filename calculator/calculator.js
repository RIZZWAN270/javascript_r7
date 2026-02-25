var displayy = document.getElementById("inputval");
var buttons = document.querySelectorAll("button");

var result = "";

buttons.forEach(button => {
    button.addEventListener("click", function(e) {
        let value = e.target.textContent;

        if (value === "=") {
            try {
                result = eval(result).toString();
                displayy.value = result;
            } catch {
                displayy.value = "Error";
                result = "";
            }
        }
        else if (value === "AC") {
            result = "";
            displayy.value = "";
        }
        else if (value === "DEL") {
            result = result.slice(0, -1);
            displayy.value = result;
        }
        else {
            result += value;
            displayy.value = result;
        }
    });
});