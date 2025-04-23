//Iteradores
//Objeto: Es una variable de tipo compuesto que permite almacenar varios datos (clave-valor)


let user = {
    name: "Ariel",
    lastName: "Sánchez",
    age: 22,
    email: "ariel@gmail.com",
    address: {
        city: "Quito",
        telephone: "0960647494"
    },
    password: "12345"
}

/*
user.image = "avatar.png" //Para agregar un par de clave y valor solo debemos referenciar el objeto luego un punto y el nombre de la nueva clave seguida de su valor
console.log(user);

delete user.password
console.log(user); //Para eliminar un par de clave y valor solo debemos usar la palabra reservada "delete" y referenciar el objeto luego un punto y el nombre de la clave que queremos eliminar

//ES6 - desestructuración
let {name:nombre, lastName, age, address} = user //Al usar los ':' el nombre de la clave se cambia permanentemente en el objeto siempre y cuando NO sea 'const'
console.log(nombre);
console.log(address.city); //Cuando hay un objeto dentro de otro objeto, y queremos algun valor dentro del segundo objeto, debemos hacer la referencia 'clave1.clave2' y nos trae el valor


//Spread Operator - Unir objetos
const friends = {
    status: true,
    friends: ["Juan", "María"]
}

const allInformation = {...user, ...friends} //Para traer toda la informacion de un objeto/array solo ponemos el spread operator '...' y el nombre. Y si queremos unirlo con otro, los separamos por comas y hacemos lo mismo para el otro
console.log(allInformation); //Devuelve los 2 objetos/arrays en uno solo
*/

//Métodos para nuestros objetos
const friends = {
    status: true,
    friendsList: ["Juan", "María"], //Cambiamos el nombre por friendList (para que sea mas obvio que es una lista)
    sendMail(){ //Asi se definen los metodos
        return `Send mail to ${friends.friendsList[0]}` //Retorna lo que se necesite hacer (en este caso devuelve un string mas el nombre del amigo en la posicion 0)
    }
}

console.log(friends.sendMail()); //Imprime Send mail to Juan

//La palabra Object es un constructor para referenciar a nuestros objetos
console.log(Object.values(user)); //Va a devolver todos los valores de del objeto que se le pase, pero lo devuelve dentro de un array
console.log(Object.keys(user)); //Va a devolver todas las llaves del objeto que se le pase, pero lo devuelve dentro de un array
console.log(Object.values(user).includes("")); //Aca devuelve un booleano al ponerle el .includes("") asi que no te devolverá el array, solo el booleano

//Funciones: Conjunto de pasos para realizar una tarea específica

//Función Declarada (Nosotros le ponemos el nombre que queremos)
function validateUser(){
    console.log("Usuario validado");
}

//Función Expresada (Utiliza una variable para luego referenciarla)
const validateRol = function(){
    console.log("Rol validado");
}

//Función Flecha
const validateMail = () => {//De lo que entiendo es que es lo mismo que la expresada pero sin la palabra reservada 'function', declaramos la variable la asignamos a una funcion '()' y luego la '=>' y despues las llaves como siempre
    console.log("Mail validado");
}

//Rest Operator vs Spread Operator
const finalPrice = function({a=56, b = 56}, ...rest){ //Los parametros de siempre pero el '...rest'( se puede poner cualquier palabra) y el rest lo que hace es convertir en array todo lo que ingrese en su alcance
    console.log(a, b, rest); //es decir, luego de poner el a y b todo lo que pongamos despues se van a ir a un array
}//Luego las otras cosas es del tema Default Parameters (investigar porque estaba complicado hacer que se imprima como queremos (que el a siempre sea 56 y asi...))

finalPrice({b:99}, 2, 32, 22, 412)


//Return
function typeOfReturn(){
    return 123
    //return true

    /*
    return { //La llave debe estar al lado de return para que pueda devolver el objeto, si esta abajo sale error
        city: "Quito",
        passw: "123"
    }
    /*

    /*
    return function(){ Investigar aqui como hacer para que me retorne una funcion que se imprima en consola
        console.log("Hola");
    }
    */
}

console.log(typeOfReturn()); //Debes usar el console.log porque recuerda que el return solo retorna y no imprime

let result = typeOfReturn()
console.log(result); //Tambien puedes almacenar el resultado en una variable y luego imprimirla











