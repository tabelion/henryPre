// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var canti = array.length; 
  return array[canti-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var canti = array.length; 
  return canti;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var canti = array.length;
  var entero;
  for(let i=0; i < canti; i++) {
    entero = array[i] + 1;
    array[i] = entero;
  }

  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);

  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  //var canti = array.length;
  array.unshift(elemento);

  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

  //var palabras = ['Henry', 'JavaScript', 'Class']; 
  var frase = palabras[0]; 
  for (let i=1; i < palabras.length; i++){
    frase = frase + ' ' + palabras[i];
  }

  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var canti = array.length;
  var resultado = false;

  for(let i=0; i < canti; i++) {
    if (array[i] === elemento) {resultado = true;}
  }

  return resultado;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var canti = numeros.length;
  var resultado = 0;

  for(let i=0; i < canti; i++) {
    resultado += numeros[i];
  }

  return resultado;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var canti = resultadosTest.length;
  var resultado = 0;
  var promedio = 0;

  for(let i=0; i < canti; i++) {
    resultado += resultadosTest[i];
  }

  promedio = resultado / canti;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var canti = numeros.length;
  var resultado = 0;

  for(let i=0; i < canti; i++) {
    if (numeros[i] > resultado) {
      resultado = numeros[i];
    }
  }

  return resultado;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var canti = arguments.length;
  var resultado = 0;

  if (canti == 0) {
    return 0;
  }

  var resultado = arguments[0];

  for (var i=1; i < canti; i++) {
    resultado *= arguments[i];
  }
  return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var canti = arreglo.length;
  var elementos = 0;

  for(let i=0; i < canti; i++) {
    if (arreglo[i] > 18) {
      elementos++;
    }
  }

  return elementos;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  var resultado = 'Es dia Laboral';

      if (numeroDeDia == 1 || numeroDeDia == 7) {
        resultado = 'Es fin de semana';
      }

      return resultado; 
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var texto = n.toString();
  var dato = texto.substring(0,1);

  var resultado = false;

  if (dato === '9') {
    resultado = true;
  }

  return resultado; 
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var canti = arreglo.length;
  var elemento = arreglo[0];
  var resultado = false;
  
  for(let i=1; i < canti; i++) {
    if (elemento === arreglo[i]) {
      resultado = true;
    }
  }
  return resultado;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var canti = array.length;
  var resultado = [];

/*
= array.find(element
*/
  for(let i=0; i < canti; i++) {
    if (array[i] === "Enero") {
      resultado.push("Enero");
    } else if (array[i] === "Marzo") {
      resultado.push("Marzo");
    } else if (array[i] === "Noviembre") {
      resultado.push("Noviembre");
    }
  }

  if (resultado.length < 3) {
    return "No se encontraron los meses pedidos";
  } 
  return resultado;  
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var canti = array.length;
  var resultado = [];
  var valor;

  for(let i=0; i < canti; i++) {
    if (array[i] > 100) {
      resultado.push(array[i]);
    }
  }

  return resultado;
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var salir = false;
  var result = numero;
  var i = 0;
 
  while (i < 10) {

      array.push(result += 2);

      if (i == result){
        salir= true;
        break;
      }
      i++;
   }

   if (salir == true) {
      return "Se interrumpió la ejecución";
   }
   return array;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let array = [];   //50
  let result = numero;

  for (let i = 0; i < 10; i++) {

    if (i == 5) continue;
    array.push(result += 2);
  }

  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
