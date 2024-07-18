import { Deletecart, getcart } from "../Api/All.api.js";
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
      Deletecart(data[0].id)
    }
   })
  
  
  
   };


const Mapper = (data) => {
    let total = 0
    data.map((ele) => {
        total += Number(ele.price)
        let title = document.createElement('h3');
        title.innerHTML = ele.title
        let price = document.createElement('h5');
        price.innerHTML = "Rs : "+ele.price
        let img = document.createElement('img');
        img.src = ele.url

        let btn1 = document.createElement('p');
        btn1.innerHTML = "qty : 1";

        let div = document.createElement('div');

        div.append(img, title, price,btn1)

        document.getElementById("productList").append(div)
    })

    countprice(total)
}

let data = await getcart()
console.log(data);
Mapper(data)