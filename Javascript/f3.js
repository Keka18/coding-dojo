//Fundamentos Básicos II

//1.-Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él,
// por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
function Grande(x) {
    for (i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            x[i] = 'big';
        }
    }
    return x;
}
z = Grande([-1, 3, 5, -5]);
console.log(z);

//2.-Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un 
//array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function print(x) {
    menor = 0;
    mayor = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] < menor) {
            menor = x[i];
        }
        if (x[i] > mayor) {
            mayor = x[i];
        }
    }
    console.log(menor);
    return mayor;
}
print([-1, 3, 5, -5]);


//3.-Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. 
//La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.

function print(x) {
    penultimo = 0;
    impar = 0;
    for (i = 0; i < x.length; i++) {
        if (i == (x.length - 2)) {
            penultimo = x[i];
        }
    }
    for (i = 0; i < x.length; i++) {
        if (x[i] % 2 == 1) {
            impar = x[i];
            return impar;
        }
    }
}
console.log(penultimo);
print([-1, 3, 5, -5]);
//4.-Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor 
//se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
function Doble(x) {
    arr = [];
    for (i = 0; i < x.length; i++) {
        arr.push(x[i] * 2);
    }
    return arr;
}
z = Doble([1, 5, 10, -2]);
console.log(z)

//5.-Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor 
//con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) 
//cambia el array original y devuelve [-1,1,1,3].
function ContarPositivos(x) {
    arr = [];
    sum = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            sum = sum + 1;
            arr.push(x[i]);
        } else arr.push(x[i]);

    }
    arr[arr.length - 1] = sum;
    return arr;
}
z = ContarPositivos([-1, 1, 1, 1]);
console.log(z)

//6.-Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores 
//impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, 
//imprime (print) “¡Es para bien!”.
function ParesImpares(x) {
    arr = [];
    cont = 0;
    impares = 0;
    pares = 0;
    for (i = 0; i < x.length - 1; i++) {
        for (j = 0; j < 2; j++) {
            cont = i + j;
            if (cont < x.length) {
                // arr.push(x[cont]);
                if (x[cont] % 2 == 1) {
                    impares++
                    if (impares == 3) {
                        console.log('¡Qué imparcial!')
                        impares = 0;
                    }
                }
            } else(cont < x.length) {
                if (x[cont] % 2 == 0) {
                    pares++
                    if (pares == 3) {
                        console.log('¡Es para bien!')
                        pares = 0;
                    }
                }
            }
        }
    }
}
z = ParesImpares([1, 1, 1, 2, 2, 2, 4, 4, 4]);

//7.-Incrementa los Segundos - Dado un array de números arr, agrega 1 a cualquier otro elemento, 
//específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). 
//Luego,console.log cada valor del array y devuelve arr. 
function Segundos(x) {
    arr = [];
    for (i = 0; i < x.length; i++) {
        console.log(x[i])
        if (x[i] % 2 == 1) {
            arr.push(x[i], 1);

        }
    }
    return arr;
}
z = Segundos([1, 2, 3, 2, 4, 4, 5]);
console.log(z);
//8.-Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) 
//que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) 
//del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver 
//[“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function longitudes(x) {
    arr = [];

    for (i = 0; i < x.length - 1; i++) {
        if (i == 0) {
            arr.push(x[i]);
        }
        arr.push(x[i].length);
    }
    return arr;
}
z = longitudes(['programar', 'dojo', 'genial']);
console.log(z);

//9.-Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores 
//del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) 
//debería devolver [8,9,10] en un nuevo array. 
function AgregaSiete(x) {
    for (i = 0; i < x.length; i++) {
        x[i] = x[i] + 7;
    }
    return x;

}
z = AgregaSiete([1, 2, 3]);
console.log(z);


//10.-Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. 
//Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir 
//[2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).

function ArrayInverso(x) {
    swap = 0;
    for (i = 0; i < x.length - i; i++) {
        swap = x[i];
        x[i] = x[(x.length - 1) - i];
        x[(x.length - 1) - i] = swap;
    }
    return (x);
}
z = ArrayInverso([3, 1, 6, 4, 2]);
console.log(z)
    //11.-Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los
    // valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function Negativa(x) {
    for (i = 0; i < x.length; i++) {
        x[i] = x[i] * -1;
        if (x[i] > 0) {
            x[i] = x[i] * -1;
        }
    }
    return (x);

}
z = Negativa([1, -3, 5]);
console.log(z);

//12.-Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” 
//cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function hambriento(x) {
    for (i = 0; i < x.length; i++) {
        if (x[i] == 'comida') {
            console.log('yummy');
        } else {
            console.log('tengo hambre')
        }
    }
}
hambriento(['comida', 2, 3, 'comida']);



//13.-Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero 
//con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia
// el array a [“pizza¨, 42, “Ada”, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a
// [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez. 
function ArrayInverso(x) {
    swap = 0;
    swip = 0;
    for (i = 0; i < 3; i++) {
        if (i == 0) {
            swap = x[i];
            x[i] = x[(x.length - 1) - i];
            x[(x.length - 1) - i] = swap;

        }
        if (i == 2) {
            swip = x[i];
            x[i] = x[(x.length - 1) - i];
            x[(x.length - 1) - i] = swip;
        }
    }
    console.log(x);
}
ArrayInverso([true, 42, 'Ada', 2, 'pizza']);


//14.-Escala el Array - Dado un array arr y un número num, multiplica todos los valores
// en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, 
//escalaArray([1,2,3], 3] debería devolver [3,6,9].
function Escala(x, y) {
    for (i = 0; i < x.length; i++) {
        x[i] = x[i] * y;
    }
    return (x);
}
z = Escala([1, 2, 3], 3);
console.log(z);