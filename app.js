
const element = document.querySelector(".nav-item");
var share = document.querySelectorAll(".sharer")

element.addEventListener("mouseover", event => {
  console.log("Mouse over");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
});

for (var i = 0; i < share.length; i++){
  var j = i;
  share[j].setAttribute('target', 'blank');
}
