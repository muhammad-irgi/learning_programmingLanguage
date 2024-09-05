// PERKENALAN FUNCTION PADA JAVASCRIPT

//PAKAI FUNCTION AGAR EFISIEN

//sisi masing masing kubus pada parameter
function jumlahVolumeDuaKubus(a, b){
    var volumeA, volumeB, total;
    // hitung volume masing masing kubus
    volumeA = a * a * a;
    volumeB = b * b * b;
    // jumlahkan hasilnya
    total = volumeA + volumeB;
    //kembalikan nilai total    
    return total;
}

//print function 
alert("jumlah 2 kubus yang pertama : "+jumlahVolumeDuaKubus(2, 3));
alert("jumlah 2 kubus yang kedua : "+jumlahVolumeDuaKubus(4, 3));
