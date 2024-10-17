// script.js
function generateMarksheet() {
    // Get form inputs
    const studentName = document.getElementById('studentName').value;
    const marks1 = parseFloat(document.getElementById('subject1').value);
    const marks2 = parseFloat(document.getElementById('subject2').value);
    const marks3 = parseFloat(document.getElementById('subject3').value);
    const marks4 = parseFloat(document.getElementById('subject4').value);
    const marks5 = parseFloat(document.getElementById('subject5').value);

    // Validate input
    if (!studentName || isNaN(marks1) || isNaN(marks2) || isNaN(marks3) || isNaN(marks4) || isNaN(marks5)) {
        alert("Please fill in all the fields with valid values.");
        return;
    }

    // Calculate total marks, percentage, and grade
    const totalMarks = marks1 + marks2 + marks3 + marks4 + marks5;
    const percentage = (totalMarks / 500) * 100;

    let grade = '';
    if (percentage >= 90) {
        grade = 'A';
    } else if (percentage >= 80) {
        grade = 'B';
    } else if (percentage >= 70) {
        grade = 'C';
    } else if (percentage >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Marksheet</h2>
        <p><strong>Student Name:</strong> ${studentName}</p>
        <p><strong>Total Marks:</strong> ${totalMarks}/500</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
}
