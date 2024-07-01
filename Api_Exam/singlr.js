let key = JSON.parse(localStorage.getItem("key"));

const getdata = async(i)=>{
    let req = await fetch(`https://dummyjson.com/products/${i}`)
    let res = await req.json()
    console.log(res);

    uim(res)
    // ui(res.products)
}
getdata(key)


const uim = (data) =>{
    let image = document.createElement("img");
        image.src = data.thumbnail

        let title = document.createElement("h5");
       
        if(data.title.length>15){
            let str = ""
            for(let i=0;i<15;i++){
                str += data.title[i]
            }
            str+=".."
            title.innerHTML = `${str}`
        }else{
            title.innerHTML = `${data.title}`
        }

        let des = document.createElement("p");
        des.innerHTML = data.description

        let rat = document.createElement("p");
        rat.innerHTML = `rating : ${data.rating}`

        let stock = document.createElement("p");
        stock.innerHTML = `stock : ${data.stock}`

        let category = document.createElement("p");
        category.innerHTML = data.category

        let price = document.createElement("h5");
        price.innerHTML = data.price

        let Buy = document.createElement("button");
        Buy.innerHTML = "Buynow"
              

        let div = document.createElement("div");
        div.append(image,title,category,price,des,rat,stock,Buy)
        div.style.border = "1px solid black"

        document.getElementById("Data").append(div)
}
