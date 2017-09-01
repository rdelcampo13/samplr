$(document).ready(function() {

  var questionsTimer;
  var resultTimer;
  var audio = new Audio();


  var game = {
    timeLeft: 0,
    correctAnswers: 0,
    incorrectAnwers: 0,
    unanswered: 0,
    round: 0,
    round1: {
      question: "Parliament's Mothership connection was used in what 1992 Dr. Dre single?",
      img: './assets/images/starchild.jpg',
      gif: 'https://media.giphy.com/media/oL3v6WK8vVUac/giphy.gif',
      questionAudio: './assets/audio/1a.mp3',
      resultAudio: './assets/audio/1b.mp3',
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
      question: "The Ponderosa Twins were sampled in what track off of Kanye West's album Yeezus?",
      img: './assets/images/bound.jpeg',
      gif: 'https://media.giphy.com/media/W6U3uWo10XvHi/giphy-downsized.gif',
      questionAudio: './assets/audio/2a.mp3',
      resultAudio: './assets/audio/2b.mp3',
      options: {
        a: {
          answer: 'On Sight',
          correct: false,
        },
        b: {
          answer: 'New Slaves',
          correct: false,
        },
        c: {
          answer: 'Bound 2',
          correct: true,
        },
        d: {
          answer: "Blood on the Leaves",
          correct: false,
        },
      },
    },
    round3: {
      question: "As Long as I've Got You by The Charmels is the basis for this classic song by the Wu-Tang Clan.",
      img: './assets/images/charmels.jpg',
      gif: 'https://media.giphy.com/media/rxEdRUgq7A6IM/giphy.gif',
      questionAudio: './assets/audio/3a.mp3',
      resultAudio: './assets/audio/3b.mp3',
      options: {
        a: {
          answer: 'Protect Ya Neck',
          correct: false,
        },
        b: {
          answer: 'C.R.E.A.M.',
          correct: true,
        },
        c: {
          answer: 'Bring Da Ruckus',
          correct: false,
        },
        d: {
          answer: 'Method Man',
          correct: false,
        },
      },
    },
    round4: {
      question: "Beach House was sampled in this song off Kendrick Lamar's album Good Kid, M.A.A.D City.",
      img: './assets/images/beachhouse.png',
      gif: 'https://media.giphy.com/media/RiB4mR4lrM3kc/giphy-downsized.gif',
      questionAudio: './assets/audio/4a.mp3',
      resultAudio: './assets/audio/4b.mp3',
      options: {
        a: {
          answer: 'Backseat Freestyle',
          correct: false,
        },
        b: {
          answer: 'Poetic Justice',
          correct: false,
        },
        c: {
          answer: 'Swimming Pools',
          correct: false,
        },
        d: {
          answer: 'Money Trees',
          correct: true,
        },
      },
    },
    round5: {
      question: "Kanye West sampled Tom Brock in what song off of Jay-Z's album The Blueprint?",
      img: './assets/images/tom.jpg',
      gif: 'https://media.giphy.com/media/p4cqQ0gUIMcU0/giphy.gif',
      questionAudio: './assets/audio/5a.mp3',
      resultAudio: './assets/audio/5b.mp3',
      options: {
        a: {
          answer: 'Takeover',
          correct: false,
        },
        b: {
          answer: 'Heart of the City',
          correct: false,
        },
        c: {
          answer: 'Girls, Girls, Girls',
          correct: true,
        },
        d: {
          answer: "Izzo",
          correct: false,
        },
      },
    },
    round6: {
      question: "The 5th Dimension was sampled in this song off Lauren Hill's album The Miseducation of Lauryn Hill",
      img: './assets/images/5th.jpeg',
      gif: 'https://media.giphy.com/media/7kiMToydNyRq0/giphy-downsized.gif',
      questionAudio: './assets/audio/6a.mp3',
      resultAudio: './assets/audio/6b.mp3',
      options: {
        a: {
          answer: 'Lost Ones',
          correct: false,
        },
        b: {
          answer: 'Ex-Factor',
          correct: false,
        },
        c: {
          answer: 'Everything is Everything',
          correct: false,
        },
        d: {
          answer: "Doo Wop",
          correct: true,
        },
      },
    },

    question: function() {

      $('#start').attr('class', 'btn btn-primary btn-lg btn-block start hide');
      $('#game').attr('class', 'row');
      $('#result').attr('class', 'row hide');

      if (game.round > 6) {
        $('#game').toggleClass('hide');
        $('#gameover').attr('class', 'row');
        $('#correct').html(game.correctAnswers);
        $('#incorrect').html(game.incorrectAnwers);
        $('#unanswered').html(game.unanswered);
        return;
      }

      var currentRound = game["round" + game.round];
      audio.pause();
      audio.currentTime = 0.0;
      audio.src = currentRound.questionAudio;
      audio.play();

      $('#question').html(currentRound.question);
      $('#option1').html(currentRound.options.a.answer);
      $('#option2').html(currentRound.options.b.answer);
      $('#option3').html(currentRound.options.c.answer);
      $('#option4').html(currentRound.options.d.answer);
      $('#cover').attr('src', currentRound.img);
      $('#gif').attr('src', currentRound.gif);


      questionsTimer = setInterval(function() {
        if (game.timeLeft === 0) {
          audio.pause();
          audio.currentTime = 0.0;
          audio.src = currentRound.resultAudio;
          audio.play();

          clearTimeout(questionsTimer);
          game.resetTimer();
          game.unanswered++;
          game.round++;
          var answer;
          $.each(currentRound.options, function( key, value ) {
              if (value.correct === true) {
                answer = value.answer;
              };
            });
          $('#game').attr('class', 'row hide');
          $('#result').attr('class', 'row');
          $('#result-header').html('Time Up!');
          $('#result-message').html('The correct anser was: ' + answer );
          setTimeout(game.question, 5000)
        } else {
          game.timeLeft--;
          $('#seconds').html(game.timeLeft);
        };
      }, 1000);

    },

    restartGame: function() {
      game.correctAnswers = 0;
      game.incorrectAnwers = 0;
      game.unanswered = 0;
      game.round = 1;
      $('#gameover').attr('class', 'row hide');
      game.resetTimer();
    },

    resetTimer: function() {
      game.timeLeft = 15;
      $('#seconds').html(game.timeLeft);
    },
  };




  // Game starts when start button is clicked
  $(document).on('click', '.start', function() {

    game.restartGame();
    game.question();

  });

  $(document).on('click', '.options', function() {
    audio.pause();
    audio.currentTime = 0.0;
    audio.src = game['round' + game.round].resultAudio;
    audio.play();

    clearTimeout(questionsTimer);
    var chosenAnswer = $(this).data('option');

    if (game['round' + game.round].options[chosenAnswer].correct) {
      game.correctAnswers++;
      game.round++;
      $('#game').attr('class', 'row hide');
      $('#result').attr('class', 'row');
      $('#result-header').html('Correct!');
      $('#result-message').html('');
      game.resetTimer();
      setTimeout(game.question, 5000)

    } else {
      var answer;
      var responseBank = ['Wrong!', 'Boooooooooo!', "C'mon maaannnnn!", "Seriously?", "Smh....."];
      var random = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
      $.each(game['round' + game.round].options, function( key, value ) {
          if (value.correct === true) {
            answer = value.answer;
          };
        });

      game.incorrectAnwers++;
      game.round++;
      $('#game').attr('class', 'row hide');
      $('#result').attr('class', 'row');
      $('#result-header').html(responseBank[random]);
      $('#result-message').html('The correct anser was: ' + answer);
      game.resetTimer();
      setTimeout(game.question, 5000)

    };

  });


});



