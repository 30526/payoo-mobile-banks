// Login button functionality 
document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        // mobile & pin Number 
        const mobileNumber = 123456789
        const pin = 1234
        // Mobile number to Int 
        const mobileNumberValue = document.getElementById('mobile-number').value
        const mobileNumberValueInt = parseInt(mobileNumberValue)
        // pin number to Int
        const pinNumberValue = document.getElementById('pin-number').value
        const pinNumberValueInt = parseInt(pinNumberValue)

        if (mobileNumberValueInt === 123456789 && pinNumberValueInt === 1234) {
            window.location.href = "./home.html"
        }
        else {
            alert('Invalid Mobile Number or Pin')
        }
    })