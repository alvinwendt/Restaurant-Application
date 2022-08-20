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
const orders = [];
