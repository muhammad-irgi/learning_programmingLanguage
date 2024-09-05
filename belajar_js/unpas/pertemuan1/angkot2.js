// this project 'angkot' is a project for me to learn javascript by sudy case !!!!

// for loop and if then (if else)
var jmlAngkot = 10;
var angkotBeroperasi = 4;

for(var noAngkot = 1; noAngkot <= 10; noAngkot++){
    if(noAngkot <= angkotBeroperasi && noAngkot !== 5){
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    } else if(noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
        console.log("Angkot no. " + noAngkot + " sedang lembur.");
    } else if(noAngkot === 7 || noAngkot === 9) {
        console.log("Angkot No. " +  noAngkot + " sedang tidak beroperasi");
    };
};



