// Operador Condicional (Ternario)

let estado;
let edadParticipante = 14;

estado = edadParticipante >= 18 ? 'Mayor' : 'menor';

console.log('El participante es ' + estado + ' de edad');

//Condicional if

let nombre = 'Ale';
let edad = 30;
let mayorEdad;

if (edad > 18) {
    mayorEdad = true;
    console.log(nombre + ' es mayor de edad');
} else {
    console.log(nombre + ' es menor de edad')
}

for (let i = 0; i < 10; i++) {
    console.log('hola');
    console.log(i);
}