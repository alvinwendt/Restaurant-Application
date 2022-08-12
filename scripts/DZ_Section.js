const DZ_Data = [
  {
    table: 5,
    seated: true,
    seats: 4,
    order: ["Cavatappi Bolognese", " Chicken Parmesan", " Caprese Chicken", " Lasagna"],
    amount: 89.74,
  },
  {
    table: 6,
    seated: true,
    seats: 4,
    order: ["Pad Kra Pao Moo", " Chicken Fried Rice", " Pad Thai", " Kai Yad Sai"],
    amount: 78.95,
  },
  {
    table: 7,
    seated: false,
    seats: 4,
    order: ["Orange Chicken", " Beijing Roasted Duck", " Kung Pao Chicken", " Sweet and Sour Shrimp"],
    amount: 115.38,
  },
  {
    table: 8,
    seated: true,
    seats: 4,
    order: ["Chocolate Molten Lava Cake", " Strawberry Shortcake", " Mint Chocolate Chip Icecream", " New York Cheesecake"],
    amount: 60.32,
  },
];

//Logic for Tables Population
let DZ_htmlWaiter = '<h2 class="waiterTitle"><i class="fa-solid fa-receipt"></i>  Demin Tables</h2><ul>';

for (const DZ_waiter of DZ_Data) {
  console.log(DZ_waiter);

  if (DZ_waiter.seated === true) {
    DZ_htmlWaiter += `<li class = "decorate "><b>Table ${DZ_waiter.table}</b></li><ul>`;
    DZ_htmlWaiter += `<li># Seated: ${DZ_waiter.seats}</li>`;
    DZ_htmlWaiter += `<li>Food: ${DZ_waiter.order}</li>`;
    DZ_htmlWaiter += `<li>Bill: $${DZ_waiter.amount}</li></ul>`;
  } else if (DZ_waiter.seated === false) {
    DZ_htmlWaiter += `<li class = "decorate"><b>Table ${DZ_waiter.table}</b></li><ul>`;
    DZ_htmlWaiter += `<li class= "green">Open for Seating</li></ul>`;
  }
}

// Calculation for Tips
let DZ_totalBill = 0;

for (const DZ_bill of DZ_Data) {
  if (DZ_bill.seated == true) {
    DZ_totalBill += DZ_bill.amount;
  }
}
DZ_totalBill = DZ_totalBill.toFixed(2);

DZ_tipAmount = DZ_totalBill * 0.2;
DZ_tipAmount = DZ_tipAmount.toFixed(2);

DZ_grandTotal = Number(DZ_totalBill) + Number(DZ_tipAmount);
DZ_grandTotal = DZ_grandTotal.toFixed(2);

document.getElementsByClassName("receipt1")[0].innerHTML = DZ_htmlWaiter;
document.getElementsByClassName(
  "tip1"
)[0].innerHTML = `<p id="DZ_waiter"><b>Demin's Final Take</b></p> <p>Subtotal: $${DZ_totalBill} <p>Total: $${DZ_grandTotal}  <h3 id="DZ_waiter">Demin's Tips: $${DZ_tipAmount}`;
