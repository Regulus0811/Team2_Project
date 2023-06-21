export default function memberController() {
  // 각 버튼 그룹을 선택합니다.
  const deleteBtns = document.querySelectorAll(".del_btn");
  const modifyBtns = document.querySelectorAll(".mod_btn");
  const addBtns = document.querySelectorAll(".add_btn");

  // 기본 이미지 URL을 설정합니다.
  const defaultImageUrl = "static/img/default.png";

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
        // 모달을 열고 값 입력을 요청합니다.
        inputModal.style.display = "block";
        currentIndex = index;
      });

      // 초기 버튼 상태 설정
      addBtn.style.display = "none";
      deleteBtns[index].style.display = "inline-block";
      modifyBtns[index].style.display = "inline-block";
    });

    // modift 버튼 이벤트 리스너 연결
    modifyBtns.forEach((modifyBtn, index) => {
      modifyBtn.addEventListener("click", () => {
        // 모달을 열고 입력 요청
        inputModal.style.display = "block";
        currentIndex = index;

        // 현재 카드 정보를 모달에 채웁니다.
        const frontName = document.querySelectorAll(".Tmoney-fontsize-200")[
          index
        ];

        newNameInput.value = frontName.textContent;
      });
    });
  }

  // 최초 실행하여 버튼 작동을 설정합니다.
  updateButtons();

  // 모달 관련 DOM 요소 설정
  const inputModal = document.getElementById("inputModal");
  const closeInputBtn = document.getElementsByClassName("close-input")[0];
  const submitDataBtn = document.getElementById("submitData");

  // 입력 필드 설정
  const newNameInput = document.getElementById("newName");
  const newDescriptionInput = document.getElementById("newDescription");

  // 현재 클릭 된 카드 인덱스 추척
  let currentIndex = -1;

  // 제출 버튼 이벤트 리스너 설정
  submitDataBtn.addEventListener("click", () => {
    if (currentIndex > -1) {
      const newImageUrl = uploadedImageUrl;

      // 변수를 사용하여 DOM 요소값을 가져옵니다.
      const cardFrontImage = document.querySelectorAll(".Introduce-Card-Img")[
        currentIndex
      ];
      const frontName = document.querySelectorAll(".Tmoney-fontsize-200")[
        currentIndex
      ];
      const cardBackName = document.querySelectorAll(".Tmoney-fontsize-150")[
        currentIndex
      ];
      const cardBackText = document.querySelectorAll(".KOTRA-fontsize-100")[
        currentIndex
      ];

      cardFrontImage.src = newImageUrl;
      cardBackName.textContent = newNameInput.value;
      frontName.textContent = newNameInput.value;
      cardBackText.innerHTML = newDescriptionInput.value;

      // 버튼 상태를 업데이트합니다.
      deleteBtns[currentIndex].style.display = "inline-block";
      modifyBtns[currentIndex].style.display = "inline-block";
      addBtns[currentIndex].style.display = "none";

      // 입력 필드를 초기화합니다.
      newNameInput.value = "";
      newDescriptionInput.value = "";
      uploadedImageUrl = ""; // 이미지 URL 초기화

      currentIndex = -1;
    }

    // 입력 모달을 닫습니다.
    inputModal.style.display = "none";
  });

  // 'X'를 클릭하면 입력 모달이 닫힙니다.
  closeInputBtn.onclick = () => {
    inputModal.style.display = "none";
  };

  // 이미지 업로드를 위한 DOM 요소 설정 및 변수
  const newImageFile = document.getElementById("newImageFile");
  let uploadedImageUrl = "";

  // 이미지 파일 업로드 이벤트 탐지
  newImageFile.addEventListener("change", readImageFile);

  // 파일 업로드 후 이미지 URL 저장
  function readImageFile(event) {
    const imageFile = event.target.files[0];

    if (imageFile) {
      const reader = new FileReader();
      reader.onload = () => {
        uploadedImageUrl = reader.result;
      };
      reader.readAsDataURL(imageFile);
    }
  }
}
