// function rekursif merupakan funtion yang dipanggil secara terus menerus sampai batas yang ditentukan
// penggunaan function rekursif harus mempunyai kondisi berhenti 
// disebut base case

// function tampilAngka(n){
// if (n === 0) { // <<=== this is the base case
//     return;
// }
//     console.log(n);
//     return tampilAngka(n-1);
// }

// tampilAngka(10);

function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n-1);
}
console.log(factorial(5));
