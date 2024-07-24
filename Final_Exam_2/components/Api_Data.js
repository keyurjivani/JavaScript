export const api = {
    post: async(data)=>{
        let req = await fetch (`https://e-learn-db-json-1.onrender.com/Users`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
        let res = await req.json()
    },

    get:async()=>{
        let req = await fetch(`https://e-learn-db-json-1.onrender.com/Users`);
        let res = await req.json();
        return res;
    },


    BookPost: async(data)=>{
        let req = await fetch (`https://e-learn-db-json-1.onrender.com/AddBook`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
        let res = await req.json()
    },

    Bookget:async()=>{
        let req = await fetch(`https://e-learn-db-json-1.onrender.com/AddBook`);
        let res = await req.json();
        return res;
    },



    DashBoardPost: async(data)=>{
        let req = await fetch (`https://e-learn-db-json-1.onrender.com/DashBoard`,{
            method : "POST",
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(data)
        })
        let res = await req.json()
    },

    DashBoardGet:async()=>{
        let req = await fetch(`https://e-learn-db-json-1.onrender.com/DashBoard`);
        let res = await req.json();
        return res;
    },

    Delete: async(id)=>{
        let req = await fetch(`https://e-learn-db-json-1.onrender.com/DashBoard/${id}`,{
            method : "DELETE",
        })
    }
}