export default function toggleUpdateButtons() {
    const updateButtons = document.querySelector("#updateBtn");
    const individualUpdateButtons = document.getElementsByClassName("updateBtnHidden");
  
    // 버튼 클릭시 숨겨진 수정버튼 등장
    updateButtons.addEventListener("click", () => {
      Array.from(individualUpdateButtons).forEach((button) => {
        if (button.style.display === "none") {
          button.style.display = "inline-block";
          createRealUpdateBtnListener(button);
        } else {
          button.style.display = "none";
        }
      });
    });
  
    function createRealUpdateBtnListener(button) {
      button.addEventListener("click", () => {
        const postNumber = button.dataset.postNumber;
  
        // 게시물 정보를 전달하기 위해 postNumber를 URL에 추가
        window.location.href = `/rePostAdd?postNumber=${postNumber}`;
      });
    }
  }
  