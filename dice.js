//global vars
var dice = {
    sides: 10,
    roll: function () {
      var randomNumber = Math.floor(Math.random() * this.sides)+1;
      return randomNumber;
    }
};

var count = 0;
var button = document.getElementById('button');
   
//Prints dice roll to the page
function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    var rollNum = document.getElementById("rollNum");
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
        document.getElementById('picture').src = "assets/blank.jpg";
    }
    else {
        placeholder.innerHTML = "--";
        document.getElementById('picture').src = randomNum;    
    }
    count++;
    rollNum.innerHTML = "Roll Number: " +  count;
};

function main() {
    button.onclick = function() {
        var result = dice.roll();
        printNumber(result);
    }
};

main();
  
  