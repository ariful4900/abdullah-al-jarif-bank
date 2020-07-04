//Login Button Event Handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("loginArea");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transactionArea");
    transactionArea.style.display = "block"

})
//Deposit button event Handler
const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    updateSpanText("currentDeposit", depositNumber)
    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    //  const totalBalance = currentBalanceNumber + depositNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;
    updateSpanText("currentBalance", depositNumber)

    document.getElementById("depositAmount").value = "";
})

//Withdraw Button Handler
const withdraw = document.getElementById("withdraw")
withdraw.addEventListener("click", () => {
    const withdrawNumber = getInputNumber("withdrawAmount")

    updateSpanText("currentWithdraw", withdrawNumber)
    withDrawSpanText("currentBalance", withdrawNumber)

    document.getElementById("withdrawAmount").value = "";

})
// for input Number
const getInputNumber = (id) => {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
//for Increment Balance
function updateSpanText(id, number) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + number;
    document.getElementById(id).innerText = totalAmount;
}
// for decrement Balance
const withDrawSpanText = (id, number) => {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber - number;
    document.getElementById(id).innerText = totalAmount;
}