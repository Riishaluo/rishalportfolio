var nameError=document.getElementById("name-error")
var emailError=document.getElementById("email-error")
var messageError=document.getElementById("message-error")
var submitError=document.getElementById("submit-error")

function validateName(){
    var fname=document.getElementById('contact-name').value.trim()
    
    if(fname.length==0){
        nameError.innerHTML='name is required'
        return false
    }
    if(!fname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name"
        return false
    }
     nameError.innerHTML='✅'
     return true
}

function validateEmail(){
    var femail=document.getElementById("contact-email").value.trim()

    if(femail.length==0){
        emailError.innerHTML="email is required"
        return false

    }
    if (!femail.match(/^\S+@\S+\.\S+$/)) {
        emailError.innerHTML="enter correct email"
        return false
    }
    emailError.innerHTML="✅"
    return true

}

function validateMessage(){
    var fmessage = document.getElementById("contact-message").value
    var required =15
    var left= required-fmessage.length
    if(left>0){
            messageError.innerHTML= left + "More characters is required"
            return false 
    }
    messageError.innerHTML="✅"
    return true
    
}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    return true;
}


