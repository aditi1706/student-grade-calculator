const calcy = () =>{
    let exam = document.getElementById("exam").value;
    let quize = document.getElementById("quize").value;
    let assignments = document.getElementById("assignments").value;
    let grade = "";
    
    let totalGreade = parseFloat(exam ) + parseFloat(quize) + parseFloat(assignments);
    alert(totalGreade);

    let perc = (totalGreade / 300) * 100;
    alert(perc);

    if (totalPercentage >= 90) {
        grade = "A+";
    } else if (totalPercentage >= 80) {
        grade = "A";
    } else if (totalPercentage >= 70) {
        grade = "B";
    } else if (totalPercentage >= 60) {
        grade = "C";
    } else if (totalPercentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

   document.getElementById('totalGrade').innerHTML =grade.toFixed(2);
}
