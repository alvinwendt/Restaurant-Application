const DeminData = [
  {
    table: 5,
    seated: true,
    food: [
      {
        seat: 1,
        order: "Steak",
        amount: 19.99,
      },
      {
        seat: 2,
        order: "Chicken Sandwhich",
        amount: 7.99,
      },
      {
        seat: 3,
        order: "Caprese Salad",
        amount: 12.99,
      },
    ],
  },
  {
    table: 6,
    seated: true,
    food: [
      {
        seat: 1,
        order: "Shrimp Scampi",
        amount: 19.99,
      },
      {
        seat: 2,
        order: "Fish and Chips",
        amount: 9.99,
      },
      {
        seat: 3,
        order: "Tilapia",
        amount: 12.99,
      },
    ],
  },
  {
    table: 7,
    seated: true,
    food: [
      {
        seat: 1,
        order: "Lasagna",
        amount: 9.99,
      },
      {
        seat: 2,
        order: "Fettuccine Chicken Alfredo ",
        amount: 9.99,
      },
      {
        seat: 3,
        order: "Cavatappi and Meatballs",
        amount: 14.99,
      },
    ],
  },
  {
    table: 8,
    seated: false,
  },
];

$(document).ready(function () {
  var CurrentSelectedServer = "";

  $(".demin").click(function () {
    if (CurrentSelectedServer == "Demin") {
      return;
    }
    for (const taco of DeminData) {
      if (taco.seated == true) {
        let usedSeating = `<div class="table one"><h4 class="header ones">Table ${taco.table}</h4><p class="receipt">${taco.food[0].order}-$${taco.food[0].amount}</p><p class="receipt">${taco.food[1].order}-$${taco.food[1].amount}</p><p class="receipt">${taco.food[2].order}-$${taco.food[2].amount}</p></div>`;
        $(".one").hide();
        $(".two").hide();
        $(".three").hide();
        $(".four").hide();
        $("#tables").append(usedSeating);
      } else {
        let openSeating = `<div class="table one"><h4 class="header ones">Table ${taco.table}</h4><p class="receipt">${"Open For Seating"}</p></div>`;
        $(".one").hide();
        $(".two").hide();
        $(".three").hide();
        $(".four").hide();
        $("#tables").append(openSeating);
      }
    }

    $(".one").show("fast");
    $(".two").show("fast");
    $(".three").show("normal");
    $(".four").show("slow");

    CurrentSelectedServer = "Demin";
  });
});
