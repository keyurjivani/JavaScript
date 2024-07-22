export const api = {
    post: async(data)=>{
        let req = await fetch (`http://localhost:3000/User`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
        let res = await req.json()
    },

    get:async()=>{
        let req = await fetch(`http://localhost:3000/User`);
        let res = await req.json();
        return res;
    },
}

export const createProduct = async (product) => {
    let req = await fetch('http://localhost:3000/Products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    let res = await req.json();
}

export const getProducts = async () => {
    let req = await fetch('http://localhost:3000/Products');
    let res = await req.json()
    return res
}



export const createcart = async (product) => {
    let req = await fetch('http://localhost:3000/Cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
    let res = await req.json();
}

export const getcart = async () => {
    let req = await fetch('http://localhost:3000/Cart');
    let res = await req.json()
    return res
}

export const Deletecart = async (id) => {

    let req = await fetch(`http://localhost:3000/Cart/${id}`, {
        method: 'DELETE'
    })
}



export const updatecart = async (id, product) => {
    let req = await fetch(`http://localhost:3000/Cart/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    })
}