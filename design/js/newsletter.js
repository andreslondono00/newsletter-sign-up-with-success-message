function onSubmit() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const errorText = document.getElementById("error_text");
    errorText.style.display = "none";
    emailInput.classList.remove("input_error");

    if (email === "") {
        errorText.style.display = "block";
        emailInput.classList.add("input_error");
    } else {
        if (validateEmail(email)) {
            document.getElementById("container").style.display = "none";
            document.getElementById("email_confirm_container").style.display = "flex";
            document.getElementById("thanks_email").innerHTML = email;
        } else {
            errorText.style.display = "block";
            emailInput.classList.add("input_error");
        }
    }
}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function dismissMessage() {
    document.getElementById("container").style.display = "flex";
    document.getElementById("email_confirm_container").style.display = "none";
    document.getElementById("email").value="";
}
