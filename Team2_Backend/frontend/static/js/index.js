import Home from "./pages/Home.js";
import Info from "./pages/Info.js";
import NotFound from "./pages/NotFound.js";
import Login from "./pages/Login.js";
import Community from "./pages/Community.js";
import PostAdd from "./pages/PostAdd.js";
import RePostAdd from "./pages/RePostAdd.js";

import loginController from "./controller/loginController.js"; 
import registerController from "./controller/registerController.js"; 
import loginAnimation from "./controller/loginAnimation.js"; 
import loginTest from "./controller/loginTest.js";
import toggleDeleteButtons from "./controller/deleteBtnController.js";
import toggleUpdateButtons from "./controller/updateBtnController.js";

import { submitPost } from './controller/postAddController.js';
import { loadPosts } from "./controller/postLoadController.js";



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
        { path: "/community", view: Community },
        { path: "/postAdd", view: PostAdd },
        { path: "/rePostAdd", view: RePostAdd },
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

        
        if (location.pathname === "/community") {
            // 게시물 로드
            const posts = await loadPosts();
            const tbody = document.querySelector("tbody");
            let tableContent = "";
          
            if (posts) {
              for (const post of posts) {
                tableContent += `
                                <tr class="post-row">
                                <td>${post.postNumber}</td>
                                <td>${post.title}</td>
                                <td>${post.author}</td>
                                <td>${post.timestamp}</td>
                                <td>${post.content}</td>

                                <td><button
                                class="deleteBtnHidden"
                                id="real-delete-btn"
                                data-post-number="${post.postNumber}"
                                style="display:none">
                                삭제
                              </button></td>

                              <td><button
                                class="updateBtnHidden"
                                id="real-update-btn"
                                data-post-number="${post.postNumber}"
                                style="display:none" >
                                수정
                              </button></td>

                                </tr>
                            `;
              }
            }
                 tbody.innerHTML = tableContent;
                 // 게시물 삭제를눌렀을때 게시물 옆에 삭제가 나옴
                 toggleDeleteButtons();
                 // 게시물 수정 버튼을 눌렀을때
                 toggleUpdateButtons();

                 
          }

          if (location.pathname == '/rePostAdd') {
            const rePostAdd = new RePostAdd();
            document.querySelector("#root").innerHTML = await rePostAdd.getHtml(); // contentDiv를 #root로 바꿉니다.
            rePostAdd.attachEventListeners();
          }
          

        if (location.pathname == '/postAdd') {
            // 게시물 작성 관련
            document.getElementById('submit-button').addEventListener('click', submitPost);
            // 뒤로가기 버튼
            document.getElementById("back-button").addEventListener("click", () => {
                window.location.href = "/community";
            });
        }

        if (location.pathname == '/login') {
            // 로그인창 애니메이션 관련
            await loginAnimation();
            // 로그인 관련
            await loginController();
            // // 회원가입 관련
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
