let array = JSON.parse(localStorage.getItem('array')) ||[];
console.log(array);

array.map((ele)=>{
    let img = document.createElement('img');
    img.src = ele.img;
    img.style.border = '1px solid'



    let img2 = document.createElement('img');
    img2.src = ele.img2;
    img2.style.border = '1px solid red'
    img2.style.height = "100%"
    img2.style.width = "100%"

    let img3 = document.createElement('img');
    img3.src = ele.img3;
    img3.style.border = '1px solid'
    img3.style.height = "100%"
    img3.style.width = "100%"

    let img4 = document.createElement('img');
    img4.src = ele.img4;
    img4.style.border = '1px solid'

    // let div_img = document.createElement('div');
    // div_img.append(img);
    // div_img.setAttribute("class","aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block");

    

    document.getElementById('img').append(img)
    document.getElementById('img2').append(img2)
    document.getElementById('img3').append(img3)

    document.getElementById('img4').append(img4)



    let name = document.createElement('h1');
    name.innerHTML = ele.name;

    document.getElementById('title').append(name);


    let price = document.createElement('p');
    price.innerHTML = ele.price;

    document.getElementById('price').append(price);

    

    let button = document.createElement('button')
    button.innerHTML = "Add to Cart";
    button.addEventListener('click', () =>{
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(ele);
            localStorage.setItem('cart',JSON.stringify(cart));
            alert('Product Added to Cart')

            localStorage.removeItem("array")
            window.open('/JavaScript_Project/Pages/Order.html');

            window.location.reload();
    })

    document.getElementById('button').append(button);

    // document.getElement("Add_Cart").addEventListener("click",()=>{
    //     let cart = JSON.parse(localStorage.getItem('cart')) || [];
    //     cart.push(ele);
    //     localStorage.setItem('cart',JSON.stringify(cart));
    //     alert('Product Added to Cart')
    // })
    
})