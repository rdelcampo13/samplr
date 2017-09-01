$(document).ready(function() {

  var game = {
    correctAnswers: 0,
    incorrectAnwers: 0,
    round: 0,
    round1: {
      question: "Parliament's Mothership connection was used in what 1992 Dr. Dre single?",
      options: {
        a: {
          answer: 'Let Me Ride',
          correct: true,
        },
        b: {
          answer: 'Deep Cover',
          correct: false,
        },
        c: {
          answer: 'Next Episode',
          correct: false,
        },
        d: {
          answer: "Keep Their Head's Ringin'",
          correct: false,
        },
      },
    },
    round2: {
      question: "Woooooooah! Q2",
      options: {
        a: {
          answer: 'Let Me Ride',
          correct: false,
        },
        b: {
          answer: 'Deep Cover',
          correct: true,
        },
        c: {
          answer: 'Next Episode',
          correct: false,
        },
        d: {
          answer: "Keep Their Head's Ringin'",
          correct: false,
        },
      },
    },
    round3: {
      question: "Woooooooah! Q3",
      options: {
        a: {
          answer: 'Let Me Ride',
          correct: true,
        },
        b: {
          answer: 'Deep Cover',
          correct: false,
        },
        c: {
          answer: 'Next Episode',
          correct: false,
        },
        d: {
          answer: "Keep Their Head's Ringin'",
          correct: false,
        },
      },
    },
    round4: {
      question: "Woooooooah! Q4",
      options: {
        a: {
          answer: 'Let Me Ride',
          correct: true,
        },
        b: {
          answer: 'Deep Cover',
          correct: false,
        },
        c: {
          answer: 'Next Episode',
          correct: false,
        },
        d: {
          answer: "Keep Their Head's Ringin'",
          correct: false,
        },
      },
    },
    round5: {
      question: "Woooooooah! Q5",
      options: {
        a: {
          answer: 'Let Me Ride',
          correct: true,
        },
        b: {
          answer: 'Deep Cover',
          correct: false,
        },
        c: {
          answer: 'Next Episode',
          correct: false,
        },
        d: {
          answer: "Keep Their Head's Ringin'",
          correct: false,
        },
      },
    },

    question: function() {

      if (game.round > 5) {
        $('#game').toggleClass('hide');
        $('#gameover').attr('class', 'row');
        $('#message').html('Game Over');
        return;
      }

      var currentRound = game["round" + game.round];
      console.log(game.round);

      $('#question').html(currentRound.question);
      $('#option1').html(currentRound.options.a.answer);
      $('#option2').html(currentRound.options.b.answer);
      $('#option3').html(currentRound.options.c.answer);
      $('#option4').html(currentRound.options.d.answer);

      var timer = setTimeout(lose, 2000);

      $(document).on('click', '.options', function() {
        var option = $(this).data("option");
        console.log(currentRound.options[option].correct);
        clearTimeout(timer);
        if (currentRound.options[option].correct === true) {
          win();
        } else {
          lose();
        }

      });

      function win() {
        $('#game').toggleClass('hide');
        $('#result').toggleClass('hide');
        $('#answer').html('Right!');
        setTimeout(game.nextQuestion, 2000);
      };

      function lose() {
        $('#game').toggleClass('hide');
        $('#result').toggleClass('hide');
        $('#answer').html('Wrong!');
        setTimeout(game.nextQuestion, 2000);
      };
    },

    nextQuestion: function() {
      game.round++;
      $('#game').toggleClass('hide');
      $('#result').toggleClass('hide');
      game.question();
    },

    restartGame: function() {
      game.correctAnswers = 0;
      game.incorrectAnwers = 0;
      game.activeQuestion = '';
      game.activeAnswers = [];
      game.round = 1;
      $('#gameover').attr('class', 'row hide');
    },
  };


  // Game starts when start button is clicked
  $(document).on('click', '.start', function() {

    if (game.correctAnswers === 0 && game.incorrectAnwers === 0) {

      $('#start').attr('class', 'btn btn-primary btn-lg btn-block start hide');
      $('#game').toggleClass('hide');
      game.restartGame();

    } else {

      game.restartGame();

    };

    game.question();

  });

});

