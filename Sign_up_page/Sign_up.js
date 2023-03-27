
function null_check(){
    var  username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var sign_up = document.getElementById('sign_up_btn');

// 버튼 비활성화 함수
function disableButton(){
    sign_up.disabled = true;
}

// 버튼 활성화 함수
function enableButton(){
    sign_up.disabled = false; 
}

if(username.value == "" && password.value == "" && email.value == ""){

    disableButton();
        
} 
    else {
    enableButton();
}


}