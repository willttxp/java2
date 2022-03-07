function entrada(){
var idade= parseInt(document.getElementById ("idade").value);
if(idade <18){
    alert(`Voce tem ${idade} anos, menor de idade nao pode entra`);
   }else{
       alert("voce pode entrar")
   }
}