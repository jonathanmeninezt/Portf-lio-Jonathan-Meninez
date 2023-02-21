var boxTop = document.querySelector('div.box_top');
var navMenu = documente.querySelector('nav.menu_desktop a:hover');


function hoverAm(navMenu){
    
    boxTop.style.width = "41.8%";
    
}

function hoverHabil(navMenu){
    
    boxTop.style.width = "56.5%";
    
}

function hoverPort(navMenu){
    
    boxTop.style.width = "69.05%";
    
}

function hoverConta(navMenu){
    
    boxTop.style.width = "82.19%";
    
}

boxTop.onmouseover = hoverAm;
boxTop.onmouseover = hoverHabil;
boxTop.onmouseover = hoverPort;
boxTop.onmouseover = hoverConta;
