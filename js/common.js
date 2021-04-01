$(document).ready(function () {

  // 메인슬라이드
  $(".mv").bxSlider({
    auto: true
  });

});


// toggle
function toggleMenu() {
  const menuToggle = document.querySelector('.toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('active');
}

// 탭메뉴
var content1 = document.getElementById("content1");
var content2 = document.getElementById("content2");
var content3 = document.getElementById("content3");

function open2021Mirai() {
  content1.style.transform = "translateX(0)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(100%)";
  
  content1.style.transitionDelay = "0.3s";
  content2.style.transitionDelay = "0s";
  content3.style.transitionDelay = "0s";
}

function openAvalon() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  
  content2.style.transitionDelay = "0.3s";
  content1.style.transitionDelay = "0s";
  content3.style.transitionDelay = "0s";
}

function openHighlander() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
  
  content3.style.transitionDelay = "0.3s";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0s";
}

function openCamary() {
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
  
  content3.style.transitionDelay = "0.3s";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0s";
}