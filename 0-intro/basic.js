/* 
Comentarios 
*/
// Comentario

// Variables
let num1 = 5
const HOLA = "Hola "
var str1 = "Chau "

console.log(num1, typeof num1)
num1 = "pepe"
console.log(num1, typeof num1)

/* Ternario
variable = (condicion booleana) ? en caso de VERDADERO : en caso de FALSO
*/

let edad = 19
let soyMayor = (edad >= 18) ? "Es mayor" : "No es mayor"
console.log(soyMayor)

/* Nullish Coalescing
variable ?? en caso de undefined o null
*/
let persona // undefined
let safePersona = persona ?? 'Anonima'
console.log(safePersona)

let persona2 = null
let safePersona2 = persona2 ?? 'Anonima2'
console.log(safePersona2)

/* For Of
for(let variableDeElemento of listaDeElementos) { sentencias }
*/
let lista = [1,2,3, "Hola", "Manzana", "Pera", 10]
for(let item of lista) {
    if(typeof item == 'number'){
        console.log(item)
    }
}

// Funciones
function suma(a,b){
    return a+b
}
console.log("Suma de 5 y 3 = ", suma(5,3))

// Objetos
let nacho = {
    nombre: 'Nacho',
    apellido: 'Garcia',
    edad: '23',
    soyMayor: function(){
        return this.edad >= 18
    }
}
console.log(nacho.nombre, nacho.edad, nacho.soyMayor())

// Arrays
console.log(lista.length)
lista.push("nuevo item")
console.log(lista.length, lista.pop(), lista.length)

// Funciones Anonimas
let saludo = (nombre) => {
    return `Hola ${nombre}`
}

console.log(saludo)
console.log(saludo("nacho"))

// Callbacks
const potenciaPositiva = (base, power) => {
    return (power <= 1) ? base : base*potenciaPositiva(base, power-1)
}

const operar = (a, b, callback) => {
    return callback(a,b)
}

console.log(operar(3, 3, suma))
console.log(operar(3, 3, potenciaPositiva))