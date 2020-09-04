var element = document.getElementById('bulletTextView');
if (element == null) {
  console.log('injecting code');

  element = document.createElement('div');
  element.id = 'bulletTextView'
  element.style.cssText = `
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: skyblue;
    z-index: 99;
  `;
  element.innerHTML = `
    <div>
      <button onClick='playBullets();'>
        <span class="bp-svgicon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
            <path d="M17.982 9.275L8.06 3.27A2.013 2.013 0 005 4.994v12.011a2.017 2.017 0 003.06 1.725l9.922-6.005a2.017 2.017 0 000-3.45z">
            </path>
          </svg>
        </span>
      </button>
      <button>
        <span class="bp-svgicon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
            <path d="M7 3a2 2 0 00-2 2v12a2 2 0 104 0V5a2 2 0 00-2-2zM15 3a2 2 0 00-2 2v12a2 2 0 104 0V5a2 2 0 00-2-2z">
            </path>
          </svg>
        </span>
      </button>
    </div>
    <div>
      <input type="text" id="bulletText" placeholder="说点儿什么吧">
      <button onClick='createBullet(document.getElementById("bulletText").value);'>发送</button>
    </div>
  `;
  document.body.appendChild(element);

  let bulletStyle = document.createElement('style');
  bulletStyle.innerHTML = `
  .bullet {
    width: 200px;
    position: fixed;
    top: 0;
    font-size: 19px;
    line-height: 1.21053;
    font-weight: 400;
    letter-spacing: .012em;
    font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  }
  `;
  document.body.appendChild(bulletStyle);

  let bulletScript = document.createElement('script');
  bulletScript.innerHTML = `
  function createBullet(content) {
    let bulletEle = document.createElement('div');
    bulletEle.className = 'bullet';
    bulletEle.innerHTML = content;
    document.body.appendChild(bulletEle);
    
    var pos = 0;
    var id = setInterval(function() {
      if (pos == window.innerWidth) {
        clearInterval(id);
        //bulletEle.remove();
      } else {
        pos++; 
        bulletEle.style.left = pos + "px"; 
      }
    }, 5);
  }

  function playBullets() {
    var bullets = [
      {
          "id": 1,
          "timestamp": "1000",
          "content": "第一条弹幕"
      }
    ];

    bullets.forEach((bullet) => {
      setTimeout(() => {
        createBullet(bullet.content);
      }, bullet.timestamp);
    })
  }
  `;
  document.body.appendChild(bulletScript);
}
