// 필요한 뷰를 가져옵니다.
import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

// 지정된 URL로 이동하는 함수입니다.
const navigateTo = (url) => {
  // URL을 브라우저의 히스토리에 추가합니다.
  history.pushState(null, null, url);
  // 라우터 함수를 호출하여 뷰를 업데이트합니다.
  router();
};

// 라우터 함수로 라우팅을 처리하고 뷰를 업데이트합니다.
const router = async () => {
  // 각 경로에 대한 뷰를 정의한 배열을 만듭니다.
  const routes = [
    { path: "/", view: Dashboard },
    { path: "/posts", view: Posts },
    { path: "/settings", view: Settings },
  ];

  // 각 경로를 테스트하여 일치하는 경로를 확인합니다.
  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  // HTML 요소를 뷰의 HTML로 업데이트합니다.
  document.querySelector("#app").innerHTML = await view.getHtml();
};

// 뒤로가기/앞으로가기 버튼을 처리하는 이벤트 리스너를 추가합니다.
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  // 전역에서 클릭 이벤트를 처리하는 이벤트 리스너를 추가합니다.
  document.body.addEventListener("click", (e) => {
    // 클릭된 요소가 data-link 속성을 가지고 있는 경우에만 처리합니다.
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      // 클릭된 링크의 href 속성을 사용하여 navigateTo 함수를 호출합니다.
      navigateTo(e.target.href);
    }
  });

  // 초기 라우터 함수 호출
  router();
});
