document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const selectBank = document.getElementById('select-bank').value
        const bankAccountNumber = document.getElementById('bank-account-number').value
        const bankAccountNumberInt = parseInt(bankAccountNumber)
        if (bankAccountNumber.length < 11) {
            alert('Please provide a valid account number')
            return;
        }
        const addAmount = document.getElementById('add-amount').value
        const addAmountInt = parseInt(addAmount)
        const pinNumber = document.getElementById('pin-number').value
        const pinNumberInt = parseInt(pinNumber)

        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
        const newBalance = availableBalance + addAmountInt
        document.getElementById('available-balance').innerText = newBalance
    })
