
let order = [];
let clickedOrder = [];
let score = 0;
let bloquear = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder =()=>{
    bloquear = 0;
    let colorOrder = Math.floor(Math.random()*4);
    order[order.length] = colorOrder;
    clickedOrder = [];    
    for(let i in order) {        
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor,Number(i)+1);
    }
}

let lightColor = (element,number)=>{
    //number = number*500;
    number = number*1000;
    setTimeout(()=>{
        element.classList.add('selected');
        setTimeout(()=>{
            element.classList.remove('selected');
        },750);
    },number-250);
    //setTimeout(()=>{
    //    element.classList.remove('selected');
    //});
    bloquear++;
    console.log(" bloquear"+bloquear);        
}
let checkOrder = ()=>{
   
    for(let i in clickedOrder) {
        if(clickedOrder[i]!=order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length==order.length){
        let msg = `Pontuação: ${score}\n Você acertou! Iniciando próximo nível!`;
        setTimeout(()=>{
            document.getElementById("msg").innerHTML = msg;
        },250);
        nextLevel();
    }
}

let click = (color)=>{
    if(score==bloquear){
        clickedOrder[clickedOrder.length]=color;
        createColorElement(color).classList.add('selected');

        setTimeout(()=>{
            createColorElement(color).classList.remove('selected');
            checkOrder();
        },250);
    }
}

let createColorElement = (color)=>{
    if(color==0) {
        return green;
    } else if(color== 1) {
        return red;
    } else if (color==2) {
        return yellow;
    } else if (color==3 ) {
        return blue;
    }
}

let nextLevel = ()=>{
    score++;
    console.log("scote="+score);
    shuffleOrder();
}

let gameOver =()=>{
    alert(` Pontuação: ${score}!\n Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo.`);
    document.getElementById("msg").innerHTML = "";        
    order = [];
    clickedOrder = [];
    playGame();
}

let playGame = () => {
    alert(' Bem vindo ao Gênesis!\n Iniciando novo jogo!');
    score = 0;
    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();