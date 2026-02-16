var popupoverlay = document.querySelector(".popup-overlay")
var overlaybox = document.querySelector(".overlay-box")
var addbtnaction = document.querySelector(".add-btn")

addbtnaction.addEventListener("click", function(){
    popupoverlay.style.display = "block"
    overlaybox.style.display = "block"
})

var btncancel=document.getElementById("btn-cancel")
btncancel.addEventListener("click",function(){
    popupoverlay.style.display = "none"
    overlaybox.style.display = "none"
})

var container = document.querySelector(".container")
var addcontainer = document.getElementById("add-container")
var addtitle = document.getElementById("add-title")
var addsub = document.getElementById("add-sub")
var adddescri = document.getElementById("add-descri")

addcontainer.addEventListener("click", function(){
     event.preventDefault()
    var div = document.createElement("div")

    div.setAttribute("class", "bx1")

    div.innerHTML = `
        <h3>${addtitle.value}</h3>
        <h5>${addsub.value}</h5>
        <p>${adddescri.value}</p>
        <button onclick="deletecontainter(event)">Delete</button>
    ` 

    container.append(div)
    popupoverlay.style.display = "none"
    overlaybox.style.display = "none"

})

function deletecontainter(event){
    event.target.parentElement.remove()
}
