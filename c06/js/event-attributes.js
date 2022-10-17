function checkUsername(){
    var elMsg = document.getElementsByTagName('feedback');
    var elUsername = document.getElementsByTagName('username');
    if (elUsername.value.length<5){
        elMsg.textContent = 'Username must be 5 characters or more';
    } else {
        elMsg.textContent = '';
    }
}