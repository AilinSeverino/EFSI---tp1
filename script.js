//ejercicio 1
function formatearNombre(nombre){
    let cambio = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()
    return cambio;
}

console.log(formatearNombre("pABLO"));

//ejercicio 2
function contarLetras(texto) {
    let sinEspacios = texto.replaceAll(" ", "");
    let cantidad = sinEspacios.length;
    return cantidad;
}

console.log(contarLetras("hola mundo"));

//ejercicio 3
function maximo(a, b, c){
    if(a >= b && a >= c){
        return a;
    }
    else if(b >= a && b >= c){
        return b;
    }
    else{
        return c;
    }
}

console.log(maximo(5, 10, 3));

//ejercicio 4
function validarPassword(password){
    let valido = false;
    if(password.length >= 8){
        for (let i = 0; i < password.length; i++) {
            if (password[i] >= "0" && password[i] <= "9") {
                valido = true;
                break;
            }
        }
    }
    return valido;
}

console.log(validarPassword("valu123ailu"));

///PARTE 2
//ejercicio 5
function sumarArray(numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}

console.log(sumarArray([1, 2, 3, 4, 5]));

//ejercicio 6
function mayorNumero(numeros){
    let max = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        }
    }
    return max;
}

console.log(mayorNumero([10, 5, 8, 20, 3]));

//ejercicio 7
function obtenerPares(numeros){
    let pares = []; //es un array vacio para meter los pares.
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares.push(numeros[i]);
        }
    }    
    return pares;
}

console.log(obtenerPares([1, 2, 3, 4, 5, 6]));

//PARTE 3
//ejercicio 8
const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
}

function descripcionUsuario(usuario){
    return(`${usuario.nombre} tiene ${usuario.edad} años`);
}

console.log(descripcionUsuario(usuario));

//ejercicio 9
function activarUsuario(usuario){
    usuario.activo = true;
}

console.log(activarUsuario(usuario));

//ejercicio 10
const productos = [
{nombre:"Mouse", precio:10},
{nombre:"Teclado", precio:25},
{nombre:"Monitor", precio:200}
]

function calcularTotal(productos){
    let total = 0;
    for(let i = 0; i < productos.length; i++){
        total += productos[i].precio;
    }
    return total;
}

console.log(calcularTotal(productos));

//PARTE 4
//ejercicio 11
const usuarios = [
{nombre:"Ana", edad:17},
{nombre:"Juan", edad:25},
{nombre:"Pedro", edad:30}
]

const nombres = usuarios.map(usuario => usuario.nombre);

console.log(nombres);

//ejercicio 12
const mayoresDeEdad = usuarios.filter(usuario => usuario.edad >= 18);

console.log(mayoresDeEdad);

//ejercicio 13
const sumaEdades = usuarios.reduce((acumulador, usuario) => acumulador + usuario.edad, 0);

console.log(sumaEdades);

//PARTE 5
//ejercicio 14
const producto = {
nombre:"Notebook",
precio:1000
}

const{nombre, precio} = producto;

console.log(nombre);
console.log(precio);

//ejercicio 15
const producto2 = {
nombre:"Notebook",
precio:1000,
stock: 5
}

console.log(producto2);

//PARTE 6
//ejercicio 16
function buscarProducto(productos, nombre){
    for(let i = 0; i < productos.length; i++){
        if(productos[i].nombre === nombre){
            return productos[i];
        }
    }
    return null;
}

console.log(buscarProducto(productos, "iphone"));

//ejercicio 17
function DevolverPrecioMayor(productos){
    let mayores = []; //es un array vacio para meter los pares.
    for(let i = 0; i < productos.length; i++){
        if(productos[i].precio > 50){
            mayores.push(productos[i]);
        }
    }    
    return mayores;
}

console.log(DevolverPrecioMayor(productos));

//ejercicio 18
function promedio(numeros){
    let suma = 0;
    for(let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    let promediar = suma / numeros.length;
    return promediar;
}

console.log(promedio([1, 2, 3, 4, 5]));

//DESAFIO FINAL
const usuariosA = [ //ya existe usuarios
{id:1, nombre:"Ana", edad:20},
{id:2, nombre:"Juan", edad:15},
{id:3, nombre:"Pedro", edad:30}
]

function obtenerUsuarios(){
    return usuariosA;
}

console.log(obtenerUsuarios());

function obtenerUsuarioPorId(id){
    for(let i = 0; i < usuariosA.length; i++){
        if(usuariosA[i].id === id){
            return usuariosA[i];
        }
    }
    return null;
}

console.log(obtenerUsuarioPorId(2));

function obtenerMayores(){
    let mayores = [];
    for(let i = 0; i < usuariosA.length; i++){
        if(usuariosA[i].edad >= 18){
            mayores.push(usuariosA[i]);
        }
    }
    return mayores;
}

console.log(obtenerMayores());

function crearUsuario(nombre, edad){
    const nuevoUsuario = {
        nombre: nombre,
        edad: edad,
        id: usuariosA.length + 1
    }

    usuariosA.push(nuevoUsuario);
    return nuevoUsuario;
}

console.log(crearUsuario("Valentina", 45));