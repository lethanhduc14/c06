function checkUsername(){
    var elMsg = document.getElementsByTagName('feddback');
    if (this.value.length<5){
        elMsg.textContent = ' Username must be 5 characters or more';
    }else {
        elMsg.textContent= '';
    }
}
var elUsername = document.getElementsByTagName('username');
elUsername.addEventListener('blue',checkUsername,false);