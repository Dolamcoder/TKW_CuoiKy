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
// Mobile menu toggle
document.getElementById('menuMobile').addEventListener('click', function() {
    document.getElementById('menu_mobile').classList.add('active');
});
document.getElementById('closeMenuMobile').addEventListener('click', function() {
    document.getElementById('menu_mobile').classList.remove('active');
});
// Avatar dropdown
document.querySelector('.avartarButton').addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.avartar')) {
        document.querySelector('.dropdown-content').style.display = 'none';
    }
});

// Create Post Modal
function showCreatePost() {
    document.getElementById('createPostModal').style.display = 'flex';
}

function hideCreatePost() {
    document.getElementById('createPostModal').style.display = 'none';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('createPostModal');
    if (e.target === modal) {
        hideCreatePost();
    }
});
