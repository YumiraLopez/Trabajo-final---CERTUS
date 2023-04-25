/*Función addCarrito*/
function addCarrito(e){
   /*obtener el elemento donde se hizo click*/ 
    let elementoBoton= e.target;
   /*obtener el elemento padre del boton */  
   let elementoArticulo = elementoBoton.parentElement;
/*array del artículo*/ 
let objetoArticulo = new Array();
/*llenar los datos  del artículo*/
objetoArticulo.push(elementoArticulo.querySelector("h4").innerHTML);
objetoArticulo.push(elementoArticulo.querySelector(".precioOriginal").innerHTML);
objetoArticulo.push(elementoArticulo.querySelector(".precioDescuento").innerHTML);
objetoArticulo.push(elementoArticulo.querySelector(".precioFinal").innerHTML);
/*Obtener elemento cuerpo de Modal*/
let cuerpoModal = document.querySelector("#ventanaCarrito > div > div > div.modal-body")
/*Vaciar cuerpo de Modal si no tiene items*/
if(cuerpoModal.querySelector("table") == null){

    cuerpoModal.innerHTML="";
}
/*crear nuevo elemento con el contenido del articulo*/
let itemModal = document.createElement("div");
itemModal.innerHTML=`
<table class="table" >
<tr>
<td>
<h5>${objetoArticulo[0]} </h5>
<p> Precio Original: <span class="precioOriginal"> ${objetoArticulo[1]}</span></p>
</td>
    <td style="min-width: 120px;" >
    <p class="precioDescuento"> ${objetoArticulo[2]} </p>
    <p class="precioFinal"> ${objetoArticulo[3]} </p>
</td>
</tr>
</table>

`;
/*Insertar el elemento en el cuerpo del Modal*/
cuerpoModal.append(itemModal);
/*Mensaje informando que se agregó el producto*/
alert("Se agregó el producto al carrito");
}

/*Función limpiarCarrito*/
function limpiarCarrito(){
    /*Solicitar Confirmación*/
let estado = confirm("¿Quieres eliminar los productos del carrito?")
/*Si se confirmó limpiar*/
if(estado){
/*Obtener elemento cuerpo de Modal*/
let cuerpoModal = document.querySelector("#ventanaCarrito > div > div > div.modal-body")

/*Reemplazar contenido*/
cuerpoModal.innerHTML= `
<picture>
<img id="imagenCarritoVacio" class="img-fluid mx-auto d-block" src="image/recursos/carrito-vacio.jpg" alt="carrito vacío">
</picture>
<p class="text-center"> Puedes seguir viendo las promociones </p>
`;
}
}