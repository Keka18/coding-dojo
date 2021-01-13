function a() {
    return 35;
}
console.log(a()) // 35



function a() {
    return 4;
}
console.log(a() + a()); //8



function a(b) { //2 , 4
    return b;
}
console.log(a(2) + a(4)); // 2+4 = 6



function a(b) { //3
    console.log(b); //3
    return b * 3; //3*3
}
console.log(a(3)); // 9


function a(b) { //10
    return b * 4; //10*4
    console.log(b);
}
console.log(a(10)); //40



function a(b) { //15
    if (b < 10) {
        return 2;
    } else {
        return 4;
    }
    console.log(b); //
}
console.log(a(15)); //4



function a(b, c) { //10,3
    return b * c; //30
}
console.log(10, 3); //10,3
console.log(a(3, 10)); //30



function a(b) { //3
    for (var i = 0; i < 10; i++) {
        console.log(i); //0,1,2,3,4,5,6,7,8,9
    }
    return i; //9
}
console.log(3); //3
console.log(4); //4



function a() {
    for (var i = 0; i < 10; i++) { //3, 6, 9, 12
        i = i + 2; //0+2=2, 3=3+2, 6=6+2, 9=9+2
        console.log(i); //2, 5, 8, 11
    }
}
a();



function a(b, c) { //0,10
    for (var i = b; i < c; i++) {
        console.log(i); //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    }
    return b * c; //0
}
a(0, 10); //0
console.log(a(0, 10)); //0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0




function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(j);
        }
        console.log(i);
    }
} // no se llama a la función




function a() {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            console.log(i, j);
        }
        console.log(j, i);
    }
} //no se llama a la función


var z = 10;

function a() {
    var z = 15;
    console.log(z);
}
console.log(z); //10



var z = 10;

function a() {
    var z = 15;
    console.log(z); //15
}
a();
console.log(z); //10



var z = 10;

function a() {
    var z = 15;
    console.log(z); //15
    return z;
}
z = a(); //15
console.log(z); //15