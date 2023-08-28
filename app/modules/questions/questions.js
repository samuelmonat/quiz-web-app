$(document).ready(function () {
  let score = 0; // Initialize the score at 0

  $(".answer-button").on("click", function () {
    let index = $(this).data("index"); // Get the question index from the button's data attribute
    showResults(index); // Pass the index to the showResults function
    updateScore(this);

    // Increment the index for the next question
    index++;

    // Hide questions with an index higher than the current index
    // for (let i = index; i < $(".question-container").length; i++) {
    //     $(`#question-${i}`).hide();
    //   }
  
      // Show the next question container
      $(`#question-${index}`).removeClass("question-hidden");
  });

  function updateScore(button) {
    // Increment score if the selected answer is correct
    if ($(button).attr("data-answer") === "true") {
      score++;
    }
    console.log("Score: " + score);
  }

  function showResults(index) {
    // Disable answer buttons
    $(`#question-${index} .answer-button`).attr("disabled", true);

    // Mark the correct answer in green
    $(`#question-${index} .answer-button[data-answer="true"]`)
      .removeClass("btn-light")
      .addClass("btn-success");

    // Mark wrong answers in red
    $(`#question-${index} .answer-button[data-answer="false"]`)
      .removeClass("btn-light")
      .addClass("btn-danger");
    
      console.log("Index: " + index);
  }
});
