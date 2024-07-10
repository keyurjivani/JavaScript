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

    Patch: async(id,data)=>{
        let req = await fetch(`http://localhost:3000/User/${id}`,{
            method : "PATCH",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
    },

    Delete: async(id)=>{
        let req = await fetch(`http://localhost:3000/User/${id}`,{
            method : "DELETE",
        })
    }


}