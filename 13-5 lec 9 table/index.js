let array = []

const Ui = () => {
    document.getElementById("tbody").innerHTML = ""

    array.map((ele)=>{
        let tr = document.createElement("tr");
        
        let td = document.createElement("td")
        td.innerHTML = ele.UserName

        tr.append(td)

        document.getElementById("tbody").append(tr)
    })
}


const handleData = (e) => {
    e.preventDefault();

    let Data = {
        UserName: document.getElementById("UserName").value
    }

    array.push(Data)

    Ui();

}

console.log(array);

document.getElementById("collectData").addEventListener("submit",handleData);