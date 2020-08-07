
   var teclado = document.getElementById("teclado").value = "TECLADO";
   var qtdetc = document.getElementById("qtdetc").value = "5";
   var precotc = parseFloat(document.getElementById("precotc").value="35");
 
   var mouse = document.getElementById("mouse").value = "MOUSE";
   var qtdems = document.getElementById("qtdems").value = "7";
   var precoms = parseFloat(document.getElementById("precoms").value="20");
 
 
   var monitor = document.getElementById("monitor").value = "MONITOR";
   var qtdemtr = document.getElementById("qtdemtr").value = "3";
   var precomtr = parseFloat(document.getElementById("precomtr").value="265");
 
 function preco(){
   
   var prod = document.getElementById("prod").value;
   var quant = document.getElementById("quant").value;
   
 
   
if( prod == teclado){
   if(qtdetc >= quant ){
   var total = quant * precotc;
   } else{
      var total = "Quantidade não encontrada"
   }
   var div = document.getElementById("divResultado");
            div.innerText = total
            }
      
   
if( prod == mouse){
   if(qtdems >= quant ){
   var total = quant * precoms;
   } else{
      var total = "Quantidade não encontrada"
   }
   
   var div = document.getElementById("divResultado");
            div.innerText = total
            }
     
 
 
   if(qtdemtr >= quant ){
   var total = quant * precomtr;
   } else{
      var total = "Quantidade não encontrada"
   }
   if( prod == monitor){
   var div = document.getElementById("divResultado");
            div.innerText = total
            } 
   

 
 
}
 
