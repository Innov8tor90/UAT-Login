

function checkCreds() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var Badge = document.getElementById("Badge").value;
    var confirmed = firstName + " " + lastName;
    if (firstName.length >20 || firstName.length <1) {
    // if (eventInfo.length > 40 || eventInfo.length < 2) {
          document.getElementById("loginStatus").innerHTML = "First name has invalid number of characters!";
    }
    else if (lastName.length >20 || lastName.length <1) {
        // if (eventInfo.length > 40 || eventInfo.length < 2) {
              document.getElementById("loginStatus").innerHTML = "Last name has invalid number of characters!";
        } 
    else if (Badge > 999 || Badge < 0) {
        document.getElementById("loginStatus").innerHTML = "Badge Number is  an invalid number!";
    }
    else {
        alert("Access Granted, Welcome " + confirmed + "!");
        location.replace("UATfunctionsCM.html");
    }
}

