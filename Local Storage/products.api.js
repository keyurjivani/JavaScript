export const Collect_Products = async(Products) =>{
    let req = await fetch (`http://localhost:3000/Productss`,{
        method : "POST",
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(Products)
    })
    let res = await req.json()
}


export const getProducts = async()=>{
    let req = await fetch (`http://localhost:3000/Productss`)
    let res = await req.json()
    return res
}

export const Delete_products = async(id) =>{
    let req = await fetch (`http://localhost:3000/Productss/${id}`,{
        method : "DELETE",
    })
}

export const Update_Products = async(id,Products) =>{

    let req = await fetch (`http://localhost:3000/Productss/${id}`,{
        method : "PATCH",
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(Products)
    })
    
}