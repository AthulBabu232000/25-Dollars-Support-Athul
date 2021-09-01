var total = 0;
const increment = (e) => {
  const parent = e.parentElement.parentElement;
  const count = parent.querySelector(".counter-content");
  const gP = parent.parentElement.parentElement;
  const min = gP.querySelector(".min").innerHTML;
  const amount = gP.querySelector(".amount").innerHTML;
  console.log(parent);
  console.log(gP);
  count.value = parseInt(count.value) + parseInt(min.replace("Kg", ""));
  total =
    total +
    parseInt(min.replace("Kg", "")) * parseInt(amount.replace("/Kg", ""));
  console.log(count.value);
  console.log(total);
  document.getElementById("display-amount").innerHTML = total;
};

const vanish = (e) => {
  if (e.style.display != "none") {
    e.style.display = "none";
  } else {
    e.style.display = "inline-block";
  }
};

const decrement = (e) => {
  const parent = e.parentElement.parentElement.parentElement;
  const count = parent.querySelector(".counter-content");
  const overlayBtn = parent.querySelector(".overlay-add-btn");
  const gP = parent.parentElement;
  const min = gP.querySelector(".min").innerHTML;
  const amount = gP.querySelector(".amount").innerHTML;
  if (count.value < parseInt(min.replace("Kg", ""))) {
    vanish(overlayBtn);
  } else {
    count.value = parseInt(count.value) - parseInt(min.replace("Kg", ""));
    total = total - (parseInt(min.replace("Kg", "")) * parseInt(amount.replace("/Kg", "")));
    console.log(total);
  document.getElementById("display-amount").innerHTML = total;

  }
};

$(document).ready(function () {
  /* 1. Visualizing things on Hover - See next part for action on click */
  $("#stars li")
    .on("mouseover", function () {
      var onStar = parseInt($(this).data("value"), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          if (e < onStar) {
            $(this).addClass("hover");
          } else {
            $(this).removeClass("hover");
          }
        });
    })
    .on("mouseout", function () {
      $(this)
        .parent()
        .children("li.star")
        .each(function (e) {
          $(this).removeClass("hover");
        });
    });

  /* 2. Action to perform on click */
  $("#stars li").on("click", function () {
    var onStar = parseInt($(this).data("value"), 10); // The star currently selected
    var stars = $(this).parent().children("li.star");

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass("selected");
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass("selected");
    }

    // JUST RESPONSE (Not needed)
  });
});

var finalTable = [];
var table = document.getElementsByClassName("table")[0];
var tbody = table.querySelector("tbody");
var tRow = tbody.getElementsByTagName("tr");
for (let i = 0; i < tRow.length; i++) {
  interObj = {};
  let tCol = tRow[i].querySelectorAll("td");
  interObj.id = tCol[0].innerHTML;
  interObj.product = tCol[1].innerHTML;
  interObj.price = tCol[2].innerHTML;
  interObj.min = tCol[3].innerHTML;
  interObj.note = tCol[4].innerHTML;
  finalTable.push(interObj);
}
console.log(finalTable);
