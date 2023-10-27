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

export function deleteProduct(id){
    return fetch(`http://localhost:3000/tasks/${id}`,{
        method: 'DELETE'
    })
    .then(res=>res.json())
    .then(json=>json)
}

//Usamos PATCH para actualizar solo un campo
export function updateStateProduct(id, newState){
    return fetch(`http://localhost:3000/tasks/${id}`,{
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accept": "/"
        },
        body: JSON.stringify({
            estado: newState
        })
    })
    .then(res=>{
        return res.json()
    })
    .catch(error=> error)
}