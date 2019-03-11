function nextImage(el){
if (el.src.match("images/one.png")){
el.src = "images/two.png";
} else if (el.src.match("images/two.png")){
el.src = "images/three.png";
} else if (el.src.match("images/three.png")){
el.src = "images/four.png";
} else if (el.src.match("images/four.png")){
el.src = "images/five.png";
} else if (el.src.match("images/five.png")){
el.src = "images/six.png";
} else if (el.src.match("images/six.png")){
el.src = "images/seven.png";
} else if (el.src.match("images/seven.png")){
el.src = "images/eight.png";
} else if (el.src.match("images/eight.png")){
el.src = "images/nine.png";
} else if (el.src.match("images/nine.png")){
el.src = "images/zero.png";
} else if (el.src.match("images/zero.png")){
el.src = "images/one.png";
}
else {
}
}

function nextImage2(el){
if (el.src.match("images/one.png")){
el.src = "images/two.png";
} else if (el.src.match("images/two.png")){
el.src = "images/three.png";
} else if (el.src.match("images/three.png")){
el.src = "images/four.png";
} else if (el.src.match("images/four.png")){
el.src = "images/five.png";
} else if (el.src.match("images/five.png")){
el.src = "images/six.png";
} else if (el.src.match("images/six.png")){
el.src = "images/seven.png";
} else if (el.src.match("images/seven.png")){
el.src = "images/eight.png";
} else if (el.src.match("images/eight.png")){
el.src = "images/nine.png";
} else if (el.src.match("images/nine.png")){
el.src = "images/zero.png";
} else if (el.src.match("images/zero.png")){
el.src = "images/one.png";
}
else {
}
}

function nextImage3(el){
if (el.src.match("images/one.png")){
el.src = "images/two.png";
} else if (el.src.match("images/two.png")){
el.src = "images/three.png";
} else if (el.src.match("images/three.png")){
el.src = "images/four.png";
} else if (el.src.match("images/four.png")){
el.src = "images/five.png";
} else if (el.src.match("images/five.png")){
el.src = "images/six.png";
} else if (el.src.match("images/six.png")){
el.src = "images/seven.png";
} else if (el.src.match("images/seven.png")){
el.src = "images/eight.png";
} else if (el.src.match("images/eight.png")){
el.src = "images/nine.png";
} else if (el.src.match("images/nine.png")){
el.src = "images/zero.png";
} else if (el.src.match("images/zero.png")){
el.src = "images/one.png";
}
else {
}
}

function nextImage4(el){
if (el.src.match("images/turret.png")){
el.src = "images/cube.png";
} else if (el.src.match("images/cube.png")){
el.src = "images/turret2.png";
} else if (el.src.match("images/turret2.png")){
el.src = "images/gun.png";
} else if (el.src.match("images/gun.png")){
el.src = "images/turret.png";
}
else {
}
}

function nextImage6(el){
if (el.src.match("images/turret.png")){
el.src = "images/cube.png";
} else if (el.src.match("images/cube.png")){
el.src = "images/inspect.png";
} else if (el.src.match("images/inspect.png")){
el.src = "images/turret2.png";
} else if (el.src.match("images/turret2.png")){
el.src = "images/gun.png";
} else if (el.src.match("images/gun.png")){
el.src = "images/turret.png";
}
else {
}
}

function nextImage5(el){
if (el.src.match("images/turret.png")){
el.src = "images/cube.png";
} else if (el.src.match("images/cube.png")){
el.src = "images/turret2.png";
} else if (el.src.match("images/turret2.png")){
el.src = "images/gun.png";
} else if (el.src.match("images/gun.png")){
el.src = "images/turret.png";
}
else {
}
}

a = document.getElementById("one");
b = document.getElementById("two");
c = document.getElementById("three");
mySound = document.getElementById("portal");

function checkImages(el){
if (a.src.match("images/one.png") && b.src.match("images/two.png") && c.src.match("images/three.png")){
mySound.play();
setTimeout(redirect, 2000);
} else {
  console.log("super nibba has returned")
}
}

function redirect(){
  document.location.href = "https://google.com"
}
