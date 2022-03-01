let dni = prompt("Pon las letras de tu DNI");
let resto = dni % 23;
//array = lista con númeración 
let letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
alert (letras[resto]);