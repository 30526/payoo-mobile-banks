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

// add money button 
document.getElementById('add-money-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('add-money-section').style.display = 'block'
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            card.style.border = '2px solid #08080848'
            card.style.backgroundColor = 'white'
        }
        document.getElementById('add-money-card').style.border = '2px solid #0874F2'
        document.getElementById('add-money-card').style.backgroundColor = '#0874F220'
    })

// cash out button 
document.getElementById('cash-out-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('cash-out-section').style.display = 'block'
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            card.style.border = '2px solid #08080848'
            card.style.backgroundColor = 'white'
        }
        document.getElementById('cash-out-card').style.border = '2px solid #0874F2'
        document.getElementById('cash-out-card').style.backgroundColor = '#0874F220'
    })

// Transfer money  
document.getElementById('transfer-money-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('transfer-money-section').style.display = 'block'
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            card.style.border = '2px solid #08080848'
            card.style.backgroundColor = 'white'
        }
        document.getElementById('transfer-money-card').style.border = '2px solid #0874F2'
        document.getElementById('transfer-money-card').style.backgroundColor = '#0874F220'
    })


// get bonus
document.getElementById('get-bonus-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('get-bonus-section').style.display = 'block'
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            card.style.border = '2px solid #08080848'
            card.style.backgroundColor = 'white'
        }
        document.getElementById('get-bonus-card').style.border = '2px solid #0874F2'
        document.getElementById('get-bonus-card').style.backgroundColor = '#0874F220'
    })

// pay bill
document.getElementById('pay-bill-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('pay-bill-section').style.display = 'block'
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            card.style.border = '2px solid #08080848'
            card.style.backgroundColor = 'white'
        }
        document.getElementById('pay-bill-card').style.border = '2px solid #0874F2'
        document.getElementById('pay-bill-card').style.backgroundColor = '#0874F220'
    })
