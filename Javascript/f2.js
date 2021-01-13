//1.-Obtén del 1 al 255: Escribe una función que devuelve un array con todos los números del 1 al 255.

function devuelve(x) {
    arr = [];
    for (i = 1; i <= x; i++) {
        arr.push(i);
    }
    return arr;
}

z = devuelve(255);
console.log(z)

//2.-Consigue pares hasta 1000: Escribe una función que entregue la suma de todos los números pares del 1 al 1000 - 
//Puedes usar un operador de módulo para este ejercicio. 
function ConsiguePares(x) {
    sum = 0;
    for (i = 0; i <= x; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum;
}
z = ConsiguePares(1000);
console.log(z)
    //3.-Suma impares hasta 5000: Escribe una función que devuelva la suma de todos los números impares entre 1 y 5000 
    //(ej: 1+3+5+...+4997+4999).
function ConsigueImpares(x) {
    sum = 0;
    for (i = 1; i <= x; i++) {
        if (i % 2 == 1) {
            sum = sum + i;
        }
    }
    return sum;
}
z = ConsigueImpares(5000);
console.log(z)
    //4.-Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] 
    //retorna 8. [-5,2,5,12] retorna 14). 
function devuelvaSuma(x) {
    suma = 0;
    for (i = 0; i < x.length; i++) {
        suma = suma + x[i];
    }
    return suma;
}

z = devuelvaSuma([1, 2, 5]);
console.log(z)
    //5.-Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor
    //(ej: para [-3,3,5,7] el número mayor (max) es 7). 
function mayor(x) {
    max = [0];
    for (i = 0; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }

    }
    return max;
}
z = mayor([-3, 3, 5, 7]);
console.log(z);
//6.-Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores
//(ej: para [1,3,5,7,20] el promedio es 7.2).
function promedio(x) {
    suma = 0;
    for (i = 0; i < x.length; i++) {
        suma = suma + x[i];

    }
    return (suma / x.length);
}
z = promedio([1, 3, 5, 7, 20]);
console.log(z);

//7.-Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]).
//Pista: Usa el método ‘push’.
function ArrayImpares(x) {
    arr = [1];
    for (i = 2; i <= x; i++) {
        if (i % 1 == 0) {
            arr.push(i);
        }
    }
    return arr;
}
z = ArrayImpares(50);
console.log(z)
    //8.-Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] 
    //y Y = 3,tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
function mayorY(x, Y) {
    sum = 0;
    for (i = 0; i < x.length; i++) {
        if (x[i] > Y) {
            sum++
        }
    }
    return sum;
}
z = mayorY([1, 3, 5, 7], 3);
console.log(z)


//9.-Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor 
//(ej: [1,5,10,-2] será [1,25,100,4]).
function cuadrados(x) {
    arr = [];
    for (i = 0; i < x.length; i++) {
        arr.push(x[i] * x[i]);
    }
    return arr;
}
z = cuadrados([1, 5, 10, -2]);
console.log(z)
    //10.-Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0.
    //Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function negativos(x) {
    arr = [];
    for (i = 0; i < x.length; i++) {
        if (x[i] > 0) {
            arr.push(x[i]);
        } else {
            arr.push(0);
        }
    }
    return arr;
}
z = negativos([1, 5, 10, -2]);
console.log(z)
    //11.-Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), 
    //menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function nuevoArray(x) {
    suma = 0;
    arr = [];
    mayor = [0];
    menor = [0];
    prom = 0;
    for (i = 0; i < x.length; i++) {
        suma = suma + x[i];
        if (x[i] > mayor) {
            mayor = x[i];
        }
        if (x[i] < menor) {
            menor = x[i];
        }
    }
    prom = suma / x.length;
    arr = [mayor, menor, prom];
    return arr;
}
z = nuevoArray([1, 5, 10, -2]);
console.log(z)

//12.-Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada
// del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function IntercambiaValores(x) {
    arr = [];
    for (i = 0; i < x.length; i++) {
        arr.push(x[i]);
        if (i == 0) {
            arr[i] = (x[x.length - 1]);
        }
        if (i == x.length - 1) {
            arr[i] = (x[0]);
        }

    }
    return arr;
}
z = IntercambiaValores([1, 5, 10, -2]);
console.log(z)

//13.-De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, 
//dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
function Strin(x) {
    for (i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 'dojo';
        }
    }
    return x;
}
z = Strin([-1, -3, 2]);
console.log(z);