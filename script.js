function validate() {

    let phone = document.getElementById("phone");
    let error = document.getElementById("error");
    let email = document.getElementById("email");
    let error1 = document.getElementById("error1");
    let PasswordParameter = document.getElementById("pwd");
    let strengthBadge = document.getElementById('StrengthDisp');
    let phoneflag = false;
    let pwdflag = false;
    let emailflag=false;
    let emailregx=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regex = /^([0-9]{3})([\.-\s]?)([0-9]{3})([\.-\s]?)([0-9]{4})$/;
    if (emailregx.test(email.value)) {
        error1.innerHTML = "email is valid";
        error1.style.backgroundColor = "green";
        error1.style.color = "white";
        emailflag = true;
    }
    else {
        error1.innerHTML = "email is not valid";
        error1.style.backgroundColor = "red";
        error1.style.color = "white";
        //return false;
    }

    if (regex.test(phone.value)) {
        error.innerHTML = "phone is valid";
        error.style.backgroundColor = "green";
        error.style.color = "white";
        phoneflag = true;
    }
    else {
        error.innerHTML = "phone is not valid";
        error.style.backgroundColor = "red";
        error.style.color = "white";
        //return false;
    }

    let strongPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    let mediumPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,16}$/;
    if (strongPassword.test(PasswordParameter.value)) {
        strengthBadge.style.backgroundColor = "green";
        strengthBadge.textContent = 'Strong Password';
        pwdflag = true;
    } else if (mediumPassword.test(PasswordParameter.value)) {
        strengthBadge.style.backgroundColor = 'orange';
        strengthBadge.textContent = 'Medium strength Password';
        pwdflag = true;
    } else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Weak Password';
    }
    if (phoneflag && pwdflag &&emailflag)
        return true;
    else return false;
}

function validatepwd() {
    let strongPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    let PasswordParameter = document.getElementById("pwd");
    let strengthBadge = document.getElementById('StrengthDisp');   
    if (strongPassword.test(PasswordParameter.value)) {      
        return true;
    }
    else {
        strengthBadge.style.backgroundColor = "orange";
        alert('Password must be minimum 8 characters, at least one lowercase and one uppercase, must contain atleast one number!!');
        return false;
    }
}