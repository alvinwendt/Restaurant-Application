const servers = [
  {
    serverId: 1,
    name: "Alvin",
    tableId: [1, 2, 3, 4],
  },
  {
    serverId: 2,
    name: "Demin",
    tableId: [5, 6, 7, 8],
  },
  {
    serverId: 3,
    name: "Hannah",
    tableId: [9, 10, 11, 12],
  },
  {
    serverId: 4,
    name: "John",
    tableId: [13, 14, 15, 16],
  },
  {
    serverId: 5,
    name: "Kyle",
    tableId: [17, 18, 19, 20],
  },
];
const tables = [
  {
    tableId: 1,
    serverId: 1,
    seats: 4,
  },
  {
    tableId: 2,
    serverId: 1,
    seats: 4,
  },
  {
    tableId: 3,
    serverId: 1,
    seats: 3,
  },
  {
    tableId: 4,
    serverId: 1,
    seats: 4,
  },
  {
    tableId: 5,
    serverId: 2,
    seats: 4,
  },
  {
    tableId: 6,
    serverId: 2,
    seats: 4,
  },
  {
    tableId: 7,
    serverId: 2,
    seats: 4,
  },
  {
    tableId: 8,
    serverId: 2,
    seats: 4,
  },
  {
    tableId: 9,
    serverId: 3,
    seats: 1,
  },
  {
    tableId: 10,
    serverId: 3,
    seats: 2,
  },
  {
    tableId: 11,
    serverId: 3,
    seats: 3,
  },
  {
    tableId: 12,
    serverId: 3,
    seats: 3,
  },
  {
    tableId: 13,
    serverId: 4,
    seats: 4,
  },
  {
    tableId: 14,
    serverId: 4,
    seats: 4,
  },
  {
    tableId: 15,
    serverId: 4,
    seats: 4,
  },
  {
    tableId: 16,
    serverId: 4,
    seats: 4,
  },
  {
    tableId: 17,
    serverId: 5,
    seats: 4,
  },
  {
    tableId: 18,
    serverId: 5,
    seats: 3,
  },
  {
    tableId: 19,
    serverId: 5,
    seats: 4,
  },
  {
    tableId: 20,
    serverId: 5,
    seats: 2,
  },
];
const menu = [
  // Alvins Items
  {
    itemId: 1,
    itemName: "Bourbon Street Chicken and Shrimp",
    cost: 12.99,
  },
  {
    itemId: 2,
    itemName: " Chicken pot pie",
    cost: 13.58,
  },
  {
    itemId: 3,
    itemName: " Fried chicken",
    cost: 15.99,
  },
  {
    itemId: 4,
    itemName: " Meatloaf",
    cost: 10.99,
  },
  {
    itemId: 5,
    itemName: "Lasagna",
    cost: 16.27,
  },
  {
    itemId: 6,
    itemName: " Chicken burger",
    cost: 10.99,
  },
  {
    itemId: 7,
    itemName: " Chicken parmesan",
    cost: 14.58,
  },
  {
    itemId: 8,
    itemName: " Burger Sliders",
    cost: 14.99,
  },
  {
    itemId: 9,
    itemName: "Chicken Pesto",
    cost: 15.99,
  },
  {
    itemId: 10,
    itemName: " Lobster rolls",
    cost: 21.99,
  },
  {
    itemId: 11,
    itemName: " Mexican Pizza",
    cost: 18.99,
  },
  {
    itemId: 12,
    itemName: "Nachos",
    cost: 8.99,
  },
  {
    itemId: 13,
    itemName: " Tomato soup with Grilled cheese",
    cost: 7.99,
  },
  {
    itemId: 14,
    itemName: " Flatbread pizza",
    cost: 10.89,
  },
  {
    itemId: 15,
    itemName: " Mac & cheese",
    cost: 6.99,
  },
  // Demins Items
  {
    itemId: 16,
    itemName: " Cavatappi Bolognese",
    cost: 15.99,
  },
  {
    itemId: 17,
    itemName: " Chicken Parmesan",
    cost: 17.99,
  },
  {
    itemId: 18,
    itemName: " Caprese Chicken",
    cost: 18.99,
  },
  {
    itemId: 19,
    itemName: " Lasagna",
    cost: 10.99,
  },
  {
    itemId: 20,
    itemName: " Pad Kra Pao Moo",
    cost: 14.99,
  },
  {
    itemId: 21,
    itemName: " Chicken Fried Rice",
    cost: 12.99,
  },
  {
    itemId: 22,
    itemName: " Pad Thai",
    cost: 17.99,
  },
  {
    itemId: 23,
    itemName: " Kai Yad Sai",
    cost: 20.99,
  },
  {
    itemId: 24,
    itemName: " Orange Chicken",
    cost: 17.99,
  },
  {
    itemId: 25,
    itemName: " Beijing Roasted Duck",
    cost: 25.99,
  },
  {
    itemId: 26,
    itemName: " Kung Pao Chicken",
    cost: 18.99,
  },
  {
    itemId: 27,
    itemName: " Sweet and Sour Shrimp",
    cost: 20.99,
  },
  {
    itemId: 28,
    itemName: " Chocolate Molten Lava Cake",
    cost: 15.99,
  },
  {
    itemId: 29,
    itemName: " Strawberry Shortcake",
    cost: 12.99,
  },
  {
    itemId: 30,
    itemName: "Mint Chocolate Chip Icecream",
    cost: 8.99,
  },
  {
    itemId: 31,
    itemName: " New York Cheesecake",
    cost: 15.99,
  },
  // Hannahs Items
  {
    itemId: 32,
    itemName: " Big Bacon Cheeseburger",
    cost: 12.99,
  },
  {
    itemId: 33,
    itemName: " Honey BBQ Wings",
    cost: 10.99,
  },
  {
    itemId: 34,
    itemName: " Steak",
    cost: 18.99,
  },
  {
    itemId: 35,
    itemName: " Italian Meatballs",
    cost: 10.99,
  },
  {
    itemId: 36,
    itemName: " Buffalo Wings",
    cost: 13.99,
  },
  {
    itemId: 37,
    itemName: " Smoked Salmon",
    cost: 16.99,
  },
  {
    itemId: 38,
    itemName: " Three Cheese Ravioli",
    cost: 14.99,
  },
  {
    itemId: 39,
    itemName: " Pepperoni Pizza",
    cost: 9.99,
  },
  {
    itemId: 40,
    itemName: " Margarita Pizza",
    cost: 12.99,
  },
  // Johns Items
  {
    temId: 41,
    itemName: " choclate Mama Turney’s Pie",
    cost: 17.99,
  },
  {
    temId: 42,
    itemName: " choclate chip cookies",
    cost: 5.99,
  },
  {
    temId: 43,
    itemName: " cinnamon coffe cake",
    cost: 4.99,
  },
  {
    temId: 44,
    itemName: " choclate Mama Turney’s Pie",
    cost: 16.99,
  },
  {
    temId: 45,
    itemName: " pecan pie",
    cost: 15.99,
  },
  {
    temId: 46,
    itemName: " cinnamon coffe cake",
    cost: 5.45,
  },
  {
    temId: 47,
    itemName: " caramel salty cookies",
    cost: 6.99,
  },
  {
    temId: 48,
    itemName: " caramel pie",
    cost: 14.99,
  },
  {
    temId: 49,
    itemName: " lemon pie",
    cost: 4.99,
  },
  {
    temId: 50,
    itemName: " peach pie",
    cost: 8.99,
  },
  {
    temId: 51,
    itemName: " cherry pie",
    cost: 20.99,
  },
  {
    temId: 52,
    itemName: " apple pie",
    cost: 15.99,
  },
  {
    temId: 53,
    itemName: " ice tea",
    cost: 2.99,
  },
  {
    temId: 54,
    itemName: " apple juice",
    cost: 6.99,
  },
  {
    temId: 55,
    itemName: " lemonada",
    cost: 4.99,
  },
  {
    temId: 56,
    itemName: " ice tea",
    cost: 2.99,
  },
  // Kyles Items
  {
    itemId: 57,
    itemName: "Hickory Bacon Cheeseburger",
    cost: 10.99,
  },
  {
    itemId: 58,
    itemName: "Pulled Pork Sandwich",
    cost: 11.99,
  },
  {
    itemId: 59,
    itemName: "Mexican Style Nachos",
    cost: 8.99,
  },
  {
    itemId: 60,
    itemName: "House Fajitas",
    cost: 12.99,
  },
  {
    itemId: 61,
    itemName: "Caesar Salad",
    cost: 7.49,
  },
  {
    itemId: 62,
    itemName: "House Salad",
    cost: 7.59,
  },
  {
    itemId: 63,
    itemName: "Bacon Ranch Quesadilla",
    cost: 8.99,
  },
  {
    itemId: 64,
    itemName: "Loaded Baked Potato",
    cost: 8.99,
  },
  {
    itemId: 65,
    itemName: "Barbecue Sliders",
    cost: 9.99,
  },
  {
    itemId: 66,
    itemName: "Chicken Tenders",
    cost: 7.89,
  },
  {
    itemId: 67,
    itemName: "Grilled Chicken Sandwich",
    cost: 10.99,
  },
  {
    itemId: 68,
    itemName: "Turkey Wrap",
    cost: 6.99,
  },
];
const orders = [
  {
  orderId: 17,
  itemId: [68, 69, 70, 71],
  tableId: 17,
  totalBill: 0,
  tip: 0,
  completed: true,
},
];

export const findMenuItem = () => {
  for (let order of orders) {
    order.itemId.forEach(itemId => {
     const menuItems = menu.find(menuItem => menuItem.itemId === itemId)
     console.log(menuItems.itemName)
    });
  }
};

// findMenuItem()



 const test = () => {
  //return an array of orders, those orders should have the server name and the table items
  let ordersArray = orders.map(order => {
    let table = tables.find(monkey => order.tableId === monkey.tableId)


   let fullOrder = {
    table: table,
    orderId: order.orderId, 
    totalBill: order.totalBill,
    tip: order.tip,
    completed: order.completed
  }
   return fullOrder
  })
  return ordersArray
}

// test()
=======
  // Alvins Orders
  {
    orderId: 1,
    itemId: [1, 2, 3, 4],
    tableId: 1,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 2,
    itemId: [5, 6, 7, 8],
    tableId: 2,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 3,
    itemId: [9, 10, 11],
    tableId: 3,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 4,
    itemId: [12, 13, 14, 15],
    tableId: 4,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  // Demins Orders
  {
    orderId: 5,
    itemId: [16, 17, 18, 19],
    tableId: 5,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 6,
    itemId: [20, 21, 22, 23],
    tableId: 6,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 7,
    itemId: [24, 25, 26, 27],
    tableId: 7,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 8,
    itemId: [28, 29, 30, 31],
    tableId: 8,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  // Hannahs Orders
  {
    orderId: 9,
    itemId: [32],
    tableId: 9,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 10,
    itemId: [33, 34],
    tableId: 10,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 11,
    itemId: [35, 36, 37],
    tableId: 11,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 12,
    itemId: [38, 39, 40],
    tableId: 12,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  // Johns Orders
  {
    orderId: 13,
    itemId: [41, 42, 43, 44],
    tableId: 13,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 14,
    itemId: [45, 46, 47, 48],
    tableId: 14,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 15,
    itemId: [49, 50, 51, 52],
    tableId: 15,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 16,
    itemId: [53, 54, 55, 56],
    tableId: 16,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  // Kyles Orders
  {
    orderId: 17,
    itemId: [57, 58, 59, 60],
    tableId: 17,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 18,
    itemId: [61, 62, 63],
    tableId: 18,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 19,
    itemId: [64, 65, 66],
    tableId: 19,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
  {
    orderId: 20,
    itemId: [67, 68],
    tableId: 20,
    totalBill: 0,
    tip: 0,
    completed: true,
  },
];
