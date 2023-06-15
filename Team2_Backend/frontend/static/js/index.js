import Home from "./pages/Home.js";
import Info from "./pages/Info.js";
import NotFound from "./pages/NotFound.js";
import Login from "./pages/Login.js";

import loginController from "./controller/loginController.js"; 
import registerController from "./controller/registerController.js"; 
import loginAnimation from "./controller/loginAnimation.js"; 
import loginTest from "./controller/loginTest.js";

const updateNavbar = async () => {
    const authLinks = document.getElementById("auth-links");
    authLinks.innerHTML = await loginTest();
  
    const logoutButton = document.getElementById("logout-button");
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        localStorage.removeItem("username");
        history.pushState(null, null, "/");
        router();
      });
    }
  };
  


const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/info", view: Info },
        { path: "/login", view: Login },
    ];

    // 페이지가 routes 안에 있는지 확인해서 경로와 불린값 전달
    const pageMatches = routes.map((route) => {
        return {
            route, // route: route
            isMatch: route.path === location.pathname,
        };
    });

    let match = pageMatches.find((pageMatch) => pageMatch.isMatch)
    

    if (!match) {
        match = {
            route: location.pathname,
            isMatch: true,
        };
        const page = new NotFound();
        document.querySelector("#root").innerHTML = await page.getHtml();
    } else {
        const page = new match.route.view();
        document.querySelector("#root").innerHTML = await page.getHtml();

            if (location.pathname == '/') {
            }

            if (location.pathname == '/login') {
                // 로그인창 애니메이션 관련
                await loginAnimation();
                // 로그인 관련
                await loginController();
                // 회원가입 관련
                await registerController();
            }
    }

    await updateNavbar();
};

// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
    router();
});

document.addEventListener("DOMContentLoaded", async () => {
    await router();


    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            router();
        }
    });
});
