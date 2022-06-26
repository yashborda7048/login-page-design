function validation() {
    var alpha = /^[A-Za-z]+$/;
    var user = document.getElementById("user").value;
    var surname = document.getElementById("surname").value;
    var user_id = document.getElementById("user_id").value;
    var validemail =/^([A-Za-z0-9_\-]+)@([A-Za-z0-9]+)\.([A-Za-z]){2,7}$/;
    var email = document.getElementById("email").value;
    var recovery_email = document.getElementById("recovery_email").value;
    var password = document.getElementById("password").value;
    var validpass = /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}/;
    var retype_password = document.getElementById("retype_password").value;

    if (user == "") {
        document.getElementById("useralt").innerHTML = "**  Name field required.";
        return ;
    }

    if (user.match(alpha))
        true;
    else {
        document.getElementById("useralt").innerHTML = "** Only alphabet are allowed.";
        return;
    }

    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById("useralt").innerHTML = "** Name length must be between 2 and 20 character are allowed..";
        return;
    }
    if (!isNaN(user)) {
        document.getElementById("useralt").innerHTML = "**  Only character are allowed.";
        return;
    }

    if (surname == "") {
        document.getElementById("surnamealt").innerHTML = "** Surname field required.";
        return;
    }

    if ((surname.length <= 2) || (surname.length > 20)) {
        document.getElementById("surnamealt").innerHTML = "** Name length must be between 2 and 20 character are allowed.";
        return;
    }

    if (surname.match(alpha))
        true;
    else {
        document.getElementById("surnamealt").innerHTML = "** Only alphabet are allowed.";
        return;
    }

 //   console.log(surname, surname.match(alpha));

    if (user_id == "") {
        document.getElementById("user_idalt").innerHTML = "**  User-id field required.";
        return;
    }
    if (isNaN(user_id)) {
        document.getElementById("user_idalt").innerHTML = "**  Only Number are allowed.";
        return;
    }
// email validation

    if (email == "") {
        document.getElementById("emailalt").innerHTML = "**  Email field required.";
        return;
    }
    if (email.match(validemail))
        true;
    else{
        document.getElementById("emailalt").innerHTML = "**  Invalid email field required.";
        return;
    }
    
    if (email.indexOf("@") <=0){
        document.getElementById("emailalt").innerHTML = "**  Invalid @ position.";
        return;
    }
    if (email.indexOf(".") <=0){
        document.getElementById("emailalt").innerHTML = "**  Invalid @ position.";
        return;
    }
     if ((email.charAt(email.length-4) !=".") && (email.charAt(email.length-3) !=".")){
        document.getElementById("emailalt").innerHTML = "**  Invalid email address.";
        return;
    }
    if (recovery_email == "") {
        document.getElementById("recovery_emailalt").innerHTML = "**  Recovery email field required.";
        return;
    }
 //   console.log(email, recovery_email, recovery_email == email);

    if (recovery_email.match(validemail))
        true;
    else{
        document.getElementById("recovery_emailalt").innerHTML = "**  Invalid email field required.";
        return;
    }

    if (recovery_email.indexOf("@") <=0){
        document.getElementById("recovery_emailalt").innerHTML = "**  Invalid @ position.";
        return;
    }
    if (recovery_email.indexOf(".") <=0){
        document.getElementById("recovery_emailalt").innerHTML = "**  Invalid @ position.";
        return;
    }
    if ((recovery_email.charAt(recovery_email.length-4) !=".") && (recovery_email.charAt(email.length-3) !=".")){
        document.getElementById("recovery_emailalt").innerHTML = "**  Invalid email address.";
        return;
    }

console.log(recovery_email.charAt(recovery_email.length-4) !=".")

    if (email == recovery_email) {
        document.getElementById("recovery_emailalt").innerHTML = "** Alredy use this email required.";
        return;
    }
    if (password == "") {
        document.getElementById("passwordalt").innerHTML = "**  password field required.";
        return;
    }

    if (password.match(validpass))
        true;
    else{
        document.getElementById("passwordalt").innerHTML = "**  Invalid password field required(use special charater A,a,@,0).";
        return;
    }

    if (password.length < 8) {
        document.getElementById("passwordalt").innerHTML = "** Minimum 8 Number are allowed.";
        return;
    }

    if (retype_password == "") {
        document.getElementById("retype_passwordalt").innerHTML = "** confirm password required.";
        return;
    }
 //   console.log(password, retype_password, password != retype_password);

    if (password != retype_password) {
        document.getElementById("retype_passwordalt").innerHTML = "** Not matching password.";
        return;
    }
}
