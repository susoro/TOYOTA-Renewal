$(document).ready(function () {

  // 메인슬라이드
  $(".mv").bxSlider({
    auto: true
  });

});

// 모바일메뉴 
$('.m_menu').click(function () {
  $('.mgnb_wrap').animate({
    left: '0'
  });
});


function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  const sidebar = document.querySelector('.sidebar');
  menuToggle.classList.toggle('active');
  sidebar.classList.toggle('active');
}