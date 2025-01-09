document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Error fields
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    // Reset error messages
    nameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    passwordError.innerText = "";
    confirmPasswordError.innerText = "";

    let valid = true;

    // Name Validation
    if (fullName.length < 5) {
        nameError.innerText = "Name must be at least 5 characters.";
        valid = false;
    }

    // Email Validation
    if (!email.includes("@")) {
        emailError.innerText = "Enter a valid email address.";
        valid = false;
    }

    // Phone Number Validation
    if (phoneNumber.length !== 10 || phoneNumber === "123456789") {
        phoneError.innerText = "Enter a valid 10-digit phone number.";
        valid = false;
    }

    // Password Validation
    if (password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase() || password.length < 8) {
        passwordError.innerText = "Password must be at least 8 characters and not too common.";
        valid = false;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        confirmPasswordError.innerText = "Passwords do not match.";
        valid = false;
    }

    // If all fields are valid
    if (valid) {
        alert("Form submitted successfully!");
        // Reset the form
        document.getElementById("registrationForm").reset();
    }
});