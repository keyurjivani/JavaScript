let Pdata = [
    {
      title: "Croma 140 cm",
      price: 10000,
      image: "https://media.croma.com/image/upload/v1703767641/Croma%20Assets/Entertainment/Television/Images/251389_7_zxdnqm.png",
      
    },
    {
      title: "TCL",
      price: 8000,
      image: "https://instorestatic.tcl.com/media/catalog/product/0/1/01.png",
    },
    {
      title: "Xiaomi",
      price: 15000,
      image: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1666872080.70966688.png",
    },
    {
      title: "Samsung",
      price: 12000,
      image: "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694930200/Croma%20Assets/Entertainment/Television/Images/300432_myrhmt.png?tr=w-600",
    },
  ];

  Pdata.map((ele)=>{
    // document.getElementById("products").innerHTML = " "

    let image = document.createElement("img");
    image.src = ele.image;
    image.style.width = "300px"
    image.style.height = "300px"

    let h2 = document.createElement("h2");
    h2.innerHTML = ele.title;
    h2.style.textAlign = "center"

    let p = document.createElement("p");
    p.innerHTML = ele.price
    p.style.textAlign = "center"

    let div3 = document.createElement("div");
    div3.innerHTML = "Buy";
    div3.style.textAlign = "center"
    div3.style.border = '1px solid black';
    
    // div3.style.width = "min-contect"
    div3.style.marginBottom = '15px'
    div3.setAttribute("class","div3")

    div3.addEventListener("click",()=>{
        BankDetails.setWithdraw(ele.price);
        // account.Withdraw(parseFloat(elem.price));
    })
    

    let div = document.createElement("div")
    div.append(image,h2,p,div3)
    div.setAttribute("class","div")
    div.style.background = "white"

    document.getElementById("products").append(div)
  })

class Bank {
  constructor(AccName, AccNo, BranchName, MoNumber) {
    this.AccName = AccName;
    this.AccNo = AccNo;
    this.BranchName = BranchName;
    this.MoNumber = MoNumber;
    this.amount = 0;
  }

  setAccName(AccName) {
    this.AccName = AccName;
  }
  getAccName(AccName) {
    return (this.AccName = AccName);
  }

  setAccNo(AccNo) {
    this.AccNo = AccNo;
  }
  getAccNo(AccNo) {
    return (this.AccNo = AccNo);
  }

  setBranchName(BranchName) {
    this.BranchName = BranchName;
  }
  getBranchName(BranchName) {
    return (this.BranchName = BranchName);
  }

  setMoNumber(MoNumber) {
    this.MoNumber = MoNumber;
  }
  getMonumber(MoNumber) {
    return (this.MoNumber = MoNumber);
  }

  setamount(cash) {

    if(cash > 0){
        this.amount += Number(cash);
        alert("Deposite Successfully")
    }
    else{
        alert("amount Grather Than zero")
    }

    
  }
  getamount() {
    return this.amount;
  }

  setWithdraw(cash){
    if(this.amount > cash  ){
        this.amount -= Number(cash)
        alert("order SuccessFully..")
    }else{
        alert("Please Deposite ")
    }
   
  }
  getWithdraw(cash){
     this.amount ;
  }
}

let BankDetails = new Bank("name", 0, 0, 0, 0);








const UiAccD = () => {
  document.getElementById("Display").innerHTML = "";
  let p = document.createElement("p");
  p.innerHTML = `Account Name : ${BankDetails.AccName}`;

  let p1 = document.createElement("p");
  p1.innerHTML = `Account No : ${BankDetails.AccNo}`;

  let p3 = document.createElement("p");
  p3.innerHTML = `Branch Name : ${BankDetails.BranchName}`;

  let p4 = document.createElement("p");
  p4.innerHTML = `Mobile No : ${BankDetails.MoNumber}`;

  let p5 = document.createElement("p");
  p5.innerHTML = `Balance : ${BankDetails.amount}`;

  document.getElementById("Display").append(p, p1, p3, p4, p5);
};










const HandleData = (e) => {
  e.preventDefault();

  let Data = {
    AccName: document.getElementById("AccName").value,
    AccNo: document.getElementById("AccNo").value,
    BranchName: document.getElementById("BranchName").value,
    MoNumber: document.getElementById("MoNumber").value,
  };
  BankDetails.setAccName(Data.AccName);
  BankDetails.setAccNo(Data.AccNo);
  BankDetails.setBranchName(Data.BranchName);
  BankDetails.setMoNumber(Data.MoNumber);

  console.log(BankDetails);
  UiAccD();
};














document.getElementById("push").addEventListener("click",(e)=>{
    e.preventDefault();
  let cash = document.getElementById("cash").value;
  BankDetails.setamount(cash);
  console.log(cash);
    
})







document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

//   document.getElementById("Display").innerHTML = "";
  document.getElementById("Display").innerHTML = "";
  let p = document.createElement("p");
  p.innerHTML = `Account Name : ${BankDetails.AccName}`;

  let p1 = document.createElement("p");
  p1.innerHTML = `Account No : ${BankDetails.AccNo}`;

  let p3 = document.createElement("p");
  p3.innerHTML = `Branch Name : ${BankDetails.BranchName}`;

  let p4 = document.createElement("p");
  p4.innerHTML = `Mobile No : ${BankDetails.MoNumber}`;

  let p5 = document.createElement("p");
  p5.innerHTML = `Balance : ${BankDetails.amount}`;

//   let p6 = document.createElement("p");
//   p6.innerHTML = `Balance : ${BankDetails.amount}`;

  document.getElementById("Display").append(p, p1, p3, p4, p5);



//   document.getElementById("Display").append(p6);
});









// document.getElementById("Deposite").addEventListener("submit", DepositeHandle);

document.getElementById("CollectData").addEventListener("submit", HandleData);
