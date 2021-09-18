const subTotal = document.getElementById("display-amount");
const vanish = (e) => {
  const parent = e.parentElement,
    counterContent = parent.querySelector(".counter-content"),
    grandParent = parent.parentElement,
    min = grandParent.querySelector(".min"),
    amount = grandParent.querySelector(".amount");
  let amountInner = amount.innerHTML.toLowerCase();
  let minInner = min.innerHTML.toLowerCase();
  counterContent.value = parseInt(minInner, 10);
  subTotal.innerHTML = parseInt(subTotal.innerHTML) + parseInt(amountInner, 10);
  console.log(grandParent);
  if (e.style.display != "none") {
    e.style.display = "none";
  } else {
    e.style.display = "inline-block";
  }
};
const increment = (e) => {
  const parent = e.parentElement.parentElement,
    counterContent = parent.querySelector(".counter-content"),
    grandParent = parent.parentElement.parentElement,
    amount = grandParent.querySelector(".amount"),
    min = grandParent.querySelector(".min");
  let minInner = min.innerHTML.toLowerCase();
  let amountInner = amount.innerHTML.toLowerCase();

  if (
    minInner.includes("g") | minInner.includes("ml") &&
    minInner.includes("kg") === false
  ) {
    if (counterContent.value < 1000) {
      counterContent.value =
        parseInt(counterContent.value) + parseInt(minInner, 10);
      subTotal.innerHTML =
        parseInt(subTotal.innerHTML) + parseInt(amountInner, 10);
    } else {
      alert("Order limit is reached");
    }
  } else {
    counterContent.value = parseInt(counterContent.value) + 1;
    subTotal.innerHTML =
      parseInt(subTotal.innerHTML) +
      parseInt(amountInner, 10) / parseInt(minInner, 10);
  }
};

const decrement = (e) => {
  const parent = e.parentElement.parentElement,
    counterContent = parent.querySelector(".counter-content"),
    grandParent = parent.parentElement.parentElement,
    amount = grandParent.querySelector(".amount"),
    min = grandParent.querySelector(".min");
  let minInner = min.innerHTML.toLowerCase();
  let amountInner = amount.innerHTML.toLowerCase();

  if (
    minInner.includes("g") | minInner.includes("ml") &&
    minInner.includes("kg") === false
  ) {
    if (parseInt(counterContent.value) > parseInt(minInner, 10)) {
      counterContent.value =
        parseInt(counterContent.value) - parseInt(minInner, 10);
      subTotal.innerHTML =
        parseInt(subTotal.innerHTML) - parseInt(amountInner, 10);
    } else {
      counterContent.value = 0;
      subTotal.innerHTML =
        parseInt(subTotal.innerHTML) - parseInt(amountInner, 10);
      grandParent.querySelector(".overlay-add-btn").style.display =
        "inline-block";
    }

    console.log("counter");
    console.log(counterContent.value);
    console.log("subtotal");
    console.log(subTotal.innerHTML);
  } else {
    if (parseInt(counterContent.value) > parseInt(minInner, 10)) {
      counterContent.value = parseInt(counterContent.value) - 1;
      subTotal.innerHTML =
        parseInt(subTotal.innerHTML) -
        parseInt(amountInner, 10) / parseInt(minInner, 10);
    } else {
      counterContent.value = 0;

      if (counterContent.value === 0) {
        subTotal.innerHTML = subTotal.innerHTML;
      } else {
        subTotal.innerHTML =
          parseInt(subTotal.innerHTML) - parseInt(amountInner, 10);
      }
      grandParent.querySelector(".overlay-add-btn").style.display =
        "inline-block";
    }
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
