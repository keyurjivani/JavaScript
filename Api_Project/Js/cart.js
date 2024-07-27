import { cart_API } from "../Api/All.api.js";
import navbar from "../Compopnents/navbar.js";

document.getElementById("navbar").innerHTML = navbar()

const countprice = (total) => {
    console.log("total", total);
    document.getElementById("bill").innerHTML = ` Cost: ${total}`;
    
    handleDiscount(total);
  };


  const handleDiscount = (countp) => {
    let discount = countp * 0.1;
    
  
    let total_Discount = countp - discount;
    console.log(total_Discount, discount);
    let dis = document.createElement("p");
    dis.innerHTML = discount

  
   document.getElementById("bill1").innerHTML = `Discount(10%): ${discount}`
   document.getElementById("bill2").innerHTML = `Total Bill: ${total_Discount}`
  
   document.getElementById("Cheack_Out").addEventListener("click",()=>{
    if (data == "") {
      alert("Please Choice Product")
    }else{
      alert("Your Products Deliver In 2 & 3 Working Day.....");
      console.log("data",data[0].id);
      cart_API.delete(data[0].id)
    }
   })
  
  
  
   };


   const handledelete=(index)=>{
    cart_API.delete(index);
    Mapper(data);
}

   const handleqty=(item,index,oper)=>{
    if(oper=="+"){
        let d={
            id:item.id,
            img:item.img,
            title:item.title,
            price:item.price,
            category:item.category,
            qty:item.qty+=1,
        }
        cart_API.patch(d,item.id);
    }else{
        if(data[index].qty>1){
            let d={
                id:item.id,
                img:item.img,
                title:item.title,
                price:item.price,
                category:item.category,
                qty:item.qty-=1,
            }
            cart_API.patch(d,item.id);
        }else{
            handledelete(item.id);
        }
    }
    Mapper(data);
}

const Mapper = (data) => {
    let total = 0
    document.getElementById("productList").innerHTML = ""
    data.map((ele,index) => {
        total += ele.price * ele.qty
        let title = document.createElement('h3');
        title.innerHTML = ele.title
        let price = document.createElement('h5');
        price.innerHTML = "Rs : "+ele.price
        let img = document.createElement('img');
        img.src = ele.url

        let btn1=document.createElement("button");
        btn1.innerHTML="-";
        btn1.addEventListener("click",()=>handleqty(ele,index,"-"));

        let btn2=document.createElement("button");
        btn2.innerHTML=ele.qty;
        let btn3=document.createElement("button");
        btn3.innerHTML="+";
        btn3.addEventListener("click",()=>handleqty(ele,index,"+"));

        let div = document.createElement('div');
        div.style.border = "1px solid"
        div.style.textAlign = "center"
        div.style.padding = "10px"
        div.style.marginTop = "10px"
        div.style.width = "350px"
        div.style.borderRadius = "10px"
        div.setAttribute("class", "divmain")
        div.append(img, title, price,btn1,btn2,btn3)

        document.getElementById("productList").append(div)
    })

    countprice(total)
}

let data = await cart_API.get()
console.log(data);
Mapper(data)