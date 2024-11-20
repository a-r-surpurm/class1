// Function to calculate the percentage
function calculatePercentage() {
    // Get values from the form inputs
    const subject1 = parseFloat(document.getElementById('subject1').value);
    const subject2 = parseFloat(document.getElementById('subject2').value);
    const subject3 = parseFloat(document.getElementById('subject3').value);
    const subject4 = parseFloat(document.getElementById('subject4').value);
    const subject5 = parseFloat(document.getElementById('subject5').value);

    // Check if any input is empty or invalid
    if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        alert("Please enter valid marks for all subjects.");
        return;
    }

    // Calculate the total and percentage
    const totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;
    const percentage = (totalMarks / 500) * 100;

    // Display the result
    document.getElementById('percentage').innerHTML = `Your total percentage is: ${percentage.toFixed(2)}%`;

    // Show the result section
    document.getElementById('result').style.display = "block";
}
