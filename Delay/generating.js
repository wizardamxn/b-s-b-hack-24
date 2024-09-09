// Function to show the loading animation for a few seconds, then redirect
function showLoadingAndRedirect() {
    const loadingAnimation = document.getElementById('loading-animation');

    // Simulate a delay (for example, 3 seconds) to show the loading animation
    setTimeout(function() {
        // After the delay, redirect to the new page
        window.location.href = "/test_page/test2.html";
    }, 5000); // Adjust the delay time here (3000 milliseconds = 3 seconds)
}

// Call the function when the page loads
window.addEventListener('load', showLoadingAndRedirect);
