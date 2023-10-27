import { getAllProducts } from "../services/products.js";

//INSTANCIAS DE ELEMENTOS
const contenedor_porHacer = document.getElementById("contenedor-porHacer");
const contenedor_enProduccions = document.getElementById("contenedor-enProduccion");
const contenedor_porTestear = document.getElementById("contenedor-porTestear");
const contenedor_completada = document.getElementById("contenedor-completada");
const fillProducts = async() =>{
    const products = await getAllProducts();
  
    products.forEach(product => {
        const estado = product.estado;
        let container;
        if (estado === "PORHACER") {
            container = contenedor_porHacer;
        } else if (estado === "ENPRODUCCION") {
            container = contenedor_enProduccions;
        } else if (estado === "PORTESTEAR") {
            container = contenedor_porTestear;
        } else if (estado === "COMPLETADA") {
            container = contenedor_completada;
        }

        console.log(product.id);
        //crear elemento en la categoria
        container.innerHTML += `
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
                <span>${"Tiempo: " +product.tiempo}</span> <br>
                <span>${"Responsable: " + product.responsable}</span>
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
    });
}

fillProducts();