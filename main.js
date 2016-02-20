startGame();
function startGame(){
    var letterButton = document.querySelector(".letters");
    var displayBox = document.querySelector("#display");
    var answerBox = document.querySelector(".answer-spaces");
    var trialBox = document.querySelector("#trial-num");
    var guessedBox = document.querySelector("#guessed-letters");
    var win_audio = document.querySelector("#win");
    var lose_audio = document.querySelector("#lose");

    var listItems = "";
    var counter = 0;
    var wordRandom = "";
    var wordRandomSplit;
    var listItemsArray;
    var flag = 0;
    var missed = 8;
    var selectArray = commonWords.filter(function(value){
        return value.length >=3;
     });


     randomWords();
     letterButton.addEventListener('click', displayLetter);

     console.log(wordRandom)

    function randomWords(){
      wordRandom += (selectArray[Math.floor(Math.random()*selectArray.length-1)]);
      wordRandomSplit = wordRandom.split("");
      wordRandomSplit.forEach(function(value){
        listItems += "_";
        answerBox.textContent = listItems;

      });

    }
    function lose(){
      lose_audio.play();
    }
    function win(){
      var filtered = listItems.split("").filter(function(val){
        return val != "_";
      })

    if (_.isEqual(filtered, listItemsArray)){
      win_audio.play();
      alert("You Win!!");
    }
}

    function displayLetter(e){
      var sel_word = e.target.id;       //clicked letter
      listItemsArray = listItems.split("");
      wordRandomSplit.forEach(function(element, index){
        if (sel_word == element){
          listItemsArray[index] = sel_word;
          listItems = listItemsArray.join("")
          answerBox.textContent = listItems;
          flag++;
          win();

        }
      })
      console.log(listItems)

      if (wordRandomSplit.indexOf(sel_word) == -1){
        missed--;
        trialBox.textContent = missed;
        console.log(sel_word);
        guessedBox.textContent += sel_word + " ";
      }
      if (missed == 0){
        lose();
        alert("Game Over!!!");
        window.location.reload(true);
        }
    }
}
