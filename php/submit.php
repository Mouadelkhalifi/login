<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the form data
    $email = $_POST["email"];
    $password = $_POST["password"]; // You should add the password input field in your HTML form

    // Add your server-side email validation logic here (e.g., check if the email is valid)

    // For demonstration purposes, let's just display the submitted data
    echo "Email: " . $email . "<br>";
    echo "Password: " . $password;
} else {
    // If someone tries to access this page directly without a POST request, you can redirect them or handle it as needed.
    echo "Access denied.";
}
?>
