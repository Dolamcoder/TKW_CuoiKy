document.addEventListener('DOMContentLoaded', () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const username = localStorage.getItem('username');
  
  // Select ALL elements with these classes instead of just the first one
  const loginButtons = document.querySelectorAll('.logIn_signUp');
  const avatarDivs = document.querySelectorAll('.avartar');
  const userNameSpans = document.querySelectorAll('.userName');
  const nameProfile = document.querySelectorAll('.profile-name'); 
  if (isLoggedIn === 'true') {
    // Ẩn tất cả các nút đăng nhập
    loginButtons.forEach(button => {
      button.style.display = 'none';
    });

    // Hiện tất cả các avatar và gán tên người dùng
    avatarDivs.forEach(avatar => {
      avatar.style.display = 'flex';
    });
    nameProfile.forEach(nameProfile => {
      nameProfile.textContent = username || '';
    });
    userNameSpans.forEach(span => {
      span.textContent = username || '';
    });
  } else {
    // Chưa đăng nhập, hiện tất cả các nút đăng nhập và ẩn tất cả avatar
    loginButtons.forEach(button => {
      button.style.display = 'block';
    });
    
    avatarDivs.forEach(avatar => {
      avatar.style.display = 'none';
    });
  }
});