function submitButtonClick(){

    // Get values
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let password = document.getElementById('password').value.trim();
    let course = document.getElementById('course').value;
    let address = document.getElementById('address').value.trim();

    // Clear old errors
    document.getElementById('nameError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('passwordError').innerHTML = "";
    document.getElementById('courseError').innerHTML = "";
    document.getElementById('addressError').innerHTML = "";

    let isValid = true;

    // Name validation
    if(name === ""){
        document.getElementById('nameError').innerHTML = "Name field is required";
        isValid = false;
    }

    // Email validation
    if(email === ""){
        document.getElementById('emailError').innerHTML = "Email field is required";
        isValid = false;
    }
    else if(!email.includes('@')){
        document.getElementById('emailError').innerHTML = "Email must contain @";
        isValid = false;
    }

    // Password validation
    if(password === ""){
        document.getElementById('passwordError').innerHTML = "Password field is required";
        isValid = false;
    }
    else if(password.length < 8){
        document.getElementById('passwordError').innerHTML = "At least 8 characters required";
        isValid = false;
    }

    // Course validation
    if(course === ""){
        document.getElementById('courseError').innerHTML = "Please select a course";
        isValid = false;
    }

    // Address validation
    if(address === ""){
        document.getElementById('addressError').innerHTML = "Address field is required";
        isValid = false;
    }

    if(isValid){
        alert("Registration Successful!");
        return true;
    }

    return false;
}