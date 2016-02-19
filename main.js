(function(){
var letterButton = document.querySelector(".letters");
var displayBox = document.querySelector("#display");
var answerBox = document.querySelector(".answer-spaces");
var listItems = [];
var counter = 0;
var wordRandom = "";
var selectArray = commonWords.filter(function(value){
    return value.length >=3;
 });


 randomWords();
 letterButton.addEventListener('click', displayLetter);


function randomWords(){
  wordRandom += (selectArray[Math.floor(Math.random()*selectArray.length-1)]);
  var wordRandomSplit = wordRandom.split("");
  wordRandomSplit.forEach(function(value){
    listItems.push("_");
    answerBox.textContent = listItems;
    console.log(listItems )
  });
}


function displayLetter(e){
  var sel_word = e.target.id;
  var wordRandomSplit = wordRandom.split("");
  wordRandomSplit.map(function(value){
    console.log(sel_word)
    console.log(value)
    if (sel_word == value){
      // console.log("gold")
      // counter = listItems[value];
      // console.log(counter)
      // display_words.textContent = listItems[counter];

    }
  })
}



}());
