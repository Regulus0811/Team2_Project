export default function infoController() {
// 각 버튼 그룹을 선택합니다.
const deleteBtns = document.querySelectorAll(".del_btn");
const modifyBtns = document.querySelectorAll(".mod_btn");
const addBtns = document.querySelectorAll(".add_btn");

// 기본 이미지 URL을 설정합니다.
const defaultImageUrl = "img/default.png";

// 버튼 작동 업데이트 함수를 정의합니다.
function updateButtons() {
  // delete 버튼을 반복 처리하여 이벤트 리스너를 연결합니다.
  deleteBtns.forEach((deleteBtn, index) => {
    deleteBtn.addEventListener("click", () => {
      // 해당 카드의 요소를 선택합니다.
      const cardFrontImage = document.querySelectorAll(".Introduce-Card-Img")[
        index
      ];
      const frontName = document.querySelectorAll(".Tmoney-fontsize-200")[
        index
      ];
      const cardBackName = document.querySelectorAll(".Tmoney-fontsize-150")[
        index
      ];
      const cardBackText = document.querySelectorAll(".KOTRA-fontsize-100")[
        index
      ];

      // 카드의 정보를 지웁니다.
      cardBackText.textContent = "";
      cardBackName.textContent = "";
      cardFrontImage.src = defaultImageUrl;
      frontName.textContent = "";

      // 버튼 상태를 업데이트합니다.
      deleteBtn.style.display = "none";
      modifyBtns[index].style.display = "none";
      addBtns[index].style.display = "inline-block";
    });
  });

  // add 버튼을 반복 처리하여 이벤트 리스너를 연결합니다.
  addBtns.forEach((addBtn, index) => {
    addBtn.addEventListener("click", () => {
      // 사용자에게 새 정보를 입력하도록 요청합니다.
      const newImageUrl = prompt("새 이미지 URL을 입력하세요:");
      const newName = prompt("새 이름을 입력하세요:");
      const newDescription = prompt("새 설명을 입력하세요:");

      // 해당 카드의 요소를 선택합니다.
      const cardFrontImage = document.querySelectorAll(".Introduce-Card-Img")[
        index
      ];
      const frontName = document.querySelectorAll(".Tmoney-fontsize-200")[
        index
      ];
      const cardBackName = document.querySelectorAll(".Tmoney-fontsize-150")[
        index
      ];
      const cardBackText = document.querySelectorAll(".KOTRA-fontsize-100")[
        index
      ];

      // 카드에 입력한 정보를 반영합니다.
      cardFrontImage.src = newImageUrl;
      cardBackName.textContent = newName;
      frontName.textContent = newName;
      cardBackText.innerHTML = newDescription;

      // 버튼 상태를 업데이트합니다.
      addBtn.style.display = "none";
      deleteBtns[index].style.display = "inline-block";
      modifyBtns[index].style.display = "inline-block";
    });

    // 초기 버튼 상태 설정
    if (index === 0) {
      addBtn.style.display = "none";
      deleteBtns[index].style.display = "inline-block";
      modifyBtns[index].style.display = "inline-block";
    } else {
      addBtn.style.display = "inline-block";
      deleteBtns[index].style.display = "none";
      modifyBtns[index].style.display = "none";
    }
    // 초기 버튼 상태 설정
    addBtn.style.display = "none";
    deleteBtns[index].style.display = "inline-block";
    modifyBtns[index].style.display = "inline-block";
  });

  // modify 버튼을 반복 처리하여 이벤트 리스너를 연결합니다.
  modifyBtns.forEach((modifyBtn, index) => {
    modifyBtn.addEventListener("click", () => {
      // 사용자에게 새 정보를 입력하도록 요청합니다.
      const newImageUrl = prompt("새 이미지 URL을 입력하세요:");
      const newName = prompt("새 이름을 입력하세요:");
      const newDescription = prompt("새 설명을 입력하세요:");

      // 해당 카드의 요소를 선택합니다.
      const cardFrontImage = document.querySelectorAll(".Introduce-Card-Img")[
        index
      ];
      const frontName = document.querySelectorAll(".Tmoney-fontsize-200")[
        index
      ];
      const cardBackName = document.querySelectorAll(".Tmoney-fontsize-150")[
        index
      ];
      const cardBackText = document.querySelectorAll(".KOTRA-fontsize-100")[
        index
      ];

      // 카드에 입력한 정보를 반영합니다.
      if (newImageUrl) {
        cardFrontImage.src = newImageUrl;
      }
      if (newName) {
        cardBackName.textContent = newName;
      }
      if (newDescription) {
        cardBackText.innerHTML = newDescription;
      }
    });
  });
}

// 최초 실행하여 버튼 작동을 설정합니다.
updateButtons();
}