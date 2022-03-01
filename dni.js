
let dni = prompt("Pon las letras de tu DNI");
let resto = dni % 23;
//SE CREA VARIABLE PERO NO SE ADJUDICA UN VALOR 
let letra;

//control d eleccionar y modificar una parametro, SHIFT Y LA FLECHA DERECHA 

if (resto == 0) {
    letra = "T";
}
else if (resto == 1) {
    letra = "R";
}
else if (resto == 2) {
    letra = "W";
}
else if (resto == 3) {
    letra = "A";
}
else if (resto == 4) {
    letra = "G";
}
else if (resto == 5) {
    letra = "M";
}
else if (resto == 6) {
    letra = "Y";
}
else if (resto == 7) {
    letra = "F";
}

else if (resto == 8) {
    letra = "P";
}
else if (resto == 9) {
    letra = "D";
}
else if (resto == 10) {
    letra = "X";
}
else if (resto == 11) {
    letra = "B";
}
else if (resto == 12) {
    letra = "";
}

alert("tu dni" + dni + "tu letra" + letra);

