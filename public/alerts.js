
function eliminar() {
    
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
          Swal.fire({
            title: "Borrado exitosamente!",
            text: "El producto ha sido eliminado.",
            icon: "success"
          });
        }
      });
}

function info() {
    Swal.fire({
        title: "¡Porfavor rellena todos los campos!",
        icon: "info"
      });
}

export {eliminar,info}