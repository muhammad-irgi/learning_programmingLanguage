// REFACTORING

// - readability
// - DRY (dont repeat your self)
// - testability
// - peformance

// refactoring sederhana

// PERKENALAN FUNCTION PADA JAVASCRIPT

// function jumlahVolumeDuaKubus(a, b){
//     var volumeA, volumeB, total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;
   
//     return total;
// }

// MENJADI 
function jumlahVolumeDuaKubus(a, b){
    return a * a * a + b * b * b;
}

console.log(jumlahVolumeDuaKubus(2, 3))