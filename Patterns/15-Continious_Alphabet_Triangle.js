let n = 5;
let ch = 65;

for(let i = 1; i <= n; i++){
    let row = "";

    for(let j = 1; j <= i; j++){
        row += String.fromCharCode(ch) + " ";
        ch++;
    }

    console.log(row);
}