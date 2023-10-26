export function getAllProducts() {
    return fetch('http://localhost:3000/tasks')
    .then(res=>res.json())
    .then(json=>json)
}

export function getOneProduct(id){
    return fetch(`http://localhost:3000/tasks/${id}`)
    .then(res=>res.json())
    .then(json=>json)
}

export function getProductInCategory(category){
    return fetch(`http://localhost:3000/tasks?estado=${category}`)
    .then(res=>res.json())
    .then(json=>json)
}