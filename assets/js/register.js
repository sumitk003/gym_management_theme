// code for search engine in navbar
function searchit() {
    document.getElementById("searchbtn").href = "https://www.google.com/search?q=" +
        document.getElementById("link-input").value;
}

// code for registrater validation
function form_validate() {
    let first_name = document.getElementById("fname").value;
    let last_name = document.getElementById("lname").value;
    let password = document.getElementById("pass").value;
    let confirm_Password = document.getElementById("cnfrm_pass").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;

    // ---------------------firstname--------------
    if (first_name == "") {
        alert("Please fill first_name")
        return false;
    }
    if ((first_name.length <= 2) || (first_name.length > 20)) {
        alert("first name length must be between 3 and 20");
        return false;
    }
    if (!isNaN(first_name)) {
        alert("Only characters are allowed");
        return false;
    }
    // --------------password------------
    if (password == "") {
        alert("please fill Password");
        return false;
    }
    if ((password.length < 8) || (password.length > 20)) {
        alert("Password length must be between 8 to 20");
        return false;
    }
    if (password != confirm_Password) {
        alert("Password doesn't Match");
        return false;
    }
    // --------------confirm password-----------
    if (confirm_Password == "") {
        alert("Please fill Confirm Password");
        return false;
    }
    if ((confirm_Password.length < 8) || (confirm_Password.length > 20)) {
        alert("** Conferm password length must be between 8 to 20");
        return false;
    }
    // -----------------email-----------
    if (email == "") {
        alert("Please fill Email");
        return false;
    }
    // ----------------mobile--------------
    if (mobile == "") {
        alert("Please fill mobile nummber");
        return false;
    }
    if (mobile.length != 10) {
        alert("Mobile number must be 10 digits");
        return false;
    }
    // ----------------Dob--------------
    if (dob == "") {
        alert("Please fill date of birth(dob)");
        return false;
    }
}
