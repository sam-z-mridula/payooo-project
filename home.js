document.getElementById("add-btn").addEventListener("click", function(e){
    e.preventDefault();
    const bankAcc = 88012345678;
    const pinNum = 1234;

    const userBankAcc = parseInt(document.getElementById("bank-account").value);
    const userPin = parseInt(document.getElementById("pin").value);
    
    if (bankAcc !== userBankAcc || pinNum !== userPin) {
        alert("Invalid Credential");
        return;
    }

    const addAmount = parseInt(document.getElementById("add-amount").value);

    if (addAmount <= 0) {
        alert("Invalid Amount");
        return;
    }

    const availableAmount = parseInt(document.getElementById("available-amount").innerText);
    const newAmount = availableAmount + addAmount;

    document.getElementById("available-amount").innerText = newAmount;
    alert("Money successfully added to the main balance");
})