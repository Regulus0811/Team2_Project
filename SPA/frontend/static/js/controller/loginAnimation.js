export default function loginAnimation() {
    function initializeAnimation() {
        const cont = document.querySelector(".cont");
        cont.classList.remove("s--signup");
      }
    
      if (document.readyState === "complete") {
        initializeAnimation();
      } else {
        window.addEventListener("load", initializeAnimation);
      }
    
      document
        .querySelector(".img__btn")
        .addEventListener("click", function () {
          const cont = document.querySelector(".cont");
          cont.classList.toggle("s--signup");
          // 버튼을 클릭했을 때만 애니메이션 해제
          cont.classList.remove("no-animation");
        });
    
    
      document
        .querySelector(".m--up")
        .addEventListener("click", function (event) {
          event.preventDefault();
          document.querySelector(".cont").classList.add("s--signup");
        });
    
      document
        .querySelector(".m--in")
        .addEventListener("click", function (event) {
          event.preventDefault();
          document.querySelector(".cont").classList.remove("s--signup");
        });
}