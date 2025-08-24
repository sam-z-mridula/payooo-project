document.getElementById('loginbtn').addEventListener('click', function(event){
    event.preventDefault();
    const mobileNum = 88012345678;
    const pin = 1234;
    const userMobileNum = parseInt(document.getElementById('mobile-number').value);
    const userPin = parseInt(document.getElementById('pin-number').value);

    if (userMobileNum !== mobileNum || userPin !== pin) {
        alert('Invalid input');
        return;
    } else {
        window.location.href = "./home.html";
        alert('login successful');
    }
})