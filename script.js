// $(document).ready(function () {
//
//   $(function(){
//       $(window).scroll(function(){
//         // console.log($(this).scrollTop())
//           if($(this).scrollTop() <= 00){
//               $('.section1interactive').css('width', '100%');
//               $('.Section1Content').css('display', 'none');
//           }
//           else if($(this).scrollTop() <= 100) {
//               $('.section1interactive').css('width', '200%');
//           }
//           else if($(this).scrollTop() <= 200) {
//               $('.section1interactive').css('width', '400%');
//           }
//           else if($(this).scrollTop() <= 300) {
//               $('.section1interactive').css('width', '800%');
//           }
//           else if($(this).scrollTop() <= 400) {
//             $('.Section1').css('position', 'fixed');
//               $('.section1interactive').css('width', '1600%');
//               $('.Section1Content').css('opacity', '0');
//           }
//           else if($(this).scrollTop() <= 500) {
//               $('.Section1').css('position', 'fixed');
//               $('.section1interactive').css('display', 'block');
//               $('.Section1Content').css('display', 'inherit');
//               $('.Section1Content').css('opacity', '1');
//           }
//           else if($(this).scrollTop() > 500) {
//               $('.section1interactive').css('display', 'none');
//               $('.Section1').css('position', 'relative');
//
//           }
//       });
//   });
// });



//  SCROLL --------------

window.onscroll = function (e) {
  console.log(window.scrollY)
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
