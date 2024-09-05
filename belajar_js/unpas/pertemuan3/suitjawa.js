
var tanya = true;
while(tanya === true){
    // menangkap pilihan player
    var p = prompt("pilih : gajah, semut, orang");
    
    //menangkap pilihan komputer
    //bangun bilangan random
    var comp = Math.random();

    if(comp < 0.34){
        comp = 'gajah';
    }else if(comp >= 0.34 && comp <= 0.67){
        comp = 'orang'
    }else{
        comp = 'semut'
    }
    //menentukan rules
    if(p == comp){
        hasil = 'SERI';
    }else if(p == 'gajah'){
        // if(comp == 'orang'){
        //     hasil = 'MENANG';
        // }else{
        //     hasil = 'KALAH';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH';
    }else if(p == 'orang'){
        hasil = (comp == 'semut') ? 'MENANG!' : 'KALAH';
    }else if(p == 'semut'){
        hasil = (comp == 'gajah') ? 'MENANG!' : 'KALAH';
    }else{
        hasil = 'error input';
    }

    alert(hasil + '\nKamu memilih : ' + p + '\nKomputer memilih : ' + comp);
    tanya = confirm('lagi ? ')
}

alert('TERIMA KASIH TELAH BERMAIN');