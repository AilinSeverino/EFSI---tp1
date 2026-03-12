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

}

console.log(validarPassword("valu123ailu"));