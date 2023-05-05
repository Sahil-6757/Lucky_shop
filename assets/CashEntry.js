let nameofCustomer = document.getElementById("Name");
let date = document.getElementById("date");
let Rate = document.getElementById("Rate");
let submitbtn = document.getElementById("submitbtn");
let alertnote = document.getElementById('alert');
let totall = document.getElementById('total')
const Cash = JSON.parse(localStorage.getItem("CashEntry") || "[]");
let tbody = document.getElementById('tbody');
let Sales_entry = document.getElementById('Sales_entry');
let Homebtn = document.getElementById('Home');
let printbtn = document.getElementById('downloadbtn');
let CashEntry = document.getElementById('CashEntry');
let Cash_paid = document.getElementById('Cash_paid');

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


    let cashInfo = {
      Cname: nameofCustomer.value,
      Cdate: date.value,
      CRate: Rate.value,
    };
    Cash.push(cashInfo);
    localStorage.setItem("CashEntry", JSON.stringify(Cash));
    showData();
  }
})

function showData() {
  let html = "";
  Cash.forEach((element, index) => {
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
  Customers.splice(index, 1);
  localStorage.setItem("Cutomers", JSON.stringify(Customers));
  showData();
}

printbtn.addEventListener('click', () => {
  // location.href = "/assets/print.html"
  window.open("/assets/CashEntryprint.html")
})

Homebtn.addEventListener('click', () => {
  location.href = "../home.html"
})

Sales_entry.addEventListener('click', () => {
  location.href = "/assets/salesEntry.html"
})

Cash_paid.addEventListener('click',()=>{
  location.href = "/assets/CashPaid.html"
})
