# Simple Login Form with JavaScript

A beginner-friendly project that demonstrates the creation of a basic login form using HTML, CSS, and JavaScript. This project validates user credentials by comparing them against predefined values and provides feedback to users through alerts.

## Features

- **Credential Validation**: Compares user input with hardcoded email and password.
- **Interactive Alerts**: Displays success or error messages based on the validation.
- **Simple and Clean Code**: Ideal for beginners learning JavaScript and DOM manipulation.

## Technologies Used

- HTML
- CSS
- JavaScript

## How It Works

1. The form contains fields for the user to input their email and password.
2. When the "Login" button is clicked, the `login` function checks the input values against the predefined credentials:
   - **Email**: `test@example.com`
   - **Password**: `123456`
3. Based on the comparison:
   - A success alert is displayed if the credentials match.
   - An error alert is displayed otherwise.
  

How to Use
Clone the repository:

Copy code
```bash
git clone https://github.com/Zaid-Baluch/functional-login-form.git
```
Open the index.html file in your browser to view the login form.

Enter the credentials:

Email: test@example.com
Password: 123456
Click "Login" to see the result.

Future Enhancements
Add server-side validation for better security.
Replace alerts with inline messages for a better user experience.
Use encrypted credentials instead of hardcoding.

## Code Example

```javascript
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
