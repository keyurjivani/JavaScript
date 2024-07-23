export const api = {
    post: async(data)=>{
        let req = await fetch (`http://localhost:3000/Users`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
        let res = await req.json()
    },

    get:async()=>{
        let req = await fetch(`http://localhost:3000/Users`);
        let res = await req.json();
        return res;
    },


    BookPost: async(data)=>{
        let req = await fetch (`http://localhost:3000/AddBook`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
        let res = await req.json()
    },

    Bookget:async()=>{
        let req = await fetch(`http://localhost:3000/AddBook`);
        let res = await req.json();
        return res;
    },
}