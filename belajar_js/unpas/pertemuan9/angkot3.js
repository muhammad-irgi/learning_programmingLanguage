var penumpang = [];

var tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] === undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            } else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + " sudah berada di dalam angkot");
                return penumpang;
            } else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

var turunPenumpang = function(namaPenumpang, penumpang){
    if (penumpang.length === 0) {
        console.log('angkot masih kosong');
    }
    for(var i = 0; i < penumpang.length; i++){
        if(penumpang[i] == namaPenumpang){
            penumpang[i] = undefined;
            return penumpang;
        }else{
            console.log(namaPenumpang + "tidak ditemukan !");
            return penumpang;
        }
    }
}