
import { getUsers } from "./services/usuarios.js"


const loginUsuario = document.getElementById("loginUsuario")
const loginContraseña = document.getElementById("loginContraseña")

const btnLogin = document.getElementById("btnLogin")



btnLogin.addEventListener("click",function () {
                  
    // postUsers(loginUsuario.value,loginContraseña.value)
    
    MostrarProductos()

    // Swal.fire({
    //     title: "Usuario registrado correctamente!",
    //     icon: "success",
    //     draggable: true
    // })
    //     .then(() => {
    //     setTimeout (() => {
    //         location.reload(); // Recarga la página después de cerrar el SweetAlert
    //     }, 500)
    // });

})

async function MostrarProductos() {

    const datos = await getUsers()

   for (let index = 0; index < datos.length; index++) {
        const element = datos[index];
        console.log(element);

        if (loginUsuario.value === element.usuario && loginContraseña.value === element.contraseña) {
            console.log("Usuario correcto");

            window.open("productos.html", "_self"); 
        }

        else {
            console.log("Usuario incorrecto");

        }
    }

}
