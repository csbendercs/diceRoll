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
        1: "+1",
        2: "+2",
        3: "0", 
        4: "-1",
        5: "-2"   
    };

    placeholder.innerHTML = numDict[number];
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
  };
  
  