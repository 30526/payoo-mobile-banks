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

// transaction data 
const transactionsData = []

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
        // validation 
        if (addMoney <= 0) {
            alert('Invalid amount')
            return;
        }

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

        // push history to transaction data 
        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }
        transactionsData.push(data)
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

        // new balance 
        const availableBalance = balance('available-balance')
        // validation
        if (availableBalance < withdrawMoney || withdrawMoney <= 0) {
            alert('Insufficient balance')
            return;
        }
        const newBalance = availableBalance - withdrawMoney
        innerText(newBalance)

        // pin Number 
        const pinNumber = getInputValueNumber('pin-number-2')
        // pin condition 
        const validPin = 1234;
        if (pinNumber !== validPin) {
            alert('Please, enter a valid pin')
            return;
        }

        // push history to transaction data 
        const data = {
            name: "Cash Out",
            date: new Date().toLocaleTimeString()
        }
        transactionsData.push(data)

    })

// transactions history section 
document.getElementById('transactions-card')
    .addEventListener('click', function () {
        const transactionHistoryContainer = document.getElementById('transactions-history-container')
        transactionHistoryContainer.innerText = ''

        // looping through every add money or cash out data 
        for (const data of transactionsData) {
            // creating a card for history 
            const div = document.createElement('div')
            // adding the html structure of card into the div 
            div.innerHTML = `

                 <div class="bg-white rounded-xl p-3 flex justify-between items-center border-1 border-[#08080820] mb-3">
            <div class="flex gap-3">
                <div class="rounded-full p-3  bg-[#F4F5F7] text-center flex">
                    <img class="" src="assets/wallet1.png" alt="">
                </div>
                <div>
                    <h3 class="font-semibold text-lg text-[#080808d8]">${data.name}</h3>
                    <p class="text-sm text-[#08080895] font-normal">${data.date}</p>
                </div>
            </div>
                <span class="mr-3"><i class="fa-solid fa-ellipsis-vertical"></i></span>
        </div>
        `
            // appending the new history to the history container 
            transactionHistoryContainer.appendChild(div)

        }
    })


// latest payment section 


document.getElementById('latest-payment-button')
    .addEventListener('click', function () {
        const latestPayments = document.getElementById('latest-payments-container')
        latestPayments.innerText = ''

        // looping through every add money or cash out data 
        const paymentsData = [...transactionsData].reverse();
        for (const data of paymentsData) {
            // creating a card for history 
            const div = document.createElement('div')
            // adding the html structure of card into the div 
            div.innerHTML = `

                 <div class="bg-white rounded-xl p-3 flex justify-between items-center border-1 border-[#08080820] mb-3">
            <div class="flex gap-3">
                <div class="rounded-full p-3  bg-[#F4F5F7] text-center flex">
                    <img class="" src="assets/wallet1.png" alt="">
                </div>
                <div>
                    <h3 class="font-semibold text-lg text-[#080808d8]">${data.name}</h3>
                    <p class="text-sm text-[#08080895] font-normal">${data.date}</p>
                </div>
            </div>
                <span class="mr-3"><i class="fa-solid fa-ellipsis-vertical"></i></span>
        </div>
        `
            // appending the new history to the history container 
            latestPayments.appendChild(div)

        }
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
        // active status 
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            // card.style.border = '2px solid #08080848'
            // card.style.backgroundColor = 'white'
            card.classList.remove('border-[#0874F2]', 'bg-[#0874F220]')
            card.classList.add('border-[#08080848]')
        }
        // document.getElementById('add-money-card').style.border = '2px solid #0874F2'
        // document.getElementById('add-money-card').style.backgroundColor = '#0874F220'
        document.getElementById('add-money-card').classList.remove('border-[#08080848]')
        document.getElementById('add-money-card').classList.add('border-[#0874F2]', 'bg-[#0874F220]')
    })

// cash out button 
document.getElementById('cash-out-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('cash-out-section').style.display = 'block'
        // active status 
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            // card.style.border = '2px solid #08080848'
            // card.style.backgroundColor = 'white'
            card.classList.remove('border-[#0874F2]', 'bg-[#0874F220]')
            card.classList.add('border-[#08080848]')
        }
        // document.getElementById('cash-out-card').style.border = '2px solid #0874F2'
        // document.getElementById('cash-out-card').style.backgroundColor = '#0874F220'
        document.getElementById('cash-out-card').classList.remove('border-[#08080848]')
        document.getElementById('cash-out-card').classList.add('border-[#0874F2]', 'bg-[#0874F220]')
    })

// Transfer money  
document.getElementById('transfer-money-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('transfer-money-section').style.display = 'block'
        // active status 
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            // card.style.border = '2px solid #08080848'
            // card.style.backgroundColor = 'white'
            card.classList.remove('border-[#0874F2]', 'bg-[#0874F220]')
            card.classList.add('border-[#08080848]')
        }
        // document.getElementById('transfer-money-card').style.border = '2px solid #0874F2'
        // document.getElementById('transfer-money-card').style.backgroundColor = '#0874F220'
        document.getElementById('transfer-money-card').classList.remove('border-[#08080848]')
        document.getElementById('transfer-money-card').classList.add('border-[#0874F2]', 'bg-[#0874F220]')
    })


// get bonus
document.getElementById('get-bonus-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('get-bonus-section').style.display = 'block'
        // active status 
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            // card.style.border = '2px solid #08080848'
            // card.style.backgroundColor = 'white'
            card.classList.remove('border-[#0874F2]', 'bg-[#0874F220]')
            card.classList.add('border-[#08080848]')
        }
        // document.getElementById('get-bonus-card').style.border = '2px solid #0874F2'
        // document.getElementById('get-bonus-card').style.backgroundColor = '#0874F220'
        document.getElementById('get-bonus-card').classList.remove('border-[#08080848]')
        document.getElementById('get-bonus-card').classList.add('border-[#0874F2]', 'bg-[#0874F220]')
    })

// pay bill
document.getElementById('pay-bill-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('pay-bill-section').style.display = 'block'
        // active status 
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            // card.style.border = '2px solid #08080848'
            // card.style.backgroundColor = 'white'
            card.classList.remove('border-[#0874F2]', 'bg-[#0874F220]')
            card.classList.add('border-[#08080848]')
        }
        // document.getElementById('pay-bill-card').style.border = '2px solid #0874F2'
        // document.getElementById('pay-bill-card').style.backgroundColor = '#0874F220'
        document.getElementById('pay-bill-card').classList.remove('border-[#08080848]')
        document.getElementById('pay-bill-card').classList.add('border-[#0874F2]', 'bg-[#0874F220]')
    })

// Transactions 
document.getElementById('transactions-card')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('transactions-section').style.display = 'block'
        // active status 
        const cards = document.getElementsByClassName('card')
        for (const card of cards) {
            // card.style.border = '2px solid #08080848'
            // card.style.backgroundColor = 'white'
            card.classList.remove('border-[#0874F2]', 'bg-[#0874F220]')
            card.classList.add('border-[#08080848]')
        }
        // document.getElementById('pay-bill-card').style.border = '2px solid #0874F2'
        // document.getElementById('pay-bill-card').style.backgroundColor = '#0874F220'
        document.getElementById('transactions-card').classList.remove('border-[#08080848]')
        document.getElementById('transactions-card').classList.add('border-[#0874F2]', 'bg-[#0874F220]')
    })

// latest payments 
document.getElementById('latest-payment-button')
    .addEventListener('click', function () {
        const forms = document.getElementsByClassName('form')
        for (const form of forms) {
            form.style.display = 'none'
        }
        document.getElementById('latest-payments-section').style.display = 'block'
    })