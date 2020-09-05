  // let changeColor = document.getElementById('changeColor');

  // chrome.storage.sync.get('color', function(data) {
  //   changeColor.style.backgroundColor = data.color;
  //   changeColor.setAttribute('value', data.color);
  // });

  // changeColor.onclick = function(element) {
  //   let color = element.target.value;
  //   chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //     chrome.tabs.executeScript(
  //         tabs[0].id,
  //         {code: 'document.body.style.backgroundColor = "' + color + '";'});
  //   });
  // };

  loginButton.addEventListener("click", function(e){
    e.preventDefault();

    window.location.href="/html/dashboard.html";
    chrome.browserAction.setPopup({ popup: '/html/dashboard.html' }, () => { console.log("setting pop up.")});
});
