let registeredUser = {}; // Biến toàn cục tạm để lưu thông tin đăng ký

document.getElementById('submitRegister').addEventListener('click', function(event) {
  event.preventDefault();

  const name = document.querySelector('.name-field').value.trim();
  const email = document.querySelector('.email-field').value.trim();
  const pass1 = document.querySelector('.pass1-field').value.trim();
  const pass2 = document.querySelector('.pass2-field').value.trim();

  const showError = (msg) => alert(msg);

  if (!name) return showError("Vui lòng nhập tên người dùng");
  if (!email) return showError("Vui lòng nhập email");
  if (!validateEmail(email)) return showError("Email sai định dạng");
  if (!pass1) return showError("Vui lòng nhập mật khẩu");
  if (!pass2) return showError("Vui lòng xác nhận mật khẩu");

  if (!validatePassword(pass1)) {
    return showError("Mật khẩu phải từ 8 ký tự trở lên, có chữ hoa, chữ thường và ký tự đặc biệt");
  }

  if (pass1 !== pass2) return showError("Mật khẩu không khớp");

  // Lưu thông tin tạm thời
  registeredUser = { name, email, password: pass1 };

  alert("Đăng ký thành công, vui lòng đăng nhập");
  console.log(registeredUser);
});

document.getElementById('submitLogin').addEventListener('click', function(event) {
  event.preventDefault();

  const emailLogin = document.querySelector('.emailLogin-field').value.trim();
  const passLogin = document.querySelector('.passwordLogin-field').value.trim();

  const showError = (msg) => alert(msg);

  if (!emailLogin) return showError("Vui lòng nhập email");
  if (!validateEmail(emailLogin)) return showError("Email sai định dạng");
  if (!passLogin) return showError("Vui lòng nhập mật khẩu");

  if (
    emailLogin !== registeredUser.email ||
    passLogin !== registeredUser.password
  ) {
    return showError("Email hoặc mật khẩu không đúng");
  }

  alert("Đăng nhập thành công");

// Store login information in localStorage
localStorage.setItem('isLoggedIn', 'true');
localStorage.setItem('username', registeredUser.name);

window.location.href = '/';
  console.log({ email: emailLogin, password: passLogin });
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
  return re.test(password);
}
