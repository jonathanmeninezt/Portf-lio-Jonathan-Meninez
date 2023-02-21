// *************EFEITO NAV_MENU BOX_TOP*************

var boxTop = document.querySelector('div.box_top');

function hoverAm(){
    
    boxTop.style.width = "41.8%";
    
}

function hoverHabil(){
    
    boxTop.style.width = "56.5%";
    
}

function hoverPort(){
    
    boxTop.style.width = "69.05%";
    
}

function hoverConta(){
    
    boxTop.style.width = "82.19%";
    
}

boxTop.onmouseover = hoverAm;
boxTop.onmouseover = hoverHabil;
boxTop.onmouseover = hoverPort;
boxTop.onmouseover = hoverConta;


// *************FIM NAV_MENU BOX_TOP*************


function typeWriter(elemento){
    const textEfect = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textEfect.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 65 * i);
    });
}

    const titulo = document.querySelector('span');
    typeWriter(titulo);



    function typeWritertwo(elementos){
        const textEfect = elementos.innerHTML.split('');
        elementos.innerHTML = '';
        textEfect.forEach((letra, i) => {
            setTimeout(() => elementos.innerHTML += letra, 105 * i);
        });
    }
    
        const subtitulo = document.querySelector('h2');
        typeWritertwo(subtitulo);

    
        
        

    
    