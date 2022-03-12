$(document).ready(function () {

  $(function(){
      $(window).scroll(function(){
        console.log($(this).scrollTop())
          if($(this).scrollTop() <= 00){
              $('.section1interactive').css('width', '100%');
              $('.Section1Content').css('display', 'none');
          }
          else if($(this).scrollTop() <= 100) {
              $('.section1interactive').css('width', '200%');
          }
          else if($(this).scrollTop() <= 200) {
              $('.section1interactive').css('width', '400%');
          }
          else if($(this).scrollTop() <= 300) {
              $('.section1interactive').css('width', '800%');
          }
          else if($(this).scrollTop() <= 400) {
              $('.section1interactive').css('width', '1600%');
              $('.Section1Content').css('opacity', '0');
          }
          else if($(this).scrollTop() <= 500) {
              $('.section1interactive').css('display', 'block');
              $('.Section1').css('position', 'fixed');
              $('.Section1Content').css('display', 'inherit');
              $('.Section1Content').css('opacity', '1');
          }
          else if($(this).scrollTop() > 500) {
              $('.section1interactive').css('display', 'none');
              $('.Section1').css('position', 'relative');

          }
      });
  });
});




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
  document.getElementById("Countdown").innerHTML = days + ":" + hours + ":"
  + minutes + ":" + seconds + " ";
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Countdown").innerHTML = "EXPIRED";
  }
}, 1000);
