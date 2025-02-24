
import { postUsers } from "./services/usuarios.js"


const Rusuario = document.getElementById("Rusuario")
const Rcontraseña = document.getElementById("Rcontraseña")

const btnRegistrar = document.getElementById("btnRegistrar")


btnRegistrar.addEventListener("click",function () {
                  
    postUsers(Rusuario.value,Rcontraseña.value)
    
    Swal.fire({
        title: "Usuario registrado correctamente!",
        icon: "success",
        draggable: true
    })
        .then(() => {
        setTimeout (() => {
            location.reload(); // Recarga la página después de cerrar el SweetAlert
        }, 500)
    });

})


