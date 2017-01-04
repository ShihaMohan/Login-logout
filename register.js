
function RegisterStore() {
    if (formValidation()) {
        var email = document.getElementById('emailid').value;
        var password = document.getElementById('psw').value;
        localStorage.setItem(email, password);

    }
}

function CheckRegistererror(){
    var email = document.getElementById('emailid').value;
    if(localStorage.getItem(email)){
        console.log("Email already Exists");
        return false;
    }
    else{
        return true;
    }
}

function formValidation() {
    if (FnameValidate() && LnameValidate() && EmailValidate() && PwdStrength() && CheckPassword() && NumberValidate() && CheckRegistererror()) {
        console.log("Validation completed");
        window.location="login.html";
        return true;

    } else {
        console.log("Validation not Completed");
        return false;
    }
}

function NumberValidate() {
    var numbers = /^\d{10}$/;
    var num = document.myForm.MobileNumber.value;
    var numstyle = document.getElementById('MobileNumber');
    if (num == '') {
        numstyle.style.borderColor = "white";
        document.getElementById('mmessage').innerHTML = "";
        return false;
    } else if (num.match(numbers)) {
        numstyle.style.borderColor = "green";
        document.getElementById('mmessage').innerHTML = "";
        return true;
    } else {
        numstyle.style.borderColor = "red";
        document.getElementById('mmessage').style.color = "red";
        document.getElementById('mmessage').innerHTML = "Invalid Mobile Number";
        document.myForm.MobileNumber.focus();
        return false;
    }
}


function FnameValidate() {
    var fname = document.myForm.FirstName.value;
    var fnamestyle = document.getElementById('FirstName');
    var letters = /^[A-Za-z]\w{2,20}$/;
    if (fname == '') {
        fnamestyle.style.borderColor = "white";
        document.getElementById('fnamemessage').innerHTML = "";
        return false;
    } else if (fname.match(letters)) {
        fnamestyle.style.borderColor = "green";
        document.getElementById('fnamemessage').innerHTML = "";
        return true;
    } else {
        fnamestyle.style.borderColor = "red";
        document.getElementById('fnamemessage').style.color = "red";
        document.getElementById('fnamemessage').innerHTML = "Invalid First Name";
        document.myForm.FirstName.focus();
        return false;
    }
}

function LnameValidate() {
    var lname = document.myForm.LastName.value;
    var lnamestyle = document.getElementById('LastName');
    var letters = /^[A-Za-z]+$/;
    if (lname == '') {
        lnamestyle.style.borderColor = "white";
        document.getElementById('lnamemessage').innerHTML = "";
        return false;
    } else if (lname.match(letters)) {
        lnamestyle.style.borderColor = "green";
        document.getElementById('lnamemessage').innerHTML = "";
        return true;
    } else {
        lnamestyle.style.borderColor = "red";
        document.getElementById('lnamemessage').style.color = "red";
        document.getElementById('lnamemessage').innerHTML = "Invalid Last Name";
        document.myForm.LastName.focus();
        return false;
    }
}


function CopyAddress() {
    var paddress = document.getElementById("permanent_address");
    var caddress = document.getElementById("contact_address");
    if(document.myForm.checkbox.checked){
        caddress.value = paddress.value;
        caddress.disabled = true;
    }
    else{
        caddress.disabled = false;
    }

}

function EmailValidate() {
    var x = document.myForm.emailid.value;
    var mailid = document.getElementById('emailid');
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (x == '') {
        mailid.style.borderColor = "white";
        document.getElementById('emailmessage').innerHTML = "";
        return false;
    } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        mailid.style.borderColor = "red";
        document.getElementById('emailmessage').style.color = "red";
        document.getElementById('emailmessage').innerHTML = "Invalid Email id";
        document.myForm.emailid.focus();
        return false;
    } else if (x.match(/^[A-Za-z]/)) {
        mailid.style.borderColor = "green";
        document.getElementById('emailmessage').innerHTML = "";
        return true;
    }
}

function PwdStrength() {
    var pwd = document.myForm.psw.value;
    var paswd = /^[a-zA-Z0-9]{5,20}$/;
    var pass = document.getElementById('psw');
    var msg = document.getElementById('pwdmessage');
    if (pwd.length > 8 && pwd.match(paswd)) {
        pass.style.borderColor = "green";
        msg.style.color = "green";
        msg.innerHTML = "Strong Password";
        return true;
    } else if (pwd == '') {
        pass.style.borderColor = "white";
        msg.innerHTML = "";
        document.myForm.psw.focus();
        return false;
    } else if (pwd.length > 5 && pwd.match(paswd)) {
        pass.style.borderColor = "orangered";
        msg.style.color = "orangered";
        msg.innerHTML = "weak Password";
        return true;
    } else {
        pass.style.borderColor = "red";
        msg.style.color = "red";
        msg.innerHTML = "Password must not contain special characters";
        document.myForm.psw.focus();
        return false;
    }

}   

function MessageHide(){
   document.getElementById('pwdmessage').innerHTML = "";
}

function CheckPassword() {
    var pass = document.getElementById('psw');
    var cpass = document.getElementById('cpsw');
    var paswd = /^[a-zA-Z0-9]{5,20}$/;
    var message = document.getElementById('ConfirmMessage');
    var GoodColor = "green";
    var BadColor = "red";
    if (pass.value == cpass.value && document.myForm.psw.value.match(paswd)) {
        cpass.style.borderColor = GoodColor;
        pass.style.borderColor = GoodColor;
        message.style.color = GoodColor;
        message.innerHTML = "Password Match";
        return true;
    } else if (document.myForm.cpsw.value == '') {
        cpass.style.borderColor = "white";
        message.innerHTML = "";
        document.myForm.psw.focus();
        return false;
    } else {
        cpass.style.borderColor = BadColor;
        message.style.color = BadColor;
        message.innerHTML = "Invalid Password";
        document.myForm.cpsw.focus();
        return false;
    }
    
}
function checkpasswordmsg(){
 document.getElementById('ConfirmMessage').innerHTML = "";
}

