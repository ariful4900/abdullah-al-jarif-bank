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

    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber)

    document.getElementById("depositAmount").value = "";
})

//Withdraw Button Handler
const withdraw = document.getElementById("withdraw")
withdraw.addEventListener("click", () => {
    const withdrawNumber = getInputNumber("withdrawAmount")

    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBalance", -1 * withdrawNumber)
    // withDrawSpanText("currentBalance", withdrawNumber)

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
// const withDrawSpanText = (id, number) => {
//     const current = document.getElementById(id).innerText;
//     const currentNumber = parseFloat(current);
//     const totalAmount = currentNumber - number;
//     document.getElementById(id).innerText = totalAmount;
// }