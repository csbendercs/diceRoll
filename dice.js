var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides)+1;
      return randomNumber;
    }
  }
  
  
  
//Prints dice roll to the page

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    var picture = document.getElementById('picture');
    var numDict = {
        1: "assets/autoFail.jpg",
        2: "assets/elderSign.jpg",
        3: "assets/elderHeart.jpg", 
        4: "assets/elderTablet.jpg",
        5: "assets/rogue.jpg",
        6: "assets/skull.jpg", 
        7: "0",
        8: "+1",
        9: "-1",
        10: "-2"
    };
    randomNum = numDict[number]
    if(randomNum.search("assets") == -1) {
        placeholder.innerHTML = randomNum;
        document.getElementById('picture').src = "";
    }
    else {
        placeholder.innerHTML = "";
        document.getElementById('picture').src = randomNum;    
    }
}

var button = document.getElementById('button');

button.onclick = function() {
var result = dice.roll();
console.log(result)
printNumber(result);

};
  
  