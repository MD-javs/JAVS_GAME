const Text_1 = document.querySelector('.Text_Pag1');
const JAVS = document.querySelector('.JAVS_Skate');
var Botao = document.getElementById('Bot_Come');




Botao.addEventListener('click', function(){
    
    Text_1.textContent = 'Carregando';
   
   
    Text_1.classList.add('Loading');
    Botao.classList.add('Botao_animation');

    JAVS.classList.add('JAVS_Skate_Animation');
   
    setTimeout(function(){

        window.location.href = './JAVS_GAME.html';

    }, 3500);

    

});
