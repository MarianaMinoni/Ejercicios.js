


//pedir al usurio un numero y una frase, repetir la frase la cantidad de veces que ingresó

/*let numero = prompt('ingrese un numero');
let frase = prompt('ingrese una frase');

for (let i = 0; i < numero; i++ ){
    alert (frase)
}*/


//--------------------------------------------------------------------------------------------------------------------------------


//Solicitar al usuario un (1) número. Emplear este valor para determinar la cantidad de repeticiones, 
//y efectuar una salida por alerta con el mensaje “lado” en cada repetición. 
//Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo.

/*
let numero = prompt('ingrese un numero');

for (let i = 0; i < numero; i++){
    if (numero > 4){
        break;
    } else (alert('lado'))
}
*/
//--------------------------------------------------------------------------------------------------------------------------------
//Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
//Luego realizar un única salida por alerta, con el listado de alumnos registrados.

/*

let alumnos = '';

for (let i = 0; i < 10; i++){
    alumnos +=  prompt('ingrese el nombre del alumno') + '\n';
   

}

alert(alumnos)

*/

//Solicitar al usuario la carga de nombres de forma consecutiva,  hasta que se ingrese “Voldemort”.
//Luego realizar un única salida por alerta, con todos los nombres ingresados.

/*
let entrada = prompt('ingrese un nombre');
let ingresados ='';

while (entrada != 'voldemort'){
    ingresados += entrada + '\n';
    entrada = prompt('ingresar nombre');
}

alert(ingresados);

*/

//--------------------------------------------------------------------------------------------------------------------------------

/*
let entrada = prompt('seleccionar un producto del 1 al 4. En caso de querer salir presionar ESC')


while (entrada != 'ESC'){


switch (entrada) {
    case '1':
        alert ('tomate')
        
        break;
        case '2':
            alert ('papa')
            
            
        break;
        case '3':
            alert ('carne')
                
        break;
        case '4':
           alert('pollo')
            
        break;

        case 'ESC':
        break;
                                   
                

    default:
        break;
}

entrada = prompt('seleccionar un producto del 1 al 4. En caso de querer salir presionar ESC')

}*/



/*
let entrada =  prompt("SELECCIONAR PRODUCTO DE 1 A 4");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("Tomate");
            break;
        case "2":
            alert("Papa");
            break;
        case "3":
            alert("Carne");
            break;
        case "4":
            alert("Pollo");
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("SELECCIONAR PRODUCTO DE 1 A 4");
}*/
//--------------------------------------------------------------------------------------------------------------------------------

//Codificar tres funciones: Una función entrada(), la cual solicite un valor al usuario y lo retorne.
// Una función procesamiento(valor), donde se transforme la entrada.
// Una función salida(valor), la cual mostrará el resultado por alerta.
// Luego, invocar las tres funciones.


/*
function entrada (){
    return prompt('ingrese un numero');
}

function procesamiento(entrada){
    return 'el numero ingresado es' + entrada;

}

function salida (procesamiento){
     alert (procesamiento)

}



salida(procesamiento(entrada ()));

*/
//--------------------------------------------------------------------------------------------------------------------------------

// Codificar una función que reciba un número decimal por parámetro, y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
// Luego invocar la función de forma iterativa cinco (5) veces, solicitando en cada ciclo un número al usuario.

/*
let numero = 1.68

function entrada(numero){

    return Math.round(numero)
  

}


for (let i = 0; i < 5; i++){
let entrada = prompt('ingrese un numero')
alert(Math.round(entrada))

}


*/
//--------------------------------------------------------------------------------------------------------------------------------


// Codificar una función con la siguiente cabecera: impuesto (precio, porcentaje). En ella, se retorna un valor numérico compuesto por el precio recibido, más la suma del porcentaje ingresado.
//Luego invocar la función de forma iterativa cinco (5) veces, 
//solicitando en cada ciclo un precio y porcentaje al usuario.

/*
function impuesto (precio, porcentaje){
    return precio + ((precio * porcentaje)/100) 
}

for (let i = 0; i < 5; i++){
    let numero = parseInt(prompt('ingrese un numero'))
    let porcentaje = parseInt(prompt('ingrese otro numero'))

    alert(numero + ((numero * porcentaje)/100))


}*/

//--------------------------------------------------------------------------------------------------------------------------------

//Codificar dos funciones: Una función cotizarDolar(pesos), 
//la cual recibe un valor monetario en pesos argentinos, y lo retorna en su equivalente en dólares.

/*
let dolar = 820
let pesos = 1

function cotizarDolar(valor){
return alert( 'son: ' + valor / dolar + ' Dólares');
}

//cotizarDolar(82000)

//Una función cotizarPesos(dolar), que recibe un valor monetario en dólares, y lo retorna en su equivalente en pesos argentinos.

/*

function cotizarPesos(valor){
    return alert('son: ' + valor * dolar + ' Pesos')
}


//cotizarPesos(100)


// Luego invocar las funciones solicitando  al usuario el valor y el tipo de cotización a realizar.


cotizarPesos(parseInt(prompt('ingrese el monto en dólares')))

cotizarDolar(parseInt(prompt('ingrese el monto en pesos')))*/

//--------------------------------------------------------------------------------------------------------------------------------

// Codificar una función con la siguiente cabecera: validacion(cadena). En ella, se retorna un valor booleano, 
//el cual es true si el parámetro no es un cadena vacía. Caso contrario, se retorna false.

/*
function valdidacion(cadena){
    if (cadena === ''){
        return alert(false);
    } else{
        return alert(true);
    }

}

//valdidacion('hola')

let cadena = '';

while(cadena != 'ESC'){
   cadena = prompt('ingrese una palabra \n para salir escriba ESC')
 
}
*/

//--------------------------------------------------------------------------------------------------------------------------------

/*
class Tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;

    }

    estaAbierto(hora){
        if (hora >= 8 & hora <= 12 || hora >= 15 & hora <= 19)
       {
        return alert('está abierto')
       } else{
        alert('está cerrado')
       }

    }
    esPropietario(nombre){
        if(nombre === this.propietario){
            return true
        }else{
            return false
        }

    }

}

let tienda1 = new Tienda('apus', 'rivera 2545', 'mario', 'kiosko')
let tienda2 = new Tienda('pipos', 'rivera 25', 'ricardo', 'limpieza')
let tienda3 = new Tienda('ramoncitos', 'rivera 10', 'mariana', 'verduleria')


for(let i = 0; i<5; i++){
let entrada = prompt('ingrese el nmbre del propietario')
if(tienda1.esPropietario(entrada)){

    alert(entrada + 'es propietario')
 
  
}else if(tienda2.esPropietario(entrada)){
    alert(entrada + 'es propietario')
   

}else if(tienda3.esPropietario(entrada))
  {  alert(entrada + 'es propietario')
}else{
  alert(entrada + ' no es propietario')
    
}

}*/


//console.log(tienda1.esPropietario('mirta'));


// Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). 
//Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.




/*for (let i = 0; i < 3; i++){
tienda1.estaAbierto(prompt('ingrese un horario para ver si la tienda se encuentra abierta')) 
}*/



//--------------------------------------------------------------------------------------------------------------------------------


// Solicitar al usuario el registro de cinco (5) tiendas.
//Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. 
//Generar una única salida compuesta por la información de los objetos instanciados.

/*
let tienda2 = new Tienda(prompt('ingrese el nombre de la tienda'), prompt('ingrese la direccion'), prompt('ingrese dueño'), prompt('ingrese rubro'))

console.log(tienda2);


*/

//--------------------------------------------------------------------------------------------------------------------------------



//1- Declarar una clase Cliente que permita registrar:
//Registrar nombre, presupuesto, si tiene tarjeta de descuento, y número de teléfono del cliente.
//Un método transferirDinero(valor), que permita






//JS6

/*

const equipo = ['HOMERO', 'APU', 'MOE', 'MR. BURNS'];
for (let index = 0; index < equipo.length; index++) {
    alert("POSICION " + index + " JUGADOR " + equipo[index]);
}

*/


/*

let entrada = prompt("INGRESAR JUGADOR");
const equipo = [];
do { equipo.push(entrada);
    entrada = prompt("INGRESAR JUGADOR");

}
while (entrada != 'ESC') {}

console.log(equipo)



*/

//TRABAJO NRO 2 - tienda de ropa
/*
class Carrito {
    constructor(){
        this.productos = []
    }

    agregarProducto(nombreProducto, precioProducto){
        this.productos.push({id:this.generarId(), nombre: nombreProducto, precio: precioProducto})
    }

    quitarProductos(id){
       this.productos =  this.productos.filter(item => item.id != id)
    }

    totalProductos(){
        return this.productos.length
    }


    totalPrecio(){
        let total = 0
        this.productos.forEach(item => {
            total += item.precio
        })

        return total

    }

    generarId(){
       let max = 0

       this.productos.forEach(item => {
       if (item.id > max){
        max = item.id
       }
    })

    return max + 1
    }



    listaDeProductos(){
        let contenido = "productos agregados:  \n\n"
        
        this.productos.forEach(item => {
            contenido += `${item.id} - ${item.nombre} - $${item.precio}\n`
        })

        return contenido
    }


}







let nombre = ""
let precio = 0
const carrito = new Carrito()



while (nombre.toLocaleUpperCase()!= "SALIR"){
   nombre= prompt("Ingrese el nombre del producto: \n\n(Escriba SALIR para terminar)")

   if(nombre.toLocaleUpperCase() == "SALIR"){
    break
   }

    precio = parseFloat(prompt("Ingrese el precio del producto"))
    carrito.agregarProducto(nombre,precio)

} 




let id;

while (id != 0) {
    id= parseInt(prompt(carrito.listaDeProductos() + "Ingrese el ID del producto a eliminar - (0 para salir)"))
   
   
   if(id > 0){
    carrito.quitarProductos(id);
   }

   if (carrito.totalProductos() == 0 ) {
    break;

}
   
alert(`${carrito.listaDeProductos()}\nTotal a pagar: $${carrito.totalPrecio()}`)


} */


