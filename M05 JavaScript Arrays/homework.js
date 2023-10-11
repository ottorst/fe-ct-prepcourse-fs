/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for(var i = 0; i < array.length; i++) {
      array[i] += 1;
   }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   return [elemento].concat(array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var respuesta = '';
   for(var i = 0; i < palabras.length; i++) {
      respuesta += palabras[i] + (i < palabras.length - 1 ? ' ' : '');
   }
   return respuesta;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   respuesta = false;
   for(var i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         respuesta = true;
         break;
      }
   }
   return respuesta;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var respuesta = 0;
   for(var i = 0; i < arrayOfNums.length; i++) {
      respuesta += arrayOfNums[i];
   }
   return respuesta;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   return agregarNumeros(resultadosTest) / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var maximo = Math.max(...arrayOfNums);
   return maximo;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var respuesta = 1;
   if(arguments.length < 1) {
      return 0;
   } else {
      for(var i = 0; i < arguments.length; i++) {
         respuesta *= arguments[i];
      }
   }
   return respuesta;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var respuesta = 0;
   for (var i = 0; i < array.length; i++) {
      if (array[i] > 18) { respuesta++; }
   }
   return respuesta;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   // D: 1, L: 2, M: 3, X: 4, J: 5, V: 6, S: 7
   var respuesta = "Es dia laboral";
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      respuesta = "Es fin de semana";
   }
   return respuesta;
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   return num.toString().charAt(0) == 9
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   // si el array tiene un sólo elemento es true
   // y el único elemento es igual a sí mismo y retornará cierto.
   // si el array tiene más de un elemento es false,
   // y se procede a comparar si todos son iguales
   var respuesta = true; // si el tamaño del array es 1, es cierto que todos son iguales
   if (array.length > 1) { // si el array es más grande que 1 elemento.
      respuesta = true; // asume que todos son iguales, la línea no hace falta pero por explicitar para el ejercicio.
      for(var i = 0; i < array.length - 1; i++) { // recorro todo el array hasta una posición menos porque comparo con la posición  +1
         if (array[i] != array[i+1]) { // todos iguales, si el siguiente es diferente se convierte en falso y rompo bucle.
            respuesta = false;
            break;
         }
      }   
   }
   return respuesta;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var respuesta = "No se encontraron los meses pedidos";
   if(!(array.includes('Enero') && array.includes('Marzo') && array.includes('Noviembre'))) {
      return respuesta;
   }
   respuesta = [];
   for(var i=0; i < array.length; i++) {
      if (array[i] == 'Enero' || array[i] == 'Marzo' || array[i] == 'Noviembre') {
        respuesta.push(array[i]);
      }
   }
   return respuesta;
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

   // Dado que dice: mostrar, debo usar el console.log, además de devolver el valor.
   var respuesta = [];
   for (var i=0; i <= 10; i++) {
      respuesta.push(i*6);
   }
   return respuesta;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var respuesta = [];
   for (var i=0; i < array.length; i++) {
      if (array[i] > 100) {
         respuesta.push(array[i]);
      }
   }
   return respuesta;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   suma = num;
   respuesta = [];
   for(var i=0; i < 10; i++) { // iterar 10 veces
      suma += 2;
      respuesta.push(suma);
      if (suma == i) {
         respuesta = 'Se interrumpió la ejecución';
         break;
      }
   }
   return respuesta;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   suma = num;
   respuesta = [];
   for(var i=0; i < 10; i++) { // iterar 10 veces
      if (i == 5) continue; 
      suma += 2;
      respuesta.push(suma);
   }
   return respuesta;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
