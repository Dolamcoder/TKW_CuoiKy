$(document).ready(function () {
  // Hiện nút khi cuộn xuống 100px
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#backToTop').fadeIn();
    } else {
      $('#backToTop').fadeOut();
    }
  });

  // Khi click thì cuộn lên đầu
  $('#backToTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 600); // 600ms là thời gian
    return false;
  });
});