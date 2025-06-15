
const submit=document.getElementById('submitBtn');
submit.addEventListener('click', function(event) {
    event.preventDefault();
     const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const consultType = document.getElementById('consult-type').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const notes = document.getElementById('notes').value.trim();
    if( !name || !email || !phone || !consultType || !date || !time) {
        showError('Vui lòng điền đầy đủ thông tin!');
        return;
    }
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{9,11}$/;
    if(emailRegex.test(email) === false) {
        showError('Email không hợp lệ!');
        return;
    }
    if(phoneRegex.test(phone) === false) {
        showError('Số điện thoại không hợp lệ!');
        return;
    }
    if( notes.length > 500) {
        showError('Ghi chú không được quá 500 ký tự!');
        return;
    }
    showSuccess('Thông tin đã được gửi thành công!');
    // Kiểm tra ngày hẹn không nhỏ hơn ngày hôm nay
    const today = new Date().toISOString().split('T')[0];
    if (date < today) {
        alert('Ngày hẹn không được nhỏ hơn hôm nay!');
        return;
    }
});
function showError(message) {
        return Swal.fire({
            title: 'Lỗi!',
            text: message || 'Đã xảy ra lỗi. Vui lòng thử lại.',
            icon: 'error',
            confirmButtonText: 'Đóng',
            confirmButtonColor: '#d33',
            timer: 3000,
            timerProgressBar: true
        });
}
function showSuccess(message) {
    return Swal.fire({
        title: 'Thành công!',
        text: message || 'Thao tác thành công.',
        icon: 'success',
        confirmButtonText: 'Đóng',
        confirmButtonColor: '#3085d6',
        timer: 3000,
        timerProgressBar: true
    });
}
