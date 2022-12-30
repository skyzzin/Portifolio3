

let player = document.querySelector('#player');
let box = document.querySelector('#box');
let x = 0
let y = 0

let baixo = document.querySelector('.baixo');
let cima = document.querySelector('.cima')
let esquerda = document.querySelector('.esquerda')
let direira = document.querySelector('.direita')

let topPosition = player.offsetTop;
let leftPosition = player.offsetLeft;
let topbox = box.offsetTop;
let leftbox = box.offsetLeft;



player.addEventListener('click',move)
document.addEventListener('keydown',move)
function move(event){
 
    if(event.key == 'd'){
        x = x += 50
        player.style.left=x+'px'
        leftPosition = player.style.left
        console.log(leftPosition)
        direira.textContent = 'Direita '+x
    }
    if(event.key == 'a'){
        x = x -= 50
        player.style.left=x+'px'
        leftPosition = player.style.left
        console.log(leftPosition)
        esquerda.textContent = 'Esquerda '+x
    }
    if(event.key =='s'){
        y = y += 50
        player.style.top=y+'px'
        topPosition = player.style.top
        console.log(topPosition)
        baixo.textContent = 'Baixo '+y
    }
    if(event.key =='w'){
        y = y -= 50
        player.style.top=y+'px'
        topPosition = player.style.top
        console.log(topPosition)
        cima.textContent = 'Cima '+y
    }  
    let rectPlayer = player.getBoundingClientRect();
    let rectBox = box.getBoundingClientRect();
    if(rectPlayer.left < rectBox.right && rectPlayer.right > rectBox.left &&
        rectPlayer.top < rectBox.bottom && rectPlayer.bottom > rectBox.top){
       
        console.log('Colisão!!!!!')
        document.querySelector('.container').style.background='red'
    }
    else{
        document.querySelector('.container').style.background='gainsboro'

    }
}


