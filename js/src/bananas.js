export function createBanana() {
    let bananaImg = new Image();
    bananaImg.src =  "./img/Banana.png"
    
    return {
        x:  Math.floor(Math.random() * 750),
        y:0,
        width: 70,
        height: 70,
        img: bananaImg,
        fall: function(){
            this.y= this.y + 1;
        }
    }
}

export function drawBanana(banana,ctx){
    ctx.drawImage(banana.img, banana.x, banana.y, 80, 80);
}

function startGame(){
    setInterval(() => {
        draw();
    },1000)
}