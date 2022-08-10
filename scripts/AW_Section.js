const AW_Data = [
  {
    table: 1,
    seated: true,
    seats: 4,
    order: ["Bourbon Street Chicken and Shrimp", "Chicken pot pie", "Fried chicken", "Meatloaf"],
    amount: 74.88,
  },
  {
    table: 2,
    seated: false,
    seats: 4,
    order: ["Lasagna", "Chicken burger", "Chicken parmesan", "Burger Sliders"],
    amount: 65.89,
  },
  {
    table: 3,
    seated: true,
    seats: 3,
    order: ["Chicken Pesto", "Lobster rolls", "Mexican Pizza"],
    amount: 47.52,
  },
  {
    table: 4,
    seated: true,
    seats: 4,
    order: ["Nachos", "Tomato soup with Grilled cheese", "Flatbread pizza", "Mac & cheese"],
    amount: 55.69,
  },
];

//Logic for Tables Population

let htmlWaiter = '<h2 class="waiterTitle">Alvin Tables</h2><ul>';

for (const waiter of AW_Data) {
  if (waiter.seated === true) {
    htmlWaiter += `<li><b>Table ${waiter.table}</b></li><ul>`;
    htmlWaiter += `<li># Seated: ${waiter.seats}</li>`;
    htmlWaiter += `<li>Food: ${waiter.order}</li>`;
    htmlWaiter += `<li>Bill: $${waiter.amount}</li></ul>`;
  } else if (waiter.seated === false) {
    htmlWaiter += `<li><b>Table ${waiter.table}</b></li><ul>`;
    htmlWaiter += `<li>Open for Seating</li></ul>`;
  }
}

// Calculation for Tips
let totalBill = 0;

for (const bill of AW_Data) {
  if (bill.seated == true) {
    totalBill += bill.amount;
  }
}
totalBill = totalBill.toFixed(2);

tipAmount = totalBill * 0.2;
tipAmount = tipAmount.toFixed(2);

grandTotal = Number(totalBill) + Number(tipAmount);
grandTotal = grandTotal.toFixed(2);

document.getElementsByClassName("receipt")[0].innerHTML = htmlWaiter;
document.getElementsByClassName("tip")[0].innerHTML = `<p id="waiter"><b>Alvin's Final Take</b></p> <p>Subtotal: $${totalBill} <p>Total: $${grandTotal}  <h3 id="waiter">Alvin's Tips: $${tipAmount}`;
