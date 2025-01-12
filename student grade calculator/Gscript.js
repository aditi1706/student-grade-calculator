const calcy = () => {
    // Get input values
    let exam = parseFloat(document.getElementById("exam").value) || 0;
    let quize = parseFloat(document.getElementById("quize").value) || 0;
    let assignments = parseFloat(document.getElementById("assignments").value) || 0;

    // Calculate total grade
    let totalGrade = exam + quize + assignments;

    // Calculate percentage
    let perc = (totalGrade / 300) * 100;

    // Determine the grade based on percentage
    let grade;
    if (perc >= 90) {
        grade = "A+";
    } else if (perc >= 80) {
        grade = "A";
    } else if (perc >= 70) {
        grade = "B";
    } else if (perc >= 60) {
        grade = "C";
    } else if (perc >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display the grade in the totalGrade element
    document.getElementById('totalGrade').innerHTML = grade;
};