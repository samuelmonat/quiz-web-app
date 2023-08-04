$(document).ready(function() {
    // Card click event handlers
    $('.card a').on('click', function(e) {
        e.preventDefault(); // Prevent the default navigation of the <a> element
        const quizType = $(this).attr('href');
        window.location.href = quizType; // Navigate to the respective quiz type page
    });
});