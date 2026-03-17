function getFormvalue() {
    // Get values from input fields
    let fname = document.querySelector('input[name="fname"]').value.trim();
    let lname = document.querySelector('input[name="lname"]').value.trim();

    // Combine names
    let fullName = fname + " " + lname;

    // Handle empty input
    fullName = fullName.trim();

    // Show alert
    alert(fullName);

    // Prevent form from reloading page (important)
    return false;
}