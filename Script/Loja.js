
var Cont_Arma = 1;
var Cont_Defesa = 1;
var Cont_Habilidade = 1;
var Pocao_Cura = (Vida/2);
var Num_Pocao_Cura = 0;

Botao_Compra_1.addEventListener('click', function(){
    
    if(Money >= Compras_all[0]){
        Money -= Compras_all[0];
        Cont_Arma ++;
        Compras_all[0] += 30;
        Texto_Compra_1.textContent = Compras_all[0];
        Money_text.textContent = 'J$: ' + Money;
        
    }
});

Botao_Compra_2.addEventListener('click', function(){
    
    if(Money >= Compras_all[1]){
        Money -= Compras_all[1];
        Cont_Defesa ++;
        Compras_all[1] += 25;
        Texto_Compra_2.textContent = Compras_all[1];
        Money_text.textContent = 'J$: ' + Money;
        
    }
});


Botao_Compra_3.addEventListener('click', function(){
    
    if(Money >= Compras_all[2]){
        Money -= Compras_all[2];
        Cont_Habilidade ++;
        Compras_all[2] += 35;
        Texto_Compra_3.textContent = Compras_all[2];
        Money_text.textContent = 'J$: ' + Money;
    }
});


Botao_Compra_4.addEventListener('click', function(){
    
    if(Money >= Compras_all[3]){
        Money -= Compras_all[3];
        Num_Pocao_Cura++;
        Texto_Compra_4.textContent = Compras_all[3];
        Money_text.textContent = 'J$: ' + Money;
    }
});


Botao_Compra_5.addEventListener('click', function(){
    
    if(Money >= Compras_all[4]){
        Money -= Compras_all[4];
        Vida += 20;
        Compras_all[4] += 50;
        Texto_Compra_5.textContent = Compras_all[4];
        Money_text.textContent = 'J$: ' + Money;
    }
});


Botao_Compra_6.addEventListener('click', function(){
    
    if(Cont == 2){
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
      Loja.src = './Imagens/Historia_F.png';

      setTimeout(function(){
        
   Loja.style.left = '225px';

   Botao_Compra_1.style.left = '278px';

   Texto_Compra_1.style.left = '460px';

   Botao_Compra_2.style.left = '278px';
   
   Texto_Compra_2.style.left = '460px';

   Botao_Compra_3.style.left = '278px';

   Texto_Compra_3.style.left = '460px';

   Botao_Compra_4.style.left = '278px';
   
   Texto_Compra_4.style.left = '460px';

   Botao_Compra_5.style.left = '278px';

   Texto_Compra_5.style.left = '460px';

   Botao_Compra_6.style.left = '278px';

   Texto_Compra_6.style.left = '460px';
   
   Sair_loja.style.left = '580px';

   Botao_Loja.style.right = '420px';
        
        Loja.src = './Imagens/loja.png';
      }, 5000);
      
    if(Cont == 2){
        Botao_Loja.style.right = '420px';
     }
    } 
});

