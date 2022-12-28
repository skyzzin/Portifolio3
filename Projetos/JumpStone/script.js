let player = document.querySelector('.player img')
let speedbtn = document.querySelector('.speedbtn')
let clickbtn = document.querySelector('.clickbtn')
let clickDash = document.querySelector('#clickDash')
let goldbtn = document.querySelector('.goldbtn')
let statusGold = document.querySelector('#goldDash')
let statusSpeed = document.querySelector('#speedDash')
let resetebtn = document.querySelector('.resete')
let gold = 0
let speed = 1
let clickvalue = 2
let price = 10

clickbtn.addEventListener('click',Jump)

function Jump(){
  
    const Add = ()=>{player.classList.add('playerAnimation')}
    const Remove = ()=>{player.classList.remove('playerAnimation')}
    setTimeout(Add,500)
    setTimeout(Remove,1000)
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
gold= 0
speed = 1
price= 10
clickvalue = 1
statusSpeed.textContent=`Speed ${speed}`
speedbtn.textContent=`Speed $${price}`
clickDash.textContent=`Click ${clickvalue}`
}
