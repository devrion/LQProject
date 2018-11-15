
const element = document.querySelector(".nav-item");
var share = document.querySelector("#share-fb")

element.addEventListener("mouseover", event => {
  console.log("Mouse over");
});

element.addEventListener("mouseout", event => {
  console.log("Mouse out");
});


share.addEventListener("click", function(){
  share.setAttribute('target', '_blank');
})
