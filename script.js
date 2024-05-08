// Varibale: Espacio reservado en memoria con un identificador (nombre)
let nombre = ""; //Así se crea una variable, no importa el dato que almacene, siempre lleva el let. Siempre terminar con ;
//Puedo reservar/declarar espacios en la memoria sin darle valor 
const num = 3; //Puedo declarar valores constantes, o sea que NO se pueden camibar
// Es un lenguaje compilado, primero se lee todo el archivo y luego empieza a ejecturar las cosas, No como python que es secuencial.
let array1 = []; // Es como una lista, le puedo poner cualquier cosa adentro. El indice empieza en cero. 
console.log("Hola mundo")
let estudiante1 = { 
    nombre:"Camila", //Porpiedad del objeto, es com un diccionario en python
    edad: 21,
    // Los metodos son funciones
    cumple: function(){
        estudiante1.edad = estudiante1.edad + 1
    }
}

console.log(estudiante1.nombre);
console.log(cumple());
//operadores
console.log(1+1); //Suma
console.log("Cami"+"Sanchez"); //Concatena
console.log("Cami"+1)// Output es Cami1
console.log("1"-1); //Acá no puede concatenar, entonces hace la cuenta numérica
// Comparación debil
console.log("10"==10)//Devuelve True, compara solo el valor. Idem con !=
console.log("10"===10)// Devuelve False, compara el valor y el TIPO DE DATO. Con !== sería para la negación
// El and es &&. El or es ||.
// Los strings son datos de tipo verdaero (truthy). 
console.log("perro" && "gato") // Devuelve gato
console.log("perro" || "gato") // Devuelve perro
// Tiene errores con el manejo de meoria y calculos con decimales


//Funciones
//si esta dentro de un objeto, le decimos metodo
function saludar(){
    console.log("Hola")
}
//En java puedo declarar la funcion despues de la invocacion, no pasa nada.
function duplicar(n){
    let resultado = n*2;
    return resultado
    // Otra opción es poner return n*2
}
console.log(duplicar(4))
//Funciones anónimas, no estan declaradas como funciones
let div2 = function (n){ return n/2 } // No puedo invocarlas antes de declararlas
console.log(div2(10))

//Función flecha
let triplicar = (n) => n*3; //flecha => es la forma más resumida de una función
console.log(triplicar(3)) // Se usa mucho en callback, cuando una función llama a otra función
function mostrar (funcion){
    console.log(funcion)
}
mostrar(duplicar(5))

