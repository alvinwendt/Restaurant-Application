const KB_Data = [
    {
      table: 17,
      seated: true,
      seats: 4,
      order: [
        "Hickory Bacon Cheeseburger",
        "Pulled Pork Sandwich",
        "Mexican Style Nachos",
        "House Fajitas",
      ],
      amount: 46.88,
    },
    {
      table: 18,
      seated: true,
      seats: 3,
      order: ["Lasagna", "Chicken burger", "Chicken parmesan", "Burger Sliders"],
      amount: 65.89,
    },
    {
      table: 19,
      seated: false,
      seats: 4,
      order: ["Chicken Pesto", "Lobster rolls", "Mexican Pizza"],
      amount: 47.52,
    },
    {
      table: 20,
      seated: true,
      seats: 2,
      order: [
        "Nachos",
        "Tomato soup with Grilled cheese",
        "Flatbread pizza",
        "Mac & cheese",
      ],
      amount: 55.69,
    },
  ];
  
  //Logic for Tables Population
  
  let KB_htmlWaiter = '<h2 class="waiterTitle">Kyles Tables</h2><ul>';
  
  for (const KB_waiter of KB_Data) {
  
    if (waiter.seated === true) {
      KB_htmlWaiter += `<li><b>Table ${KB_waiter.table}</b></li><ul>`;
      KB_htmlWaiter += `<li># Seated: ${KB_waiter.seats}</li>`;
      KB_htmlWaiter += `<li>Food: ${KB_waiter.order}</li>`;
      KB_htmlWaiter += `<li>Bill: $${KB_waiter.amount}</li></ul>`;
    } else if (KB_waiter.seated === false) {
      KB_htmlWaiter += `<li><b>Table $KB_{waiter.table}</b></li><ul>`;
      KB_htmlWaiter += `<li>Open for Seating</li></ul>`;
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
  
  document.getElementsByClassName("receipt4")[0].innerKB_htmlWaiter = KB_htmlWaiter;
  document.getElementsByClassName(
    "tip4"
  )[0].innerKB_htmlWaiter = `<p id="waiter"><b>Kyle's Final Take</b></p> <p>Subtotal: $${KB_totalBill} <p>Total: $${KB_grandTotal}  <h3 id="waiter">Kyle's Tips: $${KB_tipAmount}`;
