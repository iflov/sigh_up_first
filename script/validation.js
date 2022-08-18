window.addEventListener('load', function() {
     clearMsg();

     var formElement = document.querySelector('form')
     formElement.onsubmit = submitForm;

     // 월 추가
     var selectInput = document.querySelector('select[name = "birthday_month"]')
     for(var i = 1; i <=12;i++){
        var option = this.document.createElement('option');
        option.innerHTML = i + '월';
        option.value = i;

        selectInput.appendChild(option);
     }

});

function clearMsg(){ // 테스트 문구들 지우는 함수
    var messages = document.getElementsByClassName('alert_message')
    for(var i = 0; i < messages.length; i++){
    messages[i].style.display = 'none';
    }
};

function showMessage(inputElement,message){
    var messageEle = inputElement.parentNode.querySelector('span')
    messageEle.style.display = 'inline'
    messageEle.innerText = message;

    inputElement.focus()
};

function submitForm(){
    // account 계정정보
    var accountInput = document.querySelector('input[name = "id"]')
    var passwordInput = document.querySelector('input[name = "password"]')
    var passwordCheckInput = document.querySelector('input[name = "password_check"')

    //select
    var selectInput = document.querySelector('select[name = "birthday_month"]')

    //radio
    var radioInput = document.querySelector('input[name = "gender"]:checked')

    //checkbox
    var checkInput = document.querySelector('input[name = "agree"]')

    console.log(accountInput.value)
    console.log(passwordInput.value)
    console.log(passwordCheckInput.value)
    console.log(selectInput.value)
    console.log(radioInput.value)
    console.log(checkInput.value)

    var success = true;

    if (accountInput.value.length < 6){
        showMessage(accountInput, '계정은 6가지 이상이어야 한다');
        success = false;
    }

    if (passwordInput.value.length < 10){
        showMessage(passwordInput, '비밀번호는 10자리 이상입니다!');
        success = false;
    }

    if(passwordCheckInput.value !== passwordInput.value){
        showMessage(passwordCheckInput, '비밀번호와 다릅니다');
        success = false;
    }

    return success;
};