import {createBanana, drawBanana} from "./bananas.js";
import {monkey,drawMonkey} from "./monkey.js";
import {createDragon, drawDragon} from "./dragons.js";
// import {sadMonkey,drawSadMonkey} from "./sadmonkey.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let bite = new Audio("../../sounds/bite.mp3");
let monkeyhit = new Audio("../../sounds/monkey.mp3")

// let startButton = document.getElementById("btnStart");
let banana = createBanana();
banana.fall();
let dragon = createDragon();

let bananas = [];
let dragons = [];

let scoreBananas = 0;
let dragonBites = 5;

// let sadMonkey = {
//   x: monkey.x,
//   y: monkey.y,
//   width: 60,
//   height: 60,
// };

const sadMonkeyImg = new Image();
sadMonkeyImg.src = "./img/SadMonkey.png";

function drawSadMonkey() {
ctx.drawImage(sadMonkeyImg, monkey.x, monkey.y, 80, 80);
}

function draw(){
  ctx.clearRect(0,0, canvas.width,canvas.height);
  drawScore();
  
  drawMonkey(monkey,ctx);
  for (let i = 0; i < bananas.length; i++) {
    drawBanana(bananas[i], ctx);
    checkCollisionBananas(monkey,bananas[i]);
  }
  for (let i = 0; i < dragons.length; i++) {
    drawDragon(dragons[i], ctx);
    checkCollisionDragons(monkey,dragons[i]);
  }
}

function removeDragon() {
  setInterval(() => {
    dragons.shift();
  },6000);
}
removeDragon();

function checkCollisionBananas(monkey,banana) {
  if (monkey.x < banana.x + banana.width &&
    monkey.x + monkey.width > banana.x &&
    monkey.y < banana.y + banana.height &&
    monkey.y + monkey.height > banana.y) {
      removeBanana();
      console.log("Bananas, yey");
      scoreBananas = scoreBananas + 1;
      bite.play();
  } 
  if (scoreBananas == 20) {
    WinningScene()
  }
}

function checkCollisionDragons(monkey,dragon) {
  if (monkey.x < dragon.x + dragon.width &&
    monkey.x + monkey.width > dragon.x &&
    monkey.y < dragon.y + dragon.height &&
    monkey.y + monkey.height > dragon.y) {
    replaceMonkey();
    console.log("saaaad monkey showing")
  }
  if (dragon.touched == false && monkey.x < dragon.x + dragon.width &&
    monkey.x + monkey.width > dragon.x &&
    monkey.y < dragon.y + dragon.height &&
    monkey.y + monkey.height > dragon.y) {
      console.log("I have been hit");
      dragonBites = dragonBites - 1;
      dragon.touched = true;
      monkeyhit.play();
  }
  if (dragonBites == 0) {
    GameOver();
  }
}

function drawScore() {
  ctx.font = "22px Lucida Sans";
  ctx.fillStyle = "white";
  ctx.fillText("Bananas collected: " + scoreBananas, 21, 25);
  ctx.fillText("Dragon bites left: " + dragonBites, 21, 50);
}

let interval;
let intrvlBananaFall;
let intrvlCreateBanana;
let intrvlCreateDragon;
 
function startGame(){
  scoreBananas = 0;
  dragonBites = 5;

  interval = setInterval(draw,40)
  intrvlBananaFall = setInterval(() => {
    for (let i = 0; i < bananas.length; i++) {
        bananas[i].fall();
        }
  },10);
  intrvlCreateBanana = setInterval(() => {
    bananas.push(createBanana());
  },2000);
  intrvlCreateDragon = setInterval(() => {
    dragons.push(createDragon());
  },5000);
}

function removeBanana() {
  bananas.shift(createBanana());
}

function replaceMonkey() {
  // ctx.clearRect(monkey.x, monkey.y, monkey.width,monkey.height);
  drawSadMonkey();
}

function WinningScene() {
  ctx.clearRect(0,0, canvas.width,canvas.height);
  ctx.font = "48px Lucida Sans";
  ctx.fillStyle = "orange";
  ctx.fillText("YOU WIN!", 280, 280);
  ctx.strokeText("YOU WIN!", 280, 280)
  drawScore()
  drawMonkey(monkey,ctx);
  clearInterval(interval);
  clearInterval(intrvlCreateDragon);
  clearInterval(intrvlCreateBanana);
  clearInterval(intrvlBananaFall);
 
}

function GameOver() {
  ctx.clearRect(0,0, canvas.width,canvas.height);
  ctx.font = "48px Lucida Sans";
  ctx.fillStyle = "red";
  ctx.fillText("GAME OVER!", 260, 280);
  ctx.strokeText("GAME OVER!", 260, 280);
  drawScore()
  replaceMonkey()
  // drawSadMonkey(sadMonkey,ctx);
  clearInterval(interval);
  clearInterval(intrvlCreateDragon);
  clearInterval(intrvlCreateBanana);
  clearInterval(intrvlBananaFall);
 
}

document.getElementById("btnStart").addEventListener("click", function () {
  // ctx.clearRect(0,0, canvas.width,canvas.height);
  startGame();
});


