const validEmail = "test@example.com";
const validPassword = "123456";

var email = document.getElementById("email");
var password = document.getElementById("password");

function login() {
  if (validEmail == email.value && validPassword == password.value) {
    alert("login Successful");
  } else {
    alert("invalid email or password");
  }
}
