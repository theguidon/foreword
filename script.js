window.onscroll = function (e) {

  document.getElementsByClassName("twitframe")[0].style.height = document.getElementsByClassName("Topleft3_2")[0].clientHeight + document.getElementsByClassName("Botleft3_2")[0].clientHeight + 40 + "px";
  // console.log(document.getElementsByClassName("left3_2")[0].clientHeight)
  // console.log(window.scrollY)
  if(window.scrollY <= 00){
    // document.getElementsByClassName("Section1")[0].style.position = "fixed";
    document.getElementsByClassName("section1interactive")[0].style.width = "100%";
    document.getElementsByClassName("Section1Content")[0].style.display = "none";
  }
  else if(window.scrollY <= 100){
    // document.getElementsByClassName("Section1")[0].style.position = "fixed";
    document.getElementsByClassName("section1interactive")[0].style.width = "200%";
  }
  else if(window.scrollY <= 200){
    // document.getElementsByClassName("Section1")[0].style.position = "fixed";
    document.getElementsByClassName("section1interactive")[0].style.width = "400%";
  }
  else if(window.scrollY <= 300){
    // document.getElementsByClassName("Section1")[0].style.position = "fixed";
    document.getElementsByClassName("section1interactive")[0].style.width = "800%";
  }
  else if(window.scrollY <= 400){
    // document.getElementsByClassName("Section1")[0].style.position = "fixed";
    document.getElementsByClassName("section1interactive")[0].style.width = "1600%";
    document.getElementsByClassName("Section1Content")[0].style.opacity = "0";
  }
  else if(window.scrollY <= 500){
    // document.getElementsByClassName("Section1")[0].style.position = "fixed";
    document.getElementsByClassName("section1interactive")[0].style.width = "1600%";
    document.getElementsByClassName("Section1Content")[0].style.opacity = "1";
    document.getElementsByClassName("Section1Content")[0].style.display = "inherit";
  }


  if(window.scrollY <= 500){
    // document.getElementsByClassName("Section1")[0].style.position = "fixed";
    document.getElementsByClassName("section1interactive")[0].style.display = "block";

  }
  else if(window.scrollY < 500){
    document.getElementsByClassName("section1interactive")[0].style.display = "none";
    document.getElementsByClassName("Section1Content")[0].style.display = "inherit";
    document.getElementsByClassName("Section1Content")[0].style.opacity = "1";
    // document.getElementsByClassName("Section1")[0].style.position = "relative";
  }
}

// COUNTER ----------------------
var countDownDate = new Date("April 2, 2022 15:00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Display the result in the element with id="demo"
  document.getElementsByClassName("CountdownClass")[0].innerHTML = days.toLocaleString(undefined,{minimumIntegerDigits: 2});
  document.getElementsByClassName("CountdownClass")[1].innerHTML = ":" + hours.toLocaleString(undefined,{minimumIntegerDigits: 2}) + ":" ;
  document.getElementsByClassName("CountdownClass")[2].innerHTML = minutes.toLocaleString(undefined,{minimumIntegerDigits: 2});
  document.getElementsByClassName("CountdownClass")[3].innerHTML = ":" + seconds.toLocaleString(undefined,{minimumIntegerDigits: 2}) + "&nbsp;";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown").innerHTML = "EXPIRED";
  }
}, 1000);
