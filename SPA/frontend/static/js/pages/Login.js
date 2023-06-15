export default class {
    constructor() {
        document.title = "Login";
    }
    async getHtml() {
        return `
        <link rel="stylesheet" href="static/css/login.css">

        <br><br>
      <div class="cont no-animation">
        <div class="form sign-in">
          <br><br>
          <h2>로그인</h2>
          <label>
            <span>아이디</span>
            <input id="login-id" type="email" />
          </label>
          <label>


            <span>비밀번호</span>
            <input id="login-passwd" type="password" />
          </label>
          <button id="login-button" type="button" class="submit">Sign In</button>
        </div>
        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <h2>初めてなら？</h2>
              <p>サインアップして、たくさんの新しいチャンスを発見してください!</p>
            </div>
            <!-- 회원가입 화면 -->
            
            <div class="img__text m--in">
              <h2>IDがありますか？</h2>
              <p>すでにアカウントをお持ちの場合は、サインインしてください。会いたかったです!</p>
            </div>
            <div class="img__btn">
              <span class="m--up">Sign Up</span>
              <span class="m--in">Sign In</span>
            </div>
          </div>
          <div class="form sign-up">
            <br><br>
            <h2>회원가입</h2>
            <label>
              <span>Name</span>
              <input id="register-name" type="text" />
            </label>
            <label>
              <span>Id</span>
              <input id="register-id" type="email" />
            </label>
            <label>
              <span>Password</span>
              <input id="register-passwd" type="password" />
            </label>
            <button id="register-button" type="button" class="submit">Sign Up</button>
          </div>
        </div>
      </div>
      `;
    }
}
