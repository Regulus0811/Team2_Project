export default async function loginTest() {
  const loggedInUser = localStorage.getItem("username");

  if (loggedInUser) {
    return `
      <li class="nav-item">
        <span class="nav-link text-center">${loggedInUser}님, 환영합니다!</span>
      </li>
      <li class="nav-item">
          <a href="#" id="logout-button" class="nav-link text-center">로그아웃</a>
      </li>`;
  } else {
    return `
      <li class="nav-item">
        <a href="/login" class="nav-link text-center" data-link>회원가입/로그인</a>
      </li>`;
  }
}
