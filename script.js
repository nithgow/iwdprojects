function sendEmail() {
    // Perform form validation here

    // Dummy validation for demonstration purposes
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;

    if (!/^[A-Za-z ]+$/.test(name)) {
        alert("Please enter a valid name with only alphabets.");
        return;
    }

    if (!/^[A-Za-z ]+$/.test(subject)) {
        alert("Please enter a valid subject with only alphabets.");
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Dummy code for sending email (not recommended for production)
    alert("Email sent successfully!");
}
