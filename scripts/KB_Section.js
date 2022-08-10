const KB_Data = [
  {
    table: 17,
    seated: true,
    seats: 4,
    order: ["Hickory Bacon Cheeseburger", "Pulled Pork Sandwich", "Mexican Style Nachos", "House Fajitas"],
    amount: 46.88,
  },
  {
    table: 18,
    seated: true,
    seats: 3,
    order: ["Caesar Salad", "House Salad", "Bacon Ranch Quesadilla"],
    amount: 28.74,
  },
  {
    table: 19,
    seated: false,
    seats: 4,
    order: ["Loaded Baked Potato", "Barbecue Sliders", "Chicken Tenders"],
    amount: 26.93,
  },
  {
    table: 20,
    seated: true,
    seats: 2,
    order: ["Grilled Chicken Sandwich", "Turkey Wrap"],
    amount: 19.67,
  },
];

//Logic for Tables Population

let KB_htmlWaiter = '<h2 class="waiterTitle">Kyles Tables</h2><ul>';

for (const KB_waiter of KB_Data) {
  if (KB_waiter.seated === true) {
    KB_htmlWaiter += `<li class = "decorate"><b>Table ${KB_waiter.table}</b></li><ul>`;
    KB_htmlWaiter += `<li># Seated: ${KB_waiter.seats}</li>`;
    KB_htmlWaiter += `<li>Food: ${KB_waiter.order}</li>`;
    KB_htmlWaiter += `<li>Bill: $${KB_waiter.amount}</li></ul>`;
  } else if (KB_waiter.seated === false) {
    KB_htmlWaiter += `<li class = "decorate"><b>Table ${KB_waiter.table}</b></li><ul>`;
    KB_htmlWaiter += `<li class= "green">Open for Seating</li></ul>`;
  }
}

// Calculation for Tips
let KB_totalBill = 0;

for (const KB_bill of KB_Data) {
  if (KB_bill.seated == true) {
    KB_totalBill += KB_bill.amount;
  }
}
KB_totalBill = KB_totalBill.toFixed(2);

KB_tipAmount = KB_totalBill * 0.2;
KB_tipAmount = KB_tipAmount.toFixed(2);

KB_grandTotal = Number(KB_totalBill) + Number(KB_tipAmount);
KB_grandTotal = KB_grandTotal.toFixed(2);

document.getElementsByClassName("receipt4")[0].innerHTML = KB_htmlWaiter;
document.getElementsByClassName(
  "tip4"
)[0].innerHTML = `<p id="waiter"><b>Kyle's Final Take</b></p> <p>Subtotal: $${KB_totalBill} <p>Total: $${KB_grandTotal}  <h3 id="waiter">Kyle's Tips: $${KB_tipAmount}`;
