let sadMonkey = {
    x: monkey.x,
    y: monkey.y,
    width: 60,
    height: 60,
  };

  
const sadMonkeyImg = new Image();
sadMonkeyImg.src = "./img/SadMonkey.png";

function drawSadMonkey(sadMonkey,ctx) {
    ctx.drawImage(sadMonkeyImg, monkey.x, monkey.y, 80, 80);
    }