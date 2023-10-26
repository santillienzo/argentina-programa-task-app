import { getOneProduct, getProductInCategory } from "../services/products.js";

const id = new URLSearchParams(window.location.search).get("id");
//inicializar elementos

const producto_imagen = document.getElementById("producto-imagen");
const producto_titulo = document.getElementById("producto-titulo");
const producto_tiempo = document.getElementById("producto-tiempo");
const producto_descrtipcion = document.getElementById("producto-descripcion");
const producto_responsable = document.getElementById("producto-responsable")


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
        producto_imagen.src = producto.imagen;
        producto_titulo.textContent = producto.titulo;
        producto_tiempo.textContent = "Tiempo: "+producto.tiempo;
        producto_descrtipcion.textContent = producto.descripcion;
        producto_responsable.textContent = "Responable: " + producto.responsable;
        
        console.log(producto)
        fillProductosRelacionados(producto.estado);

   }
}

fillProduct();