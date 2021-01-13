//1.-Dados un array y un valor Y, cuenta e imprime (print) el número de valores del array que sean mayores que Y. 

function print(x, Y) {
    arr = [];
    for (i = 0; i < x.length; i++) {
        if (x[i] > Y) {
            arr.push(x[i]);
        }
    }
    return arr;
}
z = print([10, 5, 20, 40], 11);
console.log(z);
//console.log(arr.length);

respuesta: 20, 40


//2.-Dado un array, imprime los valores máximos (max), mínimos (min) y promedio (average) para el array. 

function a(x) {
    var max = x[0];
    var min = x[0];
    var average = 0;
    var suma = 0;
    for (var i = 0; i < x.length; i++) {
        if (max < x[i]) {
            max = x[i];
        }
        if (min > x[i]) {
            min = x[i];
        }
        suma = suma + x[i];
    }
    average = suma / x.length;
    console.log(max, min, average)
    var y = []
    y.push(max);
    y.push(min);
    y.push(average);
    return y;
}
    z = a([3, 6, 10, 11, 12]);
    
    console.log(z);


    respuesta: 12, 3,8.4




//3.-Dado un array de números, crea una función que dé como resultado un nuevo array donde los valores negativos se reemplacen por el texto (string) ‘Dojo’. 
//Por ejemplo, reemplazarNegativos([1,2,-3,-5,5]) debiera devolver [1,2, “Dojo”, “Dojo”, 5].

function reemplazarNegativos(y) {
    var arreglo = [];
    for (var i = 0; i < y.length; i++) {
        if (y[i] < 0) {
            arreglo.push('Dojo');
        } else
            arreglo.push(y[i]);
    }
    return arreglo;
}
z = reemplazarNegativos([1, 2, -3, -5, 5]);
console.log(z)


respuesta: 1, 2, 'Dojo', 'Dojo', 5


//4.-Dado un array y su respectivo índice, remueve los valores en el rango del índice dado( acortando el array).
// Por ejemplo, removerRango([20,30,40,50,60,70],2,4)debiera devolver [20,30,70].

function removedorRango(a, inicio, fin) {
    var devolver = [];
    for (var i = 0; i < a.length; i++) {
        if (i < inicio || i > fin) {
            devolver.push(a[i]);
        }
    }
    return devolver;
}
z = removedorRango([20, 30, 40, 50,60, 70], 2, 4);
console.log(z);

respuesta: 20, 30, 70