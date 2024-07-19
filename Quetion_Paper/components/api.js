

export const api = {
    post: async(data)=>{
        let req = await fetch (`https://db-json-3.onrender.com/quetion`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
        let res = await req.json()
        console.log("post",res);
    },

    get:async()=>{
        let req = await fetch(`https://db-json-3.onrender.com/quetion`);
        let res = await req.json();
        return res;
    },


}