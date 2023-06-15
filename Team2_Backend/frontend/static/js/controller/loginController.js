export default function loginController() {
    // 로그인 로직 구현
    const loginId = document.querySelector("#login-id");
    const loginPasswd = document.querySelector("#login-passwd");
    const loginButton = document.querySelector("#login-button");
  
    const submitRequest = (action) => {
      const req = {
        action: action,
        id: loginId.value,
        passwd: loginPasswd.value,
      };
  
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
      })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
              // 로그인 성공 시 "/" 경로로 이동
              window.location.href = "/"; // "/" 경로로 이동
            } else {
              // 로그인 실패 시 에러 메시지 출력
              alert(res.message);
            }
        });
    };
  
    loginButton.addEventListener("click", () => {
      submitRequest("login");
    });
}
