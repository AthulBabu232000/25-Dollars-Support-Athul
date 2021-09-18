slideItIn = () => {
    const slider = document.getElementById("table-slider");
  
    console.log(slider.style.left);
    if (slider.style.left == `${-100}%`) {
      slider.style.left = 0;
    } else {
      slider.style.left = `${-100}%`;
    }
  };
  const deleter = (e) => {
    const parent = e.parentElement.parentElement;
    parent.style.display = "none";
  };
  
  const editor = (e) => {
    const parent = e.parentElement.parentElement;
    const child = parent.querySelectorAll("td");
  
    for (let i = 0; i < child.length - 1; i++) {
       
          child[i].setAttribute("contenteditable", "true");
   
      
    }
  };
  
  const toggler = (e) => {
    const parent = e.parentElement.parentElement;
    const child = parent.querySelectorAll("td");
  parent.disabled = true;
    for (let i = 0; i < child.length - 1; i++) {
      if (child[i].disabled == true) {
          child[i].setAttribute("contenteditable", "false");
          parent.querySelector("#editor").disabled = true;
  
        child[i].disabled = false;
      } else {
          child[i].setAttribute("contenteditable", "false");
          parent.querySelector("#editor").disabled = false;
  
        child[i].disabled = true;
      }
    }
  };
  const tableBody = document.getElementById("table-edit-body");
  var count = 0;
  
  const functionalTable = (pro, cat, pri, uni, min, not) => {
    tableBody.innerHTML += `<tr>
  <td contenteditable = "false" class = "text-center align-middle">${pro}</td>
  <td contenteditable = "false" class = "text-center align-middle">${cat}</td>
  <td contenteditable = "false" class = "text-center align-middle">${pri}</td>
  <td contenteditable = "false" class = "text-center align-middle">${uni}</td>
  <td contenteditable = "false" class = "text-center align-middle">${min}</td>
  <td contenteditable = "false" class = "text-center align-middle">${not}</td>
  <td contenteditable = "false" class = "text-center align-middle"><button class = "btn btn-warning" onclick = "deleter(this)">delete</button><button class = "btn btn-primary" onclick = "editor(this)" id = "editor">edit</button><button class = "btn btn-info" onclick = "toggler(this)">toggle</button></td>
  </tr>`;
  };
  const createTable = () => {
    count += 1;
    const addToTable = document.getElementsByClassName("addToTable");
    let product = addToTable[0].value,
      category = addToTable[1].value,
      price = addToTable[2].value,
      unit = addToTable[3].selectedOptions[0].innerHTML,
      minQty = addToTable[4].value,
      notes = addToTable[5].value;
  
    functionalTable(product, category, price, unit, minQty, notes);
  
    const alert = document.querySelector("#table-edit").querySelector(".warning");
    alert.style.display = "none";
  };