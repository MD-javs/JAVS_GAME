var Botao_Tu = document.querySelector('.Botao_Avance');
var Tela_Tutorial = document.querySelector('.Tela_Tutorial');
var JAVS_1 = document.querySelector('.JAVS');
var P_1 = document.querySelector('.P_1');
var px = 20;
var Cont = 1;
var Cont_Compr = 0;
var Botao_Loja = document.querySelector('.Botao_Loja');
var Money_text = document.querySelector('.Money_J');
var Money;

var Botao_Compra_1 = document.querySelector('.Botao_Loja_1');
var Botao_Compra_2 = document.querySelector('.Botao_Loja_2');
var Botao_Compra_3 = document.querySelector('.Botao_Loja_3');
var Botao_Compra_4 = document.querySelector('.Botao_Loja_4');
var Botao_Compra_5 = document.querySelector('.Botao_Loja_5');
var Botao_Compra_6 = document.querySelector('.Botao_Loja_6');
var Sair_loja = document.querySelector('.Sair_loja');
var Texto_Compra_1 = document.querySelector('.Text_loja_1');
var Texto_Compra_2 = document.querySelector('.Text_loja_2');
var Texto_Compra_3 = document.querySelector('.Text_loja_3');
var Texto_Compra_4 = document.querySelector('.Text_loja_4');
var Texto_Compra_5 = document.querySelector('.Text_loja_5');
var Texto_Compra_6 = document.querySelector('.Text_loja_6');


var Loja = document.querySelector('.Loja');


Texto_Compra_1.textContent = '60';
Texto_Compra_2.textContent = '40';
Texto_Compra_3.textContent = '200';
Texto_Compra_4.textContent = '100';
Texto_Compra_5.textContent = '150';
Texto_Compra_6.textContent = '0';

Money = 10000;
Money_text.textContent = 'J$: ' + Money;
var Compras_all = [(parseInt(Texto_Compra_1.textContent)), 
                   (parseInt(Texto_Compra_2.textContent)), 
                   (parseInt(Texto_Compra_3.textContent)), 
                   (parseInt(Texto_Compra_4.textContent)), 
                   (parseInt(Texto_Compra_5.textContent)), 
                   (parseInt(Texto_Compra_6.textContent))];

function update() {
   // Atualize aqui a posição do seu personagem, por exemplo, aumentando ou diminuindo px
  

   // Condições relacionadas a px
   if(px <= -80 && Cont == 1) {
      
      px = 20;
   } else if(px <= -80 && Cont > 1){
      Cont-- ;
      px = 1200;
      P_1.src = "./Imagens/Paisagem_" + Cont +".png";

      

   }else if(px > 1225) {
      Cont++;
      px = 20;
      P_1.src = "./Imagens/Paisagem_" + Cont +".png";
      
      
   }
      
   if(Cont == 2){
         Botao_Loja.style.right = '420px';
         Botao_Loja.style.bottom = '80px';
         
      }
      else {
         Botao_Loja.style.right = '-420px';
         Loja.src = './Imagens/loja.png';
      }
   
   if(Cont != 2){
      Botao_Loja.style.right = '-1000px';
      Loja.style.left = '-1000px';
      Botao_Compra_1.style.left = '-1000px';
      Botao_Compra_2.style.left = '-1000px';
      Botao_Compra_3.style.left = '-1000px';
      Botao_Compra_4.style.left = '-1000px';
      Botao_Compra_5.style.left = '-1000px';
      Botao_Compra_6.style.left = '-1000px';
      Texto_Compra_1.style.left = '-1000px';
      Texto_Compra_2.style.left = '-1000px';
      Texto_Compra_3.style.left = '-1000px';
      Texto_Compra_4.style.left = '-1000px';
      Texto_Compra_5.style.left = '-1000px';
      Texto_Compra_6.style.left = '-1000px';
      Sair_loja.style.left = '-1000px';
      
   }

   




   // Chame a próxima animação
   requestAnimationFrame(update);
}

Botao_Tu.addEventListener('click', function() {
   Tela_Tutorial.style.width = '0px';
   Tela_Tutorial.style.height = '0px';
   Botao_Tu.style.left = '-1000px';
   JAVS_1.style.left = '85px';
   px = 20;
   P_1.style.left = '0px';
   Money_text.style.left = '0px';

   // Inicie o loop de atualização
   update();
});

Botao_Loja.addEventListener('click', function() {

   Loja.style.left = '225px';
   Loja.style.bottom = '50px';

   Botao_Compra_1.style.left = '278px';
   Botao_Compra_1.style.bottom = '330px';

   Texto_Compra_1.style.left = '460px';
   Texto_Compra_1.style.bottom = '330px';
   

   Botao_Compra_2.style.left = '278px';
   Botao_Compra_2.style.bottom = '279px';
   
   Texto_Compra_2.style.left = '460px';
   Texto_Compra_2.style.bottom = '279px';


   Botao_Compra_3.style.left = '278px';
   Botao_Compra_3.style.bottom = '229px';

   Texto_Compra_3.style.left = '460px';
   Texto_Compra_3.style.bottom = '229px';


   Botao_Compra_4.style.left = '278px';
   Botao_Compra_4.style.bottom = '179px';

   Texto_Compra_4.style.left = '460px';
   Texto_Compra_4.style.bottom = '179px';


   Botao_Compra_5.style.left = '278px';
   Botao_Compra_5.style.bottom = '126px';

   Texto_Compra_5.style.left = '460px';
   Texto_Compra_5.style.bottom = '126px';


   Botao_Compra_6.style.left = '278px';
   Botao_Compra_6.style.bottom = '76px';

   Texto_Compra_6.style.left = '460px';
   Texto_Compra_6.style.bottom = '76px';
 
   Sair_loja.style.left = '580px';
   Sair_loja.style.bottom = '3px';

});

Sair_loja.addEventListener('click', function(){

      Botao_Loja.style.right = '420px';
      Loja.style.left = '-1000px';
      Botao_Compra_1.style.left = '-1000px';
      Botao_Compra_2.style.left = '-1000px';
      Botao_Compra_3.style.left = '-1000px';
      Botao_Compra_4.style.left = '-1000px';
      Botao_Compra_5.style.left = '-1000px';
      Botao_Compra_6.style.left = '-1000px';
      Texto_Compra_1.style.left = '-1000px';
      Texto_Compra_2.style.left = '-1000px';
      Texto_Compra_3.style.left = '-1000px';
      Texto_Compra_4.style.left = '-1000px';
      Texto_Compra_5.style.left = '-1000px';
      Texto_Compra_6.style.left = '-1000px';
      Sair_loja.style.left = '-1000px';
});

