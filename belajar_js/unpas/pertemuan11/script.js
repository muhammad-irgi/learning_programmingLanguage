var supir = "Irgi";

function Angkot(supir, trayek, penumpang, kas){
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        if (this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else {
            for (var i = 0; i < this.penumpang.length; i++) {
                if (this.penumpang[i] === undefined) {
                    this.penumpang[i] = namaPenumpang;
                    return this.penumpang;
                } else if (this.penumpang[i] == namaPenumpang) {
                    console.log(namaPenumpang + " sudah berada di dalam angkot");
                    return this.penumpang;
                } else if (i == this.penumpang.length - 1) {
                    this.penumpang.push(namaPenumpang);
                    return this.penumpang;
                }
            }
        }
    }
    this.penumpangTurun = function(namaPenumpang, bayar){
    if(this.penumpang.length === 0){
        alert('angkot masih kosong!');
        return false;
        }
        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('muhammad irgi', ['anyer', 'citeureup'], [], 0);
