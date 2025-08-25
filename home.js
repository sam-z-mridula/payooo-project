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
  alert("Activity Successful");
});

/* ---- Toggling ---- */
document.getElementById("add-money-btn").addEventListener("click", function(){
    document.getElementById("cashout-parent").style.display = "none";
    document.getElementById("notice").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block";
})
document.getElementById("cashout-btn").addEventListener("click", function(){
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("notice").style.display = "none";
    document.getElementById("cashout-parent").style.display = "block";
})

/*------------------ Cash Out Functionality ------------------ */
document.getElementById("withdraw-amount").addEventListener("keyup", function(){
    const wdAmount = parseInt(document.getElementById("withdraw-amount").value);
    const wdBtn = document.getElementById("withdraw-btn");
    if (wdAmount > 0) {
        wdBtn.removeAttribute("disabled");
    } else {
        wdBtn.setAttribute("disabled", true);
    }
})

document.getElementById("withdraw-btn").addEventListener("click", function(e){
    e.preventDefault();
    const agentNum = 88012345678;
    const wdPinNum = 1234;

    const userAgentNum = parseInt(document.getElementById("agent-number").value);
    const userWdPin = parseInt(document.getElementById("wd-pin").value);

    if (agentNum !== userAgentNum || wdPinNum !== userWdPin) {
    alert("⚠Invalid Credential⚠");
    return;
    }

    const wdAmount = parseInt(document.getElementById("withdraw-amount").value);
    const availableAmount = parseInt(
    document.getElementById("available-amount").innerText
  );
  const newAmount = availableAmount - wdAmount;

  document.getElementById("available-amount").innerText = newAmount;
  alert("Activity Successful");
})