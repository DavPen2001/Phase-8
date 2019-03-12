function nextImage(el){
if (el.src.match("one.png")){
el.src = "two.png";
} else if (el.src.match("two.png")){
el.src = "three.png";
} else if (el.src.match("three.png")){
el.src = "four.png";
} else if (el.src.match("four.png")){
el.src = "five.png";
} else if (el.src.match("five.png")){
el.src = "six.png";
} else if (el.src.match("six.png")){
el.src = "seven.png";
} else if (el.src.match("seven.png")){
el.src = "eight.png";
} else if (el.src.match("eight.png")){
el.src = "nine.png";
} else if (el.src.match("nine.png")){
el.src = "zero.png";
} else if (el.src.match("zero.png")){
el.src = "one.png";
}
else {
}
}

function nextImage2(el){
if (el.src.match("one.png")){
el.src = "two.png";
} else if (el.src.match("two.png")){
el.src = "three.png";
} else if (el.src.match("three.png")){
el.src = "four.png";
} else if (el.src.match("four.png")){
el.src = "five.png";
} else if (el.src.match("five.png")){
el.src = "six.png";
} else if (el.src.match("six.png")){
el.src = "seven.png";
} else if (el.src.match("seven.png")){
el.src = "eight.png";
} else if (el.src.match("eight.png")){
el.src = "nine.png";
} else if (el.src.match("nine.png")){
el.src = "zero.png";
} else if (el.src.match("zero.png")){
el.src = "one.png";
}
else {
}
}

function nextImage3(el){
if (el.src.match("one.png")){
el.src = "two.png";
} else if (el.src.match("two.png")){
el.src = "three.png";
} else if (el.src.match("three.png")){
el.src = "four.png";
} else if (el.src.match("four.png")){
el.src = "five.png";
} else if (el.src.match("five.png")){
el.src = "six.png";
} else if (el.src.match("six.png")){
el.src = "seven.png";
} else if (el.src.match("seven.png")){
el.src = "eight.png";
} else if (el.src.match("eight.png")){
el.src = "nine.png";
} else if (el.src.match("nine.png")){
el.src = "zero.png";
} else if (el.src.match("zero.png")){
el.src = "one.png";
}
else {
}
}

function nextImage4(el){
if (el.src.match("turret.png")){
el.src = "cube.png";
} else if (el.src.match("cube.png")){
el.src = "turret2.png";
} else if (el.src.match("turret2.png")){
el.src = "gun.png";
} else if (el.src.match("gun.png")){
el.src = "turret.png";
}
else {
}
}

function nextImage6(el){
if (el.src.match("turret.png")){
el.src = "cube.png";
} else if (el.src.match("cube.png")){
el.src = "inspect.png";
} else if (el.src.match("inspect.png")){
el.src = "turret2.png";
} else if (el.src.match("turret2.png")){
el.src = "gun.png";
} else if (el.src.match("gun.png")){
el.src = "turret.png";
}
else {
}
}

function nextImage5(el){
if (el.src.match("turret.png")){
el.src = "cube.png";
} else if (el.src.match("cube.png")){
el.src = "turret2.png";
} else if (el.src.match("turret2.png")){
el.src = "gun.png";
} else if (el.src.match("gun.png")){
el.src = "turret.png";
}
else {
}
}

a = document.getElementById("one");
b = document.getElementById("two");
c = document.getElementById("three");
mySound = document.getElementById("portal");

function checkImages(el){
if (a.src.match("three.png") && b.src.match("one.png") && c.src.match("nine.png")){
mySound.play();
setTimeout(redirect, 2000);
} else {
  console.log("Jesus has returned")
}
}

function redirect(){
  document.location.href = "https://google.com"
}
