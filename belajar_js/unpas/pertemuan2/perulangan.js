var s = '';
for(var i = 0; i < 20; i++){
    if(i <= 10){
        for(var k = 0; k < i; k++){
            s += '*';
        }    
    }else if(i >= 11){
        for(var j = 20; j > i; j--){
            s += '*';
        }
    }
    s += '\n';
}

console.log(s);