//Ejercitación:
/*1. Realizar un programa que permita el ingreso de un numero y muestre su tabla de
multiplicar (Los primeros 10 multiplos).*/
/*let num = prompt("Ingrese un numero: ")
console.log("Tabla de multiplicar de " + num)
for (let i = 1; i <= 10; i++) {
    console.log(num + " X " + i + " = " + num * i)
} */

/*2. Realizar un programa que permita el ingreso de numeros los cuales se tienen que ir
acumulando. El ingreso de datos terminara cuando el usuario ingrese un valor 0.*/
/*let num2 = 0
let num1 = parseInt(prompt("ingresa un numero (0 para terminar)"))
while (num1 !== 0) {
    num2 += num1
    num1 = parseInt(prompt("ingrese otro numero (0 para terminar)"))
}
console.log("La suma total es: " + num2) * /

/*3. Realizar en juego de adivinar el numero del los ejercicios del tema anterior, en una
variable guardar un numero que este en el rango 1 - 100. La persona debera poder
ingresar numeros hasta adivinar el valor que se encuentre en dicha variable. Si el
valor es menor al numero secreto, avisarle al usuario lo sucedido y pedirle
nuevamente el ingreso de otro numero, realizar la misma accion pero en lugar de
cuando es menor, si es que el numero ingresado es mayor. Asi sucesivamente hasta
que el usuario adivine el numero secreto. Por ultimo mostrar un mensaje de
felicitaciones y decirle en cuantos intentos lo ha realizado.*/
// Generar un número aleatorio entre 1 y 100
/*let numeroSecreto = Math.floor(Math.random() * 100) + 1

// Inicializar variables
let intentos = 0
let adivinado = false

// Bucle principal del juego
while (!adivinado) {
    // Pedir al usuario que ingrese un número
    let intentoUsuario = parseInt(prompt("Adivina el número (entre 1 y 100):"))

    // Incrementar el contador de intentos
    intentos++

    // Comprobar si el número ingresado es igual al número secreto
    if (intentoUsuario === numeroSecreto) {
        adivinado = true;
        alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.")
    } else if (intentoUsuario < numeroSecreto) {
        alert("El número es mayor. Intenta nuevamente.")
    } else {
        alert("El número es menor. Intenta nuevamente.")
    }
} *
/

/*4. Realizar un programa que permita decir si un numero es primo. Un numero es primo
si solo es divisible por el valor 1 y por si mismo. Ayuda: Usar la operacion de modulo.
Los numeros solo poseen divisores hasta la mitad del valor del mismo. Ej: 50 tiene
como divisores 1, 2, 5, 10 y 25. No es primo. Con tener mas de 2 divisores el
numero ya no es primo.*/
/*
// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingrese un número:"))

let esPrimo = true

// Un número menor o igual a 1 no es primo
if (numero <= 1) {
    esPrimo = false
} else {
    // Verificar si el número es divisible por algún número desde 2 hasta la mitad del valor
    for (let i = 2; i <= numero / 2; i++) {
        if (numero % i === 0) {
            // Si es divisible, no es primo
            esPrimo = false
            break;
        }
    }
}

// Imprimir el resultado
if (esPrimo) {
    console.log(numero + " es primo.")
} else {
    console.log(numero + " no es primo.")
}

*
/
/*5. Realizar un programa que permita dado un numero, mostrar todos sus divisores*/
// Solicitar al usuario ingresar un número
/*let numero = parseInt(prompt("Ingrese un número:"));

console.log("Divisores de " + numero + ":");

// Iterar desde 1 hasta el número e imprimir los divisores
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        console.log(i);
    }
} * /

/*6. Dado un array de 10 elementos, realizar un programa que recorra ese array y
muestre un mensaje por consola con cada uno de los elementos del array.*/

/*

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for (let i = 0; i < array.length; i++) {
    console.log(`Elemento ${i + 1}: ${array[i]}`)
}*/

/*7. Dado un array de 10 numeros, realizar un programa que muestre por consola el
doble de cada uno de los elementos.*/

/*let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


for (let i = 0; i < array.length; i++) {
    console.log(`El doble del elemento ${i + 1} es: ${array[i] * 2}`)
}
*/

/*8. Dado un array con al menos 5 objetos comprendidos por un grupo familiar, cada
objeto representa a 1 persona con al menos 4 propiedades, realizar un programa
que muestre un mensaje de presentacion por cada elemento del array.*/
/*
let familia = [
    { nombre: 'Juan', edad: 30, relacion: 'Padre', ciudad: 'Ciudad Jardin' },
    { nombre: 'María', edad: 25, relacion: 'Madre', ciudad: 'Ciudad Jardin' },
    { nombre: 'Carlos', edad: 2, relacion: 'Hijo', ciudad: 'Ciudad Jardin' },
    { nombre: 'Ana', edad: 8, relacion: 'Hija', ciudad: 'Ciudad Jardin' },
    { nombre: 'Juana', edad: 55, relacion: 'Abuela', ciudad: 'Ciudad Plaza' }
];


for (let i = 0; i < familia.length; i++) {
    console.log(`Hola, soy ${familia[i].nombre}, tengo ${familia[i].edad} años, soy ${familia[i].relacion}, y vivo en ${familia[i].ciudad}.`)
}


*
/


/*9. Dado un array de 10 numeros, realizar un programa que recorra el array y solo
muestre los numeros impares.*/
/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log(`Número impar: ${array[i]}`)
    }
}

*/
/*10. Realizar un programa que permita la entrada de numeros y calcule la suma de los
numeros pares por un lado y los impares por otro, el ingreso de dato finaliza cuando
el usuario ingresa un 0.*/
/*
let numeros = []
let sumaPares = 0
let sumaImpares = 0

while (true) {

    const num = parseInt(prompt('Ingresa un número (ingresa 0 para salir): '))

    if (num === 0 || isNaN(num)) {
        break;
    }

    numeros.push(num)
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        sumaPares += numeros[i]
    } else {
        sumaImpares += numeros[i]
    }
}

console.log('Números ingresados:', numeros)
console.log('Suma de números pares:', sumaPares)
console.log('Suma de números impares:', sumaImpares)

*/
/*11. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas grande.*/
/*
const array = [42, 15, 78, 23, 56, 89, 34, 67, 91, 12]
let numeroMasGrande = array[0]
for (let i = 1; i < array.length; i++) {
    if (array[i] > numeroMasGrande) {
        numeroMasGrande = array[i]
    }
}
console.log(`El número más grande es: ${numeroMasGrande}`) *
    /

/*12. Dado un array de 10 numeros, realizar un programa que imprima por pantalla el
numero mas chico.*/
/*
let array = [42, 15, 78, 23, 56, 89, 34, 67, 91, 12]
let numeroMasChico = miArray[0];

for (let i = 1; i < miArray.length; i++) {
    if (array[i] < numeroMasChico) {
        numeroMasChico = miArray[i];
    }
}
console.log(`El número más chico es: ${numeroMasChico}`);
*/

/*13. Realizar un programa que permita jugar a piedra papel o tijeras, se debera poder
ingresar los nombres de 2 jugadores. En el bucle del juego se debera pedir 1 a 1 las
manos de cada jugador, y en cada turno se debera seguir jugando solo si se produjo
un empate. Caso contrario mostrar un mensaje con el nombre de la persona
ganadora.*/
/*
function obtenerNombreJugador(numero) {
    return prompt(`Ingresa el nombre del Jugador ${numero}: `)
}

function obtenerEleccionJugador(nombre) {
    return prompt(`${nombre}, elige piedra, papel o tijeras: `).toLowerCase()
}

function determinarResultado(eleccionJugador1, eleccionJugador2) {
    if (eleccionJugador1 === eleccionJugador2) {
        console.log('Empate. Jueguen de nuevo.\n')
        return null;
    } else {
        const ganador = (eleccionJugador1 === 'piedra' && eleccionJugador2 === 'tijeras') ||
            (eleccionJugador1 === 'papel' && eleccionJugador2 === 'piedra') ||
            (eleccionJugador1 === 'tijeras' && eleccionJugador2 === 'papel') ?
            nombreJugador1 : nombreJugador2
        console.log(`${ganador} es el ganador.\n`)
        return ganador;
    }
}

function jugar() {
    let nombreJugador1 = obtenerNombreJugador(1)
    let nombreJugador2 = obtenerNombreJugador(2)
    let ganador = null;

    while (!ganador) {
        let eleccionJugador1 = '';
        let eleccionJugador2 = '';

        while (!['piedra', 'papel', 'tijeras'].includes(eleccionJugador1)) {
            eleccionJugador1 = obtenerEleccionJugador(nombreJugador1)
        }

        while (!['piedra', 'papel', 'tijeras'].includes(eleccionJugador2)) {
            eleccionJugador2 = obtenerEleccionJugador(nombreJugador2)
        }

        console.log(`${nombreJugador1} eligió: ${eleccionJugador1}`)
        console.log(`${nombreJugador2} eligió: ${eleccionJugador2}`)

        ganador = determinarResultado(eleccionJugador1, eleccionJugador2)
    }
}

jugar(); *
/
/*14.  Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado.
 */
/*
for (let i = 1; i <= 5; i++) {
    let linea = ''
    for (let j = 1; j <= i; j++) {
        linea += '*'
    }
    console.log(linea)
}*/

/*15. Realizar un programa que imprima por consola un triangulo de 5 asteriscos de lado
pero invertido.
*/
/*
for (let i = 5; i >= 1; i--) {
    let linea = ''
    for (let j = 1; j <= i; j++) {
        linea += '*'
    }

    console.log(linea)
} */
/*16. Dado un array de 10 numeros desordenados, realizar un programa que imprima por
pantalla el array ordenado. (NO USAR SORT, solo ciclos FOR*/ // Función para intercambiar dos elementos en un array
/*function intercambiar(array, indice1, indice2) {
    let temp = array[indice1];
    array[indice1] = array[indice2]
    array[indice2] = temp
}


function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

// Función para ordenar el array utilizando el algoritmo de burbuja
function ordenarArray(array) {
    const longitud = array.length

    for (let i = 0; i < longitud - 1; i++) {
        for (let j = 0; j < longitud - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                intercambiar(array, j, j + 1)
            }
        }
    }
}


const array = [8, 3, 5, 1, 9, 2, 7, 6, 4, 10]


console.log("Array desordenado:");
imprimirArray(array);

ordenarArray(array);

console.log("\nArray ordenado:");
imprimirArray(miArray);*/