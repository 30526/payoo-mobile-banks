// Log out btn 
document.getElementById('logout-btn')
    .addEventListener('click', function () {
        window.location.href = "./index.html"
    })

// Common functions to get input number 
function getInputValueNumber(id) {
    const inputValueNumber = parseInt(document.getElementById(id).value)
    return inputValueNumber;
}

function getInputValue(id) {
    const inputValue = document.getElementById(id).value
    return inputValue;
}

function balance(id) {
    const inputValue = parseInt(document.getElementById(id).innerText)
    return inputValue;
}


function innerText(value) {
    const getBalance = document.getElementById('available-balance')
    getBalance.innerText = value
}

// Cash In section 

document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()
        // account number 
        const accountNumber = getInputValue('bank-account-number')
        // account number condition 
        if (accountNumber.length < 11 || accountNumber.length > 11) {
            alert('Please, provide a valid account number')
            return;
        }

        // Add money 
        const addMoney = getInputValueNumber('add-amount')

        // pin Number 
        const pinNumber = getInputValueNumber('pin-number')
        // pin condition 
        const validPin = 1234;
        if (pinNumber !== validPin) {
            alert('Please, enter a valid pin')
            return;
        }

        // new balance 
        const availableBalance = balance('available-balance')
        const newBalance = availableBalance + addMoney
        innerText(newBalance)
    })



// Cash Out Section 
document.getElementById('withdraw-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()
        // agent Number 
        const agentNumber = getInputValue('agent')
        // agent number condition 
        if (agentNumber.length < 11 || agentNumber.length > 11) {
            alert('Please, provide a valid account number')
            return;
        }

        // withdraw money
        const withdrawMoney = getInputValueNumber('withdraw-amount')

        // pin Number 
        const pinNumber = getInputValueNumber('pin-number-2')
        // pin condition 
        const validPin = 1234;
        if (pinNumber !== validPin) {
            alert('Please, enter a valid pin')
            return;
        }

        // new balance 
        const availableBalance = balance('available-balance')
        const newBalance = availableBalance - withdrawMoney
        innerText(newBalance)
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
