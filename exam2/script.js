let Array = [];

const del = (index) =>{
    // document.getElementById("Display").innerHTML = " ";
    Array.splice(index,1)
    ui();
}

const ui= () =>{
    document.getElementById("Display").innerHTML = " ";

    Array.map((ele,i)=>{
        let Image = document.createElement("img");
        Image.src = ele.Image;
        Image.setAttribute("class","uiImage");

        let Title = document.createElement("h4");
        Title.innerHTML = ele.Title;

        let Price = document.createElement("p");
        Price.innerHTML = ele.Price;

        let div2 = document.createElement("div");
        div2.innerHTML = "Delete";
        div2.addEventListener("click",()=>del(i));
        div2.setAttribute("id","div2");

        let div3 = document.createElement("div");
        div3.innerHTML = "buy";
        div3.setAttribute("id","div3");

        let div1 = document.createElement("div");
        div1.append(div2,div3);
        div1.setAttribute("id","div1");

        let div = document.createElement("div");
        div.append(Image,Title,Price,div1);
        
        div.setAttribute("class","dis")

        document.getElementById("Display").append(div);

        

    })
}


const handleData = (e) =>{
    e.preventDefault();

    let Data = {
        Image : document.getElementById("Image").value,
        Title : document.getElementById("Title").value,
        Price : document.getElementById("Price").value,
        // Delete : document.getElementById("Delete"),
    }

    Array.push(Data);
// console.log(Data);

    ui();
}

document.getElementById("collect").addEventListener("submit",handleData);