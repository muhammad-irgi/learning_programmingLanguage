// PARAMETER DAN ARGUMENT

// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }

// // var val1 = parseInt(prompt("masukan nilai ke-1 : ")); //parseInt adalah fungsi yang merubah data promt dari string ke int
// // var val2 = parseInt(prompt("masukan nilai ke-2 : "));
// // hasil = tambah(val1, val2);
// // console.log(hasil);

// var hasil = kali(tambah(2,3), tambah(3,4));
// console.log(hasil);

function tambah(){
    var hasil = 0;
    for(var i = 0; i < arguments.length;i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1, 2, 3, 4, 5);
console.log(coba);