function formValidation() {
  var email = document.signupform.email
  var username = document.signupform.username
  var password = document.signupform.password
  var confirm = document.signupform.confirm
  var information = ''
  if (  ValidateEmail(email) &&
  ValidateUsername(username) &&
  ValidatePassword(password) &&
  ValidateComfirmPassword(password, confirm)) {
    information = information + 'Email: ' + email.value; email.value = ''
    information = information + '<br>Username: ' + username.value; username.value = ''
    information = information + '<br>Password: ' + password.value; password.value = ''
    information = information + '<br>Confirm Password: ' + confirm.value; confirm.value = ''
    document.querySelector('#information').innerHTML = information
  }
}

function ValidateEmail(email) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailAlert = document.getElementsByClassName('invalid-alert')[0]
  if(email.value.match(mailformat)){
    emailAlert.style.display = 'none'
    return true
  }
  else {
    emailAlert.style.display = 'block'
    return false
  }
}

function ValidateUsername(username) {
  var usernameAlert = document.getElementsByClassName('invalid-alert')[1]
  if (/^\s|\s$/.test(username.value) || username.value == '') {
    usernameAlert.style.display = 'block'
    return false
  }
  else {
    usernameAlert.style.display = 'none'
    return true
  }
}

function ValidatePassword(password) {
  var passwordAlert = document.getElementsByClassName('invalid-alert')[2]
  if (password.value == '' || password.value.length < 8) {
    passwordAlert.style.display = 'block'
    return false
  }
  else {
    passwordAlert.style.display = 'none'
    return true
  }
}

function ValidateComfirmPassword(password, confirm) {
  var confirmAlert = document.getElementsByClassName('invalid-alert')[3]
  if (confirm.value != password.value) {
    confirmAlert.style.display = 'block'
    return false
  }
  else {
    confirmAlert.style.display = 'none'
    return true
  }
}