const JB_Data = [
    {
      table: 13,
      seated: true,
      seats: 4,
      order: ["Cavatappi Bolognese", "Chicken Parmesan", "Caprese Chicken", "Lasagna"],
      amount: 89.74,
    },
    {
      table: 14,
      seated: true,
      seats: 4,
      order: ["Pad Kra Pao Moo", "Chicken Fried Rice", "Pad Thai", "Kai Yad Sai"],
      amount: 78.95,
    },
    {
      table: 15,
      seated: false,
      seats: 4,
      order: ["Orange Chicken", "Beijing Roasted Duck", "Kung Pao Chicken", "Sweet and Sour Shrimp"],
      amount: 115.38,
    },
    {
      table: 16,
      seated: true,
      seats: 4,
      order: ["Chocolate Molten Lava Cake", "Strawberry Shortcake", "Mint Chocolate Chip Icecream", "New York Cheesecake"],
      amount: 60.32,
    },
  ];
  

  

  let JB_htmlWaiter = '<h2 class="waiterTitle">John Tables</h2><ul>';

for (const waiter of JB_Data) {
//   console.log(waiter);

  if (waiter.seated === true) {
    JB_htmlWaiter += `<li><b>Table ${waiter.table}</b></li><ul>`;
    JB_htmlWaiter += `<li># Seated: ${waiter.seats}</li>`;
    JB_htmlWaiter += `<li>Food: ${waiter.order}</li>`;
    JB_htmlWaiter += `<li>Bill: $${waiter.amount}</li></ul>`;
  } else if (waiter.seated === false) {
    JB_htmlWaiter += `<li><b>Table ${waiter.table}</b></li><ul>`;
    JB_htmlWaiter += `<li>Open for Seating</li></ul>`;
  }
}

// Calculation for Tips
let JB_totalBill = 0;

for (const bill of JB_Data) {
  if (bill.seated == true) {
    JB_totalBill += bill.amount;
  }
}
JB_totalBill = JB_totalBill.toFixed(2);

JB_tipAmount = JB_totalBill * 0.2;
JB_tipAmount = JB_tipAmount.toFixed(2);

JB_grandTotal = Number(JB_totalBill) + Number(JB_tipAmount);
JB_grandTotal = JB_grandTotal.toFixed(2);

document.getElementsByClassName("receipt3")[0].innerHTML = JB_htmlWaiter;
document.getElementsByClassName(
  "tip3"
)[0].innerHTML = `<p id="waiter"><b>John's Final Take</b></p> <p>Subtotal: $${JB_totalBill} <p>Total: $${JB_grandTotal}  <h3 id="waiter">John's Tips: $${JB_tipAmount}`;
