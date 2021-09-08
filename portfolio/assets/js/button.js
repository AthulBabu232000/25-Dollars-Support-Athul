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
