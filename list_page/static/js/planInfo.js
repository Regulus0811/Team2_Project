// 기본 위치(top)값
// getComputedStyle() : 모든 CSS 속성값을 담은 객체를 반환한다
let floatPosition = parseInt(getComputedStyle(document.querySelector('.sideBanner')).top);

// scroll 인식
window.addEventListener('scroll', () => {
  // 현재 스크롤 위치
  // window.scrollY : 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환
  let currentTop = window.scrollY; /*|| document.documentElement.scrollTop*/ // 오래된 브라우저에서 사용확인
  let bannerTop = currentTop + floatPosition + 'px';

  // 이동 애니메이션
  document.querySelector('.sideBanner').style.top = bannerTop;
});

// 초기 스크롤 이벤트를 수동으로 발생시켜 초기 위치를 설정
// 페이지 로드 후 초기 스크롤 위치에 따라 .sideBanner 요소의 위치를 업데이트하는 역할
window.dispatchEvent(new Event('scroll'));

const $sideBtns = document.querySelectorAll('.side_btns');

$sideBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
      let bValue = e.currentTarget.value;
      if(bValue === 'up'){
        window.scrollTo({
          top : 0,
          behavior : 'smooth' // 부드러운 스크롤링 효과 적용 
        });
      } else if(bValue === 'down'){
        window.scrollTo({
          top : document.documentElement.scrollHeight, // 문서의 전체 높이
          behavior : 'smooth' // 부드러운 스크롤링 효과 적용 
        });
      }
      
    });
  } 
);

// const comtArr = [
//   {
//     content : 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf',
//     date : new Date().toISOString().split("T")[0]
//   }
// ];
const $contextComments = document.querySelector('.context_comments');

const comtArr = [];

commentView();

// 댓글 보여주기
function commentView(){
  if(comtArr.length === 0){
    const comtItem = document.createElement('div');
    comtItem.classList.add('comment_item', 'no_comt_box', 'border');
    comtItem.textContent = '등록된 댓글이 없습니다';

    $contextComments.classList.add('no_comt');
    $contextComments.appendChild(comtItem);
  } else{
    comtArr.forEach( (item) => {
      const comtItem = document.createElement('div');
      comtItem.classList.add('comment_item', 'border-bottom');

      const comtIconBox = document.createElement('div');
      comtIconBox.classList.add('comt_icon_box');

      const userIcon = document.createElement('i');
      userIcon.classList.add('fa-regular', 'fa-circle-user', 'fa-2xl');
      comtIconBox.appendChild(userIcon);

      const comtContent = document.createElement('div');
      comtContent.classList.add('comment_content');
      comtContent.textContent = item.content;

      const comtDate = document.createElement('div');
      comtDate.classList.add('comment_date');
      comtDate.textContent = item.date;

      comtItem.append(comtIconBox, comtContent, comtDate);

      $contextComments.appendChild(comtItem);
    });

    if($contextComments.classList.contains('no_comt')){
      $contextComments.classList.remove('no_comt');
    }
    
  }
}

const $instBtn = document.querySelector('.context_bth');

$instBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  const $tArea = document.querySelector('.context_t_area');
  console.log($tArea.value );

  if($tArea.value === ''){
    alert('내용없음');
    return;
  }

  comtArr.push(
    {
      content : $tArea.value,
      date : new Date().toISOString().split("T")[0]
    }
  );

  removeAllChild($contextComments);
  commentView();

});

// 자식 노드 삭제
function removeAllChild(list) {
  while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
  }
}