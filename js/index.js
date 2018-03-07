(function () {
  var rightHand = document.getElementById("rightHand");
  var leftHand = document.getElementById("leftHand");
  var image = document.getElementById("image");
  var all = document.getElementById("all");
  var contact = document.getElementById("contact");

  rightHand.onclick = function () {
    image.src = "img/nooooooooooo.png";
    all.style.display = "block";
    rightHand.style.display = "none";
    leftHand.style.display = "none";
  };

  all.onclick = function () {
    image.src = "img/choose.png";
    all.style.display = "none";    
    contact.style.display = "none";   
    leftHand.style.display = "block";
    rightHand.style.display = "block";           
  };

  leftHand.onclick = function () {
    image.src = "img/yes.png";
    contact.style.display = "block";
    all.style.display = "block";
    rightHand.style.display = "none";
    leftHand.style.display = "none";
  };
})();