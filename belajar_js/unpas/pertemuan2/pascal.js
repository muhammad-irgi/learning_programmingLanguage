let triangle = [];

for(let i = 0; i < 5; i++){
    triangle[i] = [];
    triangle[i][0] = 1;

    for(let j = 1; j < i; j++){
        triangle[i][j] = triangle[i - 1][j - 1] + triangle[i][j - 1];
    }

    triangle[i][i] = 1;
}
let s = "";
for(let k = 0; k < triangle.length;k++){
    for(let l = triangle.length; l > k;l--){
        s += " ";
    }
    console.log(s + triangle[k].join(' '));
    s = "";
}