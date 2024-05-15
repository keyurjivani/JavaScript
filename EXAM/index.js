let User = [];

const Delete =(index) =>{

    User.splice(index,1)
    Uimake();
}
let num =0;

const Uimake = () => {
    document.getElementById("tbody").innerHTML = " ";
    
    
    User.map((ele,i)=>{

        let tr = document.createElement("tr");

        let td1  = document.createElement("td");
        td1.innerHTML = ele.name;

        let td2  = document.createElement("td");
        td2.innerHTML = ele.Job

        let td3  = document.createElement("td");
        td3.innerHTML = ele.Depa

        let td4  = document.createElement("td");
        td4.innerHTML = ele.salary

        let td5  = document.createElement("td");
        td5.innerHTML = ele.Email

        let td6  = document.createElement("td");
        td6.innerHTML = ele.Exp

        let td7 = document.createElement("td");
        if(ele.Exp > 5){
            td7.innerHTML = "senior";
        }
        else{
            td7.innerHTML = "junior";
        }
        
        


        let td8 = document.createElement("td");
        td8.innerHTML = "Delete"

        td8.addEventListener("click",()=>Delete(i))

        tr.append(td1,td2,td3,td4,td5,td6,td7,td8);

        document.getElementById("tbody").append(tr)

        td8.setAttribute("id","red");
        
    })
//     User.map((ele)=>{
//         num = num + ele.name
//     })
//  console.log(num);

}



const handleData = (e) => {
    e.preventDefault();

    let Data = {
        name : document.getElementById("name").value,
        Job : document.getElementById("Job").value,
        Depa : document.getElementById("Depa").value,
        salary : document.getElementById("salary").value,
        Exp : document.getElementById("Exp").value,
        Email : document.getElementById("Email").value,
    }

    User.push(Data);

    Uimake();
}

     



// document.getElementById("div").addEventListener("submit",show)

document.getElementById("collect").addEventListener("submit",handleData)
document.getElementById("FireAll").addEventListener("click",()=>{
    document.getElementById("tbody").innerHTML = " ";
    User = [];
})