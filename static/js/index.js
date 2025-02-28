document.addEventListener("DOMContentLoaded", function() {
  var menuToggle = document.getElementById("mobile-menu-toggle");
  var mobileMenu = document.getElementById("mobile-menu");
  
  menuToggle.addEventListener("click", function() {
    // 切換選單顯示狀態
    mobileMenu.classList.toggle("active");
    // 切換漢堡按鈕樣式（open 時呈現叉形）
    menuToggle.classList.toggle("open");
  });
});