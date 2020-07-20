var dice = {
    sides: 5,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides)+1;
      return randomNumber;
    }
  }
  
  
  
//Prints dice roll to the page

function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    var numDict = {
        1: "assets/tentacle.jpg",
        2: "+2",
        3: "0", 
        4: "-1",
        5: "-2"   
    };
    randomNum = numDict[number]
    if(number == 1) {
        document.getElementById('picture').src = "assets/tentacle.jpg";
    }
    else {
        placeholder.innerHTML = randomNum;
        document.getElementById('picture').src = "";    
    }
}

var button = document.getElementById('button');

button.onclick = function() {
var result = dice.roll();
printNumber(result);
};
  
  