let body = document.querySelector("body")

let btn = document.createElement("button")

btn.innerHTML = "Click!"

body.appendChild(btn)

btn.addEventListener("click", function(){
    Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Operacion realizada"
    }) 
})