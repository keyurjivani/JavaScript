import { Collect_Products, Delete_products, getProducts, Update_Products } from "./products.api.js";
let id = -1
const HandleData = (e) =>{
    e.preventDefault()

    let Products = {
        url : document.getElementById("url").value,
        Title : document.getElementById("Title").value
    }
    // console.log(Products);
    if(id == -1){
        Collect_Products(Products)
    }else{
        Update_Products(id,Products)
    }
}

const UpdatePro = (ele) =>{
    document.getElementById("url").value = ele.url,
    document.getElementById("Title").value = ele.Title

    id = ele.id

}

const Ui = (data) =>{
    document.getElementById("Products").innerHTML = ""
    data.map((ele)=>{
        let url = document.createElement("img");
        url.src = ele.url;

        let Title = document.createElement("h4");
        Title.innerHTML = ele.Title

        let Update = document.createElement("button");
        Update.innerHTML = "Update"
        Update.addEventListener("click",()=>{
            UpdatePro(ele)
        })

        let Delete = document.createElement("button");
        Delete.innerHTML = "Delete"
        Delete.addEventListener("click",()=>{
            Delete_products(ele.id);
        })

        let div = document.createElement("div");
        div.append(url,Title,Update,Delete)

        document.getElementById("Products").append(div)
    })
}



let data = await getProducts()
Ui(data)

document.getElementById("Data_Collect").addEventListener("submit",HandleData)