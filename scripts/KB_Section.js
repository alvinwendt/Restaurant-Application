const diners = [
    {
        table: 1,
        seated: true,
        //We're gonna do for loops here with string interpolation
        food: [{
            seat: 1,
            order: "Nachos",
            amount: 9.99
        },
        {
            seat: 2,
            order: "Burger",
            amount: 9.99
        },
        {
            seat: 3,
            order: "Steak",
            amount: 9.99
        }]
    },
    {
        table: 2,
        seated: true,
                food: [{
            seat: 1,
            order: "Lobster",
            amount: 9.99
        },
        {
            seat: 2,
            order: "Salmon",
            amount: 9.99
        },
        {
            seat: 3,
            order: "Chicken Tenders",
            amount: 9.99
        }]
    },
    {
        table: 3,
        seated: false,
    },
    {
        table: 4,
        seated: false,
    }
]
//console.log(diners[0].table)
document.getElementsByClassName('one')[0].innerHTML = diners[0].table
document.getElementsByClassName('ones').innerHTML = diners[0].food
document.getElementsByClassName('two')[1].innerHTML = diners[1].table
document.getElementsByClassName('twos').innerHTML = diners[1].food
document.getElementsByClassName('three').innerHTML = diners[2].table
document.getElementsByClassName('threes').innerHTML = diners[2].food
document.getElementsByClassName('four').innerHTML = diners[3].table
document.getElementsByClassName('fours').innerHTML = diners[3].food