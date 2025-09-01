//繪製漸變
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);
// 取得所有 dropdown 按鈕
let dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("show");
  });
});

// 大圖輪播
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/* 自動輪播 */
setInterval(function(){
  plusSlides(1);
}, 5000); // 每5秒自動切換

//end 大圖輪播

// 簡單的動畫觸發
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });
// 監聽所有 .animate-on-scroll
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });