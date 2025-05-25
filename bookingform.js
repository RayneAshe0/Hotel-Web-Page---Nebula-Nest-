document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const nidnumber = document.getElementById('number').value; 
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const roomtype = document.getElementById('roomtype').value;
    const amount = document.getElementById('amount').value;
    
    const queryString = `?username=${encodeURIComponent(username)}&nidnumber=${encodeURIComponent(nidnumber)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&roomtype=${encodeURIComponent(roomtype)}&amount=${encodeURIComponent(amount)}`;
    
    window.location.href = 'lastpagesubmitbtn.html' + queryString; 
});
