import { deleteProduct, getOneProduct, getProductInCategory, updateStateProduct } from "../services/products.js";

const id = new URLSearchParams(window.location.search).get("id");
//inicializar elementos

const productoImagen = document.getElementById("producto-imagen");
const productoTitulo = document.getElementById("producto-titulo");
const productoTiempo = document.getElementById("producto-tiempo");
const productoDescripcion = document.getElementById("producto-descripcion");
const productoResponsable = document.getElementById("producto-responsable")
const btnDelete = document.getElementById("delete-button")
const btnUpdateState = document.getElementById("update-button")
const estadoSelect = document.getElementById("estado")
//TOAST
const _successToast = document.getElementById('successToast')
const _errorToast = document.getElementById('errorToast')


const  productosRelacionadosContainer = document.getElementById("productos-relacionados");

const fillProductosRelacionados = async (category) => {
    const products = await getProductInCategory(category);


    products.forEach(product => {
        //crear elemento
        productosRelacionadosContainer.innerHTML += `
        <div class="col">
          <div class="card h-100 ">
            <img 
              style="min-height:300px;
                    max-height: 300px;"
              class="card-img-top"
                    src="${product.imagen}">
            <div class="card-body p-4">
              <div class="text-center">
                <h5 class="fw-bolder">${product.titulo}</h5>
                <span>${"Tiempo: " + product.tiempo}</span><br>
                <span>${"Responsable: " + product.tiempo}</span>
              </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center d-flex gap-1 align-items-center justify-content-center">
                    <a href="/detalle.html?id=${product.id}" class="btn btn-outline-secondary mt-auto">Ver más</a>
                </div>
            </div>
          </div>
        </div>
        `;
    })
}

const fillProduct = async () => {
    const producto = await getOneProduct(id);
    if(producto){
        productoImagen.src = producto.imagen;
        productoTitulo.textContent = producto.titulo;
        productoTiempo.textContent = "Tiempo: "+producto.tiempo;
        productoDescripcion.textContent = producto.descripcion;
        productoResponsable.textContent = "Responable: " + producto.responsable;
        estadoSelect.value = producto.estado
        
        fillProductosRelacionados(producto.estado);

   }
}

btnDelete.addEventListener('click',async (e)=>{
  e.preventDefault()
  const product = await deleteProduct(id)

  
  if (product) {
    location.href = "/"
  }

})

btnUpdateState.addEventListener('click',async (e)=>{
  e.preventDefault()
  const successToast = bootstrap.Toast.getOrCreateInstance(_successToast)
  const errorToast = bootstrap.Toast.getOrCreateInstance(_errorToast)

  const estado = estadoSelect.value


  if (estado !== '') {
  
    const res = await updateStateProduct(id, estado)
  
    successToast.show()
    return
  }
  
  
  errorToast.show()
})


fillProduct();