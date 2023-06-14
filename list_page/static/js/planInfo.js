// 기본 위치(top)값
// getComputedStyle() : 모든 CSS 속성값을 담은 객체를 반환한다
const $sideBanner = document.querySelector('.sideBanner');
let floatPosition = parseInt(getComputedStyle(document.querySelector('.sideBanner')).top);

// scroll 인식
window.addEventListener('scroll', () => {
  // 현재 스크롤 위치
  // window.scrollY : 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환
  let currentTop = window.scrollY; /*|| document.documentElement.scrollTop*/ // 오래된 브라우저에서 사용확인
  let bannerTop  = currentTop + floatPosition + 'px';

  // 이동 애니메이션
  $sideBanner.style.top = bannerTop;
});

// 초기 스크롤 이벤트를 수동으로 발생시켜 초기 위치를 설정
// 페이지 로드 후 초기 스크롤 위치에 따라 .sideBanner 요소의 위치를 업데이트하는 역할
window.dispatchEvent(new Event('scroll'));

const $sideBtns = document.querySelectorAll('.side_btns');

$sideBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
      let bValue = e.currentTarget.dataset.value;
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


const $contextComments = document.querySelector('.context_comments');
const comtArr          = []; // 임시 댓글 저장 list
let   today            = new Date(); // 오늘 날짜

commentView(); 

// 댓글 보여주기
function commentView(){
  removeAllChild($contextComments);

  if(comtArr.length === 0){
    const comtItem = document.createElement('div');
    comtItem.classList.add('comment_item', 'no_comt_box', 'border');
    comtItem.textContent = '등록된 댓글이 없습니다';

    $contextComments.classList.add('no_comt');
    $contextComments.appendChild(comtItem);
  } else{
    comtArr.forEach( (item) => {
      const comtItem = document.createElement('div');
      if(item.index === 0){
        comtItem.classList.add('comment_item');      
      } else{
        comtItem.classList.add('comment_item', 'border-top'); 
      }

      const comtIconBox = document.createElement('div');
      comtIconBox.classList.add('comt_icon_box');

      const userIcon = document.createElement('i');
      userIcon.classList.add('fa-regular', 'fa-circle-user', 'fa-2xl');
      comtIconBox.appendChild(userIcon);

      const comtContent = document.createElement('div');
      comtContent.classList.add('comment_content');
      comtContent.innerText = item.content;

      let firstContent = item.content; // 이전 댓글 저장

      const comtDatebox = document.createElement('div');
      comtDatebox.classList.add('comment_date');
      const comtDate = document.createElement('span');
      const comtTime = document.createElement('span');
      comtDate.innerText = item.date;
      comtTime.innerText = item.time;
      comtDatebox.append(comtDate, comtTime);

      const comtBtnBox = document.createElement('div');
      comtBtnBox.classList.add('comment_btnBox');
      const uptBtn = document.createElement('i');
      uptBtn.classList.add('fa-solid', 'fa-pen-to-square', 'fa-xl', 'comt_uptBtn');
      const delBtn = document.createElement('i');
      delBtn.classList.add('fa-solid', 'fa-trash-can', 'fa-xl','comt_delBtn');

      
      const saveBtn = document.createElement('i');
      saveBtn.classList.add('fa-solid', 'fa-floppy-disk', 'fa-xl', 'comt_saveBtn');
      saveBtn.style.display = 'none';
      
      const cancelBtn = document.createElement('i');
      cancelBtn.classList.add('fa-solid', 'fa-ban', 'fa-xl', 'comt_cancelBtn');
      cancelBtn.style.display = 'none';
      
      // 수정버튼 이벤트
      uptBtn.addEventListener('click', () => {
        uptBtn.style.display = 'none';
        delBtn.style.display = 'none';
        comtContent.contentEditable = true; // div를 textarea로 사용하기 위한 속성
        comtContent.focus();
        comtContent.style.outline = '#FF0000';
        comtContent.style.boxShadow = 'inset 0 2px 2px rgba(0, 0, 0, 0.075) , 0 0 8px rgba(255, 0, 0, 0.6)';

        saveBtn.style.display = 'block';
        cancelBtn.style.display = 'block';
      });

      // 취소버튼 이벤트
      cancelBtn.addEventListener('click', () => {
        
        let result = confirm('취소하겠습니까?');

        if(!result){ 
          comtContent.focus(); 
          return;
        }

        comtContent.innerHTML = firstContent;
        saveBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        comtContent.contentEditable = false;
        comtContent.style.outline = 'none';
        comtContent.style.boxShadow = 'none';

        uptBtn.style.display = 'block';
        delBtn.style.display = 'block';
      });

      comtBtnBox.append(uptBtn, delBtn, saveBtn, cancelBtn);

      comtItem.append(comtIconBox, comtContent, comtDatebox, comtBtnBox);
      $contextComments.appendChild(comtItem);

      // 삭제버튼 이벤트
      delBtn.addEventListener('click', () => {

        let result = confirm('정말 삭제하시겠습니까?');
  
        if(!result){ 
          comtContent.focus(); 
          return;
        }

        comtArr.splice(item.index, 1);

        comtArr.forEach((item, index) => {
          item.index = index;
        });

        alert('삭제되었습니다.');

        saveBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        comtContent.contentEditable = false;
        comtContent.style.outline = 'none';
        comtContent.style.boxShadow = 'none';

        uptBtn.style.display = 'block';
        delBtn.style.display = 'block';

        commentView();
      });

      // 수정 후, 저장버튼 이벤트
      saveBtn.addEventListener('click', () => {
        const updatedContent = comtContent.innerText;

        // 빈 내용 확인
        if (updatedContent === '') {
            alert('내용을 입력해주세요.');
            return;
        }

        let result = confirm('저장합니까?');
        if(!result){ 
          comtContent.focus(); 
          return;
        }
    
        // 배열 업데이트
        comtArr[item.index].content = updatedContent;
    
        // 댓글 요소(contentEditable) 수정 불가 상태로 변경
        comtContent.contentEditable = false;
        comtContent.style.outline = 'none';
        comtContent.style.boxShadow = 'none';
    
        saveBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
        uptBtn.style.display = 'block';
        delBtn.style.display = 'block';
    
        commentView();
      });

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

  if($tArea.value === ''){
    alert('내용이 없습니다.');
    return;
  }

  comtArr.push(
    {
      index : comtArr.length,
      content : $tArea.value,
      date : dateFomat(),
      time : timeFomat(),
    }
  );

  $tArea.value = '';
  removeAllChild($contextComments);
  commentView();

});

// 자식 노드 삭제
function removeAllChild(list) {
  while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
  }
}

// 날짜 
function dateFomat(){
  let year  = today.getFullYear();
  let month = today.getMonth() + 1; // 월은 [0 ~ 11] 인덱스 사용 : 0 = 1월 / 11 = 12월
  let date  = today.getDate();

  month = (month > 10) ? month : ('0' + month);
  date = (date > 10) ? date : ('0' + date);

  return `${year}-${month}-${date}`;
}

// 시간
function timeFomat(){
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  hour = (hour > 10) ? hour : ('0' + hour);
  minute = (minute > 10) ? minute : ('0' + minute);
  second = (second > 10) ? second : ('0' + second);

  return `${hour}:${minute}:${second}`;
}

