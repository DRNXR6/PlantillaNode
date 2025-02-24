import { postProduct,getProduct,updateProduct,deleteProduct } from "./services/llamarProductos.js"
import { eliminar, info} from "./alerts.js";


const tabla = document.getElementById("tabla")


const producto = document.getElementById("producto")
const precio = document.getElementById("precio")
const stock = document.getElementById("stock")
const agregar = document.getElementById("agregar")
const cerrarSesion = document.getElementById("cerrarSesion")


const registrar = document.getElementById("registrar")

const contEditar = document.getElementById("contEditar")

const editProducto = document.getElementById("editProducto")
const editPrecio = document.getElementById("editPrecio")
const editStock = document.getElementById("editStock")
const actualizar = document.getElementById("actualizar")

const cancelarAgregar = document.getElementById("cancelarAgregar")

const cancelarEdit = document.getElementById("cancelarEdit")
const contAgregar = document.getElementById("contAgregar")




MostrarProductos()


cerrarSesion.addEventListener("click",function () {

    
    Swal.fire({
        title: "Cerrar sesión?",
        text: "",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar!"
    }).then((result) => {
        if (result.isConfirmed) {

            window.open("index.html", "_self");
        }
    })
})


agregar.addEventListener("click",function () {
    contAgregar.style.display = "block"
    
    registrar.addEventListener("click",function () {
        
    
        if(producto.value.trim() != "" || precio.value != "" || stock.value != ""){
            
            postProduct(producto.value,precio.value,stock.value)
            
            Swal.fire({
                title: "Agregado correctamente!",
                icon: "success",
                draggable: true
            }).then(() => {
                setTimeout (() => {
                    location.reload(); // Recarga la página después de cerrar el SweetAlert
                }, 500)
            });

        }
        else {
            info()
        }  
    
        contAgregar.style.display = "none"
    })


})


cancelarAgregar.addEventListener("click",function () {
    contAgregar.style.display = "none"

})

cancelarEdit.addEventListener("click",function () {
    contEditar.style.display = "none"

})

 async function MostrarProductos() {
    

   const datos = await getProduct()
   
   console.log(datos);

   for (let index = 0; index < datos.length; index++) {
   

    let tr = document.createElement("tr")

    let tdCodigo = document.createElement("td")

    let tdProducto = document.createElement("td")

    let tdPrecio = document.createElement("td")

    let tdStock = document.createElement("td")

    let tdAcciones = document.createElement("td")


    let btnDelete = document.createElement("button")
    btnDelete.id = "btnDelete"
    btnDelete.textContent = "eliminar"

    let btnEditar = document.createElement("button")
    btnEditar.id = "btnEditar"

    let imgEdit = document.createElement("img")
    imgEdit.src = "img/edit.svg"

    btnEditar.innerText = " Modificar"



    tdCodigo.textContent = datos[index].id
    tdProducto.textContent = datos[index].producto
    tdPrecio.textContent = datos[index].precio
    tdStock.textContent = datos[index].stock




    tdAcciones.appendChild(btnEditar)
    tdAcciones.appendChild(btnDelete)

    
    tr.appendChild(tdCodigo)

    tr.appendChild(tdProducto)
    tr.appendChild(tdPrecio)
    tr.appendChild(tdStock)
    tr.appendChild(tdAcciones)




    tabla.appendChild(tr)


    console.log(tabla);
    
    
    btnDelete.addEventListener("click",function () {
    
        
        Swal.fire({
            title: "Deseas eliminar este producto?",
            text: "",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Aceptar!"
        }).then((result) => {
            if (result.isConfirmed) {

            //   eliminar();
              deleteProduct(datos[index].id);
          

              Swal.fire({
                title: "Borrado exitosamente!",
                text: "El producto ha sido eliminado.",
                icon: "success"
              }).then(() => {
                setTimeout (() => {
                    location.reload(); // Recarga la página después de cerrar el SweetAlert
                }, 600)
            });
            }
        })
    })

    btnEditar.addEventListener("click", function () {
        
        contEditar.style.display = "block"

        
        actualizar.addEventListener("click", function () {

            if (editProducto.value == "" || editPrecio.value == "" || editStock.value == "") {
                info()
            }
            else {
                updateProduct(editProducto.value,editPrecio.value,editStock.value,datos[index].id)

                Swal.fire({
                    title: "Actualizado correctamente!",
                    icon: "success",
                    draggable: true
                }).then(() => {
                    location.reload(); // Recarga la página después de cerrar el SweetAlert
                });
                
    
                contEditar.style.display = "none"
            }
        })
    
    })
    
   }
   

}

