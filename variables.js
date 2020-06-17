// Variables: Es la definición de un espacio de memoria con un fin especifico

var nombre = "Sergio", apellido = "Ruiz";

var nombreEnMayusculas  = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetras = nombre.length;

var nombreCompleto = nombre  + " " + apellido //Forma vieja
var nombreCompleto2 = `${nombre} ${apellido}`; //Forma nueva ~ Template strong o interpolacion de texto

var str = nombre.substring(1,2); //Obtenemos substring ~ Acceder a un texto de acuerdo a su posición