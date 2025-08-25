document.getElementById("add-amount").addEventListener("keyup", function(){
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const addBtn = document.getElementById("add-btn");
    if (addAmount > 0) {
        addBtn.removeAttribute("disabled");
    } else {
        addBtn.setAttribute("disabled", true);
    }
})

document.getElementById("add-btn").addEventListener("click", function (e) {
  e.preventDefault();
  const bankAcc = 88012345678;
  const pinNum = 1234;

  const userBankAcc = parseInt(document.getElementById("bank-account").value);
  const userPin = parseInt(document.getElementById("pin").value);

  if (bankAcc !== userBankAcc || pinNum !== userPin) {
    alert("⚠Invalid Credential⚠");
    return;
  }

  const addAmount = parseInt(document.getElementById("add-amount").value);
  const availableAmount = parseInt(
    document.getElementById("available-amount").innerText
  );
  const newAmount = availableAmount + addAmount;

  document.getElementById("available-amount").innerText = newAmount;
  alert("Money successfully added to the main balance");
});
