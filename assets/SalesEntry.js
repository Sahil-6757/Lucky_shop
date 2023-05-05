let nameofCustomer = document.getElementById("Name");
let date = document.getElementById("date");
let Rate = document.getElementById("Rate");
let Quantity = document.getElementById("Quantity");
let submitbtn = document.getElementById("submitbtn");
let alertnote = document.getElementById('alert');
let totall = document.getElementById('total')
const Customers = JSON.parse(localStorage.getItem("Customers") || "[]");
let tbody = document.getElementById('tbody');
let Sales_entry = document.getElementById('Sales_entry');
let Homebtn = document.getElementById('Home');
let printbtn = document.getElementById('downloadbtn');
let CashEntry = document.getElementById('CashEntry');

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
  else if (Quantity.value == "") {
    alert("Enter the Amount");
    Quantity.focus();
  }
  else {
    alertnote.innerHTML = `<div class="alert text-center alert-primary" role="alert">
        Success
      </div>`
    setTimeout(() => {
      alertnote.innerHTML = "";
    }, 2000);

    total = (Rate.value * Quantity.value)

    let CutomerInfo = {
      Cname: nameofCustomer.value,
      Cdate: date.value,
      CRate: Rate.value,
      CQuantity: Quantity.value,
      Ctotal: totall.value
    };
    Customers.push(CutomerInfo);
    localStorage.setItem("Customers", JSON.stringify(Customers));
    showData();
  }
})

function showData() {
  let html = "";
  Customers.forEach((element, index) => {
    console.log(element);
    let dom = `<tr id="row">
    <th scope="row">${index + 1}</th>
    <td>${element.Cname}</td>
    <td>${element.Cdate}</td>
    <td>${element.CRate}</td>
    <td>${element.CQuantity}</td>
    <td>${element.Ctotal}</td>
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

Quantity.addEventListener('blur', () => {
  console.log(Rate.value * Quantity.value)
  total.value = Rate.value * Quantity.value;
});

printbtn.addEventListener('click',()=>{
  // location.href = "/assets/print.html"
  window.open("/assets/print.html")
})

Homebtn.addEventListener('click',()=>{
  location.href = "../home.html"
})

CashEntry.addEventListener('click',()=>{
  location.href = "/assets/CashEntry.html"
})
