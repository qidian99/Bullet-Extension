submitButton.addEventListener("click", async function (e) {
  e.preventDefault();
  chrome.storage.sync.set({ 
    rid: rid.value,
    vid: vid.value
  }, function () {
    console.log("RID and VID are set");
  });
  chrome.tabs.executeScript({
    file: "/js/insert.js",
  });
});

logoutButton.addEventListener("click", function (e) {
  console.log('logout clicked')
  e.preventDefault();
  chrome.storage.sync.clear();
  window.location.href = "/html/login.html";
  chrome.browserAction.setPopup(
    {
      popup: "/html/login.html",
    },
    () => {
      console.log("setting pop up.");
    }
  );
});
