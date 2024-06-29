

const Ui = (data) =>{
    
    // console.log(data);
    data.map((ele)=>{
        let image = document.createElement("img");
        image.src = ele.image;
        image.setAttribute("class","image")

        let Title = document.createElement("h5");
        // Title.innerHTML = `Title :  ${ele.title}`;
        Title.setAttribute("class","Title")
        console.log(ele.title.length);
        if(ele.title.length>25){
            console.log("string");
            let str = "";
            for (let i = 0; i < 25; i++) {
                str += ele.title[i];
            }
            str+="..."
            console.log("str",str);
        Title.innerHTML = `  ${str}`;
        }else{
            console.log("else part");
        Title.innerHTML = `  ${ele.title}`;

        }


        let Price  = document.createElement("h4");
        Price.innerHTML = `Price : ${ele.price}`;
        Price.setAttribute("class","Price")

        let Category = document.createElement("p");
        Category.innerHTML = `Category : ${ele.category}`;
        Category.setAttribute("class","category")

        // let Des = document.createElement("p");
        // Des.innerHTML = ele.description

        let div2 = document.createElement("div");

        let Rating = document.createElement("span");
        Rating.innerHTML = `Rate : ${ele.rating.rate}`
        Rating.setAttribute("class","Rating")

        // let Rate_Count = document.createElement("span");
        // Rate_Count.innerHTML = `Count : ${ele.rating.count}`

        div2.append(Rating)
        div2.setAttribute("id","div2")

        let div3 = document.createElement("div");

        let btn1 = document.createElement("button");
        btn1.innerHTML = "Buy Now"
        btn1.setAttribute("id","btn1")

        let btn2 = document.createElement("button");
        btn2.innerHTML = "Delete"
        btn2.setAttribute("id","btn2")

        div3.append(btn1,btn2)
        div3.setAttribute("id","div3")

        let div = document.createElement("div");
        div.append(image,Title,Price,Category,div2,div3)
        div.setAttribute("id","div_main")

        document.getElementById("Display").append(div)
    })
}






const GetData = async ()=>{
    let req = await fetch("https://fakestoreapi.com/products");
    let res = await req.json();
    // console.log(res);
    Ui(res)
}
GetData()