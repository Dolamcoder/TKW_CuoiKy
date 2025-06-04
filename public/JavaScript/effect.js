// AOS
    AOS.init({
    duration: 1000, 
    });
  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const speed = 200;
  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        counter.innerText = '0';
        const countUp = () => {
          const count = +counter.innerText;
          const increment = target / speed;
  
          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(countUp, 10);
          } else {
            if (target === 7000 || target === 5000) {
              counter.innerText = target.toLocaleString() + ' +';
            } else {
              counter.innerText = target.toLocaleString();
            }
          }
        };
        countUp();
      };
  
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCount();
        }
      }, { threshold: 0.5 });
  
      observer.observe(counter);
    });
  };
  animateCounters();
  //dùng jquery để ẩn hiện các major
  $(document).ready(function () {
    $('#allMajor').click(function () {
      const hiddenSection = $('.hidden_major');
      const button = $(this); // Lấy nút bấm

      const isVisible = hiddenSection.is(':visible'); // Kiểm tra xem phần ẩn có đang hiển thị không
      const scrollPositionBefore = $(window).scrollTop();// Lưu vị trí cuộn trước khi ẩn hiện

      hiddenSection.slideToggle(400, () => {
        const nowVisible = hiddenSection.is(':visible');
        if (nowVisible) {
          button.html('Thu gọn <i class="fa fa-angle-double-up"></i>');
        } else {
          button.html('Xem thêm <i class="fa fa-angle-double-down"></i>');

          // Tránh bị giật màn hình: cuộn về vị trí nút bấm
          $('html, body').animate({
            scrollTop: button.offset().top  - 100 // có thể chỉnh số 100 cho phù hợp
          }, 200);
        }
      });
    });
  });