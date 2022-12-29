let player = document.querySelector('.player img')
let speedbtn = document.querySelector('.speedbtn')
let clickbtn = document.querySelector('.clickbtn')
let clickDash = document.querySelector('#clickDash')
let goldbtn = document.querySelector('.goldbtn')
let statusGold = document.querySelector('#goldDash')
let statusSpeed = document.querySelector('#speedDash')
let resetebtn = document.querySelector('.resete')
let autoclickbtn = document.querySelector('#autoclick')
let playerbtn = document.querySelector('#playerbtn')
let add = document.querySelector('.players')
let lojabtn = document.querySelector('.loja')
let dxstatus = document.querySelector('#status')
let dxbox = document.querySelector('#box')
let = store = document.querySelector('.store')
let upgrade = document.querySelector('.upgrade')
let btnback = document.querySelector('#back')
let btnstone = document.querySelector('#stone')
let gold = 0
let speed = 1
let clickvalue = 2
let price = 10
let resetevalue = 0

clickbtn.addEventListener('click',Jump)

function animar(){
    const Add = ()=>{player.classList.add('playerAnimation')}
    const Remove = ()=>{player.classList.remove('playerAnimation')}
    setTimeout(Add,500)
    setTimeout(Remove,1000)
}
function Jump(){
        if(speed == 1){
            gold++
        }
        else
       gold += speed * 2
      statusGold.textContent=`Gold:${gold}`     
}
speedbtn.addEventListener('click',buyClickSpeed)

function buyClickSpeed(){
    if(price <= gold){
        
        console.log('Comprado')
        price = Math.ceil(price*2)
        console.log(price)
        speed++
        statusSpeed.textContent=`Speed ${speed}`
        gold = 0
        statusGold.textContent=`Gold ${gold}`
        speedbtn.textContent=`Speed $${price}`
        clickvalue =speed*2
        clickDash.textContent=`Click ${clickvalue}`
    }
}

resetebtn.addEventListener('click',resete)

function resete(){
    if(speed >= 10){
        gold= 0
        speed = 1
        price= 10
        clickvalue = 1
        statusSpeed.textContent=`Speed ${speed}`
        speedbtn.textContent=`Speed $${price}`
        clickDash.textContent=`Click ${clickvalue}`
        resetebtn.style.background='gold'
        resetebtn.textContent='Resete'
    }
    else{
        resetebtn.style.background='Red'
        resetebtn.textContent='Resete 10 Speed'
    }
}

autoclickbtn.addEventListener('click',autoClick)

function autoClick(){
    if(speed >= 10){
      
        let auto = setInterval(function(){
            gold += speed * 2
            statusGold.textContent=`Gold:${gold}` 
            animar()
        },1100)
        auto
        autoclickbtn.style.background='green'
        autoclickbtn.disabled=true
    }
    else alert('Saldo insuficiente')
}
playerbtn.addEventListener('click',manutencao)
btnstone.addEventListener('click',manutencao)

function manutencao(){
    alert('Em Desenvolvimento')
}




lojabtn.addEventListener('click',loja)

function loja(){
    upgrade.style.display='none'
    dxbox.style.display='none'
    dxstatus.style.display='none'
    store.style.display='flex'
}
btnback.addEventListener('click', back)
function back(){
    upgrade.style.display='flex'
    dxbox.style.display='flex'
    dxstatus.style.display='flex'
    store.style.display='none'
}
