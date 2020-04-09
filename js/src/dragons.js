let object = {
    x:1,
    y:1,
    img: ""
}

export function createDragon() {
    let dragonImg = new Image();
    dragonImg.src = "./img/RedDragon.png";
    return {
        x: Math.floor(Math.random() * 650),
        y: Math.floor(Math.random() * 500),
        width: 140,
        height: 140,
        img: dragonImg,
        touched: false
    }
}

export function drawDragon(dragon,ctx) {
    ctx.drawImage(dragon.img, dragon.x, dragon.y, 150, 150);
}