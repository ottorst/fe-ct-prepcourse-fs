/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function obtenerMayor(x, y) {
   // "x" e "y" son números enteros.
   // Retornar el número más grande.
   // Si son iguales, retornar cualquiera de los dos.
   // Tu código:
   var masGrande = y;
   if (x > y) masGrande = x;
   return masGrande;
}

function mayoriaDeEdad(edad) {
   // Determinar si la persona puede ingresar al evento según su edad.
   // Si tiene 18 años ó más debe retornar el string: "Allowed".
   // Caso contrario: "Not allowed".
   // Tu código:
   var respuesta = "Not allowed";
   if (edad >= 18) respuesta = "Allowed";
   return respuesta;
}

function conection(status) {
   // El argumento "status" representa el estado de conexión de un usuario.
   // Si el estado es igual a 1, el usuario está "Online".
   // Si el estado es igual a 2, el usuario está "Away".
   // De lo contrario, presumimos que el usuario está "Offline".
   // Retornar el estado de conexión del usuario.
   // Tu código:
   var respuesta = "Offline";
   if (status === 1) { respuesta = "Online"; }
   else if (status === 2) { respuesta = "Away"; }
   return respuesta;
}

function saludo(idioma) {
   // Retornar un saludo en tres diferentes lenguajes:
   // Si "idioma" es "aleman", devuelve "Guten Tag!".
   // Si "idioma" es "mandarin", devuelve "Ni Hao!".
   // Si "idioma" es "ingles", devuelve "Hello!".
   // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
   // Tu código:
   var respuesta = "Algo salió mal";
   if ((idioma != "aleman" && idioma != "mandarin" && idioma != "ingles") || idioma === undefined) {
      respuesta = "Hola!"
   } else {
      if (idioma === "aleman") respuesta = "Guten Tag!";
      else if (idioma === "mandarin") respuesta = "Ni Hao!";
      else if (idioma === "ingles") respuesta = "Hello!";
   }
   return respuesta;
}

function colors(color) {
   // La función recibe un color. Retornar el string correspondiente:
   // En caso que el color recibido sea "blue"   --> "This is blue".
   // En caso que el color recibido sea "red"    --> "This is red".
   // En caso que el color recibido sea "green"  --> "This is green".
   // En caso que el color recibido sea "orange" --> "This is orange".
   // Si no es ninguno de esos colores           --> "Color not found".
   // IMPORTANTE: utilizar el statement SWITCH.
   // Tu código:
   var respuesta = "Algo salió mal";
   switch(color) {
      case "blue":
      case "red":
      case "green":
      case "orange":
         respuesta = "This is " + color;
         break;
      default:
         respuesta = "Color not found"
   }
   return respuesta;
}

function esDiezOCinco(num) {
   // Retornar true si "num" es 10 o 5.
   // De lo contrario, retornar false.
   // Tu código:
   return (num === 5 || num === 10);
}

function estaEnRango(num) {
   // Retornar true si "num" es menor que 50 y mayor que 20.
   // De lo contrario, retornar false.
   // Tu código:
   return (num > 20 && num < 50);
}

function esEntero(num) {
   // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
   // Ejemplo: 0.8   ---> false
   // Ejemplo: 1     ---> true
   // Ejemplo: (-10) ---> true
   // De lo contrario, retorna false.
   // Tu código:
   return Number.isInteger(num);
}

function fizzBuzz(num) {
   // Si "num" es divisible entre 3, retorna "fizz".
   // Si "num" es divisible entre 5, retorna "buzz".
   // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
   // De lo contrario, retorna false.
   // Tu código:
   var string = '';
   if (num % 3 === 0) {string = 'fizz';}
   if (num % 5 === 0) {string += 'buzz';}
   if (string.length <= 0) {string = false;}
   return string;
}

function operadoresLogicos(num1, num2, num3) {
   // La función recibe tres números distintos.
   // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
   // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
   // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
   // Si todos los argumentos son cero, retornar ---> "Error".
   // Si no se cumple ninguna de las condiciones anteriores, retornar false.
   // Tu código:
   seCumplio = false;
   if (num1 > num2 && num1 > num3 && num1 > 0) {
      seCumplio = true;
      return 'Numero 1 es mayor y positivo';
   }
   if (num1 < 0 || num2 < 0 || num3 < 0) {
      seCumplio = true;
      return 'Hay negativos';
   }
   if (num3 > num1 && num3 > num2) {
      seCumplio = true;
      return num3 + 1;
   }
   if (num1 === 0 && num2 === 0 && num3 === 0) {
      seCumplio = true;
      return 'Error';
   }
   return seCumplio;
}

function esPrimo(num) {
   // Retornar true si "num" es primo.
   // De lo contrario retorna false.
   // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
   // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
   // [Nota]: los números negativos, 0 y 1 NO son números primos.
   // Tu código:
   // Si el número es 1 o menor, no es primo
   if (num <= 1) {
      return false;
   }
   
   // Comprobar si el número es divisible por algún número entre 2 y la raíz cuadrada del número
   for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
         return false;
      }
   }
   
   // Si el número no es divisible por ningún número entre 2 y la raíz cuadrada del número, es primo
   return true;
}

function esVerdadero(valor) {
   // Si "valor" es verdadero retornar "Soy verdadero".
   // Caso contrario, retornar "Soy falso".
   // Tu código:
   return valor ? "Soy verdadero" : "Soy falso";
}

function tieneTresDigitos(num) {
   // Si el número recibido tiene tres dígitos retornar true.
   // Caso contrario, retornar false.
   // Tu código:
   return num > 99 && num <= 999;
}

function doWhile(num) {
   // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
   // Retornar el valor final.
   // Utilizar el bucle Do-While.
   // Tu código:
   contador = 0
   do {
      num += 5;
      contador++;
   } while (contador < 8)
   return num;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   obtenerMayor,
   mayoriaDeEdad,
   conection,
   saludo,
   colors,
   esDiezOCinco,
   estaEnRango,
   esEntero,
   fizzBuzz,
   operadoresLogicos,
   esPrimo,
   esVerdadero,
   tieneTresDigitos,
   doWhile,
};
