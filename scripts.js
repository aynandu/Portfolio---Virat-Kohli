var img_hover_effect = document.getElementsByClassName(".image");
var circleone = document.etElementsByClassName(".circleOne");
var circletwo = document.getElementsByClassName(".image")
console.log(circletwo);

img_hover_effect.addEventListener("onmouseover", () => {
     alert('mouseenter');
     circleone.style.transform = "scale(1.2)";
 });
