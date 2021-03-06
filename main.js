startGame();
function startGame(){
///////////////////////////////////////////////////////////////////////
///////////////////////SELECTORS///////////////////////////////////////
///////////////////////////////////////////////////////////////////////
    var letterButton = document.querySelector(".letters");
    var displayBox = document.querySelector("#display");
    var answerBox = document.querySelector(".answer-spaces");
    var trialBox = document.querySelector("#trial-num");
    var guessedBox = document.querySelector("#guessed-letters");
    var win_audio = document.querySelector("#win");
    var lose_audio = document.querySelector("#lose");
    var sound_audio = document.querySelector("#sound");
    var giffy = document.querySelector("#giffy");
    var actualAnswerBox = document.querySelector("#actual-answer");
    var click = document.querySelector("#click");
///////////////////////////////////////////////////////////////////////
///////////////////////GLOBAL VARIABLES///////////////////////////////
///////////////////////////////////////////////////////////////////////
    var listItems = "";
    var counter = 0;
    var wordRandom = "";
    var wordRandomSplit;
    var listItemsArray;
    var flag = 0;
    var trial_flag = 0;
    var missed = 8;
    var filtered;
    var selectArray = commonWords.filter(function(value){
        return value.length >=3;
     });


     randomWords();
     letterButton.addEventListener('click', displayLetter);
 ///////////////////////////////////////////////////////////////////////
 /////////////////////////////FUNCTIONS/////////////////////////////////
 ///////////////////////////////////////////////////////////////////////
    function randomWords(){ //SELECTS RANDOM WORD
      wordRandom += (selectArray[Math.floor(Math.random()*selectArray.length-1)]);
      wordRandomSplit = wordRandom.split("");
      wordRandomSplit.forEach(function(value){
        listItems += "_";
        answerBox.textContent = listItems;

      });
    }

    function trial_gif(){
      trial_flag++;
      giffy.src = "hang/hang"+trial_flag+".gif";
    }
    function lose(){
      actualAnswerBox.style.color = "black";
      actualAnswerBox.textContent = "Sorry, wrong answer. The answer is: " + wordRandom;
      lose_audio.play();
      setInterval(function(){
        window.location.reload(true);
      }, 3000);

    }
    function win(){
       filtered = listItems.split("").filter(function(val){
        return val != "_";  //CHOSEN/RIGHT/SELECTED WORDS WITHOUT UNDERSCORE.                                  //CREATED TO COMPARE THE RIGHT WORDS TO RANDOM WORDS SELECTED
      });

    if (_.isEqual(filtered, listItemsArray)){ //COMPARES RANDOM WORD TO FILTERED      WORDS
          $(".answer-spaces").effect("shake", {times: 4}, 500);
          win_audio.play();
          actualAnswerBox.style.color = "teal";
          actualAnswerBox.textContent = "CONGRATULATIONS. YOU WIN!!";
          setInterval(function(){
            window.location.reload(true);
          }, 3000);
        }
      }//END OF WIN FUNCTION

    function displayLetter(e){
      click.play();
      var sel_word = e.target.id;       //clicked letter
      e.toElement.disabled = true;
      e.toElement.style.background = "yellow";
      e.toElement.style.color = "yellow";
      listItemsArray = listItems.split("");
      wordRandomSplit.forEach(function(element, index){
        if (sel_word == element){
          listItemsArray[index] = sel_word;
          listItems = listItemsArray.join("");
          answerBox.textContent = listItems;
          flag++;
          win();
        }
      });
      if (wordRandomSplit.indexOf(sel_word) == -1){
        missed--;
        trialBox.textContent = missed;
        guessedBox.textContent += sel_word + " ";
        trial_gif();
      }
      if (missed <= 0){
        missed = 0;
        lose();
        }
    }
}
