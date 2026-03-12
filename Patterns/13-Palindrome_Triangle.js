let n = 5;

for(let i = 1; i <= n; i++){
    let row = "";
    let num = i;

    for(let j = 1; j <= i; j++){
        row += num + " ";
        num++;
    }

    console.log(row);
}