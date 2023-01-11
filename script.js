let menudrop = document.querySelector('#MenuDrop');

let btn = document.querySelector('.menu').addEventListener('click',function(){
    menudrop.classList.toggle('enable')
})


function write(e){
    const textArray = e.innerHTML.split('');
    textArray.forEach((letra,i) => {
        e.innerHTML='';
         setTimeout(function(){
            e.innerHTML += letra
         },75*i)
    });
}

const title = document.querySelector('#startText');
write(title);


let position = document.querySelector('.positions').addEventListener('click',function(event){
    let e = event.target.id;
    
    if(e == 'pos1'){

    }

})