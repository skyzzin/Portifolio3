

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