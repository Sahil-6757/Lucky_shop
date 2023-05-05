const Customers = JSON.parse(localStorage.getItem("Customers") || "[]");
let tbody = document.getElementById('tbody');
const cash_paid = JSON.parse(localStorage.getItem("cashpaid") || "[]");
let tbody2 = document.getElementById('tbody2');
const Cash = JSON.parse(localStorage.getItem("CashEntry") || "[]");
let tbody3 = document.getElementById('tbody3');
let printbtn1 = document.getElementById('downloadbtn1');
let printbtn2 = document.getElementById('downloadbtn2');
let printbtn3 = document.getElementById('downloadbtn3');
let CashEntry = document.getElementById('CashEntry');
let SalesEntry = document.getElementById('SalesEntry');
let Cashpaid = document.getElementById('Cashpaid');

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

  
function showData3() {
    let html = "";
    cash_paid.forEach((element, index) => {
    
      let dom = `<tr id="row">
      <th scope="row">${index + 1}</th>
      <td>${element.Cname}</td>
      <td>${element.Cdate}</td>
      <td>${element.CRate}</td>
      <td onClick="deleterow(${index})" class="delete"><img src="../fontawesome-free-6.4.0-web/svgs/regular/trash-can.svg" alt="" height="20px" width="20px"></td>
      </tr>`;
      html += dom;
    });
    tbody3.innerHTML = html;
  }

  function showData2() {
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
    tbody2.innerHTML = html;
  }


  showData(); 
  showData3();
  showData2();

  printbtn1.addEventListener('click', () => {
    // location.href = "/assets/print.html"
    window.open("/assets/print.html")
  })

  printbtn2.addEventListener('click', () => {
    // location.href = "/assets/print.html"
    window.open("/assets/CashEntryprint.html")
  })

  printbtn3.addEventListener('click', () => {
    // location.href = "/assets/print.html"
    window.open("/assets/cashpaidprint.html")
  })

  CashEntry.addEventListener('click',()=>{
    location.href = "/assets/CashEntry.html"
  })

  SalesEntry.addEventListener('click',()=>{
    location.href = "/assets/SalesEntry.html"
  })

  Cashpaid.addEventListener('click',()=>{
    location.href = "/assets/CashPaid.html"
  })