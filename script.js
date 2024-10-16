document.getElementById('mbtiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get the selected answers
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');

    // Check if all questions have been answered
    if (!q1 || !q2 || !q3) {
        alert('Please answer all the questions.');
        return;
    }

    // Determine MBTI type based on responses
    const result = `${q1.value}${q2.value}${q3.value}`;
    
    // Display result
    document.getElementById('result').innerText = `Your MBTI type is: ${result}`;
});
