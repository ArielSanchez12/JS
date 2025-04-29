//Arrays - Objetos

let user = {
    name: "Ariel",
    lastName: "Sánchez",
    address:{
        city:"Quito"
    }
}

let userSkills = {
    frontend: ["HTML", "CSS", "JavaScript"]
}

const allInformation = {...user, ...userSkills} //Unir objetos usando spread operator
console.log(allInformation);

//ES6 - Nombres abreviados de propiedades
const nameDevice = "Laptop"
const price = 300

const newProduct = {
    nameDevice, //Si la clave y el valor es el mismo nameDevice = "nameDevice"
    price //Solo se coloca una vez, es decir el nombre de la variable ya inicializada
}

console.log(newProduct);

//Functions - Callback 
function mostrarBienvenida(nombre){ //Un callback es una funcion que pasa como argumento a otra funcion
    console.log(`Bienvenido - ${nombre}`);
}

function registrarUsuario (callback){
    const user = "Ariel"
    callback(user)
}

registrarUsuario(mostrarBienvenida)

//Arreglos - Recorridos
const products = ["Paly", "TV", "Laptop", "Celular"]
const prices = [500, 1000, 2000, 100]

//1. forEach
products.forEach((product) => {console.log(product);
})

//Map - Map devuelve un nuevo arreglo, es por eso que podemos usar métodos para manipular los datos de salida 
const newProductOptionOne = products.map((p) => { //p de product
    console.log(p.toLocaleUpperCase());
})

//Hay otras opciones para hacer el codigo mas legibles
const newProductOptionTwo = products.map((p) => p.toLocaleUpperCase()) //Aqui usamos parentesis en lugar de llaves, pero esto cambia completamente el codigo, ya que los parentesis van a reemplazar el uso del 'return', por eso no se va a imprimir nada aqui
    
//Método 'filter'
const items = products.filter(p => p !== "TV")
console.log(items);

//Método 'concat'  - Lo mismo que el spread operator
const newItems = products.concat(prices)
console.log(newItems);

//Método 'find' - Devolvera un booleano si lo encuentra
const findItem  = products.find(p => p === 'Celular')
console.log(findItem);

//Método 'push' - Agrega productos al array
products.push("Tablet")

//Método 'unshift' - Agrega al array pero al inicio
products.unshift("Reloj")

//Método 'pop' - Elimina el ultimo elemento del array
products.pop()

//Método 'shift' - Elimina el primer elemento del array
products.shift()

//Método 'slice' - Corta el arreglo segun el argumento de inicio y fin que se le pase
const newItemsSlice = products.slice(0,2) //Corta hasta n-1
console.log(newItemsSlice);

//Método 'includes' - Verifica si un elemento existe en un arreglo y devuelve un booleano
products.includes("Celular") ? console.log("Existe") : console.log("No existe")

//Método 'length' - Lo mismo de arriba pero para verificar su longitud
products.length === 3 ? console.log("Descuento") : console.log("No descuento")

//Método 'reduce' - Sirve para hacer sumatorias como por ejemplo el total a pagar en carritos online
const subTotal = prices.reduce((acumulador, price) => acumulador + price, 0) //Ese cero al final indica que el acumulador va a empezar en cero, esto es parecido a un for para ir sumando
//Una vez empieza en cero, se le agrega el primer precio del array, luego el acumulador pasa a valer 0 + array[1] y asi sucesivamente hasta que suma todos











