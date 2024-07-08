

export const create = async(users)=>{
    let req = await fetch( `http://localhost:3000/users`,{
        method : "post",
        headers : {
            'content-type':'application/json'
        },
        body : JSON.stringify(users)
        // body : localStorage.setItem("users",JSON.stringify(users))
    })

    let res  = await req.json();

}

export const get = async()=>{
    let req = await fetch(`http://localhost:3000/users`)
    let res = await req.json()
    console.log(res);
}
