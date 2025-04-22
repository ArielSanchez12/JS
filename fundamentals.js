//Variables - Contenedor de informacion
//let - const, no usaremos var
let numOrden = 127 //int
let modulo = "Mis ordenes" //string
let status = true //bool
let ordenes = ["Balon", "Camiseta", "Zapatos"] //array - objeto
let tipoPago = 'E' //char
let precioFinal = 155.99 //float
const CI = 1171765322 //int - inmutable por const

//Tipos de datos compuestos
//Objeto - en los objetos las claves no llevan comillas dobles 
let detalleOrden = {
    id: 1,
    estado: "Activo",
    items: ["Balon", "Camiseta", "Zapatos"],
    precio: 155.99
}

//JSON - En el JSON las claves tambien llevan comillas dobles 
let detalleOrdenJSON = {
    "id": 1,
    "estado": "Activo",
    "items": ["Balon", "Camiseta", "Zapatos"],
    "precio": 155.99
}

//Strings 
let nombreCompleto = "      Ariel Sánchez     "
nombreCompleto.length //longitud
nombreCompleto.toUpperCase() // Mayusculas
nombreCompleto.toLowerCase() //Minusculas
nombreCompleto.trim() //Eliminar espacios en blanco solo al inicio y al final del string
nombreCompleto.charAt(0) //Obtener el primer valor
nombreCompleto.includes("Ariel") //Verificar si existe un texto dentro de una variable


console.log(nombreCompleto.length) //Devuelve longitud
console.log(nombreCompleto.trim().length) //Devuelve longitud despues de quitar los espacios en blanco

//ES6 - Template String
console.log(`Bienvenido - ${nombreCompleto.trim()}`)

//Numbers
let cuotas = "6" //En los formularios siempre traemos la informacion en strings, por lo tanto debemos convertirla a numero si la queremos usar en operaciones
console.log(cuotas + 3) //Va a devolver 63 porque aun no transformamos a numero la variable cuotas

//ES6 Convertir strings a numeros
console.log(+cuotas + 3) //Solo agregamos un '+' al inicio de la variable

//Orden de presedencia de los operadores
console.log(4 * 3**2) //36 porque primero es la potencia

//Booleans
let saldoUsuario = 1000 
let saldoTarjeta = "1000" 

console.log(saldoTarjeta == saldoUsuario)//true

//Comparacion estricta (consultar diferencias)
console.log(saldoTarjeta === saldoUsuario)//false

//Condicionales - if
const carritoCompras = []
if (carritoCompras.length === 0){
    console.log("El carrito esta vacío");
}else{
    console.log("El carrito tiene productos");   
}

//ES6 - Operador Ternario
const mensaje = carritoCompras.length === 0 ? "El carrito est4 vacío" : "El carrito esta con productos"
console.log(mensaje);







