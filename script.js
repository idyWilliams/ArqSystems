const nav = document.querySelector("nav");
const menuBtn = document.querySelector("#menu-btn");
const navbtn1 = document.querySelector("#show");
const navbtn2 = document.querySelector("#show1");
const navbtn3 = document.querySelector("#show2");
const navbtn4 = document.querySelector("#show3");
const flipCard1 = document.querySelector('.inner-1')
const flipCard2 = document.querySelector('.inner-2')
const flipCard3 = document.querySelector('.inner-3')
const flipCard4 = document.querySelector('.inner-4')
const flipCard5 = document.querySelector('.inner-5')
const flipCard6 = document.querySelector('.inner-6')
const flipCard7 = document.querySelector('.inner-7')

window.onload = function () {
  let slider = document.querySelector("#slider");
  let move = document.querySelector("#move");
  let moveLi = Array.from(document.querySelectorAll("#slider #move li"));
  let forword = document.querySelector("#slider #forword");
  let back = document.querySelector("#slider #back");
  let counter = 1;
  let time = 3000;
  let line = document.querySelector("#slider #line");
  let dots = document.querySelector("#slider #dots");
  let dot;

  for (i = 0; i < moveLi.length; i++) {
    dot = document.createElement("li");
    dots.appendChild(dot);
    dot.value = i;
  }
  

  const flip1 = ()=>{
    flipCard1.classList.toggle("is_flipped")
    console.log("he;llo");
  }
   
  const flip2 = ()=>{
    flipCard2.classList.toggle("is_flipped")
    console.log("he;llo");
  }
   
  const flip3 = ()=>{
    flipCard3.classList.toggle("is_flipped")
    console.log("he;llo");
  }
   
  const flip4 = ()=>{
    flipCard4.classList.toggle("is_flipped")
    console.log("he;llo");
  }
   
  const flip5 = ()=>{
    flipCard5.classList.toggle("is_flipped")
    console.log("he;llo");
  }
   
  const flip6 = ()=>{
    flipCard6.classList.toggle("is_flipped")
    console.log("he;llo");
  }
   
  const flip7 = ()=>{
    flipCard7.classList.toggle("is_flipped")
    console.log("he;llo");
  }
   

  flipCard1.addEventListener("click", flip1)
  flipCard2.addEventListener("click", flip2)
  flipCard3.addEventListener("click", flip3)
  flipCard4.addEventListener("click", flip4)
  flipCard5.addEventListener("click", flip5)
  flipCard6.addEventListener("click", flip6)
  flipCard7.addEventListener("click", flip7)
  dot = dots.getElementsByTagName("li");

  line.style.animation = "line " + time / 1000 + "s linear infinite";
  dot[0].classList.add("active");

  function moveUP() {
    if (counter == moveLi.length) {
      moveLi[0].style.marginLeft = "0%";
      counter = 1;
    } else if (counter >= 1) {
      moveLi[0].style.marginLeft = "-" + counter * 100 + "%";
      counter++;
    }

    if (counter == 1) {
      dot[moveLi.length - 1].classList.remove("active");
      dot[0].classList.add("active");
    } else if (counter > 1) {
      dot[counter - 2].classList.remove("active");
      dot[counter - 1].classList.add("active");
    }
  }

  function moveDOWN() {
    if (counter == 1) {
      moveLi[0].style.marginLeft = "-" + (moveLi.length - 1) * 100 + "%";
      counter = moveLi.length;
      dot[0].classList.remove("active");
      dot[moveLi.length - 1].classList.add("active");
    } else if (counter <= moveLi.length) {
      counter = counter - 2;
      moveLi[0].style.marginLeft = "-" + counter * 100 + "%";
      counter++;

      dot[counter].classList.remove("active");
      dot[counter - 1].classList.add("active");
    }
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function (e) {
      dot[counter - 1].classList.remove("active");
      counter = e.target.value + 1;
      dot[e.target.value].classList.add("active");
      moveLi[0].style.marginLeft = "-" + (counter - 1) * 100 + "%";
    });
  }

  forword.onclick = moveUP;
  back.onclick = moveDOWN;

  let autoPlay = setInterval(moveUP, time);

  slider.onmouseover = function () {
    autoPlay = clearInterval(autoPlay);
    line.style.animation = "";
  };

  slider.onmouseout = function () {
    autoPlay = setInterval(moveUP, time);
    line.style.animation = "line " + time / 1000 + "s linear infinite";
  };
};

navbtn1.onclick = function () {
  nav.classList.remove("menu-open");
};
navbtn2.onclick = function () {
  nav.classList.remove("menu-open");
};
navbtn3.onclick = function () {
  nav.classList.remove("menu-open");
};
navbtn4.onclick = function () {
  nav.classList.remove("menu-open");
};

menuBtn.onclick = function () {
  nav.classList.toggle("menu-open");
};
