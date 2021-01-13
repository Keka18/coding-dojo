//Configura un array para que los valores negativos se transformen en 0. Por ejemplo, resetNegativos([1,2,-1,-3]) debiera dar como resultado [1,2,0,0].

function resetNegativos(y) {
    arreglo = [];
    for (i = 0; i < y.length; i++) {
        if (y[i] < 0) {
            y[i] = 0;
        }
        arreglo.push(y[i]);
    }
    return arreglo;
}
z = resetNegativos([1, 2, -1, -3]);
console.log(z);


//Dado un array, mueve todos los valores un espacio de derecha a izquierda eliminando el primer valor y dejando un 0 para el último valor. 
//Por ejemplo, moverAdelante([1,2,3]) debiera dar como resultado [2,3,0].

function moverAdelante(x) {
    arreglo = [];
    for (i = 0; i < x.length; i++) {
        x[i] = x[i + 1];
        arreglo.push(x[i]);
    }
    arreglo[x.length - 1] = 0;
    return arreglo;
}
z = moverAdelante([1, 2, 3]);
console.log(z);

//Configura un array para que el resultado sean los valores en el orden contrario. Por ejemplo, returnReverso([1,2,3]) debe dar [3,2,1].

function returnReverso(x) {
    arreglo = [];
    ultimo = x.length;
    for (i = 0; i < x.length; i++) {
        x[i] = ultimo - i;

        arreglo.push(x[i]);
    }
    return arreglo;
}
z = returnReverso([1, 2, 3, 4]);
console.log(z);

//Crea una función que cambie un array repitiendo sus valores originales (manteniendo el mismo orden). 
//Por ejemplo, repetirValores([4,”Ulysses”, 42, false]) debiera dar [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].

function repetirValores(x) {
    arreglo = [];
    for (i = 0; i < x.length; i++) {
        arreglo.push(x[i]);
        arreglo.push(x[i]);

    }
    return arreglo;
}
z = repetirValores([4, 'Ulysses', 42, false]);
console.log(z);