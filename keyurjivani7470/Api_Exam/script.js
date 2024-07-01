
// let array = JSON.parse(localStorage.getItem("array"))

const get = async()=>{
    let req = await fetch("https://dummyjson.com/products")
    let res = await req.json()
    // console.log(res);
    ui(res.products);
    // localStorage.setItem("data",JSON.stringify(res.products))
    document.getElementById("All").addEventListener("click",()=>{
   
        
        ui(res.products);
    })


    document.getElementById("lth").addEventListener("click",()=>{
        let temp = (res.products).sort((a,b)=>a.price - b.price)
        ui(temp)
    })

    document.getElementById("htl").addEventListener("click",()=>{
        let temp = (res.products).sort((a,b)=>b.price - a.price)
        ui(temp)
    })

    document.getElementById("serach").addEventListener("submit",(e)=>{
        e.preventDefault()
        let value = document.getElementById("serching").value
        let temp = (res.products).filter((ele)=>ele.title.includes(value));
        ui(temp)
    })

    document.getElementById("serach1").addEventListener("submit",(e)=>{
        e.preventDefault()
        let value = document.getElementById("serching1").value
        let temp = (res.products).filter((ele)=>ele.category.includes(value));
        ui(temp)
    })





}
get()





const ui = (data) =>{
    document.getElementById("Products").innerHTML = ""
    console.log(data);
    data.map((ele,i)=>{
        let image = document.createElement("img");
        image.src = ele.thumbnail

        let title = document.createElement("h5");
       
        if(ele.title.length>15){
            let str = ""
            for(let i=0;i<15;i++){
                str += ele.title[i]
            }
            str+=".."
            title.innerHTML = `${str}`
        }else{
            title.innerHTML = `${ele.title}`
        }

     

        let category = document.createElement("p");
        category.innerHTML = ele.category

        let price = document.createElement("h5");
        price.innerHTML = ele.price

        let Buy = document.createElement("p");
        Buy.innerHTML = "More Info"
        Buy.addEventListener("click",()=>{
            localStorage.setItem("key",ele.id);
            window.location.href = "/Api_Exam/singlrpage.html"
        })

        let div = document.createElement("div");
        div.append(image,title,category,price,Buy)
        div.style.border = "1px solid black"

        // let rating = document.createElement("p");
        // rating.innerHTML = 

        document.getElementById("Products").append(div)


    })
}








