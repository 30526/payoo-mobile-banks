document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const selectBank = document.getElementById('select-bank').value
        const bankAccountNumber = document.getElementById('bank-account-number').value
        if (bankAccountNumber.length < 11) {
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



// cash out section 


document.getElementById('withdraw-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const agentNumber = document.getElementById('agent').value
        if (agentNumber.length < 11) {
            alert('Please, provide a valid number')
            return;
        }
        const validPin2 = 1234
        const pinNumber2 = parseInt(document.getElementById('pin-number-2').value)
        if (validPin2 !== pinNumber2) {
            alert('Please, enter a valid pin number')
            return;
        }

        const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value)
        console.log(withdrawAmount)
        const availableBalance2 = parseInt(document.getElementById('available-balance').innerText)
        console.log(availableBalance2)
        const balanceAfterCashOut = availableBalance2 - withdrawAmount
        document.getElementById('available-balance').innerText = balanceAfterCashOut
    })




// Toggle 
const addMoneyCard = document.getElementById('add-money-card')
const cashOutCard = document.getElementById('cash-out-card')

addMoneyCard.addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'block'
    document.getElementById('cash-out-section').style.display = 'none'

    document.getElementById('add-money-card').style.border = '2px solid #0874F2'
    document.getElementById('cash-out-card').style.border = '2px solid #08080848'

})
cashOutCard.addEventListener('click', function () {
    document.getElementById('add-money-section').style.display = 'none'
    document.getElementById('cash-out-section').style.display = 'block'

    document.getElementById('cash-out-card').style.border = '2px solid #0874F2'
    document.getElementById('add-money-card').style.border = '2px solid #08080848'
})
