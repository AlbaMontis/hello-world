(function() {
  var rightHand = document.getElementById("rightHand");
  var leftHand = document.getElementById("leftHand");
  var image = document.getElementById("image");

  rightHand.onclick = function() {
    image.src = "img/rightHand.png";
    leftHand.onclick = function() {
      image.src = "img/non.png";
      alert("It's enough for today!");
      alert("Get back to work!");
    };
    rightHand.onclick = null;
  };
  
  leftHand.onclick = function() {
    image.src = "img/leftHand.png";
    rightHand.onclick = function() {
      image.src = "img/non.png";
      alert("It's enough for today!");
      alert("Get back to work!");
    };
    leftHand.onclick = null;
  };
})();