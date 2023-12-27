const JAVS = document.querySelector('.JAVS');

/*PULAR*/{
    

var dx;
var dy;
var px;
var py;
var vel;
var obj;
var tmp;
function inicia(){
dx=0;
dy=0;
px=0;
py=430;
vel=10;

obj=document.querySelector('.JAVS');
document.addEventListener("keydown", teclaDw); 
document.addEventListener("keyup", teclaUp);
tmp=setInterval(enterFrame,10);

}
function teclaDw(event){
    var tecla = event.key;
    if (tecla == "a"){
    dx= -1;
    
    }else if(tecla == "d"){
    dx= 1;
    
    }
    }
    
    function teclaUp(event){
        var tecla = event.key;
        if (tecla == "a"){
        dx= 0;
        }else if(tecla == "d"){
        dx= 0;
        }
    }
    function enterFrame(){
    px += dx * vel;
    py += dy * vel;
    obj.style.left = px + "px";
    obj.style.top = py + "px";
    }
    
    window.addEventListener("load", inicia);
}

/*Comados basicos do JAVS*/{
    
    var Vida = 20;
    var Cont_AT = 0;
    var Ataquei = false;
    var Bot_event;
    var Defendi = false;
    var Habilidadei = false;
    var Poder_Habilidade = document.querySelector('.Poder_Habilidade');
   

    document.addEventListener('keydown', Atacar);
    document.addEventListener('keydown', Defender);
    document.addEventListener('keydown', Habilidades);
   
    function Atacar(event){

        Bot_event = event.key;

        if(Bot_event == "j" && Ataquei == false){
            Ataquei = true;
            JAVS.style.width = '135px';
            JAVS.src = "./Imagens/JAVS_Ataque_" + Cont_Arma + ".png";
           
            setTimeout(function() {
            JAVS.src = "./Imagens/JAVS.png";
            JAVS.style.width = '80px';
            }, 500);
            
            
            setTimeout(function() {
            Ataquei = false;
        }, 500);
        
             
        }
           
        
    }

    function Defender(event){

        Bot_event = event.key;

        if(Bot_event == "k" && Defendi == false){
            Defendi = true;
            JAVS.style.width = '125px';
            JAVS.src = "./Imagens/JAVS_Defesa_" + Cont_Defesa + ".png";
           
            setTimeout(function() {
            JAVS.src = "./Imagens/JAVS.png";
            JAVS.style.width = '80px';
            }, 500);
            
            
            setTimeout(function() {
            Defendi = false;
        }, 500);
    }

    }

    function Habilidades(event){
        
        Bot_event = event.key;

        if(Bot_event == "h" && Habilidadei == false){

            Habilidadei = true;
            
            
            JAVS.style.width = '135px';
            JAVS.src = "./Imagens/JAVS_Habilidade_" + Cont_Habilidade + ".png";
            Poder_Habilidade.src = "./Imagens/Habilidade_Poder_" + Cont_Habilidade + ".png";
            Poder_Habilidade.style.left = px + "px";
            Poder_Habilidade.classList.add('Poder_Animation');       
            setTimeout(function(){
            Poder_Habilidade.classList.remove('Poder_Animation');
            Poder_Habilidade.style.left = '-1000px';
            JAVS.src = "./Imagens/JAVS.png";
            JAVS.style.width = '80px';
            

            }, 900);

            setTimeout(function() {
            Habilidadei = false;
            }, 1000);
             
          }
        }

    
}