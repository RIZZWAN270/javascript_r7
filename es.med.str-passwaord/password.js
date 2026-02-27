var inputpass = document.getElementById("password");
var change = document.getElementById("message");
var changeshowmes = document.getElementById("show");

var button=document.querySelector("button");
var icon=document.querySelector("img")

/* dark=mode toggle*/
button.addEventListener("click",()=>{
    document.body.classList.toggle("dark-mode");

    icon.src = document.body.classList.contains("dark-mode")
        ? "dark-image.png": "light-image.png";
    });

    /*input box*/
    inputpass.addEventListener("input", () => {
    if (inputpass.value.length > 0) {
            change.style.display = "block";
            change.style.color = "block";
    } else {
        change.style.display = "none";
    }

    if (inputpass.value.length < 4) {
        changeshowmes.innerHTML = "Weak";
        inputpass.style.borderColor = "red";
        change.style.color= "red";
    }
    else if (inputpass.value.length >= 4 && inputpass.value.length < 8) {
        changeshowmes.innerHTML = "Medium";
        inputpass.style.borderColor = "orange";
        change.style.color= "orange";    
    }
    else{
        changeshowmes.innerHTML = "Strong";
        inputpass.style.borderColor = "green";
        change.style.color= "green";
    }
    });
