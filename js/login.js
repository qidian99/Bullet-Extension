import { loginUser } from './util.js'

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  loginUser(username.value, password.value);
});
