let n = 5;

for(let i = 0; i < n; i++){
    let row = "";
    let char = String.fromCharCode(65 + i);

    for(let j = 0; j <= i; j++){
        row += char + " ";
    }

    console.log(row);
}