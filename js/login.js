import { loginUser } from './util.js'

loginButton.addEventListener("click", function (e) {
  e.preventDefault();

  // alert(test);
  alert('sb')
  // Success
  // alert(`${username.value}:${password.value}`)

  window.location.href = "/html/dashboard.html";
  chrome.browserAction.setPopup({
    popup: '/html/dashboard.html'
  }, () => {
    console.log("setting pop up.")
  });
});
