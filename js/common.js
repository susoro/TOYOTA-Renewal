$(document).ready(function () {

  // 메인슬라이드
  $(".mv").bxSlider({
    auto: true
  });

});
//스크롤트리거
$(window).scroll(function () {
  $('.ani_stop').each(function (i) {
    var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > bottom_of_object) {
      $(this).removeClass('ani_stop');
    }
    if (bottom_of_window < bottom_of_object) {
      $(this).addClass('ani_stop');
    }
  });
});

// 모바일메뉴 
$('.m_menu').click(function () {
  $('.mgnb_wrap').animate({
    left: '0'
  });
});

// // toggle
// function toggleMenu() {
//   const menuToggle = document.querySelector('.toggle');
//   const sidebar = document.querySelector('.sidebar');
//   menuToggle.classList.toggle('active');
//   sidebar.classList.toggle('active');
// }

// 탭메뉴