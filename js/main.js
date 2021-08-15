//*******************deposit****************************
document.getElementById("btn-deposit").addEventListener('click', function (e) {

    let depositBalanceNode = document.getElementById('total-deposit-balance');
    const depositBalanceNodeValue = parseFloat(depositBalanceNode.innerText);

    //user deposit input
    let userDepositInputNode = document.getElementById("user-deposit-amount");
    const userDepositInput = parseFloat(document.getElementById("user-deposit-amount").value);
    const totalDepositBalance = depositBalanceNodeValue + userDepositInput;

    depositBalanceNode.innerText = totalDepositBalance; // update new deposit value
    userDepositInputNode.value = ""; // clear input value

    // update total
    let totalBalanceNode = document.getElementById('total-balance');
    const totalBalanceNodeValue = parseFloat(totalBalanceNode.innerText);
    const totalBalance = totalBalanceNodeValue + totalDepositBalance;

    totalBalanceNode.innerText = totalBalance; // update new balance

})

//************************withdraw******************************
document.getElementById("btn-withdraw").addEventListener('click', function (e) {


    const withdrawBalanceNode = document.getElementById('total-withdraw-balance');
    let withdrawBalanceNodeValue = parseFloat(withdrawBalanceNode.innerText);

    //user withdraw input
    let userWithdrawInputNode = document.getElementById("user-withdraw-amount");
    const userWithdrawInput = parseFloat(userWithdrawInputNode.value);
    const totalWithdrawBalance = withdrawBalanceNodeValue + userWithdrawInput;

    withdrawBalanceNode.innerText = totalWithdrawBalance; // update new withdraw value
    userWithdrawInputNode.value = ""; // clear input value

    // update total
    let totalBalanceNode = document.getElementById('total-balance');
    const totalBalanceNodeValue = parseFloat(totalBalanceNode.innerText);
    const totalBalance = totalBalanceNodeValue - totalWithdrawBalance;

    totalBalanceNode.innerText = totalBalance; // update new balance
})