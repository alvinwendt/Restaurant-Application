const HG_Data = [
  {
    table: 9,
    seated: true,
    seats: 1,
    order: "Big Bacon Cheeseburger",
    amount: 10.99,
  },
  {
    table: 10,
    seated: false,
    seats: 2,
    order: ["Honey BBQ Wings", "Steak"],
    amount: 34.98,
  },
  {
    table: 11,
    seated: true,
    seats: 3,
    order: ["Italian Meatballs", "Buffalo Wings", "Big Bacon Cheeseburger"],
    amount: 38.97,
  },
  {
    table: 12,
    seated: true,
    seats: 3,
    order: ["Italian Meatballs", "Pepperoni Pizza", "Steak"],
    amount: 48.97,
  },
];

let HG_htmlWaiter = '<h2 class="waiterTitle">Hannah Tables</h2><ul>';

for (const HG_waiter of HG_Data) {
  console.log(HG_waiter);

  if (HG_waiter.seated === true) {
    HG_htmlWaiter += `<li class = "decorate"><b>Table ${HG_waiter.table}</b></li><ul>`;
    HG_htmlWaiter += `<li># Seated: ${HG_waiter.seats}</li>`;
    HG_htmlWaiter += `<li>Food: ${HG_waiter.order}</li>`;
    HG_htmlWaiter += `<li>Bill: $${HG_waiter.amount}</li></ul>`;
  } else if (HG_waiter.seated === false) {
    HG_htmlWaiter += `<li class = "decorate"><b>Table ${HG_waiter.table}</b></li><ul>`;
    HG_htmlWaiter += `<li class= "green">Open for Seating</li></ul>`;
  }
}

// Calculation for Tips
let HG_totalBill = 0;

for (const HG_bill of HG_Data) {
  if (HG_bill.seated == true) {
    HG_totalBill += HG_bill.amount;
  }
}
HG_totalBill = HG_totalBill.toFixed(2);

HG_tipAmount = HG_totalBill * 0.2;
HG_tipAmount = HG_tipAmount.toFixed(2);

HG_grandTotal = Number(HG_totalBill) + Number(HG_tipAmount);
HG_grandTotal = HG_grandTotal.toFixed(2);

document.getElementsByClassName("receipt2")[0].innerHTML = HG_htmlWaiter;
document.getElementsByClassName(
  "tip2"
)[0].innerHTML = `<p id="HG_waiter"><b>Hannah's Final Take</b></p> <p>Subtotal: $${HG_totalBill} <p>Total: $${HG_grandTotal}  <h3 id="HG_waiter">Hannah's Tips: $${HG_tipAmount}`;
