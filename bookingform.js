document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form default submission
    // Collect form data
    const username = document.getElementById('username').value;
    const nidnumber = document.getElementById('number').value; // Corrected ID from 'nidnumber' to 'number'
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const roomtype = document.getElementById('roomtype').value;
    const amount = document.getElementById('amount').value;
    // Build query string with encoded values
    const queryString = `?username=${encodeURIComponent(username)}&nidnumber=${encodeURIComponent(nidnumber)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&roomtype=${encodeURIComponent(roomtype)}&amount=${encodeURIComponent(amount)}`;
    // Redirect to the display page with query parameters
    window.location.href = 'lastpagesubmitbtn.html' + queryString; // Ensure the target page is correct
});