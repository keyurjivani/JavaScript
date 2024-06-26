import Navbar from "../Components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let Place = JSON.parse(localStorage.getItem("Place")) || [];



 const handleLike =(index)=>{
    Place[index].like+=1;
    console.log(Place[index].like)
    localStorage.setItem("Place",JSON.stringify(Place));
    UiMake(Place)
 }


 const handleSort = (sort) => {
    if (sort == "L_T_h") {
        let temp = Place.sort((a, b) => a.Cost - b.Cost);

        UiMake(temp);
    } else {
        let temp = Place.sort((a, b) => b.Cost - a.Cost);
        UiMake(temp);
    }
};

const handleLikesort = (sort) => {
    if (sort == "Low_Like") {
        let temp = Place.sort((a, b) => a.like - b.like);

        UiMake(temp);
    } else {
        let temp = Place.sort((a, b) => b.like - a.like);
        UiMake(temp);
    }
};


const handleSearch = (value) => {
    let temp = Place.filter((ele) => ele.Title.includes(value));
    UiMake(temp);
}

const handleKeypress = (e) => {
    //  enter keypress
    //    if(e.key=="Enter") {
    if(e.key == "Enter"){

  
        let searchValue = document.getElementById("searchValue").value;
        console.log(searchValue);
        handleSearch(searchValue)
    }
    //    }
  
   
}


document.getElementById("searchValue").addEventListener("keypress", handleKeypress)







let UserData = JSON.parse(localStorage.getItem('UserData')) || [];
const  handleSingle =(index)=>{
    // e.preventDefault();
    UserData.push(Place[index]);
    localStorage.setItem("UserData",JSON.stringify(UserData))
    console.log(UserData);
}


const UiMake = (Place) =>{
    document.getElementById("display").innerHTML =""
    Place.map((ele,i)=>{
        let img = document.createElement("img")
        img.src = ele.Url1
        img.style.width = "250px"
        img.style.height = "250px"

        let Title = document.createElement("h4");
        Title.innerHTML = ele.Title;

        let Cost = document.createElement("h5");
        Cost.innerHTML = ele.Cost

        let like = document.createElement("button");
        like.innerHTML = `like : ${ele.like}` 
        like.addEventListener("click",()=>handleLike(i))
        like.style.margin = "10px"

        let btn = document.createElement("button");
        btn.innerHTML = "Wish List";
        btn.addEventListener("click",()=>handleSingle(i))
    

        let div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.padding = "10px"
        div.style.textAlign = "center"
        div.append(img,Title,Cost,like,btn)

        div.addEventListener("click",(i)=>{
            window.location.href = " /Pages/singlepage.html"
        })

        



       document.getElementById("display").append(div)
    })
}
UiMake(Place)



document.getElementById("L_T_h").addEventListener("click", () => handleSort("L_T_h"));
document.getElementById("H_T_L").addEventListener("click", () => handleSort("H_T_L"));

document.getElementById("Low_Like").addEventListener("click", () => handleLikesort("Low_Like"));
document.getElementById("High_Like").addEventListener("click", () => handleLikesort("High_Like"));




























