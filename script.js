function toggleNav(){
    document.getElementById("mySidepanel").classList.toggle('open');
    document.getElementById("btn").classList.toggle('open');
}

const zoomElement1 = document.querySelector(".image1");
const zoomElement3 = document.querySelector(".image3");

let zoom1 = 0;
const ZOOM_SPEED1 = 25;

let zoom3 = 0;
const ZOOM_SPEED3 = 15;

document.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        zoomElement1.style.borderRadius = `0 ${(zoom1 += ZOOM_SPEED1)}px 0 0`;
        zoomElement3.style.borderRadius = `0 0 0 ${(zoom3 += ZOOM_SPEED3)}px`;
    } else {
        zoomElement1.style.borderRadius = `0 ${(zoom1 -= ZOOM_SPEED1)}px 0 0`;
        zoomElement3.style.borderRadius = `0 0 0 ${(zoom3 -= ZOOM_SPEED3)}px`;
    }
});

var coll = document.getElementsByClassName("year");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.visibility === "visible") {
      content.style.visibility = "hidden";
      content.style.opacity = "0";
      content.style.height = "0";
      content.style.padding = "0";
    } else {
      content.style.visibility = "visible";
      content.style.opacity = "1";
      content.style.height = "100%";
      content.style.padding = "0vw 1.5vw 1.5vw 1.5vw"
    }
  });
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.visibility === "visible") {
      content.style.visibility = "hidden";
      content.style.opacity = "0";
      content.style.height = "0";
      content.style.padding = "0";
    } else {
      content.style.visibility = "visible";
      content.style.opacity = "1";
      content.style.height = "100%";
      content.style.padding = "0vw 1.5vw 1.5vw 1.5vw"
    }
  });
}