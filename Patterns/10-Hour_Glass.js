let n = 5;

for(let i = n; i >= 1; i--){
    let row = "";

    for(let j = 0; j < n-i; j++){
        row += " ";
    }

    for(let j = 1; j <= (2*i-1); j++){
        row += "*";
    }

    console.log(row);
}

for(let i = 2; i <= n; i++){
    let row = "";

    for(let j = 0; j < n-i; j++){
        row += " ";
    }

    for(let j = 1; j <= (2*i-1); j++){
        row += "*";
    }

    console.log(row);
}