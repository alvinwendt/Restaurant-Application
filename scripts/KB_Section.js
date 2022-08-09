const diners = [
    {
        table: 1,
        seated: true,
        seat: 1,
        order: "Nachos",
        amount: 9.99
    },
    {
        table: 1,
        seated: true,
        seat: 2,
        order: "Burger",
        amount: 9.99
    },
    {
        table: 1,
        seated: true,
        seat: 3,
        order: "Steak",
        amount: 9.99
    },
    {
        table: 2,
        seated: true,
        seat: 1,
        order: "Nachos",
        amount: 9.99
    },
    {
        table: 2,
        seated: true,
        seat: 2,
        order: "Burger",
        amount: 9.99
    },
    {
        table: 2,
        seated: true,
        seat: 3,
        order: "Steak",
        amount: 9.99
    },
    {
        table: 3,
        seated: true,
        seat: 1,
        order: "Nachos",
        amount: 9.99
    },
    {
        table: 3,
        seated: true,
        seat: 2,
        order: "Burger",
        amount: 9.99
    },
    {
        table: 3,
        seated: true,
        seat: 3,
        order: "Steak",
        amount: 9.99
    },
    {
        table: 4,
        seated: false,
        seat: 1,
        order: "Nachos",
        amount: 9.99
    },
    {
        table: 4,
        seated: true,
        seat: 2,
        order: "Burger",
        amount: 9.99
    },
    {
        table: 4,
        seated: false,
        seat: 3,
        order: "Steak",
        amount: 9.99
    }]

const openSeating = 'Available for seating.'

let currentOrders = []
let currentOrders1 = []
let currentOrders2 = []
let currentOrders3 = []

for (const taco of diners) {
    if (taco.seated == true && taco.table === 1) {
        //document.getElementsByClassName('one')[0].innerHTML = diners[0].table
        currentOrders.push(`seat:${taco.seat} order:${taco.order} amount:${taco.amount}`)
    }
    //else if (currentOrders.length === 0)
    //{document.getElementsByClassName('one')[0].innerHTML = openSeating
    //}
}
for (const taco of diners) {
    if (taco.seated == true && taco.table === 2) {
        //document.getElementsByClassName('one')[0].innerHTML = diners[0].table
        currentOrders1.push(`seat:${taco.seat} order:${taco.order} amount:${taco.amount}`)
    }
    //else if (currentOrders.length === 0)
    //{document.getElementsByClassName('one')[0].innerHTML = openSeating
    //}
}
for (const taco of diners) {
    if (taco.seated == true && taco.table === 3) {
        //document.getElementsByClassName('one')[0].innerHTML = diners[0].table
        currentOrders2.push(`seat:${taco.seat} order:${taco.order} amount:${taco.amount}`)
    }
    //else if (currentOrders.length === 0)
    //{document.getElementsByClassName('one')[0].innerHTML = openSeating
    //}
}
for (const taco of diners) {
    if (taco.seated == true && taco.table === 4) {
        //document.getElementsByClassName('one')[0].innerHTML = diners[0].table
        currentOrders3.push(`seat:${taco.seat} order:${taco.order} amount:${taco.amount}`)
    }
    //else if (currentOrders.length === 0)
    //{document.getElementsByClassName('one')[0].innerHTML = openSeating
    //}
}

//if (isNaN(currentOrders3)) { 
    //document.getElementsByClassName('receipt3')[0].innerHTML = openSeating
 //}

document.getElementsByClassName('receipt')[0].innerHTML = currentOrders[0] + currentOrders[1] + currentOrders[2]
document.getElementsByClassName('receipt1')[0].innerHTML = currentOrders1[0] + currentOrders1[1] + currentOrders1[2]
document.getElementsByClassName('receipt2')[0].innerHTML = currentOrders2[0] + currentOrders2[1] + currentOrders2[2]
document.getElementsByClassName('receipt3')[0].innerHTML = currentOrders3[0] + currentOrders3[1] + currentOrders3[2]



//     ,
//     {
//         table: 2,
//         seated: true,
//                 food: [{
//             seat: 1,
//             order: "Lobster",
//             amount: 9.99
//         },
//         {
//             seat: 2,
//             order: "Salmon",
//             amount: 9.99
//         },
//         {
//             seat: 3,
//             order: "Chicken Tenders",
//             amount: 9.99
//         }]
//     },
//     {
//         table: 3,
//         seated: false,
//     },
//     {
//         table: 4,
//         seated: false,
//     }
// ]
// document.getElementsByClassName('one')[0].innerHTML = diners[0].table
// document.getElementsByClassName('ones').innerHTML = `seat ${diners[0].food[0].seat}`
// //document.getElementsByClassName('two')[1].innerHTML = diners[1].table
// //document.getElementsByClassName('twos').innerHTML = diners[1].food
// //document.getElementsByClassName('three').innerHTML = diners[2].table
// //document.getElementsByClassName('threes').innerHTML = diners[2].food
// //document.getElementsByClassName('four').innerHTML = diners[3].table
// //document.getElementsByClassName('fours').innerHTML = diners[3].food