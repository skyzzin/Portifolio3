let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn_init = document.getElementById('iniciar');
let home = document.querySelector(".home");
let historico = document.querySelector(".historico");
let res = document.querySelector(".res");
let pay = document.querySelector(".pay");
let catalago = document.querySelector('#catalago');
let produto = document.querySelector('.produto');
let produto_ui = document.querySelector('.produto-ui');
let btnAdd = document.querySelector('#btnAdd');
let homeCat = document.querySelector('.homeCat');
let nome = document.querySelector('#name');
let codigo = document.querySelector('#codigo');




btn_init.addEventListener('click',function(){
    home.classList.toggle('disable');
    historico.classList.toggle('disable');
    res.classList.toggle('disable');
    pay.classList.toggle('disable');
});
btn1.addEventListener('click',function(){
    if(btn1.classList.toggle('disable')){
        btn2.classList.toggle('disable');
    }
})
btn2.addEventListener('click', function(){
    if(btn2.classList.toggle('disable'));
    btn3.classList.toggle('disable');
})
btn3.addEventListener('click',function(){
    if(btn3.classList.toggle('disable')){
        btn1.classList.toggle('disable')
        home.classList.toggle('disable');
        historico.classList.toggle('disable');
        res.classList.toggle('disable');
        pay.classList.toggle('disable');
    }
})
catalago.addEventListener('click',function(){
    home.classList.add('disable');
    homeCat.classList.remove('disable');
    produto_ui.classList.add('disable')
})
produto.addEventListener('click',function(){
    home.classList.add('disable');
    homeCat.classList.add('disable')
    produto_ui.classList.remove('disable')
})
btnAdd.addEventListener('click',function(){
  

    pnome = nome.value;
    pcodigo = codigo.value;
    if(pnome == ""){
        btnAdd.style.border='1px solid red'
        nome.style.border='1px solid red'
    }
    else if(pcodigo === ""){
        btnAdd.style.border='1px solid red'
        codigo.style.border='1px solid red'
    }
    else{
        btnAdd.style.border='1px solid green'
        let Divproduto = document.createElement('div')
        Divproduto.classList.add('itens');
        homeCat.appendChild(Divproduto);
        nome.style.border='1px solid green'
        codigo.style.border='1px solid green'
    }
    
    const produto = {
        nome: pnome,
        codigo:pcodigo
    }
   
   
    


      

 
   

 
    


})
