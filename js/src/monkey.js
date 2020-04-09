export let monkey = {
    x: 380,
    y: 280,
    width: 60,
    height: 60,
    moveUp: function() { 
        this.y -= 25 
    },
    moveDown: function() { 
        this.y += 25 
    },
    moveLeft: function() { 
        this.x -= 25 
    },
    moveRight: function() { 
        this.x += 25 
    },
}

const monkeyImg = new Image();
monkeyImg.src = "./img/Monkey.png"

export function drawMonkey(monkey,ctx) {
    ctx.drawImage(monkeyImg, monkey.x, monkey.y, 80, 80)
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38: 
        monkey.moveUp();    
        break;
        case 40: 
        monkey.moveDown();  
        break;
        case 37: 
        monkey.moveLeft();  
        break;
        case 39: 
        monkey.moveRight(); 
        break;
    }
    if (monkey.y < 0) {
        monkey.y = 600;
    }
    if (monkey.y > 600) {
        monkey.y = 0;
    }
    if (monkey.x < 0) {
        monkey.x = 800;
    }
    if (monkey.x > 800) {
        monkey.x = 0;
    }
  };

//   function updateCanvas() {
//     ctx.clearRect(0,0,1500,1700);
//     ctx.fillText("Monkey_x: " + monkey.x, 580,40);
//     ctx.fillText("Monkey_y: " + monkey.y, 580,60);
//     draw(monkey)
//   }
  
//   updateCanvas()

  