function validate() {

    let phone = document.getElementById("phone");
    let error = document.getElementById("error");
    let PasswordParameter = document.getElementById("pwd");
    let strengthBadge = document.getElementById('StrengthDisp');
    let phoneflag = false;
    let pwdflag = false;

    let regex = /^([0-9]{3})([\.-\s]?)([0-9]{3})([\.-\s]?)([0-9]{4})$/;
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
        strengthBadge.style.backgroundColor = 'blue';
        strengthBadge.textContent = 'Medium strength Password';
        pwdflag = true;
    } else {
        strengthBadge.style.backgroundColor = 'red';
        strengthBadge.textContent = 'Weak Password';
    }
    if (phoneflag && pwdflag)
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