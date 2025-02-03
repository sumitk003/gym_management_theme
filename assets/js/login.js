// code for search engine in navbar
function searchit() {
    document.getElementById("searchbtn").href = "https://www.google.com/search?q=" +
        document.getElementById("link-input").value;
}

// code for login validation
function sign_in_validate() {
    let email = document.getElementById("sign_in_email").value;
    let password = document.getElementById("sign_in_pass").value;

    // -----------------email-----------
    if (email == "") {
        alert("Please fill Email");
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

}

