var element = document.getElementById('bulletTextView');
if (element == null) {
  console.log('injecting code');

  element = document.createElement('div');
  element.id = 'bulletTextView'
  element.style.cssText = `
    position: fixed;
    bottom: 20px;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    z-index: 999;
  `;
  element.innerHTML = `
  <style>
    * {
      font-size: 12px;
      font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica,
        Arial, PingFang SC, Hiragino Sans GB, Microsoft YaHei, sans-serif;
    }

    button,
    input[type="submit"],
    input[type="reset"] {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
      outline: none;
      color: inherit;
      text-align: inherit;
      font: inherit;
      line-height: inherit;
    }

    *:focus {
      outline: none;
    }

    .danmu-root {
      width: 100%;
      display: flex;
      flex-grow: 1;
      align-items: center;
      position: relative;
      height: 30px;
      line-height: 30px;
      background: #f4f4f4;
      color: #999;
      border-radius: 2px;
    }

    .danmu-btn {
      width: 36px;
      height: 22px;
      line-height: 22px;
    }

    .danmu-btn button {
      display: inline-flex;
    }

    button.danmu-btn-pause {
      display: none;
    }

    .bp-svgicon,
    .bp-svgicon svg {
      width: 100%;
      height: 100%;
    }

    .bp-svgicon {
      height: 22px;
    }

    .time-textarea {
      width: 84px;
      line-height: 22px;
      height: 22px;
      font-size: 12px;
      position: relative;
      cursor: pointer;
    }

    .danmu-input-wrap {
      margin-left: 50px;
      width: 200px;
      border-radius: 2px 0 0 2px;
      display: flex;
      flex: 1;
      border: 1px solid #e7e7e7;
      box-sizing: border-box;
    }

    .danmu-input {
      color: #212121;
      flex-grow: 1;
      border: 0;
      height: 28px;
      line-height: 30px;
      box-sizing: border-box;
      z-index: 12;
      padding: 0 5px;
      background: none;
      font-size: 12px;
      min-width: 115px;
      width: 100%;
    }

    .btn-send {
      z-index: 13;
      height: 30px;
      width: 60px;
      min-width: 60px;
      line-height: 30px;
      text-align: center;
      box-sizing: border-box;
      border-radius: 0 2px 2px 0;
      background-color: #00a1d6;
      color: #fff;
    }
  </style>

  <div id="danmu-root" class="danmu-root">
    <div class="danmu-btn">
      <button class="danmu-btn-start" onClick="playDanmu();">
        <span class="bp-svgicon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
            <path
              d="M17.982 9.275L8.06 3.27A2.013 2.013 0 005 4.994v12.011a2.017 2.017 0 003.06 1.725l9.922-6.005a2.017 2.017 0 000-3.45z"
            ></path>
          </svg>
        </span>
      </button>
      <button class="danmu-btn-pause">
        <span class="bp-svgicon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
            <path
              d="M7 3a2 2 0 00-2 2v12a2 2 0 104 0V5a2 2 0 00-2-2zM15 3a2 2 0 00-2 2v12a2 2 0 104 0V5a2 2 0 00-2-2z"
            ></path>
          </svg>
        </span>
      </button>
    </div>
    <div>
      <span class="bp-svgicon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
          <circle cx="11" cy="11" r="2"></circle>
          <path d="M19.164 8.861L17.6 8.6a6.978 6.978 0 00-1.186-2.099l.574-1.533a1 1 0 00-.436-1.217l-1.997-1.153a1.001 1.001 0 00-1.272.23l-1.008 1.225a7.04 7.04 0 00-2.55.001L8.716 2.829a1 1 0 00-1.272-.23L5.447 3.751a1 1 0 00-.436 1.217l.574 1.533A6.997 6.997 0 004.4 8.6l-1.564.261A.999.999 0 002 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 001.228 2.075l-.558 1.487a1 1 0 00.436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 002.272 0l1.04 1.263a1 1 0 001.272.23l1.997-1.153a1 1 0 00.436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 00.835-.986V9.847a.999.999 0 00-.836-.986zM11 15a4 4 0 110-8 4 4 0 010 8z"></path>
        </svg>
      </span>
    </div>
    <div class="time-textarea">
      <div>
        <span>01:59</span>
        /
        <span>03:39</span>
      </div>
    </div>
    <div class="danmu-input-wrap">
      <input
        class="danmu-input"
        type="text"
        id="bulletText"
        placeholder="说点儿什么吧"
      />
    </div>
    <button
      class="btn-send"
      onClick='createDanmu(document.getElementById("bulletText").value);'
    >
      发送
    </button>
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
    z-index: 999;
  }
  `;
  document.body.appendChild(bulletStyle);

  let bulletScript = document.createElement('script');
  bulletScript.innerHTML = `
  function createDanmu(content) {
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
        bulletEle.style.right = pos + "px"; 
      }
    }, 5);
  }

  function playDanmu() {
    let danmubox = document.getElementById('danmubox');
    window.pos = window.innerWidth;
    if (window.id != null) {
      clearInterval(window.id);
    }
    window.id = setInterval(function() {
      if (window.pos == 0) {
        clearInterval(window.id);
        //bulletEle.remove();
      } else {
        window.pos--; 
        danmubox.style.left = window.pos + "px"; 
      }
    }, 5);
  }

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  dragElement(document.getElementById("danmu-root"));
  `;
  document.body.appendChild(bulletScript);

  var bullets = [
    {
      "id": 1,
      "row": 1,
      "timestamp": 1,
      "content": "第一条弹幕"
    },
    {
      "id": 2,
      "row": 2,
      "timestamp": 3,
      "content": "齐齐大佬"
    },
    {
      "id": 3,
      "row": 1,
      "timestamp": 10,
      "content": "我来啦！第一第一！！！"
    },
    {
      "id": 4,
      "row": 1,
      "timestamp": 22,
      "content": "不要刷第一了好嘛"
    },
  ];

  let danmubox = document.createElement('div');
  danmubox.id = 'danmubox';
  danmubox.style.cssText = `
    position: absolute;
    left: ${window.innerWidth}px;
    top: 0;
    width: ${bullets[bullets.length - 1].timestamp * 20 + 200}px;
    height: 100%;
  `;
  bullets.forEach(danmu => {
    let bulletEle = document.createElement('div');
    bulletEle.style.cssText = `
      position: absolute;
      top: ${danmu.row * 25}px;
      left: ${danmu.timestamp * 20}px;
      font-size: 19px;
      line-height: 1.21053;
      font-weight: 400;
      letter-spacing: .012em;
      font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
      z-index: 999;
    `;
    bulletEle.innerHTML = danmu.content;
    danmubox.appendChild(bulletEle);
  })
  document.body.appendChild(danmubox);
}