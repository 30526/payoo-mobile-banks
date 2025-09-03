document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const selectBank = document.getElementById('select-bank').value
        const bankAccountNumber = document.getElementById('bank-account-number').value
        const bankAccountNumberInt = parseInt(bankAccountNumber)
        if (bankAccountNumberInt.length < 11) {
            alert('Please, provide a valid account number')
            return;
        }
        const addAmount = document.getElementById('add-amount').value
        const addAmountInt = parseInt(addAmount)
        const validPin = 1234;
        const pinNumber = document.getElementById('pin-number').value
        const pinNumberInt = parseInt(pinNumber)
        if (pinNumberInt !== validPin) {
            alert('Please, provide a valid pin')
            return;
        }

        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
        const newBalance = availableBalance + addAmountInt
        document.getElementById('available-balance').innerText = newBalance
    })

// Log out btn 
document.getElementById('logout-btn')
    .addEventListener('click', function () {
        window.location.href = "./index.html"
    })