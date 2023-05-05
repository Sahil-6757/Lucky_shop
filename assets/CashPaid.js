let nameofCustomer = document.getElementById("Name");
let date = document.getElementById("date");
let Rate = document.getElementById("Rate");
let Quantity = document.getElementById("Quantity");
let submitbtn = document.getElementById("submitbtn");
let alertnote = document.getElementById('alert');
let totall = document.getElementById('total')
const cash_paid = JSON.parse(localStorage.getItem("cashpaid") || "[]");
let tbody = document.getElementById('tbody');
let Sales_entry = document.getElementById('Sales_entry');
let Homebtn = document.getElementById('Home');
let printbtn = document.getElementById('downloadbtn');
let CashEntry = document.getElementById('Cash_Entry');

showData();
submitbtn.addEventListener('click', () => {
  if (nameofCustomer.value == "") {
    alert("Enter Patient's Name");
    nameofCustomer.focus();
  }
  else if (date.value == "") {
    alert("Enter Date");
    date.focus();
  }
  else if (Rate.value == "") {
    alert("Enter Problem of Patient");
    Rate.focus();
  }
  
  else {
    alertnote.innerHTML = `<div class="alert text-center alert-primary" role="alert">
        Success
      </div>`
    setTimeout(() => {
      alertnote.innerHTML = "";
    }, 2000);


    let cashpaidinfo = {
      Cname: nameofCustomer.value,
      Cdate: date.value,
      CRate: Rate.value,
    };
    cash_paid.push(cashpaidinfo);
    localStorage.setItem("cashpaid", JSON.stringify(cash_paid));
    showData();
  }
})

function showData() {
  let html = "";
  cash_paid.forEach((element, index) => {
    console.log(element);
    let dom = `<tr id="row">
    <th scope="row">${index + 1}</th>
    <td>${element.Cname}</td>
    <td>${element.Cdate}</td>
    <td>${element.CRate}</td>
    <td onClick="deleterow(${index})" class="delete"><img src="../fontawesome-free-6.4.0-web/svgs/regular/trash-can.svg" alt="" height="20px" width="20px"></td>
    </tr>`;
    html += dom;
  });
  tbody.innerHTML = html;
}

function deleterow(index) {
  cash_paid.splice(index, 1);
  localStorage.setItem("cashpaid", JSON.stringify(cash_paid));
  showData();
}

Sales_entry.addEventListener('click',()=>{
    location.href = ("/assets/SalesEntry.html")
})

printbtn.addEventListener('click',()=>{
  // location.href = "/assets/print.html"
  window.open("/assets/cashpaidprint.html")
})

Homebtn.addEventListener('click',()=>{
  location.href = "../home.html"
})

CashEntry.addEventListener('click',()=>{
    location.href = ("/assets/CashEntry.html")
})


