let Array = [];

const handledelete = (index) =>{
    Array.splice(index,1)
    Ui();
}

const Ui = () => {
    document.getElementById("tbody").innerHTML = " ";
    Array.map ((item,i)=>{

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = item.UserName;

        let td2 = document.createElement("td");
        td2.innerHTML = item.email;

        let td3 = document.createElement("td");
        td3.innerHTML = item.Dob;

        let td4 = document.createElement("td");
        td4.innerHTML = item.City;

        let td5 = document.createElement("td");
        td5.innerHTML = item.Password;

        let td6 = document.createElement("td");
        td6.innerHTML = "delete"

        td6.addEventListener("click",()=>handledelete(i))

        tr.append(td1,td2,td3,td4,td5,td6);

        td6.setAttribute("class","design")

        document.getElementById("tbody").append(tr)
    })
}

const HanbleData = (e) => {
    e.preventDefault();

    let Data = {
        UserName : document.getElementById("UserName").value,
        email : document.getElementById("email").value,
        Dob : document.getElementById("Dob").value,
        City : document.getElementById("City").value,
        Password : document.getElementById("Password").value,
    }

    Array.push(Data);

    Ui();
}
const DeleteAll =() =>{
    document.getElementById("tbody").innerHTML = " "
    Array = []
}

document.getElementById("CollectData").addEventListener("submit",HanbleData);
document.getElementById("DeleteAll").addEventListener("click",DeleteAll);