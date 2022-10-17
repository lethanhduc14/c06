var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');
function checkUsername(minLength){
    if(slUsername.value.length< minLength){
        elMsg.innerHTML = ' Username must be' + minLength +'characters or more';
    }else {
        elMsg.innerHTML = '';

    }
}
if (elUsername.addEventListener){
    elUsername.addEventListener('blur',function (){
        checkUsername(5);
    });
}