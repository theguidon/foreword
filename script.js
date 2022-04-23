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
