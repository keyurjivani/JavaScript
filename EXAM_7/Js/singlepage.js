let UserData = JSON.parse(localStorage.getItem('UserData')) || [];


const Ui = (UserData) =>{
    document.getElementById("show").innerHTML = ""
    UserData.map((ele)=>{
        let img = document.createElement("img");
        img.src = ele.Url1;
         img.style.width = "250px"
        img.style.height = "250px"
        img.style.margin = "20px "


        let img1 = document.createElement("img");
        img1.src = ele.Url2;
         img1.style.width = "250px"
        img1.style.height = "250px"
        img1.style.margin = "20px "


        let img2 = document.createElement("img");
        img2.src = ele.Url3;
         img2.style.width = "250px"
        img2.style.height = "250px"
        img2.style.margin = "20px "


        let Title = document.createElement("h3");
        Title.innerHTML = ele.Title;

        let Des = document.createElement("p");
        Des.innerHTML = ele.Des

        let Cost = document.createElement("h5");
        Cost.innerHTML = ele.Cost

        let like = document.createElement("button");
        like.innerHTML = `like : ${ele.like}` 
        like.addEventListener("click",()=>handleLike(i))
        like.style.margin = "10px"

        let comment = document.createElement("button");
        comment.innerHTML = `comment ` 
       comment.addEventListener("click",()=> comment(i))
        comment.style.margin = "10px"


        let share = document.createElement("button");
        share.innerHTML = `share ` 
        share.addEventListener("input",()=>{
            
        })


        document.getElementById("show").append(img,img1,img2,Title,Des,Cost,like,comment,share)
    })
}
Ui(UserData)