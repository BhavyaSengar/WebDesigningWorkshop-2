function calculateResult() {
    let s1 = parseFloat(document.getElementById("sub1").value);
    let s2 = parseFloat(document.getElementById("sub2").value);
    let s3 = parseFloat(document.getElementById("sub3").value);
    let s4 = parseFloat(document.getElementById("sub4").value);
    let s5 = parseFloat(document.getElementById("sub5").value);
    let total = s1+s2+s3+s4+s5;
    let percentage = total/5;
    let grade = "";
    
    if(percentage>=90){
        grade = "";
    }
    else if(percentage>=60){
        grade = "First Class";
    }
    else if(percentage>=33)
        grade = "Second Class";
    else{
        grade = "Fail";
    }

    document.getElementById("total").innerText = "Total: " + total;
    document.getElementById("percentage").innerText = "Percentage: " + percentage + "%";
    document.getElementById("result").innerText = "Result: " + grade;

}