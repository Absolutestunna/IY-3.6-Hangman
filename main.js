(function(){
var letterButton = document.querySelector(".letters");
var displayBox = document.querySelector("#display");
var answerBox = document.querySelector(".answer-spaces");
var listItems = "";
var counter = 0;
var wordRandom = "";
var listItemsArray;
var selectArray = commonWords.filter(function(value){
    return value.length >=3;
 });


 randomWords();
 letterButton.addEventListener('click', displayLetter);

 console.log(wordRandom)

function randomWords(){
  wordRandom += (selectArray[Math.floor(Math.random()*selectArray.length-1)]);
  var wordRandomSplit = wordRandom.split("");
  wordRandomSplit.forEach(function(value){
    listItems += "_";
    answerBox.textContent = listItems;

  });
}


function displayLetter(e){
  var sel_word = e.target.id;       //clicked letter
  for (var i=0; i<wordRandom.length; i++){
    if (wordRandom[i] == sel_word){
      counter = wordRandom.indexOf(wordRandom[i]);
      listItems = listItems.split("");
      listItems[counter] = sel_word;
      listItems = listItems.join("");
      answerBox.textContent = listItems;
      console.log(listItems);
      // break;
    } else {

    }
  }


  // listItems.charAt(counter) = sel_word;
  // console.log(listItems.charAt(counter) = "sel_word");

  // var wordRandomSplit = wordRandom.split("");
  // listItemsArray = listItems.split("").filter(function(value){
  //   return value != " ";
  // })
  // wordRandomSplit.map(function(value){
  //   if (value == sel_word){
  //     counter = wordRandomSplit.indexOf(value);
  //
  //     listItemsArray[counter] = value;
  //     answerBox.textContent = listItemsArray.join();
  //
  //   }
  // })
  // console.log(listItemsArray)


}



}());
