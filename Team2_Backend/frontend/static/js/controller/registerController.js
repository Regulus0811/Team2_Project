export default function registerController() {
    // 회원가입 로직 구현
    const registerName = document.querySelector("#register-name");
    const registerId = document.querySelector("#register-id");
    const registerPasswd = document.querySelector("#register-passwd");
    const registerButton = document.querySelector("#register-button");
  
    const submitRequest = (action) => {
      const req = {
        action: action,
        name: registerName.value,
        id: registerId.value,
        passwd: registerPasswd.value,
      };
  
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
              // 회원가입 성공 시 메시지 출력 후 페이지 리로드
              alert(data.message);
              location.reload(); // 페이지 리로드 실행
            } else {
              // 회원가입 실패 시 에러 메시지 출력
              alert(data.message);
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };
  
    registerButton.addEventListener("click", () => {
      submitRequest("register");
    });
}
