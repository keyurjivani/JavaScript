export const api = {
    post: async(data)=>{
        let req = await fetch (`https://manage-db-json-3.onrender.com/User`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
        let res = await req.json()
    },

    get:async()=>{
        let req = await fetch(`https://manage-db-json-3.onrender.com/User`);
        let res = await req.json();
        return res;
    },

    Patch: async(id,data)=>{
        let req = await fetch(`https://manage-db-json-3.onrender.com/User/${id}`,{
            method : "PATCH",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
    },

    Delete: async(id)=>{
        let req = await fetch(`https://manage-db-json-3.onrender.com/User/${id}`,{
            method : "DELETE",
        })
    }


}


export const createProduct = async (product) => {
    let req = await fetch('https://manage-db-json-3.onrender.com/Products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    let res = await req.json();
}

export const getProducts = async () => {
    let req = await fetch('https://manage-db-json-3.onrender.com/Products');
    let res = await req.json()
    return res
}



export const DeleteProduct = async (id) => {

    let req = await fetch(`https://manage-db-json-3.onrender.com/Products/${id}`, {
        method: 'DELETE'
    })
}



export const updateProduct = async (id, product) => {
    let req = await fetch(`https://manage-db-json-3.onrender.com/Products/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
}



export const cart_API={
    get:async()=>{
        let req=await fetch(`https://manage-db-json-3.onrender.com/Cart`)
        let res=await req.json();
        return res;
    },

    post:async(data)=>{
        let req=await fetch(`https://manage-db-json-3.onrender.com/Cart`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    patch:async (data,id)=>{
        let req=await fetch(`https://manage-db-json-3.onrender.com/Cart/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
    },

    delete:async (id)=>{
        let req=await fetch(`https://manage-db-json-3.onrender.com/Cart/${id}`,{
            method:"DELETE",
        })
    },
}




// export const createcart = async (product) => {
//     let req = await fetch('https://manage-db-json-3.onrender.com/Cart', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(product)
//     })
//     let res = await req.json();
// }

// export const getcart = async () => {
//     let req = await fetch('https://manage-db-json-3.onrender.com/Cart');
//     let res = await req.json()
//     return res
// }



// export const Deletecart = async (id) => {

//     let req = await fetch(`https://manage-db-json-3.onrender.com/Cart/${id}`, {
//         method: 'DELETE'
//     })
// }



// export const updatecart = async (id, product) => {
//     let req = await fetch(`https://manage-db-json-3.onrender.com/Cart/${id}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(product)
//     })
// }