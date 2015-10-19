var question_counter = 0;
var correctly_answered = 0;
var incorrectly_answered = 0;

document.getElementById("question").innerHTML = ql[question_counter].question;
document.getElementById("choice0").innerHTML = ql[question_counter].answer_a;
document.getElementById("choice1").innerHTML = ql[question_counter].answer_b;
document.getElementById("progress").innerHTML = "Question " + question_counter + " of " + ql.length;


function render(){

    if (question_counter < (ql.length - 1)){

      question_counter++;

      $(".btn--default").css("background-color", "#52bab3");
      $(".btn--default").text("Select Answer");

      document.getElementById("question").innerHTML = ql[question_counter].question;
      document.getElementById("choice0").innerHTML = ql[question_counter].answer_a;
      document.getElementById("choice1").innerHTML = ql[question_counter].answer_b;
      document.getElementById("progress").innerHTML = "Question " + (question_counter) + " of " + ql.length;

    } else {

      question_counter++;

      document.getElementById("progress").innerHTML = "Question " + (question_counter) + " of " + ql.length;

      var finished = "You got " + correctly_answered + " correct, and " + incorrectly_answered + " wrong."

      alert(finished);

    }

}


$(".btn--default").click(function(){

  var answer = $(this).prev().text();

  if (answer == ql[question_counter].correct_answer) {

  $(this).css("background-color", "green");
  $(this).text("Awesome!");

  correctly_answered++;

  setTimeout(render, 2000);

  } else {

  $(this).css("background-color", "red");
  $(this).text("Sorry!");

  incorrectly_answered++;

  setTimeout(render, 2000);

  };

});
