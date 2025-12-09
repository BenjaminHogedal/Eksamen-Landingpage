/**
 * file: js/js.js
 * purpose: Behaviors
 **/
console.log('Success: JavaScript running!')


  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

 document.querySelectorAll(".favorites-icon").forEach((icon) => {
   icon.addEventListener("click", () => {
     const img = icon.querySelector("img");
     if (!img) return;
     const isLiked = icon.classList.toggle("active");
     img.src = isLiked ? "images/roedthjerte.png" : "images/roedthjerte.png";
   });
 });




