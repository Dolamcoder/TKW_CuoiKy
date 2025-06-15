// headerScroll
window.onscroll=function(){
    if(document.body.scrollTop>200|| document.documentElement.scrollTop>200){
        document.getElementById("scroll").style.transform="translateY(0%)";
    }
    else{
        document.getElementById("scroll").style.transform="translateY(-100%)";
    }
    }
  // Mobile menu toggle
  const menuMobileButton = document.getElementById('menuMobile');
  const menuMobile = document.getElementById('menu_mobile');
  const closeMenuMobile = document.getElementById('closeMenuMobile');
  const menuMobileButtonScroll = document.getElementById('menuMobileScroll');
  const menuMobileScroll = document.getElementById('menu_mobile_scroll');
  const closeMenuMobileScroll = document.getElementById('closeMenuMobileScroll');
  
  menuMobileButton.addEventListener('click', () => {
    menuMobileButton.classList.add('animation_xoay');
    menuMobile.style.transform = 'translateX(0%)';
  });
  
  closeMenuMobile.addEventListener('click', () => {
    closeMenuMobile.classList.add('animation_xoay');
    menuMobile.style.transform = 'translateX(100%)';
  });
  
  menuMobileButtonScroll.addEventListener('click', () => {
    menuMobileButtonScroll.classList.add('animation_xoay');
    menuMobileScroll.style.transform = 'translateX(0%)';
  });
  
  closeMenuMobileScroll.addEventListener('click', () => {
    closeMenuMobileScroll.classList.add('animation_xoay');
    menuMobileScroll.style.transform = 'translateX(100%)';
  });
  document.querySelectorAll('.avartarButton').forEach((button) => {
  button.addEventListener('click', () => {
    const dropdownContent = button.nextElementSibling;
    if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    }
  });
});
document.querySelectorAll('.logout').forEach((btn) => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.clear();
  window.location.href = '../../index.html';
  });
});



