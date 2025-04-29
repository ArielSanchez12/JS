//Primera forma de manejar promesas - .then() y .catch()
const conexionBDDExterna = (datosConexion) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            datosConexion ? resolve("Conexón OK") : reject("Error")
        
        }, 3000)
    })
}

conexionBDDExterna(true)
.then(respuesta => console.log(respuesta)) //Este sirve para cuando la promesa ha sido exitosa
.catch(error => console.log(error)) //Esto sirve para cuando la promesa ha sido erronea

//Prueba a una API
const obtenerProductos = fetch('https://fakestoreapi.com/products')
obtenerProductos
    .then(r => r.json())
    .then(r => console.log(`${r[0].title} - ${r[0].price}`))
    .catch(e => console.log(e))
























