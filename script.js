window.onscroll = function (e) {
  // console.log(document.getElementsByClassName("left3_2")[0].clientHeight)
  // console.log(window.scrollY)
  if(window.scrollY <= 00){
    document.getElementsByClassName("section1interactive")[0].style.width = "100%";
    document.getElementsByClassName("section1interactive")[1].style.width = "150%";
    document.getElementsByClassName("Section1Content")[0].style.display = "none";
  }
  else if(window.scrollY <= 100){
    document.getElementsByClassName("section1interactive")[0].style.width = "200%";
    document.getElementsByClassName("section1interactive")[1].style.width = "250%";
  }
  else if(window.scrollY <= 200){
    document.getElementsByClassName("section1interactive")[0].style.width = "400%";
    document.getElementsByClassName("section1interactive")[1].style.width = "500%";
  }
  else if(window.scrollY <= 300){
    document.getElementsByClassName("section1interactive")[0].style.width = "800%";
    document.getElementsByClassName("section1interactive")[1].style.width = "950%";
  }
  else if(window.scrollY <= 400){
    document.getElementsByClassName("section1interactive")[0].style.width = "1600%";
    document.getElementsByClassName("section1interactive")[1].style.width = "4000%";
    document.getElementsByClassName("Section1Content")[0].style.opacity = "0";
  }
  else if(window.scrollY <= 500){
    document.getElementsByClassName("section1interactive")[0].style.width = "1600%";
    document.getElementsByClassName("section1interactive")[1].style.width = "4000%";
    document.getElementsByClassName("Section1Content")[0].style.opacity = "1";
    document.getElementsByClassName("Section1Content")[0].style.display = "inherit";
  }


  if(window.scrollY <= 500){
    document.getElementsByClassName("section1interactive")[0].style.visibility = "visible";
    document.getElementsByClassName("section1interactive")[1].style.visibility = "visible";

  }
  else if(window.scrollY > 500){
    document.getElementsByClassName("section1interactive")[0].style.visibility = "hidden";
    document.getElementsByClassName("section1interactive")[1].style.visibility = "hidden";
    document.getElementsByClassName("Section1Content")[0].style.display = "inherit";
    document.getElementsByClassName("Section1Content")[0].style.opacity = "1";
    // document.getElementsByClassName("Section1")[0].style.position = "relative";
  }
}



// COUNTER ----------------------
var countDownDate = new Date("April 8, 2022 16:00:00").getTime();
// var countDownDate = new Date("Mar 21, 2022 11:59:00").getTime();

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
    // clearInterval(x);
    document.getElementsByClassName("CountdownClass")[0].innerHTML = "00";
    document.getElementsByClassName("CountdownClass")[1].innerHTML = ":00";
    document.getElementsByClassName("CountdownClass")[2].innerHTML = ":00";
    document.getElementsByClassName("CountdownClass")[3].innerHTML = ":00";
    document.getElementById("livestream").style.visibility = "visible";
    document.getElementById("livestream").style.opacity = "1";
    document.getElementById("livestream").style.transform = "translate(0px)";
    if (document.body.clientWidth < 976) {
      document.getElementById("Countdown").style.height = "0px";
      document.getElementById("Countdown").style.opacity = "0";
      document.getElementById("livestream").style.height = "300px";
      document.getElementsByClassName("Section1_1")[0].style.height = "40px";
    }
    else {
      document.getElementById("Countdown").style.height = "100px";
      document.getElementById("Countdown").style.opacity = "1";
      document.getElementById("livestream").style.height = "378px";
      document.getElementsByClassName("Section1_1")[0].style.height = "auto";
    }

  }
}, 1000);
