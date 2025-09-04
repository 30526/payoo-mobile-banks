// Common function to get input number 
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
        document.getElementById('available-balance').innerText = newBalance
    })



