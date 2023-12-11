function changeColor() {
    var button = document.getElementById("likeButton");
    
    if (button.style.backgroundColor !== "red") {
      button.style.backgroundColor = "red";
    }
    
    else {
      button.style.backgroundColor = "";
    }
}